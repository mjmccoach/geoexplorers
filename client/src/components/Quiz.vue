<template>

<!--container-->
<section class="container">
    <button @click="showQuiz">
        Play Quiz!
      </button>
	<!--questionBox-->
	<div class="questionBox" id="quiz">

		<!-- transition -->
		<transition :duration="{ enter: 500, leave: 300 }" enter-active-class="animated zoomIn" leave-active-class="animated zoomOut" mode="out-in">

			<!--questionContainer-->
			<div class="questionContainer" v-if="questionIndex<quiz.questions.length" v-bind:key="questionIndex">

				<header>
					<h1 class="title is-6">GeoExplorers Quiz!</h1>
					<!--progress-->
					<div class="progressContainer">
						<progress class="progress is-info is-small" :value="(questionIndex/quiz.questions.length)*100" max="100">{{(questionIndex/quiz.questions.length)*100}}%</progress>
						<p>{{questionIndex}} out of {{quiz.questions.length}} complete</p>
					</div>
					<!--/progress-->
				</header>

				<!-- questionTitle -->
				<h2 class="titleContainer title">{{ quiz.questions[questionIndex].text }}</h2>

				<!-- quizOptions -->
				<div class="optionContainer">
					<div class="option" v-for="(response, index) in quiz.questions[questionIndex].responses" @click="selectOption(index)" :class="{ 'is-selected': userResponses[questionIndex] == index}" :key="index">
						{{ index | charIndex }}. {{ response.text }}
					</div>
				</div>

				<!--quizFooter: navigation and progress-->
				<footer class="questionFooter">

					<!--pagination-->
					<nav class="pagination" role="navigation" aria-label="pagination">

						<!-- back button -->
						<a class="button" v-on:click="prev();" :disabled="questionIndex < 1">
                    Back
                  </a>

						<!-- next button -->
						<a class="button" :class="(userResponses[questionIndex]==null)?'':'is-active'" v-on:click="next();" :disabled="questionIndex>=quiz.questions.length">
                    {{ (userResponses[questionIndex]==null)?'Skip':'Next' }}
                  </a>

					</nav>
					<!--/pagination-->

				</footer>
				<!--/quizFooter-->

			</div>
			<!--/questionContainer-->

			<!--quizCompletedResult-->
			<div v-if="questionIndex >= quiz.questions.length" v-bind:key="questionIndex" class="quizCompleted has-text-centered">

				<!-- quizCompletedIcon: Achievement Icon -->
				<span class="icon">
                <i class="fa" :class="score()>3?'fa-check-circle-o is-active':'fa-times-circle'"></i>
              </span>

				<!--resultTitleBlock-->
				<h2 class="title">
					You did {{ (score()>7?'an amazing': (score()<4 ? 'an ok':'a good')) }} job!
				</h2>
				<p class="subtitle">
					Total score: {{ score() }} / {{ quiz.questions.length }}
				</p>
					<br>
					<a class="button" @click="restart()">restart <i class="fa fa-refresh"></i></a>
				<!--/resultTitleBlock-->

			</div>
			<!--/quizCompetedResult-->

		</transition>

	</div>
	<!--/questionBox-->

</section>
<!--/container-->

</template>

<script>


      export default {
        name: 'quiz',
        data () {
          return {
          quiz: 
           {
              user: "Matthew",
              questions: [
           {
              text: "What is the capital of Spain?",
              responses: [
               { text: "Barcelona" },
               { text: "Madrid", correct: true },
               { text: "Seville" },
               { text: "Bilbao" }
            ]
         },
         {
              text: "Which continent is Brazil in?",
              responses: [
                { text: "South America", correct: true },
                { text: "Europe" },
                { text: "Africa" },
                { text: "North America" }
              ]
         },
         {
              text: "What is the capital of Germany?",
              responses: [
                { text: "Hamburg" },
                { text: "Berlin", correct: true },
                { text: "Frankfurt" },
                { text: "Cologne" }
              ]
          },
          {
              text: "What is the capital of Italy?",
              responses: [
                { text: "Rome", correct: true },
                { text: "Milan" },
                { text: "Naples" },
                { text: "Turin" }
              ]
          },
          {
              text: "What is the capital of Belgium?",
              responses: [
                { text: "Antwerp" },
                { text: "Ghent" },
                { text: "Brussels", correct: true },
                { text: "Charleroi" }
              ]
          },
          {
              text:
                "What is the capital of Poland?",
              responses: [
                { text: "Wrocław", correct: true },
                { text: "Education" },
                { text: "Krakow" },
                { text: "Łódź" }
              ]
          },
          {
              text: "What is the capital of Australia?",
              responses: [
                { text: "Canberra", correct: true },
                { text: "Melbourne" },
                { text: "Sydney" },
                { text: "Perth" }
              ]
          },
          {
              text: "What is the capital of New Zealand?",
              responses: [
                { text: "Dunedin" },
                { text: "Wellington", correct: true },
                { text: "Auckland " },
                { text: "Christchurch" }
              ]
          },
          {
              text:
                "What is the capital of China?",
              responses: [
                { text: "Aberdeen" },
                { text: "Shanghai" },
                { text: "Beijing", correct: true },
                { text: "Chongqing" }
              ]
          },
          {
              text: "What is the capital of Denmark?",
              responses: [
                { text: "Aarhus" },
                { text: "Copenhagen", correct: true },
                { text: "Edinburgh" },
                { text: "Roskilde" }
              ]
          },
        ]
         },
        //  userResponseSkeleton = Array(quiz.questions.length).fill(null),

          questionIndex: 0,
          userResponses: Array(10).fill(null),
          isActive: false,
          showQuiz: false,
        }
        },

        filters: {
        charIndex: function(i) {
         return String.fromCharCode(97 + i);
      }
        },
        methods: {
		    restart: function(){
          this.questionIndex=0;
          this.userResponses=Array(this.quiz.questions.length).fill(null);
      },
        selectOption: function(index) {
          this.userResponses[this.questionIndex] = index;
          this.$forceUpdate();

        },
        next: function() {
          if (this.questionIndex < this.quiz.questions.length)
              this.questionIndex++;
        },

        prev: function() {
          if (this.quiz.questions.length > 0) this.questionIndex--;
        },
        // Return "true" count in userResponses
        score: function() {
          let dorkfest = 0;
          for (let i = 0; i < this.userResponses.length; i++) {
              if (
                typeof this.quiz.questions[i].responses[this.userResponses[i]] !== "undefined" 
                && this.quiz.questions[i].responses[this.userResponses[i]].correct
              ) 
              {dorkfest = dorkfest + 1;}
          }
          return dorkfest;

         //return this.userResponses.filter(function(val) { return val }).length;
      }
   }
};
   
