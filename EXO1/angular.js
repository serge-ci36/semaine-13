angular.module('monapp',[]).controller('appctrl',['$scope',function($scope){
	
	/* initialisation des variables */
	$scope.I = 0;
	$scope.brain = 0;
	$scope.points = 0;
	$scope.pourcents = 0 ;
	$scope.reponse = "" ;
	$scope.carte = "block";
	$scope.full = "block";
	$scope.score = "none";
	
	/* fonction principale gestion et verification des choix */
	$scope.valider = function() {
		
		/* verification avec reponses */
		if ($scope.reponse == $scope.propositions[$scope.I].solution)
		{ $scope.points += 1; }
		
		/* oblige le joueur a repondre */
		if ($scope.reponse != "") {$scope.I += 1;}
		
		/* affiche et calcul les choix */
		if ($scope.I >= 20)
		{
		$scope.formulaire ="";
		$scope.carte = "none";
		$scope.score = "block";
		$scope.pourcents = $scope.points * 5 ;
		$scope.brain = $scope.pourcents ;
		}	
		else {
		$scope.formulaire = $scope.propositions[$scope.I];
		}
		
		/* remise a zero du bouton radio a chaque reponse */
		$scope.reponse = "";

		if ($scope.I == 0) { $scope.color = "red" ; }  if ($scope.I == 1) { $scope.color = "blue" ; } if ($scope.I == 2) { $scope.color = "green" ; }
		if ($scope.I == 3) { $scope.color = "purple" ; } if ($scope.I == 4) { $scope.color = "brown" ; } if ($scope.I == 5) { $scope.color = "Olive" ; }
		if ($scope.I == 6) { $scope.color = "pink" ; } if ($scope.I == 7) { $scope.color = "orange" ; } if ($scope.I == 8) { $scope.color = "Lime" ; }
		if ($scope.I == 9) { $scope.color = "Teal" ; } if ($scope.I ==10) { $scope.color = "purple" ; } if ($scope.I ==11) { $scope.color = "blue" ; }
		if ($scope.I ==12) { $scope.color = "green" ; } if ($scope.I ==13) { $scope.color = "purple" ; } if ($scope.I ==14) { $scope.color = "brown" ; }
		if ($scope.I ==15) { $scope.color = "Olive" ; } if ($scope.I ==16) { $scope.color = "pink" ; } if ($scope.I ==17) { $scope.color = "orange" ; }
		if ($scope.I ==18) { $scope.color = "Lime" ; } if ($scope.I ==19) { $scope.color = "Teal" ; } if ($scope.I ==20) { $scope.color = "purple" ; }
	}
	
	/* fonction rejouer */
	$scope.reload = function(){ location.reload();}  
	
	/* le coeur du quizz les questions et reponses */
	$scope.propositions = [
		{num:"01",
		 propose:"Qui ne faisait pas partie du groupe mythique des Beatles?",
		 choixA:"Paul McCartney",  choixB:"John Lennon", choixC:"Eric clapton", choixD:"Ringo Star", 
		 solution:"choixC"},
		{num:"02",
		 propose:"Qu'elle pièce ne fait pas partie d'un échiquier ?",
		 choixA:"Le pion", choixB:"La dame", choixC:"Le roi", choixD:"La tour",
		 solution:"choixB"},
		{num:"03",
		 propose:"Qui ne pilote pas dans le jeu Mario kart ?",
		 choixA:"Bowser", choixB:"Mario", choixC:"Luigi", choixD:"Sonic",
		 solution:"choixD"},
		{num:"04",
		 propose:"Quelle gare ne fait pas partie du jeu Monopoly ?",
		 choixA:"Gare du Nord", choixB:"Gare de Lyon", choixC:"Gare d'Austerlitz", choixD:"Gare de l'Est",
		 solution:"choixC"},
		{num:"05",
		 propose:"Qui ne fait pas partie du groupe Rolling Stones ?",
		 choixA:"Mick Jagger", choixB:"Bruce springsteen", choixC:"Charlie Watts", choixD:"Ron Wood",
		 solution:"choixB"},
		{num:"06",
		 propose:"Qui n'est pas un héros des Mystérieuses Citées d'or ?",
		 choixA:"Zia", choixB:"Sancho", choixC:"Tao", choixD:"Mito",
		 solution:"choixD"},
		{num:"07",
		 propose:"Qui n'est pas un compagnon de Scooby-Doo ?",
		 choixA:"Sammy", choixB:"Véra", choixC:"Polux", choixD:"Fred",
		 solution:"choixC"},
		{num:"08",
		 propose:"Qui n'a jamais combattu Goldorak ?",
		 choixA:"Golgoth 1", choixB:"Golgoth 6", choixC:"Anterak", choixD:"Anorak",
		 solution:"choixD"},
		{num:"09",
		 propose:"Qui n'est pas un des compères de la série Friends ?",
		 choixA:"Will", choixB:"Joey", choixC:"Ross", choixD:"Chandler", solution:"choixA"},
		{num:"10",
		 propose:"Qui ne faisait pas partie du groupes des Nuls ?",
		 choixA:"Alain Chabat", choixB:"Bruno Salomone", choixC:"Chantal Lauby", choixD:"Bruno Carette",
		 solution:"choixB"},
		{num:"11",
		 propose:"Lequel de ces nains ne connait pas Blanche neige ?",
		 choixA:"Atchoum", choixB:"Simplet", choixC:"Grognon", choixD:"Joyeux",
		 solution:"choixC"},
		{num:"12",
		 propose:"Lequel de ces acteurs n'a jamais interprété le role de James Bond ?",
		 choixA:"George Lazenby", choixB:"Sean Penn", choixC:"Daniel Craig", choixD:"Pierce Brosnam",
		 solution:"choixB"},
		{num:"13",
		 propose:"Lequel ne fait pas partie des Rois Mages ?",
		 choixA:"Melchior", choixB:"Balthazar", choixC:"Gaspard", choixD:"Arthur",
		 solution:"choixD"},
		{num:"14",
		 propose:"Lequel n'est pas un frère Dalton ?",
		 choixA:"Jack", choixB:"Joe", choixC:"Billy", choixD:"Averell",
		 solution:"choixC"},
		{num:"15",
		 propose:"Lequel de ces péchés n'est pas capital ?",
		 choixA:"La gourmandise", choixB:"Le mépris", choixC:"La colère", choixD:"La paresse",
		 solution:"choixB"},
		{num:"16",
		 propose:"Lequel de ces animaux ne figure pas dans les films Harry Potter ?",
		 choixA:"Hedwige", choixB:"Croutard", choixC:"Pattenrond", choixD:"Zeus et Apollon",
		 solution:"choixD"},
		{num:"17",
		 propose:"Qui n'est pas un des célèbres mousquetaires ?",
		 choixA:"D'Artagnan", choixB:"Aramis", choixC:"Porto", choixD:"Athos",
		 solution:"choixC"},
		{num:"18",
		 propose:"Lequel n'est pas un signe astrologique chinois ?",
		 choixA:"Le Boeuf", choixB:"Le Cochon", choixC:"La Chèvre", choixD:"Le Mouton",
		 solution:"choixD"},
		{num:"19",
		 propose:"Laquelle n'est pas une célèbre plage du Débarquement du 6 juin 1944 ?",
		 choixA:"Ohio", choixB:"Utah", choixC:"Sword", choixD:"Juno",
		 solution:"choixA"},
		{num:"20",
		 propose:"Lequel n'est pas un dieu résidant sur le mont Olympe ?",
		 choixA:"Arès", choixB:"Homère", choixC:"Hermès", choixD:"Apollon",
		 solution:"choixB" }
		];

		/** affiche le question dans la page **/	
		$scope.formulaire = $scope.propositions[$scope.I]; 	
}]);