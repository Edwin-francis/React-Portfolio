(this["webpackJsonpfinal-portfolio"]=this["webpackJsonpfinal-portfolio"]||[]).push([[0],{484:function(n,e,t){"use strict";t.r(e);var r,i=t(1),a=t.n(i),o=t(44),c=t.n(o),s=t(41),l=t(7),d=t(65),b=t(8),m=t.p+"static/media/avatar.cd082672.jpg",j=t(0);var h,p=b.b.nav(r||(r=Object(l.a)(['\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n    border-right: 1px solid var(--border-color);\n    .avatar{\n        width: 100%;\n        border-bottom: 1px solid var(--border-color);\n        text-align: center;\n        padding: 1rem 0;\n        img{\n            width: 70%;\n            border-radius: 50%;\n            border: 8px solid var(--border-color);\n        }\n    }\n\n    .nav-items{\n        width: 100%;\n        text-align: center;\n        .active-class{\n            background-color: var(--primary-color-light);\n            color: white;\n        }\n        li{\n            display: block;\n            a{\n                display: block;\n                padding: .45rem 0;\n                position: relative;\n                z-index: 10;\n                text-transform: uppercase;\n                transition: all .4s ease-in-out;\n                font-weight: 600;\n                letter-spacing: 1px;\n                &:hover{\n                    cursor: pointer;\n                    color: var(--white-color);\n                }\n                &::before{\n                    content: "";\n                    position: absolute;\n                    bottom: 0;\n                    left: 0;\n                    width: 0;\n                    height: 50%;\n                    background-color: var( --primary-color);\n                    transition: All 0.4s cubic-bezier(1,-0.2,.25,.95) ;\n                    opacity: 0.21;\n                    z-index: -1;\n                }\n            }\n\n            a:hover::before{\n                width: 100%;\n                height: 100%;\n            }\n        }\n    }\n\n    footer{\n        border-top: 1px solid var(--border-color);\n        width: 100%;\n        p{\n            padding: 1.3rem 0;\n            font-size: 1.1rem;\n            display: block;\n            text-align: center;\n        }\n    }\n']))),x=function(){return Object(j.jsxs)(p,{children:[Object(j.jsx)("div",{className:"avatar",children:Object(j.jsx)("img",{src:m,alt:""})}),Object(j.jsxs)("ul",{className:"nav-items",children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/",activeClassName:"active-class",exact:!0,children:"Home"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/about",activeClassName:"active-class",exact:!0,children:"About"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/resume",activeClassName:"active-class",exact:!0,children:"Resume"})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(s.b,{to:"/contact",activeClassName:"active-class",exact:!0,children:"Contact"})})]}),Object(j.jsx)("footer",{className:"footer",children:Object(j.jsxs)("p",{children:["@2021 ",Object(j.jsx)("b",{children:"Edwin Francis"})]})})]})};var g=b.b.div(h||(h=Object(l.a)(["\n    width: 16.3rem;\n    position: fixed;\n    height: 100vh;\n    background-color: var(--sidebar-dark-color);\n    overflow: hidden;\n    transition: all .4s ease-in-out;\n    @media screen and (max-width:1200px){\n        transform: translateX(-100%);\n        z-index: 20;\n    }\n"]))),u=function(n){var e=n.navToggle;return Object(j.jsx)(g,{className:"".concat(e?"nav-toggle":""),children:Object(j.jsx)(x,{})})},v=t(118),O=t.n(v),f=t(122),w=t.n(f),k=t(123),y=t.n(k),N=t(117),z=t.n(N);var F,T=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(z.a,{width:"100%",height:"100vh",params:{particles:{number:{value:109,density:{enable:!0,value_area:1200}},color:{value:"#636e72"},shape:{type:"circle",stroke:{width:0},polygon:{nb_sides:6}},line_linked:{enable:!1,distance:150,opacity:.9,width:1,shadow:{enable:!0,color:"#e74c3c",blur:5}},move:{enable:!0,random:!0,speed:.6,attract:{rotateX:600,rotateY:1200}},size:{value:4,random:!0,anim:{speed:40,size_min:.1}},opacity:{value:.8,anim:{speed:1,opacity_min:.1}}}}})})};var A,E=b.b.header(F||(F=Object(l.a)(["\n    width: 100%;\n    height: 100vh;\n    position: relative;\n   \n    .typography{\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        text-align: center;\n        width: 80%;\n\n        .icons{\n            display: flex;\n            justify-content: center;\n            margin-top: 1rem;\n            .icon{\n                border: 2px solid var(--border-color);\n                display: flex;\n                align-items: center;\n                justify-content: center;\n                border-radius: 50%;\n                transition: all .4s ease-in-out;\n                cursor: pointer;\n                &:hover{\n                    border: 2px solid var(--primary-color);\n                    color: var(--primary-color);\n                }\n                &:not(:last-child){\n                    margin-right: 1rem;\n                }\n                svg{\n                    margin: .5rem;\n                }\n            }\n\n            .i-linkedin{\n                &:hover{\n                    border: 2px solid red;\n                    color: red;\n                }\n            }\n            \n           \n            .i-github{\n                &:hover{\n                    border: 2px solid #5F4687;\n                    color: #5F4687;\n                }\n            }\n        }\n    }\n"]))),S=function(){return Object(j.jsxs)(E,{children:[Object(j.jsx)("div",{className:"particle-con",children:Object(j.jsx)(T,{})}),Object(j.jsxs)("div",{className:"typography",children:[Object(j.jsxs)("h1",{children:["Hi, I'm ",Object(j.jsx)("span",{children:"Edwin Francis"})]}),Object(j.jsx)("p",{children:"Desinging and Developer for both web and app . I create full-stack web and app to help businesses do better in online."}),Object(j.jsxs)("div",{className:"icons",children:[Object(j.jsx)("a",{href:"https://instagram.com/me_edwinfrancis__/",className:"icon i-instagram",children:Object(j.jsx)(O.a,{})}),Object(j.jsx)("a",{href:"https://github.com/Edwin-francis",className:"icon i-github",children:Object(j.jsx)(w.a,{})}),Object(j.jsx)("a",{href:"https://linkedin.com/in/imedwinfrancis",className:"icon i-linkedin",children:Object(j.jsx)(y.a,{})})]})]})]})},I=t.p+"static/media/resume.cd082672.jpg";var D,C=b.b.a(A||(A=Object(l.a)(['\n    background-color: var(--primary-color);\n    padding: .8rem 2.5rem;\n    color: white;\n    cursor: pointer;\n    display: inline-block;\n    font-size: inherit;\n    text-transform: uppercase;\n    position: relative;\n    transition: all .4s ease-in-out;\n    &::after{\n        content: "";\n        position: absolute;\n        width: 0;\n        height: .2rem;\n        transition: all .4s ease-in-out;\n        left: 0;\n        bottom: 0;\n        opacity: .7;\n    }\n    &:hover::after{\n        width: 100%;\n        background-color: var(--white-color);\n    }\n']))),M=function(n){var e=n.title;return Object(j.jsx)(C,{children:e})};var P,_=b.b.div(D||(D=Object(l.a)(["\n    margin-top: 5rem;\n    display: flex;\n    @media screen and (max-width:1000px){\n        flex-direction: column;\n        .left-content{\n            margin-bottom: 2rem;\n        }\n    }\n    .left-content{\n        width: 100%;\n        img{\n            width: 95%;\n            object-fit: cover;\n        }\n    }\n    .right-content{\n        width: 100%;\n        h4{\n            font-size: 2rem;\n            color: var(--white-color);\n            span{\n                font-size: 2rem;\n            }\n        }\n        .paragraph{\n            padding: 1rem 0;\n        }\n        .about-info{\n            display: flex;\n            padding-bottom: 1.4rem;\n            .info-title{\n                padding-right: 3rem;\n                p{\n                    font-weight: 600;\n                }\n            }\n            .info-title, .info{\n                p{\n                    padding: .3rem 0;\n                }\n            }\n        }\n    }\n"]))),B=function(){return Object(j.jsxs)(_,{children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)("img",{src:I,alt:""})}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsxs)("h4",{children:["I am ",Object(j.jsx)("span",{children:"Edwin Francis"})]}),Object(j.jsx)("p",{className:"paragraph",children:"Desinging and Developer for both web and app . I create full-stack web and app to help businesses do better in online."}),Object(j.jsxs)("div",{className:"about-info",children:[Object(j.jsxs)("div",{className:"info-title",children:[Object(j.jsx)("p",{children:"Full Name"}),Object(j.jsx)("p",{children:"Age"}),Object(j.jsx)("p",{children:"Nationality "}),Object(j.jsx)("p",{children:"Languages "}),Object(j.jsx)("p",{children:"Location"}),Object(j.jsx)("p",{children:"Service"})]}),Object(j.jsxs)("div",{className:"info",children:[Object(j.jsx)("p",{children:": Edwin Francis"}),Object(j.jsx)("p",{children:": 20"}),Object(j.jsx)("p",{children:": Tamil"}),Object(j.jsx)("p",{children:": English "}),Object(j.jsx)("p",{children:": TamilNadu,India"}),Object(j.jsx)("p",{children:": Freelance"})]})]}),Object(j.jsx)(M,{title:"Download Cv"})]})]})};var H,R,J,L=b.b.div(P||(P=Object(l.a)(['\n    position: relative;\n    h2{\n        color: var(--white-color);\n        font-size: 3.1rem;\n        font-weight: 600;\n        text-transform: uppercase;\n        position: relative;\n        padding-bottom: .7rem;\n        @media screen and (max-width: 496px){\n            font-size: 2.8rem;\n        }\n        @media screen and (max-width: 370px){\n            font-size: 2rem;\n        }\n        &::before{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 7.4rem;\n            height: .33rem;\n            background-color: var(--background-light-color-2);\n            border-radius: 15px;\n            left: 0;\n        }\n        &::after{\n            content: "";\n            position: absolute;\n            bottom: 0;\n            width: 3.5rem;\n            height: .33rem;\n            background-color: var(--primary-color);\n            border-radius: 15px;\n            left: 0;\n        }\n        span{\n            font-weight: 900;\n            color: rgba(25,29,43,.44);\n            font-size: 5rem;\n            position: absolute;\n            left: 0;\n            top: 30%;\n            z-index: -1;\n            @media screen and (max-width: 620px){\n                font-size: 4rem;\n            }\n            @media screen and (max-width: 496px){\n                font-size: 3rem;\n            }\n            @media screen and (max-width: 370px){\n                font-size: 2rem;\n            }\n        }\n    }\n']))),X=function(n){var e=n.title,t=n.span;return Object(j.jsx)(L,{children:Object(j.jsxs)("h2",{children:[e," ",Object(j.jsx)("b",{children:Object(j.jsx)("span",{children:t})})]})})},U=b.b.div(H||(H=Object(l.a)(["\n    padding: 5rem;\n    @media screen and (max-width: 642px){\n        padding: 4rem;\n    }\n    /* @media screen and (max-width: 510px){\n        padding: 3rem;\n    } */\n    @media screen and (max-width: 571px){\n        padding: 2rem .4rem;\n    }\n"]))),W=b.b.div(R||(R=Object(l.a)(["\n    padding: 5rem 0;\n"])));var Y,G=b.b.div(J||(J=Object(l.a)(['\n    background-color: var(--background-dark-grey);\n    border-left: 1px solid var(--border-color);\n    border-top: 8px solid var(--border-color);\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    transition: all .4s ease-in-out;\n    &:hover{\n        border-top: 8px solid var(--primary-color);\n        transform: translateY(3px);\n    }\n    .container{\n        padding: 1.2rem;\n        h4{\n            color: var(--white-color);\n            font-size: 1.6rem;\n            padding: 1rem 0;\n            position: relative;\n            &::after{\n                content: "";\n                width: 4rem;\n                background-color: var(--border-color);\n                height: 3px;\n                position: absolute;;\n                left: 0;\n                bottom: 0;\n                border-radius: 10px;\n            }\n        }\n\n        p{\n            padding: .8rem 0;\n        }\n    }\n']))),Q=function(n){var e=n.image,t=n.title,r=n.paragraph;return Object(j.jsx)(G,{children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("img",{src:e,alt:""}),Object(j.jsx)("h4",{children:t}),Object(j.jsx)("p",{children:r})]})})},V=t.p+"static/media/design.b0dea6a3.svg",q=t.p+"static/media/intelligence.191362ff.svg",K=t.p+"static/media/game-dev.7e1a6c88.svg";var Z,$=b.b.section(Y||(Y=Object(l.a)(["\n    .services{\n        margin-top: 5rem;\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-gap: 1.5rem;\n        @media screen and (max-width:1000px){\n            flex-direction: column;\n        }\n        @media screen and (max-width:950px){\n            grid-template-columns: repeat(2, 1fr);\n        }\n        @media screen and (max-width:650px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n       \n    }\n"]))),nn=function(){return Object(j.jsx)(W,{children:Object(j.jsxs)($,{children:[Object(j.jsx)(X,{title:"Services",span:"services"}),Object(j.jsxs)("div",{className:"services",children:[Object(j.jsx)(Q,{image:V,title:"Web Design",paragraph:"Developing consumer-focused websites using PHP,HTML,CSS and JS frameworks.Motivated web developer looking for a role as full-stack web developer. "}),Object(j.jsx)("div",{className:"mid-card",children:Object(j.jsx)(Q,{image:q,title:"Artificial Intelligence",paragraph:"A good knowledge in working with AI [Python Automation]"})}),Object(j.jsx)(Q,{image:K,title:"App Development",paragraph:"Developed huge app for both IOS and Android(React-Native and Flutter)."})]})]})})};var en,tn=b.b.div(Z||(Z=Object(l.a)(['\n    padding: 2rem 1rem;\n    border-left: 6px solid var(--border-color);\n    background-color: var(--background-dark-grey);\n    position: relative;\n    width: 100%;\n    &:not(:first-child){\n        \n    }\n    &::after{\n        content: "";\n        position: absolute;\n        left: 2rem;\n        border-width: .8rem;\n        top: 100%;\n        border-style: solid;\n        border-color: var(--background-dark-grey) transparent transparent var(--background-dark-grey);\n    }\n    p{\n        padding: 1rem 0;\n    }\n']))),rn=function(n){var e=n.text;return Object(j.jsx)(tn,{children:Object(j.jsx)("p",{children:e})})};var an,on=b.b.section(en||(en=Object(l.a)(["\n    .reviews{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-gap: 1.5rem;\n        width: 100%;\n        @media screen and (max-width:650px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n    }\n"]))),cn=function(){return Object(j.jsxs)(on,{children:[Object(j.jsx)(X,{title:"Reviews",span:"Reviews"}),Object(j.jsx)(W,{children:Object(j.jsxs)("div",{className:"reviews",children:[Object(j.jsx)(rn,{text:"I would highly recommend Mr.Edwin. great to work with. The website he has done is really awsome..thankyou"}),Object(j.jsx)(rn,{text:"Better UI/UX design for App."})]})})]})};var sn,ln=b.b.section(an||(an=Object(l.a)(["\n    \n"]))),dn=function(){return Object(j.jsx)(U,{children:Object(j.jsxs)(ln,{children:[Object(j.jsx)(X,{title:"About Me",span:"About Me"}),Object(j.jsx)(B,{}),Object(j.jsx)(nn,{}),Object(j.jsx)(cn,{})]})})};var bn,mn=b.b.div(sn||(sn=Object(l.a)(["\n    .progress-bar{\n        display: flex;\n        align-items: center;\n        p{\n            padding-right: 1.1rem;\n        }\n        .progress{\n            position: relative;\n            width: 100%;\n            height: .4rem;\n            background-color: var(--border-color);\n            span{\n                position: absolute;\n                left: 0;\n                bottom: 0;\n                height: 100%;\n                background-color: var(--primary-color)\n            }\n        }\n    }\n"]))),jn=function(n){var e=n.title,t=n.width,r=n.text;return Object(j.jsxs)(mn,{children:[Object(j.jsx)("h6",{children:e}),Object(j.jsxs)("div",{className:"progress-bar",children:[Object(j.jsx)("p",{children:r}),Object(j.jsx)("div",{className:"progress",children:Object(j.jsx)("span",{style:{width:t}})})]})]})};var hn,pn=b.b.section(bn||(bn=Object(l.a)(["\n    .skills{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-row-gap: 2rem;\n        grid-column-gap: 3rem;\n        @media screen and (max-width: 700px){\n            grid-template-columns: repeat(1, 1fr);\n        }\n    }\n"]))),xn=function(){return Object(j.jsxs)(pn,{children:[Object(j.jsx)(X,{title:"My Skills",span:"my skills"}),Object(j.jsx)(W,{children:Object(j.jsxs)("div",{className:"skills",children:[Object(j.jsx)(jn,{title:"HTML5",width:"70%",text:"70%"}),Object(j.jsx)(jn,{title:"CSS3",width:"90%",text:"90%"}),Object(j.jsx)(jn,{title:"JAVASCRIPT",width:"85%",text:"85%"}),Object(j.jsx)(jn,{title:"JAVA",width:"60%",text:"60%"}),Object(j.jsx)(jn,{title:"PYTHON",width:"95%",text:"95%"}),Object(j.jsx)(jn,{title:"React JS",width:"75%",text:"75%"})]})})]})};var gn,un=b.b.div(hn||(hn=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    p{\n        padding-right: 1rem;\n        svg{\n            font-size: 3rem;\n        }\n    }\n    h3{\n        color: var(--white-color);\n        font-size: 2rem;\n    }\n"]))),vn=function(n){var e=n.icon,t=n.title;return Object(j.jsxs)(un,{children:[Object(j.jsx)("p",{children:e}),Object(j.jsx)("h3",{children:t})]})},On=t(124),fn=t.n(On),wn=t(125),kn=t.n(wn);var yn,Nn=b.b.div(gn||(gn=Object(l.a)(['\n    display: flex;\n    @media screen and (max-width: 421px){\n        p, h5, h6{\n            font-size: 80%;\n        }\n    }\n    &:not(:last-child){\n        padding-bottom: 3rem;\n    }\n    .left-content{\n        width: 50%;\n        padding-left: 20px;\n        position: relative;\n        &::before{\n            content: "";\n            position: absolute;\n            left: -10px;\n            top: 5px;\n            height: 15px;\n            width: 15px;\n            border-radius: 50%;\n            border: 2px solid var(--border-color);\n            background-color: var(--background-dark-color);\n        }\n        p{\n            display: inline-block;\n        }\n    }\n    .right-content{\n        padding-left: 5rem;\n        position: relative;\n        &::before{\n            content: "";\n            position: absolute;\n            left: 0;\n            top: 15px;\n            height: 2px;\n            width: 3rem;\n            background-color: var(--border-color);\n        }\n        h5{\n            color: var(--primary-color);\n            font-size: 2rem;\n            padding-bottom: .4rem;\n        }\n        h6{\n            padding-bottom: .6rem;\n            font-size: 1.5rem;\n        }\n    }\n']))),zn=function(n){var e=n.year,t=n.title,r=n.subTitle,i=n.text;return Object(j.jsxs)(Nn,{children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)("p",{children:e})}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)("h5",{children:t}),Object(j.jsx)("h6",{children:r}),Object(j.jsx)("p",{children:i})]})]})};var Fn=b.b.section(yn||(yn=Object(l.a)(["\n    .small-title{\n        padding-bottom: 3rem;\n    }\n    .u-small-title-margin{\n        margin-top: 4rem;\n    }\n\n    .resume-content{\n        border-left: 2px solid var(--border-color);\n    }\n"]))),Tn=function(){var n=Object(j.jsx)(fn.a,{}),e=Object(j.jsx)(kn.a,{});return Object(j.jsxs)(Fn,{children:[Object(j.jsx)(X,{title:"Resume",span:"resume"}),Object(j.jsxs)(W,{children:[Object(j.jsx)("div",{className:"small-title",children:Object(j.jsx)(vn,{icon:n,title:"Working Experience"})}),Object(j.jsx)("div",{className:"resume-content",children:Object(j.jsx)(zn,{year:"2021 - Present",title:"Full Stack Developer",subTitle:"Amc-bs",text:"Web Developer"})}),Object(j.jsx)("div",{className:"small-title u-small-title-margin",children:Object(j.jsx)(vn,{icon:e,title:"Educational Qualifications"})}),Object(j.jsxs)("div",{className:"resume-content ",children:[Object(j.jsx)(zn,{year:"2020 - 2023",title:"Bachelor of Technology IT",subTitle:"Sethu Institute of Technology",text:"SIT was a good institute over Tamil nadu , Teachers are friendly and supporting ....It was a part to achieve my career."}),Object(j.jsx)(zn,{year:"2005 - 2019",title:"HSC",subTitle:"A.j School",text:"The schooling is really made a good memories and motivated me to in the way of success"})]})]})]})};var An,En=function(){return Object(j.jsxs)(U,{children:[Object(j.jsx)(xn,{}),Object(j.jsx)(Tn,{})]})},Sn=t(126),In=t.n(Sn),Dn=t(127),Cn=t.n(Dn),Mn=t(128),Pn=t.n(Mn);var _n,Bn=b.b.div(An||(An=Object(l.a)(["\n    padding:1.5rem 2rem;\n    background-color: var(--background-dark-grey);\n    display: flex;\n    align-items: center;\n    &:not(:last-child){\n        margin-bottom: 2.5rem;\n    }\n    .left-content{\n        padding: 1.5rem;\n        border: 1px solid var(--border-color);\n        font-size: 2rem;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        margin-right: 1.5rem;\n        svg{\n            font-size: 2.3rem;\n        }\n    }\n\n    .right-content{\n        h6{\n            color: var(--white-color);\n            font-size: 1.2rem;\n            padding-bottom: .6rem;\n        }\n        p{\n            padding: .1rem 0;\n        }\n    }\n"]))),Hn=function(n){var e=n.title,t=n.icon,r=n.cont1,i=n.cont2;return Object(j.jsxs)(Bn,{children:[Object(j.jsx)("div",{className:"left-content",children:t}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)("h6",{children:e}),Object(j.jsx)("p",{children:r}),Object(j.jsx)("p",{children:i})]})]})};var Rn,Jn=b.b.section(_n||(_n=Object(l.a)(["\n    .contact-section{\n        display: grid;\n        grid-template-columns: repeat(2, 1fr);\n        grid-column-gap: 2rem;\n        @media screen and (max-width: 978px){\n            grid-template-columns: repeat(1, 1fr);\n            .f-button{\n                margin-bottom: 3rem;\n            }\n        }\n        .right-content{\n            display: grid;\n            grid-template-columns: repeat(1, 1fr);\n            @media screen and (max-width: 502px){\n                width: 70%;\n            }\n        }\n        .contact-title{\n            h4{\n                color: var(--white-color);\n                padding: 1rem 0;\n                font-size: 1.8rem;\n            }\n        }\n        .form{\n            width: 100%;\n            @media screen and (max-width: 502px){\n                width: 100%;\n            }\n            .form-field{\n                margin-top: 2rem;\n                position: relative;\n                width: 100%;\n                label{\n                    position: absolute;\n                    left: 20px;\n                    top: -19px;\n                    display: inline-block;\n                    background-color: var(--background-dark-color);\n                    padding:0 .5rem;\n                    color: inherit;\n                }\n                input{\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    background: transparent;\n                    height: 50px;\n                    padding:0 15px;\n                    width: 100%;\n                    color: inherit;\n                }\n                textarea{\n                    background-color: transparent;\n                    border: 1px solid var(--border-color);\n                    outline: none;\n                    color: inherit;\n                    width: 100%;\n                    padding: .8rem 1rem;\n                }\n            }\n\n            \n        }\n    }\n"]))),Ln=function(){var n=Object(j.jsx)(In.a,{}),e=Object(j.jsx)(Cn.a,{}),t=Object(j.jsx)(Pn.a,{});return Object(j.jsxs)(U,{children:[Object(j.jsx)(X,{title:"Contact",span:"Contact"}),Object(j.jsx)(Jn,{children:Object(j.jsxs)(W,{className:"contact-section",children:[Object(j.jsxs)("div",{className:"left-content",children:[Object(j.jsx)("div",{className:"contact-title",children:Object(j.jsx)("h4",{children:"Get In Touch"})}),Object(j.jsxs)("form",{className:"form",children:[Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"name",children:"Enter your name*"}),Object(j.jsx)("input",{type:"text",id:"name"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"email",children:"Enter your email*"}),Object(j.jsx)("input",{type:"email",id:"email"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"subject",children:"Enter your subject"}),Object(j.jsx)("input",{type:"text",id:"subject"})]}),Object(j.jsxs)("div",{className:"form-field",children:[Object(j.jsx)("label",{htmlFor:"text-area",children:"Enter your Message*"}),Object(j.jsx)("textarea",{name:"textarea",id:"textarea",cols:"30",rows:"10"})]}),Object(j.jsx)("div",{className:"form-field f-button",children:Object(j.jsx)(M,{title:"Send Email"})})]})]}),Object(j.jsxs)("div",{className:"right-content",children:[Object(j.jsx)(Hn,{title:"Phone",icon:n,cont1:"+91-9944071032",cont2:"9025124745"}),Object(j.jsx)(Hn,{title:"Email",icon:e,cont1:"edwinfrancis518@gmail.com",cont2:"edwinfrancis.18.ef@gmail.com"}),Object(j.jsx)(Hn,{title:"Address",icon:t,cont1:"Anna Nagar,Madurai,TamilNadu.",cont2:"India"})]})]})})]})},Xn=t(129),Un=t.n(Xn),Wn=t(130),Yn=t.n(Wn),Gn=t(13),Qn=t(503),Vn=t(502);var qn,Kn=b.b.main(Rn||(Rn=Object(l.a)(["\n  position: relative;\n  margin-left: 16.3rem;\n  min-height: 100vh;\n  @media screen and (max-width:1200px){\n    margin-left: 0;\n  }\n  .lines{\n    position: absolute;\n    min-height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: space-evenly;\n    opacity: 0.4;\n    z-index: -1;\n    .line-1, .line-2, .line-3, .line-4{\n      width: 1px;\n      min-height: 100vh;\n      background-color: var(--border-color);\n    }\n  }\n"]))),Zn=function(){var n=Object(i.useState)("dark-theme"),e=Object(d.a)(n,2),t=e[0],r=e[1],a=Object(i.useState)(!1),o=Object(d.a)(a,2),c=o[0],s=o[1],l=Object(i.useState)(!1),b=Object(d.a)(l,2),m=b[0],h=b[1];return Object(i.useEffect)((function(){document.documentElement.className=t}),[t]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(u,{navToggle:m}),Object(j.jsx)("div",{className:"theme",children:Object(j.jsxs)("div",{className:"light-dark-mode",children:[Object(j.jsx)("div",{className:"left-content",children:Object(j.jsx)(Un.a,{})}),Object(j.jsx)("div",{className:"right-content",children:Object(j.jsx)(Qn.a,{value:"",checked:c,inputProps:{"aria-label":""},size:"medium",onClick:function(){"light-theme"===t?(r("dark-theme"),s(!1)):(r("light-theme"),s(!0))}})})]})}),Object(j.jsx)("div",{className:"ham-burger-menu",children:Object(j.jsx)(Vn.a,{onClick:function(){return h(!m)},children:Object(j.jsx)(Yn.a,{})})}),Object(j.jsxs)(Kn,{children:[Object(j.jsxs)("div",{className:"lines",children:[Object(j.jsx)("div",{className:"line-1"}),Object(j.jsx)("div",{className:"line-2"}),Object(j.jsx)("div",{className:"line-3"}),Object(j.jsx)("div",{className:"line-4"})]}),Object(j.jsxs)(Gn.c,{children:[Object(j.jsx)(Gn.a,{path:"/",exact:!0,children:Object(j.jsx)(S,{})}),Object(j.jsx)(Gn.a,{path:"/about",exact:!0,children:Object(j.jsx)(dn,{})}),Object(j.jsx)(Gn.a,{path:"/resume",exact:!0,children:Object(j.jsx)(En,{})}),Object(j.jsx)(Gn.a,{path:"/contact",exact:!0,children:Object(j.jsx)(Ln,{})})]})]})]})},$n=Object(b.a)(qn||(qn=Object(l.a)(["\n/* :root{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n\n} */\n\n.light-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #ff7675;\n    --background-dark-color: #F1F1F1;\n    --background-dark-grey: #e4e4e4;\n    --border-color: #cbced8;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #151515;\n    --font-light-color: #313131;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #E4E4E4;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n.dark-theme{\n    --primary-color: #007bff;\n    --primary-color-light: #057FFF;\n    --secondary-color: #6c757d;\n    --background-dark-color: #10121A;\n    --background-dark-grey: #191D2B;\n    --border-color: #2e344e;\n    --background-light-color: #F1F1F1;\n    --background-light-color-2: rgba(3,127,255,.3);\n    --white-color: #FFF;\n    --font-light-color: #a4acc4;\n    --font-dark-color: #313131;\n    --font-dark-color-2: #151515;\n    --sidebar-dark-color: #191D2B;\n    --scrollbar-bg-color: #383838;\n    --scrollbar-thump-color: #6b6b6b;\n    --scrollbar-track-color: #383838;\n}\n\n*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    list-style: none;\n    text-decoration: none;\n    font-family: 'Nunito', sans-serif;\n    font-size: 1.1rem;\n    \n}\n\nbody{\n    background-color: var(--background-dark-color);\n    color: var(--font-light-color);\n    transition: all .4s ease-in-out;\n}\n\nbody::-webkit-scrollbar{\n    width: 9px;\n    background-color: #383838;\n}\nbody::-webkit-scrollbar-thumb{\n    border-radius: 10px;\n    background-color: #6b6b6b;\n}\nbody::-webkit-scrollbar-track{\n    border-radius: 10px;\n    background-color: #383838;\n}\n\ntextarea{\n    max-width: 100%;\n}\na{\n    font-family: inherit;\n    color: inherit;\n    font-size: inherit;\n    font-size: 1rem;\n}\n\nh1{\n    font-size: 4rem;\n    color: var(--white-color);\n    span{\n        font-size: 4rem;\n        @media screen and (max-width: 502px){\n            font-size: 3rem\n        }\n    }\n    @media screen and (max-width: 502px){\n        font-size: 3rem\n    }\n}\n\nspan{\n    color: var(--primary-color);\n}\nh6{\n    color: var(--white-color);\n    font-size: 1.2rem;\n    padding-bottom: .6rem;\n}\n\n//Utilities\n.u-margin-bottom{\n    margin-bottom: 4rem;\n}\n\n\n//Floting Toggler\n.light-dark-mode{\n    position: fixed;\n    right: 0;\n    top: 50%;\n    background-color: var(--background-light-color-2);\n    width: 6.5rem;\n    height: 2.5rem;\n    z-index: 15;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    svg{\n      display: flex;\n      align-items: center;\n      font-size: 1.7rem;\n      color: var(--white-color);\n    }\n  }\n\n  //Nav Toggler\n  .ham-burger-menu{\n      position: absolute;\n      right: 5%;\n      top: 3%; \n      display: none;\n      z-index: 15;\n      svg{\n          font-size: 3rem;\n      }\n    }\n\n    .nav-toggle{\n        transform: translateX(0);\n        z-index: 20;\n    }\n  @media screen and (max-width:1200px){\n    .ham-burger-menu{\n        display: block;\n    }\n  }\n\n\n//Global Media Queries\n\n\n\n"])));c.a.render(Object(j.jsxs)(a.a.StrictMode,{children:[Object(j.jsx)($n,{}),Object(j.jsx)(s.a,{children:Object(j.jsx)(Zn,{})})]}),document.getElementById("root"))}},[[484,1,2]]]);
//# sourceMappingURL=main.39e73843.chunk.js.map