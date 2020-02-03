export class Mesa {
    private color = Math.random() > 0.5 ? 'green' : 'red';

    constructor(private ctx: CanvasRenderingContext2D) {}

    draw(x: number, y: number) {
      this.ctx.fillStyle = this.color;
      this.ctx.beginPath();
      this.ctx.arc(x, y, 45, 0, Math.PI * 2, true);
      this.ctx.closePath();
      this.ctx.fill();
    }
  }
