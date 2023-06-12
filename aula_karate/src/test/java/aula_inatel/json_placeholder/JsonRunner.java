package aula_inatel.json_placeholder;

import com.intuit.karate.junit5.Karate;

class JsonRunner {
    
    @Karate.Test
    Karate testStarWars() {
        return Karate.run("jsonplaceholder").relativeTo(getClass());
    }    

}