import p5 from 'p5'

const p5Instant = new p5(s => {
  s.setup = () => {
    s.createCanvas(640, 480)
    s.print('Hello World')
  }

  s.draw = () => {
    s.background(200)
    s.ellipse(s.mouseX, s.mouseY, 80, 80)
  }
})
