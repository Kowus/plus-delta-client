<template>
  <div class="card note" :class="`border-${note.class === 'plus'?'warning':'danger'}`">
    <div class="card-body">
      <h5 class="card-title">{{note.title}}</h5>
      <img src="/img/tack.png" class="tack" />
      <p class="card-text" contenteditable @blur="sBlur({id:note._id})">{{note.message}}</p>
      <div class="preloader" v-if="note.blurred">
        <div class="spinner">
          <i class="fas fa-spinner"></i>
        </div>
      </div>
      <p class="text-right">
        <small>-- {{revDate(note.date)}}</small>
      </p>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "StickyNote",
  props: {
    note: {}
  },

  computed: {
    ...mapGetters(["getBlurred"])
  },
  methods: {
    revDate(dateString) {
      return moment(dateString).fromNow();
    },
    ...mapActions(["setBlurred"]),
    sBlur(id) {
      this.setBlurred(id);
      this.note.blurred = true;
      var scope = this;
      setTimeout(function() {
        scope.note.blurred = false;
      }, 5000);
    }
  }
};
</script>

<style lang="scss" scoped>
.note {
  margin: 5px;
  text-align: left;
  max-width: 13rem;
  transform: rotate(-5deg);
  box-shadow: -5px 1px 5px rgba(7, 7, 7, 0.4);
  .tack {
    width: 25px;
    height: 25px;
    position: absolute;
    top: -6px;
    right: -2px;
  }
  .card-text {
    // color: bla;
  }
}

@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.preloader {
  height: 100%;
  min-width: 100%;
  background-color: rgba(0, 0, 0, 0.35);
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
}
.spinner {
  color: white;
  font-size: 2em;
  font-weight: 900%;
  position: absolute;
  top: 50%;
  left: 50%;
  height: 30%;
  width: 50%;
  margin: -15% 0 0 -25%;
}
.fa-spinner {
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-name: spinner;
  animation-duration: 1s;
}
</style>