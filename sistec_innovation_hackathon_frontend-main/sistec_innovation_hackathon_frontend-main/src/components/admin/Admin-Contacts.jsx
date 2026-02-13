import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";
import * as XLS from "xlsx";
import { API_URL } from "../../store/apiurl";
import { Modal, Button, Form } from "react-bootstrap";

const URL = `${API_URL}/api/admin/contacts`;
const deleteURL = `${API_URL}/api/admin/contacts/delete/`;
const emailURL = `${API_URL}/api/email/reply`;

export const AdminContacts = () => {
  const [contacts, setContacts] = useState([]);
  const { authorizationToken } = useAuth();

  // modal states
  const [show, setShow] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const [replySubject, setReplySubject] = useState("");
  const [replyMessage, setReplyMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleClose = () => {
    setShow(false);
    setSelectedContact(null);
    setReplySubject("");
    setReplyMessage("");
  };
  const handleShow = (contact) => {
    setSelectedContact(contact);
    setReplySubject(`Re: ${contact.subject}`);
    setShow(true);
  };

  const getAllContactsData = async () => {
    try {
      const response = await fetch(URL, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setContacts(data);
      } else {
        console.error("Failed to fetch contacts:", response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllContactsData();
  }, []);

  const handleRefresh = () => {
    getAllContactsData();
  };

  // export contacts to excel
  const exportToExcel = () => {
    const xlsData = contacts.map((contact) => ({
      Username: contact.username,
      Subject: contact.subject,
      Email: contact.email,
      Message: contact.message,
    }));

    const ws = XLS.utils.json_to_sheet(xlsData);
    const wb = XLS.utils.book_new();
    XLS.utils.book_append_sheet(wb, ws, "Contacts");
    XLS.writeFile(wb, "sih_contacts.xlsx");
  };

  // delete contact
  const deleteContactById = async (id) => {
    try {
      const response = await fetch(deleteURL + id, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getAllContactsData();
        toast.success("Deleted Successfully!");
      } else {
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // send reply
  const sendReply = async () => {
    if (!replySubject || !replyMessage) {
      toast.error("Subject and message cannot be empty");
      return;
    }

    setIsSending(true); // disable button and show loading
    try {
      const response = await fetch(emailURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken,
        },
        body: JSON.stringify({
          name: selectedContact.username,
          email: selectedContact.email,
          subject: replySubject,
          message: replyMessage,
        }),
      });

      const data = await response.json();
      if (response.ok && data.success) {
        toast.success("Reply sent successfully!");

        // Optimistically update the contact in frontend
        setContacts((prevContacts) =>
          prevContacts.map((contact) =>
            contact._id === selectedContact._id
              ? { ...contact, isReplied: true }
              : contact
          )
        );

        handleClose();
      } else {
        toast.error(data.error || "Failed to send reply");
      }
    } catch (error) {
      console.error("Error sending reply:", error);
      toast.error("Something went wrong!");
    } finally {
      setIsSending(false); // enable button back
    }
  };

  return (
    <>
      <section>
        <div className="container mt-4">
          <div className="d-flex justify-content-end mb-3">
            <button className="btn btn-primary" onClick={handleRefresh}>
              <i className="bi bi-arrow-clockwise"></i> Refresh
            </button>
            <button className="btn btn-success ms-1" onClick={exportToExcel}>
              Export as Excel
            </button>
          </div>
          <h2>Contact Messages</h2>
          <table className="table table-striped table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Username</th>
                <th>Subject</th>
                <th>Email</th>
                <th>Message</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact._id}
                  className={contact?.isReplied ? "table-secondary" : ""}
                >
                  <td>{contact.username}</td>
                  <td>{contact.subject}</td>
                  <td>{contact.email}</td>
                  <td>{contact.message}</td>
                  <td className="d-flex gap-2">
                    {contact?.isReplied ? (
                      <span className="btn btn-sm btn-primary">Replied</span>
                    ) : (
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => handleShow(contact)}
                      >
                        <i className="bi bi-reply"></i> Reply
                      </button>
                    )}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => deleteContactById(contact._id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Reply Modal */}
      {selectedContact && (
        <Modal show={show} onHide={handleClose} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>
              Reply to: {selectedContact.username} ({selectedContact.email})
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Subject</Form.Label>
                <Form.Control
                  type="text"
                  value={replySubject}
                  onChange={(e) => setReplySubject(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  value={replyMessage}
                  onChange={(e) => setReplyMessage(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={sendReply} disabled={isSending}>
              {isSending ? "Sending..." : "Send Reply"}
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default AdminContacts;
