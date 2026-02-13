import java.io.*;
import java.util.Scanner;

public class AddBook {
    private static final String FILE_NAME = "books.txt";


        void addBook() {
        Scanner sc = new Scanner(System.in);

        System.out.println("Add book--");

        System.out.print("Enter book name:-  ");
        String name = sc.next();

        System.out.print("Enter book_id:-  ");
        String id = sc.next();

        saveBook(name, id);
    }

    private void saveBook(String name, String id) {
        try (BufferedWriter bw = new BufferedWriter(new FileWriter(FILE_NAME, true))) {
            bw.write(name + "," + id);
            bw.newLine();

            System.out.println("Book:\t "+name+"Added successfully!!!!!!!!!!!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    void showBooks() {
        System.out.println("\n--- List of Books ---");
        try (BufferedReader br = new BufferedReader(new FileReader(FILE_NAME))) {
            String line;
            int count = 1;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 2) {
                    System.out.println(count + ". Book Name: " + parts[0] + " | Book ID: " + parts[1]);
                }
                count++;
            }
        } catch (IOException e) {
            System.out.println("No books found or error reading file.");
        }
    }


    void searchBook(int id)
    {
        try (BufferedReader br = new BufferedReader(new FileReader(FILE_NAME))) {
            String line;
            while ((line = br.readLine()) != null) {
                String[] parts = line.split(",");
                if (parts.length == 2 && parts[1].equals(String.valueOf(id))) {
                    System.out.println( " Book Name: " + parts[0] + " | Book ID: " + parts[1]);
                }
            }
        } catch (IOException e) {
            System.out.println("No books found or error reading file.");
        }
    }

}
