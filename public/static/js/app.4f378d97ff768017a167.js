webpackJsonp([1],{"1/oy":function(t,e){},"9M+g":function(t,e){},F1YM:function(t,e){},GfHa:function(t,e){},Id91:function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),n=a("NYxO"),i=a("e6fC"),o=(a("Jmt5"),a("9M+g"),a("/ocq"));a("ytdl");const r=a("ytdl");var l={name:"App",data:()=>({reactive:!0,loggedIn:!1,loggingOut:!1,currentUser:"",currentUserName:"",currentUserPhoto:"http://getwallpapers.com/wallpaper/full/0/3/c/12613.jpg",currentUserOther:""}),async created(){await this.getUserInfo(),this.startTime()},methods:{async getUserInfo(){let t=r(document.cookie.split("=")[1]).id;""!==t&&(this.loggedIn=!0,this.$router.push("/profile")),await fetch(`http://localhost:3000/users/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>(this.currentUser=await t.json(),console.log("get one user store info:",this.currentUser),this.currentUserName=this.currentUser.username,this.currentUserPhoto=this.currentUser.photo,this.currentUser))},logOut(){console.log("I hit the logout button",document.cookie),this.loggingOut=!0,setTimeout(()=>{this.currentUserName="",this.currentUserPhoto="http://getwallpapers.com/wallpaper/full/0/3/c/12613.jpg",this.loggedIn=!1,this.loggingOut=!1,this.$router.push("/sign-up")},4e3)},startTime(){let t=new Date,e=t.getHours(),a=t.getMinutes(),s=t.getSeconds();a=this.checkTime(a),s=this.checkTime(s),document.getElementById("time").innerHTML=e+":"+a+":"+s;setTimeout(this.startTime,500)},checkTime:t=>(t<10&&(t="0"+t),t)}},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("b-navbar-toggle",{attrs:{target:"nav_collapse"}}),t._v(" "),a("b-navbar-brand",{attrs:{to:"/sign-up"}},[t._v("StandUP!")]),t._v(" "),a("b-collapse",{attrs:{"is-nav":"",id:"nav_collapse"}},[a("b-navbar-nav",[a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],attrs:{to:"/sprint"}},[t._v("Sprint")]),t._v(" "),a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],attrs:{to:"/profile"}},[t._v("Your Teams")])],1)],1),t._v(" "),a("div",{staticClass:"userInfoDisplay"},[t._v("\n       "+t._s(t.currentUserName.toUpperCase())+"\n      ")]),t._v(" "),a("b-navbar-nav",[a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}],attrs:{to:"/sign-up"}},[t._v("Sign Up")]),t._v(" "),a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}],staticClass:"loginBtn",attrs:{href:"http://localhost:3000/auth/github"}},[t._v("Login")]),t._v(" "),a("b-nav-item",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],on:{click:t.logOut}},[t._v("Logout")])],1),t._v(" "),a("img",{attrs:{src:t.currentUserPhoto,alt:"BV"}})],1)],1),t._v(" "),a("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.loggingOut,expression:"loggingOut"}],attrs:{id:"pacman",name:"ball-scale-multiple",color:"#292b2c"}}),t._v(" "),a("main",{directives:[{name:"show",rawName:"v-show",value:!t.loggingOut,expression:"!loggingOut"}]},[a("router-view")],1),t._v(" "),a("footer",{staticClass:"footer"},[a("b-navbar",{attrs:{toggleable:"md",type:"dark",variant:"dark"}},[a("span",{attrs:{id:"cpy"}},[t._v("Stand Up! © 2018")]),t._v(" "),a("span",{attrs:{id:"time"}})])],1)],1)},staticRenderFns:[]};var d=a("VU/8")(l,c,!1,function(t){a("YFAS")},null,null).exports;let m=d.teamsData;console.log("data:",m);var p={name:"SignUp",data:()=>({}),methods:{sendToProfile(){this.$router.push("./profile")}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signUp"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("h5",[t._v("Review each team member's progress")]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),a("b-form",[a("b-button",{attrs:{id:"signUpBtn",href:"http://localhost:3000/auth/github",variant:"alert"},on:{click:t.sendToProfile}},[t._v("Sign In with Github\n      "),a("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1024px-Octicons-mark-github.svg.png"}})])],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",[this._v("Welcome to Stand Up! The "),e("b",[this._v("Daily Scrum")]),this._v(" app for remote teams")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",[this._v("Easily "),e("b",[this._v("create")]),this._v(" and "),e("b",[this._v("join")]),this._v(" sprint teams")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[this._v("Address helps to achieve the current "),e("b",[this._v("sprint goal")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[this._v("Access past records in the "),e("b",[this._v("current sprint")]),this._v(" for easy and qualitative "),e("b",[this._v("review")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h5",[e("b",[this._v("↓")]),this._v(" Solidify your status as an "),e("b",[this._v("Agile")]),this._v(" pro today "),e("b",[this._v("↓")])])}]};var u=a("VU/8")(p,h,!1,function(t){a("F1YM")},"data-v-7c28230a",null).exports,v=a("iclY"),g=a.n(v);s.a.component("Spinner",g.a);var _=this;let f=a("ytdl");const b={data:{teamToEdit:null,usersTeams:[],test:"test",memberTeams:[],errorMessage:""},methods:{async refreshUsersTeams(){this.loading=!0,this.usersTeams=await b.methods.getTeams(),console.log("profile.vue: getTeams: ",this.usersTeams),this.loading=!1},getTeams:async()=>fetch("http://localhost:3000/teams",{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{console.log("response getTeams: ",t);let e=await t.json();return b.data.usersTeams=e,e}),getMemberTeams:async t=>fetch(`http://localhost:3000/user_teams/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{return console.log("response getTeams: ",t),await t.json()}),createTeam:async t=>{console.log("createTeam: ",t);const e=f(document.cookie.split("=")[1]);console.log("tokenDecoded",e);const a={name:t,creator_id:e.id};await fetch(`http://localhost:3000/teams/${t}`,{credentials:"include",method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async e=>{_.errorMessage="hi";let a=await e.json();return 200===e.status?(console.log("resJson: ",a),console.log("resJson.name: ",a.name),a.name):(401===e.status&&(b.data.errorMessage=`Cannot Create Team: ${t}. Please enter a different Team Name`),b.data.errorMessage)})},async deleteTeam(t){console.log("in the delete teamStore w/ id:",t),t=parseInt(t),await fetch(`http://localhost:3000/teams/${t}`,{credentials:"include",method:"DELETE"}).then(t=>{401===t.status&&alert(`Error: ${t.status}: ${t.statusText}`)})},async editTeam(t,e){const a={name:e,creator_id:f(document.cookie.split("=")[1]).id};await fetch(`http://localhost:3000/teams/${t}`,{credentials:"include",method:"PUT",body:JSON.stringify(a),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(t=>{401===t.status&&console.log(`Error: ${t.status}: ${t.statusText}`)})},getTeamMembers:async t=>fetch(`http://localhost:3000/teams_users/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{console.log("response getTeamMembers: ",t.body);let e=await t.json();return console.log("resJson: ",e),e.body}),async joinTeam(t){let e={team_name:t};return console.log("in the joinTeam for team:",t),fetch("http://localhost:3000/teams_users",{credentials:"include",method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(e=>{401===e.status&&(b.data.errorMessage=`Invalid login attempt with name: ${t} Please try again.`),console.log("join a team res:",e)})}}};var y=b;const T={data:{teamName:"",sprintInfo:[1],sprintLength:0,sprintId:0},methods:{getSprint:async(t,e)=>fetch(`http://localhost:3000/sprints/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async a=>{console.log("response: ",a);let s=await a.json();return console.log("resJson: ",s),console.log("resJson[0]: ",s[0]),T.data.sprintInfo.push(s[0]),T.data.teamName=e,T.data.sprintId=t,console.log("SprintStore.data.sprintInfo: ",T.data.sprintInfo),console.log("resJson: ",s),s}),async postSprint(t,e,a){console.log("in the sprintstore postSprint rte:",t,e,a);let s={sprint_length:e,sprint_goal:a};await fetch(`http://localhost:3000/sprints/${t}`,{credentials:"include",method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{console.log(t)})}}};var w=T;const S=a("ytdl");var I={name:"Profile",data:()=>({reactive:!0,isSeen:!0,currentlyLoading:!0,usersTeams:[],memberTeams:[],model:{},teamName:"",selected:null,editModalInput:"",loggedIn:!0,joinTeamName:"",current_user_id:0,errorMessage:"",isWarning:!1}),async created(){this.current_user_id=S(document.cookie.split("=")[1]).id,this.refreshUsersTeams()},methods:{async refreshUsersTeams(){this.usersTeams=[],this.memberTeams=[],(this.currentlyLoading=!1)&&setTimeout(()=>this.currentlyLoading=!0,3e3),this.currentlyLoading=!1;let t=await y.methods.getTeams();await t.map(t=>{if(t.creator_id===S(document.cookie.split("=")[1]).id)return t.name[0].toUpperCase(),t.name.substring(1),this.loggedIn=!0,this.isSeen=!1,this.currentlyLoading=!1,this.usersTeams.push(t)}),(await y.methods.getMemberTeams(this.current_user_id)).forEach(t=>{t.creator_id!==this.current_user_id&&this.memberTeams.push(t)}),this.errorMessage=y.data.errorMessage,console.log("this.errorMessage",this.errorMessage),""!==this.errorMessage&&(this.isWarning=!0,setTimeout(()=>this.isWarning=!1,5e3))},async addTeam(t){return t.preventDefault(),await y.methods.createTeam(this.teamName),t.target.reset(),this.teamName="",this.refreshUsersTeams()},async goToSprint(t,e){console.log("Go to sprint id: ",t),await w.methods.getSprint(t,e),this.$router.push("/sprint")},deleteTeam(t){this.usersTeams.map(async e=>{if(e.name===t.toLowerCase())return await y.methods.deleteTeam(e.id),this.refreshUsersTeams()})},editTeam(){this.usersTeams.map(async t=>{if(t.name===this.teamName.toLowerCase())return await y.methods.editTeam(t.id,this.editModalInput.toLowerCase()),this.editModalInput="",this.teamName="",this.hideModal(),this.refreshUsersTeams()})},joinTeam(t){return y.methods.joinTeam(this.joinTeamName),this.refreshUsersTeams()},showModal(t){this.teamName=t,console.log("modal name:",t),this.$refs.editModal.show()},hideModal(){this.teamName="",this.$refs.editModal.hide()}},components:{SignUp:u}},C={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("SignUp",{directives:[{name:"show",rawName:"v-show",value:t.isSeen&&!t.currentlyLoading&&!t.loggedIn,expression:"isSeen && !currentlyLoading && !loggedIn"}]}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.isSeen||!t.currentlyLoading&&t.loggedIn,expression:"!isSeen || !currentlyLoading && loggedIn"}],staticClass:"profile"},[a("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.currentlyLoading,expression:"currentlyLoading"}],attrs:{id:"pacman",name:"pacman",color:"#28284e"}}),t._v(" "),a("b-alert",{directives:[{name:"show",rawName:"v-show",value:t.isWarning,expression:"isWarning"}],attrs:{id:"alert",show:"",dismissible:"",fade:"",variant:"warning"}},[t._v(t._s(this.errorMessage))]),t._v(" "),a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",[a("h4",[t._v("Create a Team")]),t._v(" "),a("div",{staticClass:"teamFields"},[a("b-form",{attrs:{info:"info",inline:""},on:{submit:t.addTeam}},[a("label",{attrs:{for:"teamName",value:"name"}}),t._v(" "),a("b-input",{attrs:{id:"inputLive",name:"teamName",placeholder:"Team Name"},model:{value:t.teamName,callback:function(e){t.teamName=e},expression:"teamName"}},[t._v("Team\n              ")]),t._v(" "),a("b-button",{staticClass:"teamBtn",attrs:{type:"submit",variant:"dark"}},[t._v("+")]),t._v(" "),a("b-form-invalid-feedback",{attrs:{id:"inputLiveFeedback"}},[t._v("\n                 Enter at least 4 letters\n              ")])],1)],1)]),t._v(" "),a("b-col",[a("h4",[t._v("Creator")]),t._v(" "),a("div",{staticClass:"teamsList"},t._l(this.usersTeams,function(e){return a("b-list-group",{key:e.id,staticClass:"yourTeamsGroup",attrs:{"track-by":"$index"}},[a("b-list-group-item",{staticClass:"yourTeamsItem",attrs:{button:""},on:{click:function(a){t.goToSprint(e.id,e.name)}}},[t._v(t._s(e.name[0].toUpperCase()+e.name.substring(1))+"\n\n              ")]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"teamEditDel",attrs:{title:"Edit",id:"edit",variant:"outline-dark"},on:{click:function(a){t.showModal(e.name)}}},[t._v("✎")]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"teamEditDel",attrs:{title:"Delete",variant:"outline-dark"},on:{click:function(a){t.deleteTeam(e.name)}}},[t._v("🗑")])],1)}),1)]),t._v(" "),a("b-col",[a("h4",[t._v("Member")]),t._v(" "),a("div",{staticClass:"teamsList"},t._l(this.memberTeams,function(e){return a("b-list-group",{key:e.id,staticClass:"yourTeamsGroup",attrs:{"track-by":"$index"}},[a("b-list-group-item",{staticClass:"yourTeamsItem",attrs:{button:""},on:{click:function(a){t.goToSprint(e.id,e.name)}}},[t._v("\n                "+t._s(e.name[0].toUpperCase()+e.name.substring(1))+"\n              ")])],1)}),1)])],1),t._v(" "),a("hr"),t._v(" "),a("b-row",[a("b-col",[a("b-alert",{attrs:{hide:"true",variant:"warning"}},[t._v("Please enter a longer team name")]),t._v(" "),a("div",{staticClass:"teamActions"},[a("h4",[t._v("Join a Team")]),t._v(" "),a("div",{staticClass:"joinTeam"},[a("b-form",{attrs:{inline:""}},[a("label",{attrs:{for:"Team Name",value:"name"}}),t._v(" "),a("b-input",{attrs:{placeholder:"Team Name"},model:{value:t.joinTeamName,callback:function(e){t.joinTeamName=e},expression:"joinTeamName"}},[t._v("Team")]),t._v(" "),a("b-button",{staticClass:"teamBtn",attrs:{variant:"dark"},on:{click:function(e){t.joinTeam(t.joinTeamName)}}},[t._v("+")])],1)],1)])],1)],1)],1),t._v(" "),a("b-modal",{ref:"editModal",attrs:{"hide-footer":"",title:"Edit Team Name"}},[a("div",{staticClass:"d-block text-center"},[t._v(t._s(t.teamName.toUpperCase(1))+"\n       "),a("hr"),t._v(" "),a("b-input",{attrs:{id:"modalInput",type:"text"},model:{value:t.editModalInput,callback:function(e){t.editModalInput=e},expression:"editModalInput"}})],1),t._v(" "),a("b-btn",{staticClass:"mt-3",attrs:{variant:"outline-dark",block:""},on:{click:function(e){t.hideModal&&t.editTeam(t.teamName)}}},[t._v("Edit")])],1)],1)],1)},staticRenderFns:[]};var N=a("VU/8")(I,C,!1,function(t){a("kw6j")},"data-v-37d5f8cf",null).exports;const k=a("ytdl"),x={data:{selectedStandupDay:"",allStandupsForThisSprint:[]},methods:{async getSprintInfo(t){k(document.cookie.split("=")[1]).id;await fetch(`http://localhost:3000/standUps/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{let e=await t.json();return console.log("get one user store info:",e),e})},async getStandups(t){await fetch(`http://localhost:3000/standUps/${t}`,{credentials:"include",method:"GET",headers:{"Content-Type":"application/json",Accept:"application/json"}}).then(async t=>{let e=await t.json();return console.log("getStandups response",e),x.data.allStandupsForThisSprint.push(e),e})}}};var U=x,j={name:"CalendarView",props:["sprintLength"],data:()=>({reactive:!0,teamName:"test",sprintInfo:"",selected:"radio1",curentDaily:0,sprint_goal:"Please define me"}),async created(){console.log("CalendarView created"),this.sprintInfo=w.data.sprintInfo,this.teamName=w.data.teamName,this.sprint_goal=this.sprintInfo[1].sprint_goal,console.log("this.sprintInfo: ",this.sprintInfo),console.log("this.teamName: ",this.teamName)},methods:{loadSprintDaily(t){console.log("hit the load sprint daily route with day:",t)}}},M={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"calendar"},[a("p",{staticClass:"team-header"},[t._v("Current Sprint: "),a("em",[t._v(t._s(t.teamName[0].toUpperCase()+t.teamName.substring(1)))])]),t._v(" "),a("div",[a("b-form-group",{attrs:{label:""}},t._l(this.sprintLength,function(e){return a("b-button",{key:e,staticClass:"sprintDayButtons",attrs:{variant:"outline-dark","track-by":"$index"},on:{click:function(a){t.loadSprintDaily(e)}}},[t._v("Stand Up "+t._s(e)+"\n    ")])}),1)],1),t._v(" "),a("div",{staticClass:"sprintGoal"},[t._v("\n    Goal for this Sprint: "+t._s(t.sprint_goal)+"\n  ")])])},staticRenderFns:[]};var $=a("VU/8")(j,M,!1,function(t){a("xGsk")},"data-v-e455e80c",null).exports,E={name:"Sprint",data:()=>({selectedStandupDay:"",rangeValue:5,notLoading:!1,rangeGoal:"",sprintLength:5,sprintGoalText:"",member1YesterdayText:"",member1TodayText:"",member1HelpsText:"",teamName:"",sprintInfo:"",currentSprintId:0,notes:"",standupsDay1:[],standupsDay2:[]}),async created(){console.log("calendar info available to sprint page:",$),console.log("SprintStore.data.sprintInfo: ",w.data.sprintInfo),0===w.data.sprintInfo.length&&this.$router.push("/profile"),this.notLoading=!0,setTimeout(()=>{this.notLoading=!1},2500),this.sprintInfo=await w.data.sprintInfo,this.teamName=await w.data.teamName,this.currentSprintId=await w.data.sprintId,await this.currentSprintInfo(this.currentSprintId),console.log("CalendarView created"),console.log("this.sprintInfo: ",this.sprintInfo),console.log("this.teamName: ",this.teamName),await U.methods.getStandups(this.sprintInfo[1].id),console.log("StandUpsStore.data.allStandupsForThisSprint[0]: ",U.data.allStandupsForThisSprint[0]),console.log(U.data.allStandupsForThisSprint[0]);let t=[];U.data.allStandupsForThisSprint[0].forEach(e=>{1===e.dayInSprint&&t.push(e)}),console.log("day1: ",t),this.standupsDay1.push(t),console.log("this.standupsDay1: ",this.standupsDay1)},methods:{hideModal(){this.$refs.postSprintModal.hide()},async hitThatRoute(){let t=await fetch("http://localhost:3000/teams_users",{credentials:"include"});console.log("the button is go:",t,t.status,t.data)},async currentSprintInfo(){let t=await U.methods.getSprintInfo(this.currentSprintId);console.log("response to currentSprintIno in sprint vue:",t)},postSprint(t,e,a){a||alert("Please enter a Sprint Goal for your team's betterment"),console.log("in the postSprint in the sprint component:",t,e,a),w.methods.postSprint(t,e,a),this.rangeValue=5,this.rangeGoal=""},addTeamMember(t){console.log("add team member function");document.getElementById("sprintCardParent")}},components:{CalendarView:$}},L={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"body"},[a("Spinner",{directives:[{name:"show",rawName:"v-show",value:t.notLoading,expression:"notLoading"}],attrs:{id:"pacman",name:"ball-scale-multiple",color:"#292b2c"}}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.notLoading,expression:"!notLoading"}],staticClass:"sprint"},[a("b-btn",{directives:[{name:"b-modal",rawName:"v-b-modal.postSprintModal",modifiers:{postSprintModal:!0}}],staticClass:"postASprintBtn"},[t._v("Create A Sprint")]),t._v(" "),a("CalendarView",{staticClass:"cal",attrs:{sprintLength:t.sprintLength}}),t._v(" "),a("div",{staticClass:"sprintNotes"},[t._v("Sprint Notes:\n          "),a("b-form-textarea",{attrs:{type:"text",value:"sprintInfo[1].sprint_notes",rows:3},model:{value:t.sprintInfo[1].sprint_notes,callback:function(e){t.$set(t.sprintInfo[1],"sprint_notes",e)},expression:"sprintInfo[1].sprint_notes"}}),t._v(" "),a("b-button",{attrs:{id:"sprintCardUpBtn",variant:"outlin-dark"}},[t._v("✎ Notes")])],1),t._v(" "),t._l(t.standupsDay1[0],function(e){return a("div",{staticClass:"sprintCardDiv"},[a("b-card",{staticClass:"sprintDailyCard",staticStyle:{"max-width":"40%"},attrs:{"no-body":"","img-src":"http://www.clker.com/cliparts/l/w/w/n/7/c/purple-square-button-md.png","img-alt":"Image","img-top":""}},[a("h4",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.username))]),t._v(" "),a("b-card-body",[a("p",{staticClass:"card-text"})]),t._v(" "),a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[a("br"),t._v("\n              Yesterday:\n              "),e.yesterday?a("p",[t._v(t._s(e.yesterday))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.member1YesterdayText,callback:function(e){t.member1YesterdayText=e},expression:"member1YesterdayText"}})],1),t._v(" "),a("b-list-group-item",[a("br"),t._v("Today:\n              "),e.today?a("p",[t._v(t._s(e.today))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.member1TodayText,callback:function(e){t.member1TodayText=e},expression:"member1TodayText"}})],1),t._v(" "),a("b-list-group-item",[a("br"),t._v("Helps:\n              "),e.helps?a("p",[t._v(t._s(e.helps))]):a("b-form-textarea",{staticClass:"memberInputField",attrs:{type:"textarea"},model:{value:t.member1HelpsText,callback:function(e){t.member1HelpsText=e},expression:"member1HelpsText"}})],1),t._v(" "),a("b-list-group-item",[a("b-button",[t._v("Submit Stand Up")]),t._v(" "),a("b-button",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"teamEditDel",attrs:{title:"Edit",id:"edit",variant:"outline-dark"},on:{click:function(e){t.showModal(t.team.name)}}},[t._v("✎")])],1)],1)],1)],1)}),t._v(" "),a("b-container")],2),t._v(" "),a("b-modal",{attrs:{id:"postSprintModal","hide-footer":"",variant:"dark",title:"Create Sprint for Team",effect:"fade/zoom"}},[a("div",[t._v("\n          Sprint Length: "+t._s(t.rangeValue)+" Stand Ups\n          "),a("b-form-input",{attrs:{type:"range",variant:"info",min:"5",max:"10",step:"1"},model:{value:t.rangeValue,callback:function(e){t.rangeValue=e},expression:"rangeValue"}})],1),t._v(" "),a("hr"),t._v(" "),a("div",[t._v("Sprint Goal")]),t._v(" "),a("b-form-input",{attrs:{type:"text"},model:{value:t.rangeGoal,callback:function(e){t.rangeGoal=e},expression:"rangeGoal"}}),t._v(" "),a("br"),t._v(" "),a("b-button",{attrs:{variant:"outline-info text-dark",value:"submit"},on:{click:function(e){t.postSprint(3,+t.rangeValue,t.rangeGoal)&&t.hideModal}}},[t._v(t._s(t.teamName[0].toUpperCase()+t.teamName.substring(1))+"...Get Agile!")])],1)],1)},staticRenderFns:[]};var G=a("VU/8")(E,L,!1,function(t){a("yZOU")},"data-v-245964e6",null).exports,D={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"notFound"},[e("p",[this._v("\n    404 - Page Not Found\n  ")]),this._v(" "),e("b-button",{attrs:{variant:"dark",href:"/sign-up"}},[this._v("Home")])],1)},staticRenderFns:[]};var F=a("VU/8")({name:"NotFound"},D,!1,function(t){a("RrPR")},"data-v-1a010100",null).exports;s.a.use(o.a);var P=new o.a({mode:"history",routes:[{path:"/",name:"Profile",component:N},{path:"*",name:"NotFound",component:F},{path:"/sign-up",name:"SignUp",component:u},{path:"/profile",name:"Profile",component:N},{path:"/sprint",name:"Sprint",component:G}]});s.a.use(i.a),s.a.config.productionTip=!1,s.a.use(n.a),new s.a({el:"#app",router:P,components:{App:d},template:"<App/>",methods:{}})},RrPR:function(t,e){},YFAS:function(t,e){},kw6j:function(t,e){},xGsk:function(t,e){},yZOU:function(t,e){},zj2Q:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.4f378d97ff768017a167.js.map