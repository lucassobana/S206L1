package aula_inatel.Prova_pratica;


import com.intuit.karate.junit5.Karate;

class UsersRunner {
    
    @Karate.Test
    Karate testUsers() {
        return Karate.run("go_rest").relativeTo(getClass());
    }    

}