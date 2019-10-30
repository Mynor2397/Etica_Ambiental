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
// console.log(db);

function Enviar() {
    console.log(1);

    var ispre1 = $("input[name=pregunta1]").is(':checked')
    var ispre2 = $("input[name=pregunta2]").is(':checked')
    var ispre3 = $("input[name=pregunta3]").is(':checked')
    var ispre4 = $("input[name=pregunta4]").is(':checked')
    var ispre5 = $("input[name=pregunta5]").is(':checked')
    var ispre6 = $("input[name=pregunta6]").is(':checked')
    var ispre7 = $("input[name=pregunta7]").is(':checked')
    var ispre8 = $("input[name=pregunta8]").is(':checked')
    var ispre9 = $("input[name=pregunta9]").is(':checked')
    var ispre10 = $("input[name=pregunta10]").is(':checked')
    
    if (!ispre1 || !ispre2 || !ispre3 || !ispre4 || !ispre5 || !ispre6 || !ispre7 || !ispre8 || !ispre9 || !ispre10) {
        alert('Por favor marque todas las respuestas :-)');
    } else {
        var p1 = $('input:radio[name=pregunta1]:checked').val();
        var p2 = $('input:radio[name=pregunta2]:checked').val();
        var p3 = $('input:radio[name=pregunta3]:checked').val();
        var p4 = $('input:radio[name=pregunta4]:checked').val();
        var p5 = $('input:radio[name=pregunta5]:checked').val();
        var p6 = $('input:radio[name=pregunta6]:checked').val();
        var p7 = $('input:radio[name=pregunta7]:checked').val();
        var p8 = $('input:radio[name=pregunta8]:checked').val();
        var p9 = $('input:radio[name=pregunta9]:checked').val();
        var p10 = $('input:radio[name=pregunta10]:checked').val();

        var data = {
            pregunta1: parseInt(p1),
            pregunta2: parseInt(p2),
            pregunta3: parseInt(p3),
            pregunta4: parseInt(p4),
            pregunta5: parseInt(p5),
            pregunta6: parseInt(p6),
            pregunta7: parseInt(p7),
            pregunta8: parseInt(p8),
            pregunta9: parseInt(p9),
            pregunta10: parseInt(p10)
        }

        var database = firebase.database().ref('cuestionario')
        database.push(data)
        alert("Gracias por tu colaboración")

    }

}
