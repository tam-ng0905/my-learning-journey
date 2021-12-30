package controllers;

import models.Book;

import play.mvc.*;
import java.util.Set;
import javax.inject.Inject;
/*

 */
import views.html.books.*;
public class BooksController extends Controller{

    @inject
    FormFactory formFactory;


    // for all books
    public Result index(){
        Set<Book> books = Book.allBooks();
        return ok(index.render(books));
    }

    // to create new books
    public Result create(){
        Form<Book> bookForm = formFactory.form(Book.class);
        return ok(create.render(bookForm));
    }

    // to save book
    public Result save(){
        Form<Book> bookForm = formFactory.form(Book.class).bindFromRequest();
        Book book = bookForm.get();
        Book.add(book);
        return redirect(routers.BooksController.index());

    }

    public Result edit(Integer id){
        return TODO;
    }

    public Result update(){
        return TODO;
    }

    public Result destroy(Integer id){
        return TODO;
    }

    // for book details
    public Result show(Integer id){
        return TODO;
    }





}