</script>

<style>
$trans_duration: 0.3s;


@import url("https://fonts.googleapis.com/css?family=Montserrat:400,400i,700");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

body {
    font-family: "Montserrat", sans-serif;
    font-size: 14px;
    height: 100vh;
    background: linear-gradient(90deg,  rgba(252, 176, 69, 1) 100%, rgba(255, 118, 6, 1) 58%);
    /* mocking native UI */
    cursor: default !important; /* remove text selection cursor */
    user-select: none; /* remove text selection */
    user-drag: none; /* disbale element dragging */
    display: flex;
    align-items: center;
    justify-content: center;
    }

.button {
   transition: $trans_duration;
}

.subtitle {
   font-family: Montserrat, sans-serif;
   font-weight: normal;
}
.animated {
   transition-duration: $trans_duration/2;
}

.container{
	margin: 0 0.5rem;
    
}

/* main container for box */

.questionBox {
	
	max-width: 30rem;
	width: 30rem;
	min-height: 30rem;
	background: linear-gradient(90deg,  rgba(252, 176, 69, 1) 100%, rgba(255, 118, 6, 1) 58%);
    position: relative;
    display: flex;
	border-radius: 0.5rem;
	overflow: hidden;
    box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    font-family: Montserrat, sans-serif;

}	
    /* this header is for the above question box */
	header{
		background:rgba(0,0,0,0.025);
		padding: 1.5rem;
		text-align: center;
		border-bottom: 1px solid rgba(0,0,0,0.1);
    }
		
	
	/* .progressContainer {
       width: 60%;
	    margin: 0 auto; */
    /* } */
			
				
			
.titleContainer {
    text-align: center;
    margin: 0 auto;
    padding: 1.5rem;

      }

.quizForm {
    display: block;
    white-space: normal;

    height: 100%;
    width: 100%;
   }

.quizFormContainer {
    height: 100%;
    margin: 15px 18px;
  }

.field-label {
    text-align: left;
    margin-bottom: 0.5rem;
         }
      
.quizCompleted {
    width: 100%;
    padding: 1rem;
	text-align:center;
    
   }
		 
.icon{
    color: #FF5252;
    font-size: 5rem;
    }
			 
.is-active{
	color: #00E676;
		}

.questionContainer {
    white-space: normal;
    height: 100%;
    width: 100%;

   }

.optionContainer {
    margin-top: 12px;
    flex-grow: 1;
  }
.option {
    border-radius: 290486px;
    padding: 9px 18px;
    margin: 0 18px;
    margin-bottom: 12px;
    transition: $trans_duration;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.05);
    color: rgba(0,0,0,0.85);
    border: transparent 1px solid;
    font-family: "Montserrat", sans-serif;
    }
.option:hover {
    background-color:#00E676
    }

.option:active {
    background-color:#00E676
}
.option::selection {
    background-color: #00E676;
    }

    
      

.questionFooter {
    background:rgba(0,0,0,0.025);
    border-top: 1px solid rgba(0,0,0,0.1);
    width: 100%;
    align-self: flex-end;
    }

/* Pagination = navigation buttons (back/skip/next) */
.pagination {
    padding: 10px 15px;
    margin: 15px 25px;
         }

.pagination{
	display: flex;
	justify-content: space-between;
}

.pagination:hover {
    cursor: pointer;
    
}
.button{
	padding: 0.5rem 1rem;
	border: 1px solid rgba(0,0,0,0.25);
	border-radius: 5rem;
	margin: 0 0.25rem;
	transition:0.3s;
}
		
.button:hover{
    cursor: pointer;
}



</style>
