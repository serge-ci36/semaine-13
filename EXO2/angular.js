app = angular.module('app', []);

app.controller('appCtrl', ['$scope', '$http', function ($scope, $http) {
	
	$scope.solde = 20000.00 ;
	$scope.newsolde = 0 ;
	$scope.number = 0 ;
	$scope.provisoire = "" ;
	$scope.dateR = "" ;
	$scope.dateD = "" ;
	Reff= 0 ;
	Deff= 0 ;
	
	$scope.effrecettes = [] ;
	$scope.effdepenses = [] ;
	
	/* ajout recette **************************************************************************/
    $scope.recettes = [
        { dateR:"05/10/15", libelleR:"Vente brevets", valeurR: 50000.30 },
        { dateR:"12/10/15", libelleR:"Prestations de services", valeurR: 1000.00 },
        { dateR:"04/11/15", libelleR:"Vente immobilières", valeurR: 100000.00 },
        { dateR:"05/10/15", libelleR:"Vente brevets", valeurR: 50000.00 },
        { dateR:"12/10/15", libelleR:"Prestations de services", valeurR: 1000.00 },
        { dateR:"04/11/15", libelleR:"Vente immobilières", valeurR: 100000.600 }, 
        { dateR:"15/01/16", libelleR:"Vente licence", valeurR: 2400.00},  
        { dateR:"16/01/16", libelleR:"Vente logiciel", valeurR: 1000.50}
    ]
    
    $scope.addRecette = function() {
		
		/* empeche une saisie nulle */
        if ($scope.dateR != "" && $scope.libelleR != "" && $scope.valeurR != "") {
			$scope.valeurR = $scope.valeurR * 1 ;
			$scope.recettes.push({ dateR: String($scope.dateR),libelleR: String($scope.libelleR),valeurR: $scope.valeurR }) } ;
			
		/* remet le champ a zero */
		$scope.dateR = "" ;$scope.libelleR = "" ;$scope.valeurR = "" ;
    }
	
    /* suppression d une recette **********************/
    $scope.rmRecette = function(i) {
		$scope.effrecettes[Reff] = $scope.recettes[i] ;
		Reff++ ;
        $scope.recettes.splice(i, 1);
		if ( Reff == 1 ) {$scope.siReff = Reff + " Opération supprimée" } else { $scope.siReff = Reff + " Opérations supprimées"} ;
    }
	
    /* rajout d une recette supprimée **********************/
    $scope.rlRecette = function(i) {
		$scope.dateR = $scope.effrecettes[i].dateR ;
		$scope.libelleR = $scope.effrecettes[i].libelleR ;
		$scope.valeurR = $scope.effrecettes[i].valeurR ;
        $scope.recettes.push({ dateR: String($scope.dateR),libelleR: String($scope.libelleR),valeurR: $scope.valeurR }) ; 
		$scope.dateR = "" ;$scope.libelleR = "" ;$scope.valeurR = "" ;
		$scope.effrecettes.splice(i, 1)
		Reff-- ;
		if ( Reff > 1 ) {$scope.siReff = Reff + " Opérations supprimées" } else if ( Reff == 1 ) {$scope.siReff = Reff + " Opération supprimée" } else { $scope.siReff = "  "} ;

    }

	/* ajout depense ***************************************************************************/
	$scope.depenses = [
        { dateD:"05/10/15", libelleD:"Achat brevets", valeurD: 5000.00 },
        { dateD:"12/10/15", libelleD:"Prestations de services", valeurD: 20000.00 },
        { dateD:"04/11/15", libelleD:"Achat immobilières", valeurD: 10000.20 },
        { dateD:"05/11/15", libelleD:"Achat fournitures", valeurD: 1000.00 },
        { dateD:"06/11/15", libelleD:"Achat materiels", valeurD: 10000.00 }, 
        { dateD:"10/11/15", libelleD:"Achat serveurs", valeurD: 10000.500 }, 
        { dateD:"15/01/16", libelleD:"Achat licence", valeurD: 1000.00} 
    ]

    $scope.adddepense = function() {
		/* empeche une saisie nulle */
        if ($scope.dateD != "" && $scope.libelleD != "" && $scope.valeurD != "") {
			$scope.valeurD = $scope.valeurD * 1 ;
			$scope.depenses.push({ dateD: String($scope.dateD),libelleD: String($scope.libelleD),valeurD: $scope.valeurD, }) } 
			
		/* remet le champ a zero */
		$scope.dateD = "" ;$scope.libelleD = "" ;$scope.valeurD = "" ;
    }

    /* suppression d une depense **********************/
    $scope.rmDepense = function(i) {
		$scope.effdepenses[Deff] = $scope.depenses[i] ;
		Deff++ ;
        $scope.depenses.splice(i, 1);
		if ( Deff == 1 ) {$scope.siDeff = Deff + " Opération supprimée" } else { $scope.siDeff = Deff + " Opérations supprimées"};
    }

    /* rajout d une depense supprimée **********************/
    $scope.rlDepense = function(i) {

		$scope.dateD = $scope.effdepenses[i].dateD ;
		$scope.libelleD = $scope.effdepenses[i].libelleD ;
		$scope.valeurD = $scope.effdepenses[i].valeurD ;
        $scope.depenses.push({ dateD: String($scope.dateD),libelleD: String($scope.libelleD),valeurD: $scope.valeurD }) ; 
		$scope.dateD = "" ;$scope.libelleD = "" ;$scope.valeurD = "" ;
		$scope.effdepenses.splice(i, 1)
		Deff-- ;
		if ( Deff > 1 ) {$scope.siDeff = Deff + " Opérations supprimées" } else if ( Deff == 1 ) {$scope.siDeff = Deff + " Opération supprimée" } else { $scope.siDeff = "  "};
    }
	
	/* calcul des soldes ***************************************************/
    $scope.doTotal = function() {
        totalR = 0;
        totalD = 0;
		newsolde = 0 ;
		
        for (i = 0 ; i < $scope.recettes.length ; i++) {
            totalR += $scope.recettes[i].valeurR;
        }
		
        for (i = 0 ; i < $scope.depenses.length ; i++) {
            totalD += $scope.depenses[i].valeurD;
        }
        $scope.totalR = totalR ;
        $scope.totalD = totalD ;
		
		solde = $scope.solde ;
		
		newsolde = solde + totalR - totalD;
		
		$scope.newsolde = newsolde ;
    }
    
	/* Calcul des totaux *************************************/
    $scope.$watch("recettes", $scope.doTotal, true) ;   
    $scope.$watch("depenses", $scope.doTotal, true) ;   

}]);




