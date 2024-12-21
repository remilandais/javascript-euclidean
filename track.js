class Track {
    constructor(center, radius, hue){
        this.center = center;
        this.radius = radius;
        this.hue = hue;
        this.period = Math.PI;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, Math.PI, Math.PI*2);
        ctx.strokeStyle = `hsl(${this.hue}, 100%, 50%)`;
        ctx.stroke();
    }

    getPosition(offset) {
        return  {
            x: this.center.x + this.radius * Math.cos(offset),
            y: this.center.y - this.radius * Math.sin(offset),
            progress: (offset % this.period) / this.period  
        }
    }
}