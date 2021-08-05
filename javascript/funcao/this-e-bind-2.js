function Pessoa() {
    this.idade = 0;

    const self = this;
    setInterval(function () {
        self.idade++;
        console.log(self.idade/*this.idade*/);
    }/*.bind(this)*/, 1000);
}

new Pessoa