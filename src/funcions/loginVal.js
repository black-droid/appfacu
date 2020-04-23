    entrar() {
      if (this.state.nome == '' || this.state.idade == '') {
        alert('Por favor, informe uma idade ou nome valido')
      } else if (this.state.valorSlider == 0) {
        alert('Por favor, informe um valor limite')
      }
      else {
      alert(
        'Nome: '+this.state.nome + '\n'+
        'Idade: '+this.state.idade + '\n'+
        'Sexo: '+ this.state.sexos[this.state.sexoSelecionado].sexo + '\n'+
        'Valor limite: '+this.state.valorSlider.toFixed(2) + '\n' +
        'Estudante: '+ ((this.state.status) ? 'Sim' : 'Não')
      )}
    }
