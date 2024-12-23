class Ball {
    constructor(track, radius, speed, soundFrequency, hue){
        this.track = track;
        this.radius = radius;
        this.speed = speed;
        this.soundFrequency = soundFrequency;
        this.offset = 0;
        this.direction = 1;
        this.hue = hue;
        this.progress = 0;
        this.center = this.track.getPosition(this.offset);
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.radius, 0, Math.PI *2);
        ctx.lineWidth = 2;
        ctx.strokeStyle = "white"
        const lightness = 100 - (50 * this.progress);
        
        ctx.fillStyle = `hsl(${this.hue}, 100%, ${lightness}%)`;
        //  ctx.fillStyle = `hsl(${this.hue}, 100%, 100%)`;
        console.log(lightness)
        ctx.fill();
        ctx.stroke();

    }

    move (){
        this.offset += this.speed * this.direction;
        const res = this.track.getPosition(this.offset);
        this.center = {x:res.x, y:res.y};
        this.progress = res.progress;
        console.log("this.progress", this.progress)
        if(this.center.y > this.track.center.y ){
            this.direction *= -1;
            playSound(this.soundFrequency);
        }
    }

}