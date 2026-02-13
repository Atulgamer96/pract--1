import java.util.Scanner;

public class MainClass {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);

        System.out.println("Welcome in library management system------------");
        System.out.println("For Signup press 1");
        System.out.println("For login press 2");

        int Choice=sc.nextInt();
        int c=0;
        do{
            if(Choice==1)
            {
                Signup s=new Signup();
                s.signup();
            }
            else if(Choice==2)
            {
                Login l=new Login();
                l.login();
            }
            System.out.println("IF YOU WANT CONTINUE PRESS : 1 OR 0 FOR STOP--");
            c = sc.nextInt();
        }while(c==1);

    }
}
