let persona={
	nombre: ['Bob', 'Smith'],
	edad: 32,
	genero: 'Masculino',
	intereses: ['música', 'esquí'],
	bio: function() {
		alert(this.nombre[0] + ' ' + this.nombre[1] + 'tiene ', + this.edad + ' años. Le gusta ' + this.intereses[0] + ' y ' + this.intereses[1] + '.');
	},
	saludo: function() {
		alert('Hola soy ' + this.nombre[0] + '. ');
	},
};

console.log(persona.nombre[1]);
