

//creating a quiz having five questions

var questions = [
  {
    prompt: "Inside which HTML element do we put the JavaScript? \n (a) script \n (b) <script>\n (c) typeScript",
    answer: "b"
  },
  {
    prompt: "Where is the correct place to insert a JavaScript? \n (a) head and body \n (b) external \n(c) css",
    answer: "a"
  },
  {
    prompt: "What is the correct syntax for referring to an external script called xxx.js?\n (a) <script type'xxx.js'\n (b) <script src=xxx.js>\n (c) No need",
    answer: "b"
  },
  {
    prompt: "How do you write Hello World in an alert box?\n (a) alert:hello world\n (b) alert=hello world\n (c) alert(Hello World)",
    answer: "c"
  },
  {
    prompt: "How do you create a function in JavaScript?\n (a) function()\n (b) function myFunction()\n (c) function[]",
    answer: "b"
  },
]

var score = 0;
for(var i = 0; i < questions.length; i++){
  var response = window.prompt(questions[i].prompt);
  document.write( "  Selected = "   + response);
  if (response == questions[i].answer){
    score++;
    alert('correct');
  } else{
    alert('wrong');
  }
}

alert("you got score " + score + " Out of " + questions.length);
