(this["webpackJsonptest-siema"]=this["webpackJsonptest-siema"]||[]).push([[0],{21:function(n,e,t){"use strict";t.r(e);var r,o=t(0),a=t(10),i=t.n(a),c=t(2),s=t(3),d=t(4),u=t.p+"static/media/bg.c137ccd7.jpg",l=t(6),h=t.p+"static/media/src_sounds_play.8e5f6d1d.mp3",m=t.p+"static/media/src_sounds_correct.160572d7.mp3",x=t.p+"static/media/src_sounds_wrong.e9468218.mp3",b=t(1),f=d.b.div(r||(r=Object(s.a)(["\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    .question {\n        width: 80%;\n        background-color: rgba(0,0,0,0.7);\n        border: 2px solid white;\n        text-align: center;\n        padding: 20px;\n        border-radius: 10px;\n        font-size: 20px;\n    }\n    .answers {\n        width: 100%;\n        display: flex;\n        justify-content: center;\n        flex-wrap: wrap;\n        .answer {\n            width: 40%;\n            padding: 10px;\n            text-align: center;\n            background-color: rgba(0,0,0,0.7);\n            border: 1px solid white;\n            border-radius: 15px;\n            font-size: 20px;\n            font-weight: 300;\n            cursor: pointer;\n            margin: 0 10px 20px 10px;\n            transition: background 1s;\n        }\n        .answer:hover, \n        .answer.active{\n            background: rgba(33, 17, 255, 0.7);\n        }\n        .answer.correct {\n            animation: correct 3s ease forwards;\n        }\n        @keyframes correct {\n            0%, \n            22%, \n            42% {\n                background: rgba(33, 17, 255, 0.7);\n            }\n            20%, \n            40%,\n            60% {\n                background: linear-gradient(#0e0124, #22074d);\n            }\n            62%,\n            100% {\n                background:rgba(31,255,15,0.7);\n            }\n        }\n        .answer.wrong {\n            animation: wrong 3s ease forwards;\n        }\n        @keyframes wrong {\n            0%, \n            22%, \n            42% {\n                background: rgba(33, 17, 255, 0.7);\n            }\n            20%, \n            40%,\n            60% {\n                background: linear-gradient(#0e0124, #22074d);\n            }\n            62%,\n            100% {\n                background:rgba(255, 15, 15, 0.7);\n            }\n        }\n    }\n    @media only screen and (max-width: 768px) {\n        .question {\n            margin-top: 5rem;\n            height: 100%;\n        }\n        .answers {\n            margin-top: 5rem;\n            height: 100%;\n        }\n    }\n"])));function p(n){var e=n.data,t=n.setStop,r=n.questionNumber,a=n.setQuestionNumber,i=Object(o.useState)([]),s=Object(c.a)(i,2),d=s[0],u=s[1],p=Object(o.useState)(null),g=Object(c.a)(p,2),j=g[0],w=g[1],y=Object(o.useState)("Name"),v=Object(c.a)(y,2),k=v[0],O=v[1],N=Object(l.a)(h),q=Object(c.a)(N,1)[0],I=Object(l.a)(m),S=Object(c.a)(I,1)[0],$=Object(l.a)(x),U=Object(c.a)($,1)[0];Object(o.useEffect)((function(){q()}),[q]),Object(o.useEffect)((function(){u(e[r-1])}),[e,r]);var B=function(n,e){setTimeout((function(){e()}),n)};return Object(b.jsxs)(f,{children:[Object(b.jsx)("div",{className:"question",children:d.question}),Object(b.jsx)("div",{className:"answers",children:d.answers&&d.answers.map((function(n,e){return Object(b.jsx)("div",{className:j===n?k:"answer",onClick:function(){return function(n){w(n),O("answer active"),B(3e3,(function(){return O(n.correct?"answer correct":"answer wrong")})),B(5e3,(function(){n.correct?(S(),B(1e3,(function(){a((function(n){return n+1})),w(null)}))):(U(),B(1e3,(function(){t(!0)})))}))}(n)},children:n.text},e)}))})]})}var g,j,w=[{id:1,question:"When Ukraine became independent?",answers:[{text:"2000",correct:!1},{text:"2001",correct:!1},{text:"1990",correct:!1},{text:"1991",correct:!0}]},{id:2,question:"The first president of Ukraine?",answers:[{text:"Yushchenko",correct:!1},{text:"Kravchuk",correct:!0},{text:"\u041a\u0443\u0447\u043c\u0430",correct:!1},{text:"Zelensky",correct:!1}]},{id:3,question:"When Taras Shevchenko was born?",answers:[{text:"1814",correct:!0},{text:"1819",correct:!1},{text:"1861",correct:!1},{text:"1824",correct:!1}]},{id:4,question:"Who owns the expression - 'contra spem spero'?",answers:[{text:"Mykhailo Kotsyubynskyi",correct:!1},{text:"1819",correct:!1},{text:"Ivan Franko",correct:!1},{text:"Lesya Ukrainka",correct:!0}]},{id:5,question:'In which region is the "Ukrainian Sahara" - the largest desert in Europe?',answers:[{text:"Zhytomyr region",correct:!1},{text:"Kherson region",correct:!0},{text:"Chernivtsi region",correct:!1},{text:"Volyn region",correct:!1}]},{id:6,question:"What were the first words of the Chairman of the Verkhovna Rada Oleksandr Moroz after the adoption of the Constitution?",answers:[{text:"Bravo",correct:!1},{text:"Glory to Ukraine!",correct:!1},{text:"Happiness and good luck to all Ukrainian daughters and sons!",correct:!1},{text:"There is a Constitution!",correct:!0}]},{id:7,question:"Where is the Ukrainian language in the list of the most beautiful languages in the world?",answers:[{text:"3",correct:!0},{text:"5",correct:!1},{text:"16",correct:!1},{text:"24",correct:!0}]},{id:8,question:"What is the most used letter in the Ukrainian alphabet?",answers:[{text:"\u0430",correct:!1},{text:"\u043f",correct:!0},{text:"\u043a",correct:!1},{text:"\u0447",correct:!1}]},{id:9,question:"In which American state is Ukraine's Independence Day officially celebrated?",answers:[{text:"Florida",correct:!1},{text:"Harmlessness",correct:!1},{text:"Minnesota",correct:!0},{text:"Texas",correct:!1}]},{id:10,question:"In which region was the greatest support for the independence of Ukraine?",answers:[{text:"Lviv region",correct:!1},{text:"Ivano-Frankivsk region",correct:!1},{text:"Cherkasy region",correct:!1},{text:"Ternopil region",correct:!0}]},{id:11,question:"Which Ukrainian town is considered the geographical center of Europe?",answers:[{text:"Boryspil",correct:!1},{text:"Rakhiv",correct:!0},{text:"Bobrovytsia",correct:!1},{text:"Kyiv",correct:!1}]},{id:12,question:"When was the hryvnia national currency introduced?",answers:[{text:"1995",correct:!1},{text:"1991",correct:!1},{text:"1997",correct:!1},{text:"1996",correct:!0}]},{id:13,question:"In what year did a representative of Ukraine perform at Eurovision for the first time?",answers:[{text:"2002",correct:!1},{text:"2001",correct:!1},{text:"2003",correct:!0},{text:"2000",correct:!1}]},{id:14,question:"One of the most famous Christmas carols in the world is...",answers:[{text:"Generous",correct:!0},{text:"In the blue sky",correct:!1},{text:"Silent Night",correct:!1},{text:"Red Viburnum",correct:!1}]},{id:15,question:"A figure of culture who has the largest number of monuments in the world",answers:[{text:"Ivan Franko",correct:!1},{text:"Lesya Ukrainka",correct:!1},{text:"Taras Shevchenko",correct:!0},{text:"Hryhoriy Skovoroda",correct:!1}]}],y=function(n){var e=n.setStop,t=n.questionNumber,r=Object(o.useState)(30),a=Object(c.a)(r,2),i=a[0],s=a[1];return Object(o.useEffect)((function(){if(0===i)return e(!0);var n=setInterval((function(){s((function(n){return n-1}))}),1e3);return function(){return clearInterval(n)}}),[e,i]),Object(o.useEffect)((function(){s(30)}),[t]),i},v=d.b.div(g||(g=Object(s.a)(["\n    height: 100vh;\n    display: flex;\n    color: white;\n    .main {\n        width: 75%;\n        background: linear-gradient(to bottom, rgba(0,0,0,0), var(--deep-dark) ), url(",") center;\n        display: flex;\n        flex-direction: column;\n        .finished {\n            position: relative;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            margin: auto;\n            color: white;\n        }\n    }\n    .top {\n        height: 50%;\n        position: relative;\n    }\n    .timer {\n        width: 70px;\n        height: 70px;\n        border-radius: 50%;\n        border: 5px solid white;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        font-size: 30px;\n        font-weight: 700;\n        position: absolute;\n        bottom: 10px;\n        left: 80px;\n    }\n    .bottom {\n        height: 50%;\n    }\n    .pyramid {\n        width: 25%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n    .moneyList {\n        list-style: none;\n        width: 100%;\n        padding: 20px;\n    }\n    .moneyListItem {\n        display: flex;\n        align-items: center;\n        padding: 5px;\n        border-radius: 5px;\n    }\n    .moneyListItem.active {\n        background: teal;\n    }\n    .moneyListItemNumber {\n        font-size: 18px;\n        font-weight: 100;\n        width: 30%;\n    }\n    .moneyListItemAmount {\n        font-size: 20px;\n        font-weight: 300;\n    }\n    @media only screen and (max-width: 768px) {\n        display: flex;\n        flex-direction: column;\n        .main {\n            width: 100%;\n            height: 100%;\n            .finished {\n                margin-top: 150px;\n                margin-bottom: 150px;\n            }\n            .top {\n                height: 30%;\n            }\n            .timer {\n                display: flex;\n                position: relative;\n                bottom: 0;\n                top: 10%;\n                left: 40%;\n            }\n        }\n        .pyramid {\n            width: 100%;\n        }\n    }\n"])),u);function k(){var n=Object(o.useState)(1),e=Object(c.a)(n,2),t=e[0],r=e[1],a=Object(o.useState)(!1),i=Object(c.a)(a,2),s=i[0],d=i[1],u=Object(o.useState)("$ 0"),l=Object(c.a)(u,2),h=l[0],m=l[1],x=Object(o.useMemo)((function(){return[{id:1,amount:"$ 100"},{id:2,amount:"$ 200"},{id:3,amount:"$ 300"},{id:4,amount:"$ 500"},{id:5,amount:"$ 1.000"},{id:6,amount:"$ 2.000"},{id:7,amount:"$ 4.000"},{id:8,amount:"$ 8.000"},{id:9,amount:"$ 16.000"},{id:10,amount:"$ 32.000"},{id:11,amount:"$ 64.000"},{id:12,amount:"$ 125.000"},{id:13,amount:"$ 250.000"},{id:14,amount:"$ 500.000"},{id:15,amount:"$ 1.000.000"}].reverse()}),[]);return Object(o.useEffect)((function(){t>1&&m(x.find((function(n){return n.id===t-1})).amount)}),[x,t]),Object(b.jsxs)(v,{children:[Object(b.jsx)("div",{className:"main",children:s?Object(b.jsx)("div",{className:"finished",children:Object(b.jsxs)("h1",{className:"endText",children:["You earned: ",h]})}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{className:"top",children:Object(b.jsx)("div",{className:"timer",children:Object(b.jsx)(y,{setStop:d,questionNumber:t})})}),Object(b.jsx)("div",{className:"bottom",children:Object(b.jsx)(p,{data:w,setStop:d,questionNumber:t,setQuestionNumber:r})})]})}),Object(b.jsx)("div",{className:"pyramid",children:Object(b.jsx)("ul",{className:"moneyList",children:x.map((function(n,e){return Object(b.jsxs)("li",{className:t===n.id?"moneyListItem active":"moneyListItem",children:[Object(b.jsx)("span",{className:"moneyListItemNumber",children:n.id}),Object(b.jsx)("span",{className:"moneyListItemAmount",children:n.amount})]},e)}))})})]})}var O=d.b.div(j||(j=Object(s.a)(["\n    height: 100vh;\n    display: flex;\n    .start {\n        height: 100px;\n        width: 250px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: space-around;\n        position: relative;\n        top: 0;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        margin: auto;\n        .startInput {\n            width: 100%;\n            height: 30px;\n            border: none;\n            border-radius: 5px;\n            text-align: center;\n            font-size: 18px;\n            color: var(--deep-dark);\n        }\n        .startInput:focus {\n            outline: none;\n        }\n        .startButton {\n            width: 100%;\n            height: 30px;\n            border: none;\n            border-radius: 5px;\n            cursor: pointer;\n            font-size: 18px;\n            font-weight: 500;\n            color: var(--deep-dark);\n        }\n    }\n"]))),N=function(n){var e=n.setUsername,t=Object(o.useRef)("");return Object(b.jsx)(O,{children:Object(b.jsxs)("div",{className:"start",children:[Object(b.jsx)("input",{ref:t,type:"text",placeholder:"Enter your name",className:"startInput"}),Object(b.jsx)("button",{className:"startButton",onClick:function(){t.current.value&&e(t.current.value)},children:"Start"})]})})};var q,I,S=function(){var n=Object(o.useState)(""),e=Object(c.a)(n,2),t=e[0],r=e[1];return Object(b.jsx)(b.Fragment,{children:t?Object(b.jsx)(k,{}):Object(b.jsx)(N,{setUsername:r})})},$=Object(d.a)(q||(q=Object(s.a)(["\n*{\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  :root{\n    --dark-bg: #262626;\n    --gray-1: #BCB4B4;\n    --deep-dark: #1E1E1E;\n    --gray-2: #363636;\n    --white : white;\n    --black: black;\n  }\n  html{\n    font-size: 10px;\n    font-family: 'Roboto Mono';\n    background-color: var(--dark-bg);\n  }\n  ul,li{\n    list-style: none;\n  }\n  a{\n    text-decoration: none;\n  }\n  img, svg{\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n  button{\n    outline: none\n  }\n  .container {\n    max-width: 1200px;\n    width: 90%;\n    margin: 0 auto;\n  }\n/* Smooth Scroll  */\n  [data-scrollbar] {\n    height: 100vh;\n    overflow: hidden;\n    background-color: var(--gray-1);\n    .scroll-content {\n      background-color: var(--dark-bg);\n    }\n    .scrollbar-track.scrollbar-track-y {\n      z-index: 101;\n      background: var(--deep-dark);\n      .scrollbar-thumb-y {\n        background: var(--gray-1);\n      }\n    }\n  }\n"]))),U=t.p+"static/media/RobotoMono-Regular.418a8f9f.ttf",B=t.p+"static/media/Montserrat-SemiBold.fa8441f3.ttf",M=t.p+"static/media/Montserrat-Bold.079ca05d.ttf",E=Object(d.a)(I||(I=Object(s.a)(['\n  @font-face {\n    font-family: "RobotoMono Regular";\n    src: url(',');\n    font-style: normal;\n  }\n  @font-face {\n    font-family: "Montserrat SemiBold";\n    src: url(',');\n    font-style: normal;\n  }\n  @font-face {\n    font-family: "Montserrat Bold";\n    src: url(',');\n    font-style: normal;\n  }\n  html{\n    font-family: "RobotoMono Regular";\n    color: var(--gray-1);\n  }\n  *{\n    font-family: "RobotoMono Regular";\n    color: var(--gray-1);\n  }\n  h1,h2,h3,h4,h5,h6{\n    font-family: "Montserrat SemiBold"\n  }\n'])),U,B,M);i.a.render(Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)($,{}),Object(b.jsx)(E,{}),Object(b.jsx)(S,{})]}),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.a48b0184.chunk.js.map