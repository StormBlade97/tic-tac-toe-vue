<template>
  <div class="root">
    <div class="hero is-fullheight">
      <div class="hero-body">
        <div class="container">
          <p class="title has-text-centered">Tic • Tac • Toe</p>
          <div class="level main-section">
            <div class="level-item"></div>
            <div class="level-item">
              <div class="tic-tac-toe box">
                <div v-for="(row, i) of array" :key="i">
                  <div
                    @click.once="mark(j, i)"
                    :class="{
                      'has-background-primary has-text-white': cell,
                      'has-background-light': !cell
                    }"
                    class="cell"
                    v-for="(cell, j) of row"
                    :key="j"
                  >
                    <box-icon
                      class="mark"
                      v-show="cell"
                      name="down-arrow"
                    ></box-icon>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
function genArr(width, height) {
  let accumulate = [];
  for (let i = 0; i < height; i++) {
    let arr = [];
    for (let j = 0; j < width; j++) {
      arr.push(null);
    }
    accumulate.push(arr);
  }
  return accumulate;
}
export default {
  name: "arena",
  data: function() {
    return {
      width: 3,
      height: 3,
      array: genArr(3, 3)
    };
  },
  methods: {
    mark(posX, posY) {
      const spliceY = this.array[posY].splice(posX, 1, "x");
      this.array.splice(posY, 1, spliceY);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.cell {
  position: relative;
  display: inline-block;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin: 4px;
  width: 5rem;
  height: 5rem;
  border: 2px rgba(0, 0, 0, 0.15) solid;
}
.mark {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
