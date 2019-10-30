const firebaseConfig = {
    apiKey: "AIzaSyCxRWl5KA54ckANUI_Qd6d9RMEq5KzN-u8",
    authDomain: "eticaambiental-51de7.firebaseapp.com",
    databaseURL: "https://eticaambiental-51de7.firebaseio.com",
    projectId: "eticaambiental-51de7",
    storageBucket: "eticaambiental-51de7.appspot.com",
    messagingSenderId: "803973180428",
    appId: "1:803973180428:web:6ba249b1b6f47777a6d229",
    measurementId: "G-YDSCWQEJZG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

/// Esta variable me permite realizar consultas a mi base de datos
var db = firebase.database()

Grafica1();

async function Grafica1() {

    var data = db.ref("cuestionario")
    let questions = ''
    var contador=0;

    await data.on("child_added", preguntas => { // esto me
        contador=contador+1;
        questions += `
        <tr>
            <td>${contador}</td>
            <td>${preguntas.val().pregunta1}</td>
            <td>${preguntas.val().pregunta2}</td>
            <td>${preguntas.val().pregunta3}</td>
            <td>${preguntas.val().pregunta4}</td>
            <td>${preguntas.val().pregunta5}</td>
            <td>${preguntas.val().pregunta6}</td>
            <td>${preguntas.val().pregunta7}</td>
            <td>${preguntas.val().pregunta8}</td>
            <td>${preguntas.val().pregunta9}</td>
            <td>${preguntas.val().pregunta10}</td>
         </tr>
        `
        console.log(questions);
        
        $('#preguntas').html(questions)
    })
}
