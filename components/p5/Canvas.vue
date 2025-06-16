<script setup lang="ts">
import type p5 from "p5";
const container = ref();

const useHyperSpace = (containerRef: Ref<HTMLDivElement>) => {
  console.log(containerRef);
  const hyperSpace = (p: p5) => {
    const numStars = 500;
    let stars: Star[] = [];

    function setup() {
      console.log();
      const canvas = p.createCanvas(
        containerRef.value.clientWidth,
        containerRef.value.clientHeight
      );
      if (containerRef.value) {
        canvas.parent(containerRef.value.id);
      }
      p.stroke(255);
      p.strokeWeight(2);

      for (let i = 0; i < numStars; i++) {
        stars.push(new Star(p.random(p.width), p.random(p.height)));
      }
    }

    function draw() {
      p.background(0, 50);

      const acc = p.map(2, 0, 100, 0.005, 0.2);

      stars = stars.filter((star) => {
        star.draw();
        star.update(acc);
        return star.isActive();
      });

      while (stars.length < numStars) {
        stars.push(new Star(p.random(p.width), p.random(p.height)));
      }
    }

    class Star {
      pos: p5.Vector;
      prevPos: p5.Vector;
      vel: p5.Vector;
      ang: number;
      constructor(x: number, y: number) {
        this.pos = p.createVector(x, y);
        this.prevPos = p.createVector(x, y);

        this.vel = p.createVector(0, 0);

        this.ang = p.atan2(y - p.height / 2, x - p.width / 2);
      }

      isActive() {
        return onScreen(this.prevPos.x, this.prevPos.y);
      }

      update(acc: number) {
        this.vel.x += p.cos(this.ang) * acc;
        this.vel.y += p.sin(this.ang) * acc;

        this.prevPos.x = this.pos.x;
        this.prevPos.y = this.pos.y;

        this.pos.x += this.vel.x;
        this.pos.y += this.vel.y;
      }

      draw() {
        const alpha = p.map(this.vel.mag(), 0, 3, 0, 255);
        p.stroke(255, alpha);
        p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
      }
    }

    function onScreen(x: number, y: number) {
      return x >= 0 && x <= p.width && y >= 0 && y <= p.height;
    }
    p.setup = setup;
    p.draw = draw;
  };
  return hyperSpace;
};

onMounted(async () => {
  if (container.value) {
    const sketch = useHyperSpace(container);
    const p5 = await import("p5");
    const renderer = new p5.default(sketch);

    return () => renderer.remove();
  }
});
</script>
<template>
  <div id="hi" ref="container">
    <slot />
  </div>
</template>
