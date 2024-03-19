Boid.neighbours = []
for(let j = 10; j <= 690; j+= 100){
    for(let i = 10; i <= 1200; i+= 100){
        if(j < 80 || j > 230){
            let boid =  new Boid(i+500,j,400,1)
        }
        else{
            console.log("lead");
            let boid = new Boid(i,j,400);
        }
    }

}