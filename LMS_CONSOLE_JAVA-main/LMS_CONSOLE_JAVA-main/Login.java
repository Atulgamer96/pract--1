import java.util.Scanner;

public class Login {
    void login()
    {
        Scanner sc=new Scanner(System.in);
        System.out.println("Login --");

        System.out.println("Enter USer name:");
        String name=sc.next();

        Signup s=new Signup();
        boolean Verify=s.verify(name);


        if(Verify==true)
        {
            System.out.println("For add book press-> 1");
            System.out.println("For show list of books press -> 2");
            System.out.println("For search by id press -> 3");

            int b=sc.nextInt();
            AddBook adbk=new AddBook();
            if(b==1)
            {

                adbk.addBook();
            }
            else if(b==2)
            {
                adbk.showBooks();
            }
            else if(b==3)
            {
                System.out.println("Enter id of book:");
                int id=sc.nextInt();
                adbk.searchBook(id);
            }
        }


    }

}
