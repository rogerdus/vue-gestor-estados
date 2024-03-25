<template>
  <div v-if="questionSelected">
    <div class="card">
      <div class="card-content">
        <p class="title">
          {{ questionSelected.question }}
        </p>
        <p class="subtitle">
          Pregunta: {{ indexSelected + 1 }} de {{ listQuestions.length }}
        </p>
      </div>
    </div>

    <div class="card">
      <!-- aqui van las alternativas -->
      <div class="card-content">
        <aside class="menu">
          <p class="menu-label">
            Selecciona una respuesta:
          </p>
          <ul class="menu-list">
            <li v-for="answer in questionSelected.respuestas" :key="answer.id">
              <label class="radio">
                <input
                  type="radio"
                  name="answer"
                  @change="getValueAlternative(answer)"
                />
                {{ answer.tag }} {{ answer.answer }}
              </label>
            </li>
          </ul>
        </aside>
      </div>
    </div>

    <div class="box">
      <button class="button is-success" @click="nextQuestion()">
        Siguiente Pregunta
      </button>
    </div>
  </div>
</template>

<script>
// api
import { apiListQuestions } from "@/api/Examen.js";
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters({
      listaRespuestas: "listaRespuestas",
    }),
  },
  data() {
    return {
      listQuestions: [],
      indexSelected: -1,
      questionSelected: null,
      answerdSelected: null,
    };
  },
  methods: {
    ...mapActions({
      agregarRespuesta: "agregarRespuesta",
    }),
    loadQuestions: function () {
      apiListQuestions().then((response) => {
        this.listQuestions = this.listQuestions.concat(response.data.results);
        if (this.listQuestions.length > 0) {
          this.indexSelected = 0;
          this.questionSelected = this.listQuestions[this.indexSelected];
        }
      });
    },
    nextQuestion: function () {
      this.agregarRespuestaSeleccionada()
      this.indexSelected = this.indexSelected + 1
      this.questionSelected = this.listQuestions[this.indexSelected]
    },
    agregarRespuestaSeleccionada: function () {
      let respuestaSeleccionada = {
        alernativa: this.answerdSelected.tag,
        puntos: this.answerdSelected.is_true ? this.questionSelected.points : 0,
      };
      //console.log("respuesta Seleccionada"+ this.answerdSelected);
      this.agregarRespuesta(respuestaSeleccionada);

      if(this.indexSelected == ( this.listQuestions.length -1 )){
        this.$router.push({'name': 'resultado'})
      }

    },
    getValueAlternative: function (answer) {
      //console.log("seleccionando respuesta "+answer.tag);
      this.answerdSelected = answer
    },
  },
  beforeMount() {
    this.loadQuestions();
  },
};
</script>

<style lang="scss" scoped></style>
