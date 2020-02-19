angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.inicio', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inicio.html',
        controller: 'inicioCtrl'
      }
    }
  })

  .state('menu.clasificaciN', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/clasificaciN.html',
        controller: 'clasificaciNCtrl'
      }
    }
  })

  .state('menu.acercaDe', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acercaDe.html',
        controller: 'acercaDeCtrl'
      }
    }
  })

  .state('menu', {
    url: '/blankpage',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.gelisoles', {
    url: '/gelisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelisoles.html',
        controller: 'gelisolesCtrl'
      }
    }
  })

  .state('menu.histosoles', {
    url: '/histosoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/histosoles.html',
        controller: 'histosolesCtrl'
      }
    }
  })

  .state('menu.spodosoles', {
    url: '/spodosoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spodosoles.html',
        controller: 'spodosolesCtrl'
      }
    }
  })

  .state('menu.andisoles', {
    url: '/andisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/andisoles.html',
        controller: 'andisolesCtrl'
      }
    }
  })

  .state('menu.oxisoles', {
    url: '/oxisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/oxisoles.html',
        controller: 'oxisolesCtrl'
      }
    }
  })

  .state('menu.vertisoles', {
    url: '/vertisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vertisoles.html',
        controller: 'vertisolesCtrl'
      }
    }
  })

  .state('menu.aridisoles', {
    url: '/aridisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aridisoles.html',
        controller: 'aridisolesCtrl'
      }
    }
  })

  .state('menu.ultisoles', {
    url: '/ultisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ultisoles.html',
        controller: 'ultisolesCtrl'
      }
    }
  })

  .state('menu.molisoles', {
    url: '/molisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/molisoles.html',
        controller: 'molisolesCtrl'
      }
    }
  })

  .state('menu.alfisoles', {
    url: '/alfisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alfisoles.html',
        controller: 'alfisolesCtrl'
      }
    }
  })

  .state('menu.inceptisoles', {
    url: '/inceptisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/inceptisoles.html',
        controller: 'inceptisolesCtrl'
      }
    }
  })

  .state('menu.entisoles', {
    url: '/entisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/entisoles.html',
        controller: 'entisolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposHisteles', {
    url: '/GG_histeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposHisteles.html',
        controller: 'grandesGruposHistelesCtrl'
      }
    }
  })

  .state('menu.grandesGruposTurbeles', {
    url: '/GG_Turbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposTurbeles.html',
        controller: 'grandesGruposTurbelesCtrl'
      }
    }
  })

  .state('menu.grandesGruposOrteles', {
    url: '/GG_orteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposOrteles.html',
        controller: 'grandesGruposOrtelesCtrl'
      }
    }
  })

  .state('menu.grandesGruposFolistes', {
    url: '/GG_Folistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposFolistes.html',
        controller: 'grandesGruposFolistesCtrl'
      }
    }
  })

  .state('menu.grandesGruposWassites', {
    url: '/GG_Wassites',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposWassites.html',
        controller: 'grandesGruposWassitesCtrl'
      }
    }
  })

  .state('menu.grandesGruposFibristes', {
    url: '/GG_Fibristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposFibristes.html',
        controller: 'grandesGruposFibristesCtrl'
      }
    }
  })

  .state('menu.grandesGruposSapristes', {
    url: '/GG_Sapristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposSapristes.html',
        controller: 'grandesGruposSapristesCtrl'
      }
    }
  })

  .state('menu.grandesGruposHemistes', {
    url: '/GG_Hemistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposHemistes.html',
        controller: 'grandesGruposHemistesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcuodes', {
    url: '/GG_Acuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcuodes.html',
        controller: 'grandesGruposAcuodesCtrl'
      }
    }
  })

  .state('menu.grandesGruposGelodes', {
    url: '/GG_Gelodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposGelodes.html',
        controller: 'grandesGruposGelodesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCriodes', {
    url: '/GG_Criodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCriodes.html',
        controller: 'grandesGruposCriodesCtrl'
      }
    }
  })

  .state('menu.grandesGruposHumodes', {
    url: '/GG_Humodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposHumodes.html',
        controller: 'grandesGruposHumodesCtrl'
      }
    }
  })

  .state('menu.grandesGruposOrtodes', {
    url: '/GG_Ortodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposOrtodes.html',
        controller: 'grandesGruposOrtodesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcuandes', {
    url: '/GG_Acuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcuandes.html',
        controller: 'grandesGruposAcuandesCtrl'
      }
    }
  })

  .state('menu.grandesGruposGelandes', {
    url: '/GG_Gelandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposGelandes.html',
        controller: 'grandesGruposGelandesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCriandes', {
    url: '/GG_Criandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCriandes.html',
        controller: 'grandesGruposCriandesCtrl'
      }
    }
  })

  .state('menu.grandesGruposTorrandes', {
    url: '/GG_Torrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposTorrandes.html',
        controller: 'grandesGruposTorrandesCtrl'
      }
    }
  })

  .state('menu.grandesGruposXerandes', {
    url: '/GG_Xerandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposXerandes.html',
        controller: 'grandesGruposXerandesCtrl'
      }
    }
  })

  .state('menu.grandesGruposVitrandes', {
    url: '/GG_Vitrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposVitrandes.html',
        controller: 'grandesGruposVitrandesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUstandes', {
    url: '/GG_Ustandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUstandes.html',
        controller: 'grandesGruposUstandesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUdandes', {
    url: '/GG_Udandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUdandes.html',
        controller: 'grandesGruposUdandesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcuoxes', {
    url: '/GG_Acuoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcuoxes.html',
        controller: 'grandesGruposAcuoxesCtrl'
      }
    }
  })

  .state('menu.grandesGruposTorroxes', {
    url: '/GG_Torroxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposTorroxes.html',
        controller: 'grandesGruposTorroxesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUstoxes', {
    url: '/GG_Ustoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUstoxes.html',
        controller: 'grandesGruposUstoxesCtrl'
      }
    }
  })

  .state('menu.grandesGruposPeroxes', {
    url: '/GG_Peroxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposPeroxes.html',
        controller: 'grandesGruposPeroxesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUdoxes', {
    url: '/GG_Udoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUdoxes.html',
        controller: 'grandesGruposUdoxesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcuertes', {
    url: '/GG_Acuertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcuertes.html',
        controller: 'grandesGruposAcuertesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCriertes', {
    url: '/GG_Criertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCriertes.html',
        controller: 'grandesGruposCriertesCtrl'
      }
    }
  })

  .state('menu.grandesGruposXerertes', {
    url: '/GG_Xerertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposXerertes.html',
        controller: 'grandesGruposXerertesCtrl'
      }
    }
  })

  .state('menu.grandesGruposTorrertes', {
    url: '/GG_Torrertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposTorrertes.html',
        controller: 'grandesGruposTorrertesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUstertes', {
    url: '/GG_Ustertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUstertes.html',
        controller: 'grandesGruposUstertesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUdertes', {
    url: '/GG_udertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUdertes.html',
        controller: 'grandesGruposUdertesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCriDes', {
    url: '/GG_Criídes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCriDes.html',
        controller: 'grandesGruposCriDesCtrl'
      }
    }
  })

  .state('menu.grandesGruposSalides', {
    url: '/GG_Salides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposSalides.html',
        controller: 'grandesGruposSalidesCtrl'
      }
    }
  })

  .state('menu.grandesGruposDurides', {
    url: '/GG_Durides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposDurides.html',
        controller: 'grandesGruposDuridesCtrl'
      }
    }
  })

  .state('menu.grandesGruposGipsides', {
    url: '/GG_Gipsides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposGipsides.html',
        controller: 'grandesGruposGipsidesCtrl'
      }
    }
  })

  .state('menu.grandesGruposArgides', {
    url: '/GG_Argides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposArgides.html',
        controller: 'grandesGruposArgidesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCalcides', {
    url: '/GG_Calcides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCalcides.html',
        controller: 'grandesGruposCalcidesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCambides', {
    url: '/GG_Cambides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCambides.html',
        controller: 'grandesGruposCambidesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcultes', {
    url: '/GG_Acultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcultes.html',
        controller: 'grandesGruposAcultesCtrl'
      }
    }
  })

  .state('menu.grandesGruposHumultes', {
    url: '/GG_Humultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposHumultes.html',
        controller: 'grandesGruposHumultesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUdultes', {
    url: '/GG_udultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUdultes.html',
        controller: 'grandesGruposUdultesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUstultes', {
    url: '/GG_Ustultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUstultes.html',
        controller: 'grandesGruposUstultesCtrl'
      }
    }
  })

  .state('menu.grandesGruposXerultes', {
    url: '/GG_Xerultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposXerultes.html',
        controller: 'grandesGruposXerultesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAlboles', {
    url: '/GG_Alboles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAlboles.html',
        controller: 'grandesGruposAlbolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcuoles', {
    url: '/GG_Acuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcuoles.html',
        controller: 'grandesGruposAcuolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposRendoles', {
    url: '/GG_Rendoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposRendoles.html',
        controller: 'grandesGruposRendolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposGeloles', {
    url: '/GG_Geloles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposGeloles.html',
        controller: 'grandesGruposGelolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCrioles', {
    url: '/GG_Crioles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCrioles.html',
        controller: 'grandesGruposCriolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposXeroles', {
    url: '/GG_Xeroles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposXeroles.html',
        controller: 'grandesGruposXerolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUstoles', {
    url: '/GG_Ustoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUstoles.html',
        controller: 'grandesGruposUstolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUdoles', {
    url: '/GG_Udoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUdoles.html',
        controller: 'grandesGruposUdolesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcualfes', {
    url: '/GG_Acualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcualfes.html',
        controller: 'grandesGruposAcualfesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCrialfes', {
    url: '/GG_ Crialfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCrialfes.html',
        controller: 'grandesGruposCrialfesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUstalfes', {
    url: '/GG_Ustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUstalfes.html',
        controller: 'grandesGruposUstalfesCtrl'
      }
    }
  })

  .state('menu.grandesGruposXeralfes', {
    url: '/GG_Xeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposXeralfes.html',
        controller: 'grandesGruposXeralfesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUdalfes', {
    url: '/GG_Udalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUdalfes.html',
        controller: 'grandesGruposUdalfesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcueptes', {
    url: '/GG_Acueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcueptes.html',
        controller: 'grandesGruposAcueptesCtrl'
      }
    }
  })

  .state('menu.grandesGruposGeleptes', {
    url: '/GG_Geleptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposGeleptes.html',
        controller: 'grandesGruposGeleptesCtrl'
      }
    }
  })

  .state('menu.grandesGruposCrieptes', {
    url: '/GG_Crieptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposCrieptes.html',
        controller: 'grandesGruposCrieptesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUsteptes', {
    url: '/GG_Usteptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUsteptes.html',
        controller: 'grandesGruposUsteptesCtrl'
      }
    }
  })

  .state('menu.grandesGruposXereptes', {
    url: '/GG_Xereptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposXereptes.html',
        controller: 'grandesGruposXereptesCtrl'
      }
    }
  })

  .state('menu.grandesGruposUdeptes', {
    url: '/GG_Udeptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposUdeptes.html',
        controller: 'grandesGruposUdeptesCtrl'
      }
    }
  })

  .state('menu.grandesGruposWassentes', {
    url: '/GG_Wassentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposWassentes.html',
        controller: 'grandesGruposWassentesCtrl'
      }
    }
  })

  .state('menu.grandesGruposAcuentes', {
    url: '/GG_Acuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposAcuentes.html',
        controller: 'grandesGruposAcuentesCtrl'
      }
    }
  })

  .state('menu.grandesGruposPsammentes', {
    url: '/GG_Psammentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposPsammentes.html',
        controller: 'grandesGruposPsammentesCtrl'
      }
    }
  })

  .state('menu.grandesGruposFluventes', {
    url: '/GG_Fluventes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposFluventes.html',
        controller: 'grandesGruposFluventesCtrl'
      }
    }
  })

  .state('menu.grandesGruposOrtentes', {
    url: '/GG_Ortentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/grandesGruposOrtentes.html',
        controller: 'grandesGruposOrtentesCtrl'
      }
    }
  })

  .state('menu.histeles', {
    url: '/histeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/histeles.html',
        controller: 'histelesCtrl'
      }
    }
  })

  .state('menu.turbeles', {
    url: '/turbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/turbeles.html',
        controller: 'turbelesCtrl'
      }
    }
  })

  .state('menu.orteles', {
    url: '/orteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orteles.html',
        controller: 'ortelesCtrl'
      }
    }
  })

  .state('menu.folistes', {
    url: '/SO_Folistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/folistes.html',
        controller: 'folistesCtrl'
      }
    }
  })

  .state('menu.wassistes', {
    url: '/SO_Wassites',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wassistes.html',
        controller: 'wassistesCtrl'
      }
    }
  })

  .state('menu.fibristes', {
    url: '/SO_Fibristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fibristes.html',
        controller: 'fibristesCtrl'
      }
    }
  })

  .state('menu.sapristes', {
    url: '/SO_Sapristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sapristes.html',
        controller: 'sapristesCtrl'
      }
    }
  })

  .state('menu.hemistes', {
    url: '/SO_Hemistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hemistes.html',
        controller: 'hemistesCtrl'
      }
    }
  })

  .state('menu.acuodes', {
    url: '/Acuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuodes.html',
        controller: 'acuodesCtrl'
      }
    }
  })

  .state('menu.gelodes', {
    url: '/Gelodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelodes.html',
        controller: 'gelodesCtrl'
      }
    }
  })

  .state('menu.criodes', {
    url: '/Criodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criodes.html',
        controller: 'criodesCtrl'
      }
    }
  })

  .state('menu.humodes', {
    url: '/Humodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humodes.html',
        controller: 'humodesCtrl'
      }
    }
  })

  .state('menu.orthodes', {
    url: '/Orthodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orthodes.html',
        controller: 'orthodesCtrl'
      }
    }
  })

  .state('menu.acuandes', {
    url: '/Acuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuandes.html',
        controller: 'acuandesCtrl'
      }
    }
  })

  .state('menu.gelandes', {
    url: '/Gelandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelandes.html',
        controller: 'gelandesCtrl'
      }
    }
  })

  .state('menu.criandes', {
    url: '/Criandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criandes.html',
        controller: 'criandesCtrl'
      }
    }
  })

  .state('menu.torrandes', {
    url: '/Torrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torrandes.html',
        controller: 'torrandesCtrl'
      }
    }
  })

  .state('menu.xerandes', {
    url: '/Xerandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xerandes.html',
        controller: 'xerandesCtrl'
      }
    }
  })

  .state('menu.vitrandes', {
    url: '/Vitrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vitrandes.html',
        controller: 'vitrandesCtrl'
      }
    }
  })

  .state('menu.ustandes', {
    url: '/Ustandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustandes.html',
        controller: 'ustandesCtrl'
      }
    }
  })

  .state('menu.acuoxes', {
    url: '/Acuoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuoxes.html',
        controller: 'acuoxesCtrl'
      }
    }
  })

  .state('menu.torroxes', {
    url: '/Torroxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torroxes.html',
        controller: 'torroxesCtrl'
      }
    }
  })

  .state('menu.ustoxes', {
    url: '/Ustoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustoxes.html',
        controller: 'ustoxesCtrl'
      }
    }
  })

  .state('menu.peroxes', {
    url: '/Peroxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/peroxes.html',
        controller: 'peroxesCtrl'
      }
    }
  })

  .state('menu.udoxes', {
    url: '/Udoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udoxes.html',
        controller: 'udoxesCtrl'
      }
    }
  })

  .state('menu.acuertes', {
    url: '/acuertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuertes.html',
        controller: 'acuertesCtrl'
      }
    }
  })

  .state('menu.criertes', {
    url: '/criertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criertes.html',
        controller: 'criertesCtrl'
      }
    }
  })

  .state('menu.xerertes', {
    url: '/xerertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xerertes.html',
        controller: 'xerertesCtrl'
      }
    }
  })

  .state('menu.torrertes', {
    url: '/Torrertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torrertes.html',
        controller: 'torrertesCtrl'
      }
    }
  })

  .state('menu.ustertes', {
    url: '/Ustertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustertes.html',
        controller: 'ustertesCtrl'
      }
    }
  })

  .state('menu.udertes', {
    url: '/Udertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udertes.html',
        controller: 'udertesCtrl'
      }
    }
  })

  .state('menu.udandes', {
    url: '/Udandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udandes.html',
        controller: 'udandesCtrl'
      }
    }
  })

  .state('menu.criides', {
    url: '/Criides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criides.html',
        controller: 'criidesCtrl'
      }
    }
  })

  .state('menu.salides', {
    url: '/Salides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salides.html',
        controller: 'salidesCtrl'
      }
    }
  })

  .state('menu.durides', {
    url: '/Durides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durides.html',
        controller: 'duridesCtrl'
      }
    }
  })

  .state('menu.gipsides', {
    url: '/Gipsides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gipsides.html',
        controller: 'gipsidesCtrl'
      }
    }
  })

  .state('menu.argides', {
    url: '/Argides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argides.html',
        controller: 'argidesCtrl'
      }
    }
  })

  .state('menu.calcides', {
    url: '/Calcides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcides.html',
        controller: 'calcidesCtrl'
      }
    }
  })

  .state('menu.cambides', {
    url: '/Cambides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cambides.html',
        controller: 'cambidesCtrl'
      }
    }
  })

  .state('menu.acultes', {
    url: '/Acultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acultes.html',
        controller: 'acultesCtrl'
      }
    }
  })

  .state('menu.humultes', {
    url: '/Humultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humultes.html',
        controller: 'humultesCtrl'
      }
    }
  })

  .state('menu.udultes', {
    url: '/Udultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udultes.html',
        controller: 'udultesCtrl'
      }
    }
  })

  .state('menu.ustultes', {
    url: '/Ustultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustultes.html',
        controller: 'ustultesCtrl'
      }
    }
  })

  .state('menu.xerultes', {
    url: '/Xerultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xerultes.html',
        controller: 'xerultesCtrl'
      }
    }
  })

  .state('menu.alboles', {
    url: '/Alboles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alboles.html',
        controller: 'albolesCtrl'
      }
    }
  })

  .state('menu.acuoles', {
    url: '/Acuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuoles.html',
        controller: 'acuolesCtrl'
      }
    }
  })

  .state('menu.rendoles', {
    url: '/Rendoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rendoles.html',
        controller: 'rendolesCtrl'
      }
    }
  })

  .state('menu.geloles', {
    url: '/Geloles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/geloles.html',
        controller: 'gelolesCtrl'
      }
    }
  })

  .state('menu.crioles', {
    url: '/Crioles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crioles.html',
        controller: 'criolesCtrl'
      }
    }
  })

  .state('menu.xeroles', {
    url: '/Xeroles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xeroles.html',
        controller: 'xerolesCtrl'
      }
    }
  })

  .state('menu.ustoles', {
    url: '/Ustoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustoles.html',
        controller: 'ustolesCtrl'
      }
    }
  })

  .state('menu.udoles', {
    url: '/Udoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udoles.html',
        controller: 'udolesCtrl'
      }
    }
  })

  .state('menu.acualfes', {
    url: '/Acualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acualfes.html',
        controller: 'acualfesCtrl'
      }
    }
  })

  .state('menu.crialfes', {
    url: '/Crialfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crialfes.html',
        controller: 'crialfesCtrl'
      }
    }
  })

  .state('menu.ustalfes', {
    url: '/Ustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustalfes.html',
        controller: 'ustalfesCtrl'
      }
    }
  })

  .state('menu.xeralfes', {
    url: '/Xeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xeralfes.html',
        controller: 'xeralfesCtrl'
      }
    }
  })

  .state('menu.udalfes', {
    url: '/Udalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udalfes.html',
        controller: 'udalfesCtrl'
      }
    }
  })

  .state('menu.acueptes', {
    url: '/Acueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acueptes.html',
        controller: 'acueptesCtrl'
      }
    }
  })

  .state('menu.geleptes', {
    url: '/Geleptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/geleptes.html',
        controller: 'geleptesCtrl'
      }
    }
  })

  .state('menu.crieptes', {
    url: '/Crieptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crieptes.html',
        controller: 'crieptesCtrl'
      }
    }
  })

  .state('menu.usteptes', {
    url: '/Usteptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/usteptes.html',
        controller: 'usteptesCtrl'
      }
    }
  })

  .state('menu.xereptes', {
    url: '/Xereptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xereptes.html',
        controller: 'xereptesCtrl'
      }
    }
  })

  .state('menu.udeptes', {
    url: '/Udeptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udeptes.html',
        controller: 'udeptesCtrl'
      }
    }
  })

  .state('menu.wassentes', {
    url: '/Wassentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/wassentes.html',
        controller: 'wassentesCtrl'
      }
    }
  })

  .state('menu.acuentes', {
    url: '/Acuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuentes.html',
        controller: 'acuentesCtrl'
      }
    }
  })

  .state('menu.psammentes', {
    url: '/Psammentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psammentes.html',
        controller: 'psammentesCtrl'
      }
    }
  })

  .state('menu.fluventes', {
    url: '/Fluventes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fluventes.html',
        controller: 'fluventesCtrl'
      }
    }
  })

  .state('menu.ortentes', {
    url: '/Ortentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ortentes.html',
        controller: 'ortentesCtrl'
      }
    }
  })

  .state('menu.folisteles', {
    url: '/Folisteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/folisteles.html',
        controller: 'folistelesCtrl'
      }
    }
  })

  .state('menu.glacisteles', {
    url: '/Glacisteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/glacisteles.html',
        controller: 'glacistelesCtrl'
      }
    }
  })

  .state('menu.fibristeles', {
    url: '/Fibristeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fibristeles.html',
        controller: 'fibristelesCtrl'
      }
    }
  })

  .state('menu.hemisteles', {
    url: '/Hemisteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hemisteles.html',
        controller: 'hemistelesCtrl'
      }
    }
  })

  .state('menu.sapristeles', {
    url: '/Sapristeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sapristeles.html',
        controller: 'sapristelesCtrl'
      }
    }
  })

  .state('menu.histoturbeles', {
    url: '/Histoturbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/histoturbeles.html',
        controller: 'histoturbelesCtrl'
      }
    }
  })

  .state('menu.acuiturbeles', {
    url: '/Acuiturbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuiturbeles.html',
        controller: 'acuiturbelesCtrl'
      }
    }
  })

  .state('menu.anhiturbeles', {
    url: '/Anhiturbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anhiturbeles.html',
        controller: 'anhiturbelesCtrl'
      }
    }
  })

  .state('menu.moliturbeles', {
    url: '/Moliturbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/moliturbeles.html',
        controller: 'moliturbelesCtrl'
      }
    }
  })

  .state('menu.umbriturbeles', {
    url: '/Umbriturbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/umbriturbeles.html',
        controller: 'umbriturbelesCtrl'
      }
    }
  })

  .state('menu.psammoturbeles', {
    url: '/Psammoturbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psammoturbeles.html',
        controller: 'psammoturbelesCtrl'
      }
    }
  })

  .state('menu.haploturbeles', {
    url: '/Haploturbeles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haploturbeles.html',
        controller: 'haploturbelesCtrl'
      }
    }
  })

  .state('menu.historteles', {
    url: '/Historteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/historteles.html',
        controller: 'histortelesCtrl'
      }
    }
  })

  .state('menu.acuorteles', {
    url: '/Acuorteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuorteles.html',
        controller: 'acuortelesCtrl'
      }
    }
  })

  .state('menu.anhiorteles', {
    url: '/Anhiorteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anhiorteles.html',
        controller: 'anhiortelesCtrl'
      }
    }
  })

  .state('menu.molorteles', {
    url: '/Molorteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/molorteles.html',
        controller: 'molortelesCtrl'
      }
    }
  })

  .state('menu.umbrorteles', {
    url: '/Umbrorteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/umbrorteles.html',
        controller: 'umbrortelesCtrl'
      }
    }
  })

  .state('menu.argiorteles', {
    url: '/Argiorteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argiorteles.html',
        controller: 'argiortelesCtrl'
      }
    }
  })

  .state('menu.psammorteles', {
    url: '/Psammorteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psammorteles.html',
        controller: 'psammortelesCtrl'
      }
    }
  })

  .state('menu.haplorteles', {
    url: '/Haplorteles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplorteles.html',
        controller: 'haplortelesCtrl'
      }
    }
  })

  .state('menu.criofolistes', {
    url: '/Criofolistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criofolistes.html',
        controller: 'criofolistesCtrl'
      }
    }
  })

  .state('menu.torrifolistes', {
    url: '/Torrifolistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torrifolistes.html',
        controller: 'torrifolistesCtrl'
      }
    }
  })

  .state('menu.ustifolistes', {
    url: '/Ustifolistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustifolistes.html',
        controller: 'ustifolistesCtrl'
      }
    }
  })

  .state('menu.udifolistes', {
    url: '/Udifolistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udifolistes.html',
        controller: 'udifolistesCtrl'
      }
    }
  })

  .state('menu.frasiwassistes', {
    url: '/Frasiwassistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frasiwassistes.html',
        controller: 'frasiwassistesCtrl'
      }
    }
  })

  .state('menu.sulfiwassistes', {
    url: '/Sulfiwassistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfiwassistes.html',
        controller: 'sulfiwassistesCtrl'
      }
    }
  })

  .state('menu.haplowassistes', {
    url: '/Haplowassistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplowassistes.html',
        controller: 'haplowassistesCtrl'
      }
    }
  })

  .state('menu.criofibristes', {
    url: '/Criofibristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criofibristes.html',
        controller: 'criofibristesCtrl'
      }
    }
  })

  .state('menu.sphagnofibristes', {
    url: '/Sphagnofibristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sphagnofibristes.html',
        controller: 'sphagnofibristesCtrl'
      }
    }
  })

  .state('menu.haplofibristes', {
    url: '/Haplofibristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplofibristes.html',
        controller: 'haplofibristesCtrl'
      }
    }
  })

  .state('menu.sulfosapristes', {
    url: '/Sulfosapristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfosapristes.html',
        controller: 'sulfosapristesCtrl'
      }
    }
  })

  .state('menu.sulfisapristes', {
    url: '/Sulfisapristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfisapristes.html',
        controller: 'sulfisapristesCtrl'
      }
    }
  })

  .state('menu.criosapristes', {
    url: '/Criosapristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criosapristes.html',
        controller: 'criosapristesCtrl'
      }
    }
  })

  .state('menu.haplosapristes', {
    url: '/Haplosapristes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplosapristes.html',
        controller: 'haplosapristesCtrl'
      }
    }
  })

  .state('menu.sulfohemistes', {
    url: '/Sulfohemistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfohemistes.html',
        controller: 'sulfohemistesCtrl'
      }
    }
  })

  .state('menu.sulfihemistes', {
    url: '/Sulfihemistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfihemistes.html',
        controller: 'sulfihemistesCtrl'
      }
    }
  })

  .state('menu.luvihemistes', {
    url: '/Luvihemistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/luvihemistes.html',
        controller: 'luvihemistesCtrl'
      }
    }
  })

  .state('menu.criohemistes', {
    url: '/Criohemistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criohemistes.html',
        controller: 'criohemistesCtrl'
      }
    }
  })

  .state('menu.haplohemistes', {
    url: '/Haplohemistes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplohemistes.html',
        controller: 'haplohemistesCtrl'
      }
    }
  })

  .state('menu.criacuodes', {
    url: '/Criacuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criacuodes.html',
        controller: 'criacuodesCtrl'
      }
    }
  })

  .state('menu.alacuodes', {
    url: '/Alacuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alacuodes.html',
        controller: 'alacuodesCtrl'
      }
    }
  })

  .state('menu.fragiacuodes', {
    url: '/Fragiacuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragiacuodes.html',
        controller: 'fragiacuodesCtrl'
      }
    }
  })

  .state('menu.placacuodes', {
    url: '/Placacuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/placacuodes.html',
        controller: 'placacuodesCtrl'
      }
    }
  })

  .state('menu.duracuodes', {
    url: '/Duracuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duracuodes.html',
        controller: 'duracuodesCtrl'
      }
    }
  })

  .state('menu.epiacuodes', {
    url: '/Epiacuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epiacuodes.html',
        controller: 'epiacuodesCtrl'
      }
    }
  })

  .state('menu.endoacuodes', {
    url: '/Endoacuodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endoacuodes.html',
        controller: 'endoacuodesCtrl'
      }
    }
  })

  .state('menu.humigelodes', {
    url: '/Humigelodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humigelodes.html',
        controller: 'humigelodesCtrl'
      }
    }
  })

  .state('haplogelodes', {
    url: '/Haplogelodes',
    templateUrl: 'templates/haplogelodes.html',
    controller: 'haplogelodesCtrl'
  })

  .state('menu.placocriodes', {
    url: '/Placocriodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/placocriodes.html',
        controller: 'placocriodesCtrl'
      }
    }
  })

  .state('menu.duricriodes', {
    url: '/Duricriodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duricriodes.html',
        controller: 'duricriodesCtrl'
      }
    }
  })

  .state('menu.humicriodes', {
    url: '/Humicriodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humicriodes.html',
        controller: 'humicriodesCtrl'
      }
    }
  })

  .state('menu.placohumodes', {
    url: '/Placohumodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/placohumodes.html',
        controller: 'placohumodesCtrl'
      }
    }
  })

  .state('menu.durihumodes', {
    url: '/Durihumodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durihumodes.html',
        controller: 'durihumodesCtrl'
      }
    }
  })

  .state('menu.fragihumodes', {
    url: '/Fragihumodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragihumodes.html',
        controller: 'fragihumodesCtrl'
      }
    }
  })

  .state('menu.haplohumodes', {
    url: '/Haplohumodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplohumodes.html',
        controller: 'haplohumodesCtrl'
      }
    }
  })

  .state('menu.placortodes', {
    url: '/Placortodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/placortodes.html',
        controller: 'placortodesCtrl'
      }
    }
  })

  .state('menu.durortodes', {
    url: '/Durortodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durortodes.html',
        controller: 'durortodesCtrl'
      }
    }
  })

  .state('menu.fragiortodes', {
    url: '/Fragiortodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragiortodes.html',
        controller: 'fragiortodesCtrl'
      }
    }
  })

  .state('menu.alortodes', {
    url: '/Alortodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/alortodes.html',
        controller: 'alortodesCtrl'
      }
    }
  })

  .state('menu.haplortodes', {
    url: '/Haplortodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplortodes.html',
        controller: 'haplortodesCtrl'
      }
    }
  })

  .state('menu.haplocriodes', {
    url: '/Haplocriodes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocriodes.html',
        controller: 'haplocriodesCtrl'
      }
    }
  })

  .state('menu.gelacuandes', {
    url: '/Gelacuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelacuandes.html',
        controller: 'gelacuandesCtrl'
      }
    }
  })

  .state('menu.criacuandes', {
    url: '/Criacuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criacuandes.html',
        controller: 'criacuandesCtrl'
      }
    }
  })

  .state('menu.placacuandes', {
    url: '/Placacuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/placacuandes.html',
        controller: 'placacuandesCtrl'
      }
    }
  })

  .state('menu.duracuandes', {
    url: '/Duracuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duracuandes.html',
        controller: 'duracuandesCtrl'
      }
    }
  })

  .state('menu.vitracuandes', {
    url: '/Vitracuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vitracuandes.html',
        controller: 'vitracuandesCtrl'
      }
    }
  })

  .state('menu.melanacuandes', {
    url: '/Melanacuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/melanacuandes.html',
        controller: 'melanacuandesCtrl'
      }
    }
  })

  .state('menu.epiacuandes', {
    url: '/Epiacuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epiacuandes.html',
        controller: 'epiacuandesCtrl'
      }
    }
  })

  .state('menu.endoacuandes', {
    url: '/Endoacuandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endoacuandes.html',
        controller: 'endoacuandesCtrl'
      }
    }
  })

  .state('menu.vitrigelandes', {
    url: '/Vitrigelandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vitrigelandes.html',
        controller: 'vitrigelandesCtrl'
      }
    }
  })

  .state('menu.duricriandes', {
    url: '/Duricriandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duricriandes.html',
        controller: 'duricriandesCtrl'
      }
    }
  })

  .state('menu.hidrocriandes', {
    url: '/Hidrocriandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hidrocriandes.html',
        controller: 'hidrocriandesCtrl'
      }
    }
  })

  .state('menu.melanocriandes', {
    url: '/Melanocriandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/melanocriandes.html',
        controller: 'melanocriandesCtrl'
      }
    }
  })

  .state('menu.fulvicriandes', {
    url: '/Fulvicriandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fulvicriandes.html',
        controller: 'fulvicriandesCtrl'
      }
    }
  })

  .state('menu.vitricriandes', {
    url: '/Vitricriandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vitricriandes.html',
        controller: 'vitricriandesCtrl'
      }
    }
  })

  .state('menu.haplocriandes', {
    url: '/Haplocriandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocriandes.html',
        controller: 'haplocriandesCtrl'
      }
    }
  })

  .state('menu.duritorrandes', {
    url: '/Duritorrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duritorrandes.html',
        controller: 'duritorrandesCtrl'
      }
    }
  })

  .state('menu.vitritorrandes', {
    url: '/Vitritorrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vitritorrandes.html',
        controller: 'vitritorrandesCtrl'
      }
    }
  })

  .state('menu.haplotorrandes', {
    url: '/Haplotorrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplotorrandes.html',
        controller: 'haplotorrandesCtrl'
      }
    }
  })

  .state('menu.vitrixerandes', {
    url: '/Vitrixerandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vitrixerandes.html',
        controller: 'vitrixerandesCtrl'
      }
    }
  })

  .state('menu.melanoxerandes', {
    url: '/Melanoxerandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/melanoxerandes.html',
        controller: 'melanoxerandesCtrl'
      }
    }
  })

  .state('menu.haploxerandes', {
    url: '/Haploxerandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haploxerandes.html',
        controller: 'haploxerandesCtrl'
      }
    }
  })

  .state('menu.ustivitrandes', {
    url: '/Ustivitrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustivitrandes.html',
        controller: 'ustivitrandesCtrl'
      }
    }
  })

  .state('menu.udivitrandes', {
    url: '/Udivitrandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udivitrandes.html',
        controller: 'udivitrandesCtrl'
      }
    }
  })

  .state('menu.durustandes', {
    url: '/Durustandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durustandes.html',
        controller: 'durustandesCtrl'
      }
    }
  })

  .state('menu.haplustandes', {
    url: '/Haplustandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplustandes.html',
        controller: 'haplustandesCtrl'
      }
    }
  })

  .state('menu.placudandes', {
    url: '/Placudandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/placudandes.html',
        controller: 'placudandesCtrl'
      }
    }
  })

  .state('menu.durudandes', {
    url: '/Durudandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durudandes.html',
        controller: 'durudandesCtrl'
      }
    }
  })

  .state('menu.melanudandes', {
    url: '/Melanudandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/melanudandes.html',
        controller: 'melanudandesCtrl'
      }
    }
  })

  .state('menu.hidrudandes', {
    url: '/Hidrudandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hidrudandes.html',
        controller: 'hidrudandesCtrl'
      }
    }
  })

  .state('menu.fulvudandes', {
    url: '/Fulvudandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fulvudandes.html',
        controller: 'fulvudandesCtrl'
      }
    }
  })

  .state('menu.hapludandes', {
    url: '/Hapludandes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hapludandes.html',
        controller: 'hapludandesCtrl'
      }
    }
  })

  .state('menu.acracuoxes', {
    url: '/Acracuoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acracuoxes.html',
        controller: 'acracuoxesCtrl'
      }
    }
  })

  .state('menu.plintacuoxes', {
    url: '/plintacuoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plintacuoxes.html',
        controller: 'plintacuoxesCtrl'
      }
    }
  })

  .state('menu.eutracuoxes', {
    url: '/eutracuoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eutracuoxes.html',
        controller: 'eutracuoxesCtrl'
      }
    }
  })

  .state('menu.haplacuoxes', {
    url: '/haplacuoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplacuoxes.html',
        controller: 'haplacuoxesCtrl'
      }
    }
  })

  .state('menu.acrotorroxes', {
    url: '/acrotorroxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acrotorroxes.html',
        controller: 'acrotorroxesCtrl'
      }
    }
  })

  .state('menu.eutrotorroxes', {
    url: '/eutrotorroxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eutrotorroxes.html',
        controller: 'eutrotorroxesCtrl'
      }
    }
  })

  .state('menu.haplotorroxes', {
    url: '/haplotorroxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplotorroxes.html',
        controller: 'haplotorroxesCtrl'
      }
    }
  })

  .state('menu.sombriperoxes', {
    url: '/sombriperoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sombriperoxes.html',
        controller: 'sombriperoxesCtrl'
      }
    }
  })

  .state('menu.acroperoxes', {
    url: '/acroperoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acroperoxes.html',
        controller: 'acroperoxesCtrl'
      }
    }
  })

  .state('menu.eutroperoxes', {
    url: '/eutroperoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eutroperoxes.html',
        controller: 'eutroperoxesCtrl'
      }
    }
  })

  .state('menu.kandiperoxes', {
    url: '/kandiperoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandiperoxes.html',
        controller: 'kandiperoxesCtrl'
      }
    }
  })

  .state('menu.haploperoxes', {
    url: '/haploperoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haploperoxes.html',
        controller: 'haploperoxesCtrl'
      }
    }
  })

  .state('menu.sombriustoxes', {
    url: '/sombriustoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sombriustoxes.html',
        controller: 'sombriustoxesCtrl'
      }
    }
  })

  .state('menu.acrustoxes', {
    url: '/Acrustoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acrustoxes.html',
        controller: 'acrustoxesCtrl'
      }
    }
  })

  .state('menu.acrudoxes', {
    url: '/Acrudoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acrudoxes.html',
        controller: 'acrudoxesCtrl'
      }
    }
  })

  .state('menu.eutrustoxes', {
    url: '/eutrustoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eutrustoxes.html',
        controller: 'eutrustoxesCtrl'
      }
    }
  })

  .state('menu.eutrudoxes', {
    url: '/Eutrudoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eutrudoxes.html',
        controller: 'eutrudoxesCtrl'
      }
    }
  })

  .state('menu.kandiustoxes', {
    url: '/Kandiustoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandiustoxes.html',
        controller: 'kandiustoxesCtrl'
      }
    }
  })

  .state('menu.kandiudoxes', {
    url: '/Kandiudoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandiudoxes.html',
        controller: 'kandiudoxesCtrl'
      }
    }
  })

  .state('menu.haplustoxes', {
    url: '/Haplustoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplustoxes.html',
        controller: 'haplustoxesCtrl'
      }
    }
  })

  .state('menu.hapludoxes', {
    url: '/Hapludoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hapludoxes.html',
        controller: 'hapludoxesCtrl'
      }
    }
  })

  .state('menu.sombriudoxes', {
    url: '/Sombriudoxes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sombriudoxes.html',
        controller: 'sombriudoxesCtrl'
      }
    }
  })

  .state('menu.sulfacuertes', {
    url: '/sulfacuertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfacuertes.html',
        controller: 'sulfacuertesCtrl'
      }
    }
  })

  .state('menu.salacuertes', {
    url: '/Salacuertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salacuertes.html',
        controller: 'salacuertesCtrl'
      }
    }
  })

  .state('duracuertes', {
    url: '/Duracuertes',
    templateUrl: 'templates/duracuertes.html',
    controller: 'duracuertesCtrl'
  })

  .state('natracuertes', {
    url: '/Natracuertes',
    templateUrl: 'templates/natracuertes.html',
    controller: 'natracuertesCtrl'
  })

  .state('menu.calciacuertes', {
    url: '/Calciacuertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calciacuertes.html',
        controller: 'calciacuertesCtrl'
      }
    }
  })

  .state('menu.distracuertes', {
    url: '/Distracuertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distracuertes.html',
        controller: 'distracuertesCtrl'
      }
    }
  })

  .state('epiacuertes', {
    url: '/Epiacuertes',
    templateUrl: 'templates/epiacuertes.html',
    controller: 'epiacuertesCtrl'
  })

  .state('menu.endoacuertes', {
    url: '/Endoacuertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endoacuertes.html',
        controller: 'endoacuertesCtrl'
      }
    }
  })

  .state('menu.humicriertes', {
    url: '/Humicriertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humicriertes.html',
        controller: 'humicriertesCtrl'
      }
    }
  })

  .state('menu.haplocriertes', {
    url: '/Haplocriertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocriertes.html',
        controller: 'haplocriertesCtrl'
      }
    }
  })

  .state('menu.durixerertes', {
    url: '/Durixerertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durixerertes.html',
        controller: 'durixerertesCtrl'
      }
    }
  })

  .state('menu.calcixerertes', {
    url: '/Calcixerertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcixerertes.html',
        controller: 'calcixerertesCtrl'
      }
    }
  })

  .state('menu.haploxerertes', {
    url: '/Haploxerertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haploxerertes.html',
        controller: 'haploxerertesCtrl'
      }
    }
  })

  .state('menu.salitorrertes', {
    url: '/Salitorrertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salitorrertes.html',
        controller: 'salitorrertesCtrl'
      }
    }
  })

  .state('menu.gipsitorrertes', {
    url: '/Gipsitorrertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gipsitorrertes.html',
        controller: 'gipsitorrertesCtrl'
      }
    }
  })

  .state('menu.calcitorrertes', {
    url: '/Calcitorrertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcitorrertes.html',
        controller: 'calcitorrertesCtrl'
      }
    }
  })

  .state('menu.haplotorrertes', {
    url: '/Haplotorrertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplotorrertes.html',
        controller: 'haplotorrertesCtrl'
      }
    }
  })

  .state('menu.distrustertes', {
    url: '/Distrustertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distrustertes.html',
        controller: 'distrustertesCtrl'
      }
    }
  })

  .state('menu.salustertes', {
    url: '/Salustertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salustertes.html',
        controller: 'salustertesCtrl'
      }
    }
  })

  .state('menu.gipsiustertes', {
    url: '/Gipsiustertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gipsiustertes.html',
        controller: 'gipsiustertesCtrl'
      }
    }
  })

  .state('menu.calciustertes', {
    url: '/Calciustertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calciustertes.html',
        controller: 'calciustertesCtrl'
      }
    }
  })

  .state('menu.haplustertes', {
    url: '/Haplustertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplustertes.html',
        controller: 'haplustertesCtrl'
      }
    }
  })

  .state('menu.distrudertes', {
    url: '/Distrudertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distrudertes.html',
        controller: 'distrudertesCtrl'
      }
    }
  })

  .state('menu.hapludertes', {
    url: '/Hapludertes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hapludertes.html',
        controller: 'hapludertesCtrl'
      }
    }
  })

  .state('menu.salicriDes', {
    url: '/Salicriídes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/salicriDes.html',
        controller: 'salicriDesCtrl'
      }
    }
  })

  .state('menu.petrocriDes', {
    url: '/Petrocriídes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petrocriDes.html',
        controller: 'petrocriDesCtrl'
      }
    }
  })

  .state('menu.gipsicriDes', {
    url: '/Gipsicriídes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gipsicriDes.html',
        controller: 'gipsicriDesCtrl'
      }
    }
  })

  .state('menu.argicriDes', {
    url: '/Argicriídes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argicriDes.html',
        controller: 'argicriDesCtrl'
      }
    }
  })

  .state('menu.calcicriDes', {
    url: '/Calcicriídes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcicriDes.html',
        controller: 'calcicriDesCtrl'
      }
    }
  })

  .state('menu.haplocriDes', {
    url: '/Haplocriídes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocriDes.html',
        controller: 'haplocriDesCtrl'
      }
    }
  })

  .state('menu.acuisalides', {
    url: '/Acuisalides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuisalides.html',
        controller: 'acuisalidesCtrl'
      }
    }
  })

  .state('menu.haplosalides', {
    url: '/Haplosalides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplosalides.html',
        controller: 'haplosalidesCtrl'
      }
    }
  })

  .state('menu.natridurides', {
    url: '/Natridurides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natridurides.html',
        controller: 'natriduridesCtrl'
      }
    }
  })

  .state('menu.argidurides', {
    url: '/Argidurides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argidurides.html',
        controller: 'argiduridesCtrl'
      }
    }
  })

  .state('menu.haplodurides', {
    url: '/Haplodurides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplodurides.html',
        controller: 'haploduridesCtrl'
      }
    }
  })

  .state('menu.petrogipsides', {
    url: '/Petrogipsides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petrogipsides.html',
        controller: 'petrogipsidesCtrl'
      }
    }
  })

  .state('menu.natrigipsides', {
    url: '/Natrigipsides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrigipsides.html',
        controller: 'natrigipsidesCtrl'
      }
    }
  })

  .state('menu.argigipsides', {
    url: '/Argigipsides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argigipsides.html',
        controller: 'argigipsidesCtrl'
      }
    }
  })

  .state('menu.calcigipsides', {
    url: '/Calcigipsides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcigipsides.html',
        controller: 'calcigipsidesCtrl'
      }
    }
  })

  .state('menu.haplogipsides', {
    url: '/Haplogipsides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplogipsides.html',
        controller: 'haplogipsidesCtrl'
      }
    }
  })

  .state('menu.petroargides', {
    url: '/Petroargides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petroargides.html',
        controller: 'petroargidesCtrl'
      }
    }
  })

  .state('menu.natrargides', {
    url: '/Natrargides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrargides.html',
        controller: 'natrargidesCtrl'
      }
    }
  })

  .state('menu.paleargides', {
    url: '/Paleargides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paleargides.html',
        controller: 'paleargidesCtrl'
      }
    }
  })

  .state('menu.gipsiargides', {
    url: '/Gipsiargides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gipsiargides.html',
        controller: 'gipsiargidesCtrl'
      }
    }
  })

  .state('menu.calciargides', {
    url: '/Calciargides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calciargides.html',
        controller: 'calciargidesCtrl'
      }
    }
  })

  .state('menu.haplargides', {
    url: '/Haplargides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplargides.html',
        controller: 'haplargidesCtrl'
      }
    }
  })

  .state('menu.petrocalcides', {
    url: '/Petrocalcides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petrocalcides.html',
        controller: 'petrocalcidesCtrl'
      }
    }
  })

  .state('menu.haplocalcides', {
    url: '/Haplocalcides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocalcides.html',
        controller: 'haplocalcidesCtrl'
      }
    }
  })

  .state('menu.acuicambides', {
    url: '/Acuicambides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/acuicambides.html',
        controller: 'acuicambidesCtrl'
      }
    }
  })

  .state('menu.petrocambides', {
    url: '/Petrocambides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petrocambides.html',
        controller: 'petrocambidesCtrl'
      }
    }
  })

  .state('menu.haplocambides', {
    url: '/Haplocambides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocambides.html',
        controller: 'haplocambidesCtrl'
      }
    }
  })

  .state('menu.plintacultes', {
    url: '/Plintacultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plintacultes.html',
        controller: 'plintacultesCtrl'
      }
    }
  })

  .state('fragiacultes', {
    url: '/Fragiacultes',
    templateUrl: 'templates/fragiacultes.html',
    controller: 'fragiacultesCtrl'
  })

  .state('menu.albacultes', {
    url: '/Albacultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/albacultes.html',
        controller: 'albacultesCtrl'
      }
    }
  })

  .state('kandiacultes', {
    url: '/Kandiacultes',
    templateUrl: 'templates/kandiacultes.html',
    controller: 'kandiacultesCtrl'
  })

  .state('menu.kanhaplacultes', {
    url: '/Kanhaplacultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kanhaplacultes.html',
        controller: 'kanhaplacultesCtrl'
      }
    }
  })

  .state('menu.paleacultes', {
    url: '/Paleacultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paleacultes.html',
        controller: 'paleacultesCtrl'
      }
    }
  })

  .state('menu.umbracultes', {
    url: '/Umbracultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/umbracultes.html',
        controller: 'umbracultesCtrl'
      }
    }
  })

  .state('menu.epiacultes', {
    url: '/Epiacultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epiacultes.html',
        controller: 'epiacultesCtrl'
      }
    }
  })

  .state('menu.endoacultes', {
    url: '/Endoacultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endoacultes.html',
        controller: 'endoacultesCtrl'
      }
    }
  })

  .state('menu.sombrihumultes', {
    url: '/Sombrihumultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sombrihumultes.html',
        controller: 'sombrihumultesCtrl'
      }
    }
  })

  .state('menu.plintohumultes', {
    url: '/Plintohumultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plintohumultes.html',
        controller: 'plintohumultesCtrl'
      }
    }
  })

  .state('menu.kandihumultes', {
    url: '/Kandihumultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandihumultes.html',
        controller: 'kandihumultesCtrl'
      }
    }
  })

  .state('menu.kanhaplohumultes', {
    url: '/Kanhaplohumultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kanhaplohumultes.html',
        controller: 'kanhaplohumultesCtrl'
      }
    }
  })

  .state('menu.palehumultes', {
    url: '/Palehumultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palehumultes.html',
        controller: 'palehumultesCtrl'
      }
    }
  })

  .state('menu.haplohumultes', {
    url: '/Haplohumultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplohumultes.html',
        controller: 'haplohumultesCtrl'
      }
    }
  })

  .state('menu.plinthudultes', {
    url: '/Plinthudultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plinthudultes.html',
        controller: 'plinthudultesCtrl'
      }
    }
  })

  .state('menu.plinthustultes', {
    url: '/Plinthustultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plinthustultes.html',
        controller: 'plinthustultesCtrl'
      }
    }
  })

  .state('menu.fragiudultes', {
    url: '/Fragiudultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragiudultes.html',
        controller: 'fragiudultesCtrl'
      }
    }
  })

  .state('menu.kandiudultes', {
    url: '/Kandiudultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandiudultes.html',
        controller: 'kandiudultesCtrl'
      }
    }
  })

  .state('menu.kandiustultes', {
    url: '/Kandiustultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandiustultes.html',
        controller: 'kandiustultesCtrl'
      }
    }
  })

  .state('menu.kanhapludultes', {
    url: '/Kanhapludultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kanhapludultes.html',
        controller: 'kanhapludultesCtrl'
      }
    }
  })

  .state('menu.kanhaplustultes', {
    url: '/Kanhaplustultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kanhaplustultes.html',
        controller: 'kanhaplustultesCtrl'
      }
    }
  })

  .state('menu.paleudultes', {
    url: '/Paleudultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paleudultes.html',
        controller: 'paleudultesCtrl'
      }
    }
  })

  .state('menu.paleustultes', {
    url: '/Paleustultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paleustultes.html',
        controller: 'paleustultesCtrl'
      }
    }
  })

  .state('menu.rhodudultes', {
    url: '/Rhodudultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rhodudultes.html',
        controller: 'rhodudultesCtrl'
      }
    }
  })

  .state('menu.rhodustultes', {
    url: '/Rhodustultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rhodustultes.html',
        controller: 'rhodustultesCtrl'
      }
    }
  })

  .state('menu.hapludultes', {
    url: '/Hapludultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hapludultes.html',
        controller: 'hapludultesCtrl'
      }
    }
  })

  .state('menu.haplustultes', {
    url: '/Haplustultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplustultes.html',
        controller: 'haplustultesCtrl'
      }
    }
  })

  .state('menu.palexerultes', {
    url: '/Palexerultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palexerultes.html',
        controller: 'palexerultesCtrl'
      }
    }
  })

  .state('menu.haploxerultes', {
    url: '/Haploxerultes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haploxerultes.html',
        controller: 'haploxerultesCtrl'
      }
    }
  })

  .state('menu.natralboles', {
    url: '/Natralboles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natralboles.html',
        controller: 'natralbolesCtrl'
      }
    }
  })

  .state('menu.argialboles', {
    url: '/Argialboles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argialboles.html',
        controller: 'argialbolesCtrl'
      }
    }
  })

  .state('menu.criacuoles', {
    url: '/Criacuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criacuoles.html',
        controller: 'criacuolesCtrl'
      }
    }
  })

  .state('menu.duracuoles', {
    url: '/Duracuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duracuoles.html',
        controller: 'duracuolesCtrl'
      }
    }
  })

  .state('menu.natracuoles', {
    url: '/Natracuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natracuoles.html',
        controller: 'natracuolesCtrl'
      }
    }
  })

  .state('menu.calciacuoles', {
    url: '/Calciacuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calciacuoles.html',
        controller: 'calciacuolesCtrl'
      }
    }
  })

  .state('menu.argiacuoles', {
    url: '/Argiacuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argiacuoles.html',
        controller: 'argiacuolesCtrl'
      }
    }
  })

  .state('menu.epiacuoles', {
    url: '/Epiacuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epiacuoles.html',
        controller: 'epiacuolesCtrl'
      }
    }
  })

  .state('menu.endoacuoles', {
    url: '/Endoacuoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endoacuoles.html',
        controller: 'endoacuolesCtrl'
      }
    }
  })

  .state('menu.crirendoles', {
    url: '/Crirendoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crirendoles.html',
        controller: 'crirendolesCtrl'
      }
    }
  })

  .state('menu.haprendoles', {
    url: '/Haprendoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haprendoles.html',
        controller: 'haprendolesCtrl'
      }
    }
  })

  .state('menu.haplogeloles', {
    url: '/Haplogeloles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplogeloles.html',
        controller: 'haplogelolesCtrl'
      }
    }
  })

  .state('menu.duricrioles', {
    url: '/Duricrioles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duricrioles.html',
        controller: 'duricriolesCtrl'
      }
    }
  })

  .state('menu.natricrioles', {
    url: '/Natricrioles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natricrioles.html',
        controller: 'natricriolesCtrl'
      }
    }
  })

  .state('menu.palecrioles', {
    url: '/Palecrioles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palecrioles.html',
        controller: 'palecriolesCtrl'
      }
    }
  })

  .state('menu.argicrioles', {
    url: '/Argicrioles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argicrioles.html',
        controller: 'argicriolesCtrl'
      }
    }
  })

  .state('menu.calcicrioles', {
    url: '/Calcicrioles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcicrioles.html',
        controller: 'calcicriolesCtrl'
      }
    }
  })

  .state('menu.haplocrioles', {
    url: '/Haplocrioles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocrioles.html',
        controller: 'haplocriolesCtrl'
      }
    }
  })

  .state('menu.durixeroles', {
    url: '/Durixeroles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durixeroles.html',
        controller: 'durixerolesCtrl'
      }
    }
  })

  .state('menu.natrixeroles', {
    url: '/Natrixeroles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrixeroles.html',
        controller: 'natrixerolesCtrl'
      }
    }
  })

  .state('menu.palexeroles', {
    url: '/Palexeroles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palexeroles.html',
        controller: 'palexerolesCtrl'
      }
    }
  })

  .state('menu.calcixeroles', {
    url: '/Calcixeroles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcixeroles.html',
        controller: 'calcixerolesCtrl'
      }
    }
  })

  .state('menu.argixeroles', {
    url: '/Argixeroles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argixeroles.html',
        controller: 'argixerolesCtrl'
      }
    }
  })

  .state('menu.haploxeroles', {
    url: '/Haploxeroles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haploxeroles.html',
        controller: 'haploxerolesCtrl'
      }
    }
  })

  .state('menu.durustoles', {
    url: '/Durustoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durustoles.html',
        controller: 'durustolesCtrl'
      }
    }
  })

  .state('menu.natrustoles', {
    url: '/Natrustoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrustoles.html',
        controller: 'natrustolesCtrl'
      }
    }
  })

  .state('menu.calciustoles', {
    url: '/Calciustoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calciustoles.html',
        controller: 'calciustolesCtrl'
      }
    }
  })

  .state('menu.paleustoles', {
    url: '/Paleustoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paleustoles.html',
        controller: 'paleustolesCtrl'
      }
    }
  })

  .state('menu.argiustoles', {
    url: '/Argiustol',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argiustoles.html',
        controller: 'argiustolesCtrl'
      }
    }
  })

  .state('menu.vermustoles', {
    url: '/Vermustoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vermustoles.html',
        controller: 'vermustolesCtrl'
      }
    }
  })

  .state('menu.haplustoles', {
    url: '/Haplustol',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplustoles.html',
        controller: 'haplustolesCtrl'
      }
    }
  })

  .state('menu.natrudoles', {
    url: '/Natrudoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrudoles.html',
        controller: 'natrudolesCtrl'
      }
    }
  })

  .state('menu.calciudoles', {
    url: '/Calciudoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calciudoles.html',
        controller: 'calciudolesCtrl'
      }
    }
  })

  .state('menu.paleudoles', {
    url: '/Paleudoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paleudoles.html',
        controller: 'paleudolesCtrl'
      }
    }
  })

  .state('menu.argiudoles', {
    url: '/Argiudoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argiudoles.html',
        controller: 'argiudolesCtrl'
      }
    }
  })

  .state('menu.vermudoles', {
    url: '/Vermudoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vermudoles.html',
        controller: 'vermudolesCtrl'
      }
    }
  })

  .state('menu.hapludoles', {
    url: '/Hapludoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hapludoles.html',
        controller: 'hapludolesCtrl'
      }
    }
  })

  .state('menu.criacualfes', {
    url: '/Criacualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criacualfes.html',
        controller: 'criacualfesCtrl'
      }
    }
  })

  .state('menu.plintacualfes', {
    url: '/Plintacualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plintacualfes.html',
        controller: 'plintacualfesCtrl'
      }
    }
  })

  .state('menu.duracualfes', {
    url: '/Duracualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duracualfes.html',
        controller: 'duracualfesCtrl'
      }
    }
  })

  .state('menu.natracualfes', {
    url: '/Natracualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natracualfes.html',
        controller: 'natracualfesCtrl'
      }
    }
  })

  .state('menu.fragiacualfes', {
    url: '/Fragiacualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragiacualfes.html',
        controller: 'fragiacualfesCtrl'
      }
    }
  })

  .state('menu.kandiacualfes', {
    url: '/Kandiacualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandiacualfes.html',
        controller: 'kandiacualfesCtrl'
      }
    }
  })

  .state('menu.vermacualfes', {
    url: '/Vermacualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vermacualfes.html',
        controller: 'vermacualfesCtrl'
      }
    }
  })

  .state('menu.albacualfes', {
    url: '/Albacualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/albacualfes.html',
        controller: 'albacualfesCtrl'
      }
    }
  })

  .state('menu.glosacualfes', {
    url: '/Glosacualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/glosacualfes.html',
        controller: 'glosacualfesCtrl'
      }
    }
  })

  .state('menu.epiacualfes', {
    url: '/Epiacualfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epiacualfes.html',
        controller: 'epiacualfesCtrl'
      }
    }
  })

  .state('menu.endoacualfes', {
    url: '/page535',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endoacualfes.html',
        controller: 'endoacualfesCtrl'
      }
    }
  })

  .state('menu.palecrialfes', {
    url: '/Palecrialfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palecrialfes.html',
        controller: 'palecrialfesCtrl'
      }
    }
  })

  .state('menu.glossocrialfes', {
    url: '/Glossocrialfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/glossocrialfes.html',
        controller: 'glossocrialfesCtrl'
      }
    }
  })

  .state('menu.haplocrialfes', {
    url: '/Haplocrialfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocrialfes.html',
        controller: 'haplocrialfesCtrl'
      }
    }
  })

  .state('menu.durustalfes', {
    url: '/Durustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durustalfes.html',
        controller: 'durustalfesCtrl'
      }
    }
  })

  .state('menu.plintustalfes', {
    url: '/Plintustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plintustalfes.html',
        controller: 'plintustalfesCtrl'
      }
    }
  })

  .state('menu.natrustalfes', {
    url: '/Natrustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrustalfes.html',
        controller: 'natrustalfesCtrl'
      }
    }
  })

  .state('menu.kandiustalfes', {
    url: '/Kandiustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandiustalfes.html',
        controller: 'kandiustalfesCtrl'
      }
    }
  })

  .state('menu.kanhaplustalfes', {
    url: '/Kanhaplustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kanhaplustalfes.html',
        controller: 'kanhaplustalfesCtrl'
      }
    }
  })

  .state('menu.paleustalfes', {
    url: '/Paleustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paleustalfes.html',
        controller: 'paleustalfesCtrl'
      }
    }
  })

  .state('menu.rodustalfes', {
    url: '/Rodustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rodustalfes.html',
        controller: 'rodustalfesCtrl'
      }
    }
  })

  .state('menu.haplustalfes', {
    url: '/Haplustalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplustalfes.html',
        controller: 'haplustalfesCtrl'
      }
    }
  })

  .state('menu.durixeralfes', {
    url: '/Durixeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durixeralfes.html',
        controller: 'durixeralfesCtrl'
      }
    }
  })

  .state('menu.natrixeralfes', {
    url: '/Natrixeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrixeralfes.html',
        controller: 'natrixeralfesCtrl'
      }
    }
  })

  .state('menu.fragixeralfes', {
    url: '/Fragixeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragixeralfes.html',
        controller: 'fragixeralfesCtrl'
      }
    }
  })

  .state('menu.plintoxeralfes', {
    url: '/Plintoxeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plintoxeralfes.html',
        controller: 'plintoxeralfesCtrl'
      }
    }
  })

  .state('menu.rodoxeralfes', {
    url: '/Rodoxeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rodoxeralfes.html',
        controller: 'rodoxeralfesCtrl'
      }
    }
  })

  .state('menu.palexeralfes', {
    url: '/Palexeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/palexeralfes.html',
        controller: 'palexeralfesCtrl'
      }
    }
  })

  .state('menu.haploxeralfes', {
    url: '/Haploxeralfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haploxeralfes.html',
        controller: 'haploxeralfesCtrl'
      }
    }
  })

  .state('menu.natrudalfes', {
    url: '/Natrudalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/natrudalfes.html',
        controller: 'natrudalfesCtrl'
      }
    }
  })

  .state('menu.ferrudalfes', {
    url: '/Ferrudalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ferrudalfes.html',
        controller: 'ferrudalfesCtrl'
      }
    }
  })

  .state('menu.fraglossudalfes', {
    url: '/Ferrudalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fraglossudalfes.html',
        controller: 'fraglossudalfesCtrl'
      }
    }
  })

  .state('menu.fragiudalfes', {
    url: '/Fragiudalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragiudalfes.html',
        controller: 'fragiudalfesCtrl'
      }
    }
  })

  .state('menu.kandiudalfes', {
    url: '/Kandiudalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kandiudalfes.html',
        controller: 'kandiudalfesCtrl'
      }
    }
  })

  .state('menu.kanhapludalfes', {
    url: '/Kanhapludalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kanhapludalfes.html',
        controller: 'kanhapludalfesCtrl'
      }
    }
  })

  .state('menu.paleudalfes', {
    url: '/Paleudalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/paleudalfes.html',
        controller: 'paleudalfesCtrl'
      }
    }
  })

  .state('menu.rodudalfes', {
    url: '/Rodudalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rodudalfes.html',
        controller: 'rodudalfesCtrl'
      }
    }
  })

  .state('menu.glossudalfes', {
    url: '/Glossudalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/glossudalfes.html',
        controller: 'glossudalfesCtrl'
      }
    }
  })

  .state('menu.hapludalfes', {
    url: '/Hapludalfes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hapludalfes.html',
        controller: 'hapludalfesCtrl'
      }
    }
  })

  .state('menu.sulfacueptes', {
    url: '/Sulfacueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfacueptes.html',
        controller: 'sulfacueptesCtrl'
      }
    }
  })

  .state('menu.petracueptes', {
    url: '/Petracueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petracueptes.html',
        controller: 'petracueptesCtrl'
      }
    }
  })

  .state('menu.halacueptes', {
    url: '/Halacueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/halacueptes.html',
        controller: 'halacueptesCtrl'
      }
    }
  })

  .state('menu.fragiacueptes', {
    url: '/Fragiacueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragiacueptes.html',
        controller: 'fragiacueptesCtrl'
      }
    }
  })

  .state('menu.gelacueptes', {
    url: '/Gelacueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelacueptes.html',
        controller: 'gelacueptesCtrl'
      }
    }
  })

  .state('criacueptes', {
    url: '/Criacueptes',
    templateUrl: 'templates/criacueptes.html',
    controller: 'criacueptesCtrl'
  })

  .state('menu.vermacueptes', {
    url: '/Vermacueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/vermacueptes.html',
        controller: 'vermacueptesCtrl'
      }
    }
  })

  .state('menu.humacueptes', {
    url: '/Humacueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humacueptes.html',
        controller: 'humacueptesCtrl'
      }
    }
  })

  .state('menu.epiacueptes', {
    url: '/Epiacueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epiacueptes.html',
        controller: 'epiacueptesCtrl'
      }
    }
  })

  .state('menu.endoacueptes', {
    url: '/Endoacueptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endoacueptes.html',
        controller: 'endoacueptesCtrl'
      }
    }
  })

  .state('menu.humigeleptes', {
    url: '/Humigeleptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humigeleptes.html',
        controller: 'humigeleptesCtrl'
      }
    }
  })

  .state('menu.distrogeleptes', {
    url: '/Distrogeleptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distrogeleptes.html',
        controller: 'distrogeleptesCtrl'
      }
    }
  })

  .state('menu.haplogeleptes', {
    url: '/Haplogeleptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplogeleptes.html',
        controller: 'haplogeleptesCtrl'
      }
    }
  })

  .state('menu.humicrieptes', {
    url: '/Humicrieptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humicrieptes.html',
        controller: 'humicrieptesCtrl'
      }
    }
  })

  .state('menu.calcicrieptes', {
    url: '/Calcicrieptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcicrieptes.html',
        controller: 'calcicrieptesCtrl'
      }
    }
  })

  .state('menu.distrocrieptes', {
    url: '/Distrocrieptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distrocrieptes.html',
        controller: 'distrocrieptesCtrl'
      }
    }
  })

  .state('menu.haplocrieptes', {
    url: '/Haplocrieptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplocrieptes.html',
        controller: 'haplocrieptesCtrl'
      }
    }
  })

  .state('menu.durusteptes', {
    url: '/Durusteptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durusteptes.html',
        controller: 'durusteptesCtrl'
      }
    }
  })

  .state('menu.calciusteptes', {
    url: '/Calciusteptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calciusteptes.html',
        controller: 'calciusteptesCtrl'
      }
    }
  })

  .state('menu.humusteptes', {
    url: '/Humusteptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humusteptes.html',
        controller: 'humusteptesCtrl'
      }
    }
  })

  .state('menu.distrusteptes', {
    url: '/Distrusteptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distrusteptes.html',
        controller: 'distrusteptesCtrl'
      }
    }
  })

  .state('menu.haplusteptes', {
    url: '/Haplusteptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplusteptes.html',
        controller: 'haplusteptesCtrl'
      }
    }
  })

  .state('menu.durixereptes', {
    url: '/Durixereptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durixereptes.html',
        controller: 'durixereptesCtrl'
      }
    }
  })

  .state('menu.fragixereptes', {
    url: '/Fragixereptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragixereptes.html',
        controller: 'fragixereptesCtrl'
      }
    }
  })

  .state('menu.humuxereptes', {
    url: '/Humuxereptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humuxereptes.html',
        controller: 'humuxereptesCtrl'
      }
    }
  })

  .state('menu.calcixereptes', {
    url: '/Calcixereptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/calcixereptes.html',
        controller: 'calcixereptesCtrl'
      }
    }
  })

  .state('menu.distroxereptes', {
    url: '/Distroxereptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distroxereptes.html',
        controller: 'distroxereptesCtrl'
      }
    }
  })

  .state('menu.haploxereptes', {
    url: '/Haploxereptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haploxereptes.html',
        controller: 'haploxereptesCtrl'
      }
    }
  })

  .state('menu.sulfudeptes', {
    url: '/Sulfudeptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfudeptes.html',
        controller: 'sulfudeptesCtrl'
      }
    }
  })

  .state('menu.durudeptes', {
    url: '/Durudeptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durudeptes.html',
        controller: 'durudeptesCtrl'
      }
    }
  })

  .state('menu.fragiudeptes', {
    url: '/Fragiudeptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragiudeptes.html',
        controller: 'fragiudeptesCtrl'
      }
    }
  })

  .state('menu.humudeptes', {
    url: '/Humudeptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humudeptes.html',
        controller: 'humudeptesCtrl'
      }
    }
  })

  .state('menu.eutrudeptes', {
    url: '/Eutrudeptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eutrudeptes.html',
        controller: 'eutrudeptesCtrl'
      }
    }
  })

  .state('menu.distrudeptes', {
    url: '/Distrudeptes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/distrudeptes.html',
        controller: 'distrudeptesCtrl'
      }
    }
  })

  .state('menu.frasiwassentes', {
    url: '/Frasiwassentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frasiwassentes.html',
        controller: 'frasiwassentesCtrl'
      }
    }
  })

  .state('menu.psammowassentes', {
    url: '/Psammowassentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psammowassentes.html',
        controller: 'psammowassentesCtrl'
      }
    }
  })

  .state('menu.sulfiwassentes', {
    url: '/Sulfiwassentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfiwassentes.html',
        controller: 'sulfiwassentesCtrl'
      }
    }
  })

  .state('menu.hidrowassentes', {
    url: '/Hidrowassentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hidrowassentes.html',
        controller: 'hidrowassentesCtrl'
      }
    }
  })

  .state('menu.fluviwassentes', {
    url: '/Fluviwassentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fluviwassentes.html',
        controller: 'fluviwassentesCtrl'
      }
    }
  })

  .state('menu.haplowassentes', {
    url: '/Haplowassentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/haplowassentes.html',
        controller: 'haplowassentesCtrl'
      }
    }
  })

  .state('menu.sulfacuentes', {
    url: '/Sulfacuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfacuentes.html',
        controller: 'sulfacuentesCtrl'
      }
    }
  })

  .state('menu.hidracuentes', {
    url: '/Hidracuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hidracuentes.html',
        controller: 'hidracuentesCtrl'
      }
    }
  })

  .state('menu.gelacuentes', {
    url: '/Gelacuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelacuentes.html',
        controller: 'gelacuentesCtrl'
      }
    }
  })

  .state('menu.criacuentes', {
    url: '/Criacuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criacuentes.html',
        controller: 'criacuentesCtrl'
      }
    }
  })

  .state('menu.psammacuentes', {
    url: '/Psammacuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/psammacuentes.html',
        controller: 'psammacuentesCtrl'
      }
    }
  })

  .state('menu.fluvacuentes', {
    url: '/Fluvacuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fluvacuentes.html',
        controller: 'fluvacuentesCtrl'
      }
    }
  })

  .state('menu.epiacuentes', {
    url: '/Epiacuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epiacuentes.html',
        controller: 'epiacuentesCtrl'
      }
    }
  })

  .state('menu.endoacuentes', {
    url: '/Endoacuentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endoacuentes.html',
        controller: 'endoacuentesCtrl'
      }
    }
  })

  .state('menu.criopsammentes', {
    url: '/Criopsammentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criopsammentes.html',
        controller: 'criopsammentesCtrl'
      }
    }
  })

  .state('menu.torripsammentes', {
    url: '/Torripsammentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torripsammentes.html',
        controller: 'torripsammentesCtrl'
      }
    }
  })

  .state('menu.cuarsipsammentes', {
    url: '/Cuarsipsammentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cuarsipsammentes.html',
        controller: 'cuarsipsammentesCtrl'
      }
    }
  })

  .state('menu.ustipsammentes', {
    url: '/Ustipsammentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustipsammentes.html',
        controller: 'ustipsammentesCtrl'
      }
    }
  })

  .state('menu.xeropsammentes', {
    url: '/Xeropsammentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xeropsammentes.html',
        controller: 'xeropsammentesCtrl'
      }
    }
  })

  .state('menu.udipsammentes', {
    url: '/Udipsammentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udipsammentes.html',
        controller: 'udipsammentesCtrl'
      }
    }
  })

  .state('menu.gelifluventes', {
    url: '/Gelifluventes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelifluventes.html',
        controller: 'gelifluventesCtrl'
      }
    }
  })

  .state('menu.criofluventes', {
    url: '/Criofluventes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criofluventes.html',
        controller: 'criofluventesCtrl'
      }
    }
  })

  .state('menu.xerofluventes', {
    url: '/Xerofluventes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xerofluventes.html',
        controller: 'xerofluventesCtrl'
      }
    }
  })

  .state('menu.ustifluventes', {
    url: '/Ustifluventes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustifluventes.html',
        controller: 'ustifluventesCtrl'
      }
    }
  })

  .state('menu.torrifluventes', {
    url: '/Torrifluventes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torrifluventes.html',
        controller: 'torrifluventesCtrl'
      }
    }
  })

  .state('menu.udifluventes', {
    url: '/Udifluventes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udifluventes.html',
        controller: 'udifluventesCtrl'
      }
    }
  })

  .state('menu.gelortentes', {
    url: '/Gelortentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gelortentes.html',
        controller: 'gelortentesCtrl'
      }
    }
  })

  .state('menu.criortentes', {
    url: '/Criortentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/criortentes.html',
        controller: 'criortentesCtrl'
      }
    }
  })

  .state('menu.torriortentes', {
    url: '/Torriortentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/torriortentes.html',
        controller: 'torriortentesCtrl'
      }
    }
  })

  .state('menu.xerortentes', {
    url: '/Xerortentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xerortentes.html',
        controller: 'xerortentesCtrl'
      }
    }
  })

  .state('menu.ustortentes', {
    url: '/Ustortentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ustortentes.html',
        controller: 'ustortentesCtrl'
      }
    }
  })

  .state('menu.udortentes', {
    url: '/Udortentes',
    views: {
      'side-menu21': {
        templateUrl: 'templates/udortentes.html',
        controller: 'udortentesCtrl'
      }
    }
  })

  .state('menu.subRdenesGelisoles', {
    url: '/SO_Gelisoles2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesGelisoles.html',
        controller: 'subRdenesGelisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesHistosoles', {
    url: '/SO_Histosoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesHistosoles.html',
        controller: 'subRdenesHistosolesCtrl'
      }
    }
  })

  .state('menu.subRdenesSpodosoles', {
    url: '/SO_Spodosoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesSpodosoles.html',
        controller: 'subRdenesSpodosolesCtrl'
      }
    }
  })

  .state('menu.subRdenesAndisoles', {
    url: '/SO_Andisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesAndisoles.html',
        controller: 'subRdenesAndisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesOxisoles', {
    url: '/SO_Oxisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesOxisoles.html',
        controller: 'subRdenesOxisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesVertisoles', {
    url: '/SO_Vertisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesVertisoles.html',
        controller: 'subRdenesVertisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesAridisoles', {
    url: '/SO_Aridisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesAridisoles.html',
        controller: 'subRdenesAridisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesUltisoles', {
    url: '/SO_Ultisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesUltisoles.html',
        controller: 'subRdenesUltisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesMolisoles', {
    url: '/SO_Molisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesMolisoles.html',
        controller: 'subRdenesMolisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesAlfisoles', {
    url: '/SO_Alfisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesAlfisoles.html',
        controller: 'subRdenesAlfisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesInceptisoles', {
    url: '/SO_Inceptisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesInceptisoles.html',
        controller: 'subRdenesInceptisolesCtrl'
      }
    }
  })

  .state('menu.subRdenesEntisoles', {
    url: '/SO_Entisoles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/subRdenesEntisoles.html',
        controller: 'subRdenesEntisolesCtrl'
      }
    }
  })

  .state('menu.glosario', {
    url: '/Glosario',
    views: {
      'side-menu21': {
        templateUrl: 'templates/glosario.html',
        controller: 'glosarioCtrl'
      }
    }
  })

  .state('menu.Cuico', {
    url: '/Glosario/Acuico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Cuico.html',
        controller: 'CuicoCtrl'
      }
    }
  })

  .state('menu.Grico', {
    url: '/Ágrico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Grico.html',
        controller: 'GricoCtrl'
      }
    }
  })

  .state('menu.Lbico', {
    url: '/Álbico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Lbico.html',
        controller: 'LbicoCtrl'
      }
    }
  })

  .state('menu.Ndico', {
    url: '/Andico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/Ndico.html',
        controller: 'NdicoCtrl'
      }
    }
  })

  .state('menu.anhidrasCondiciones', {
    url: '/Anhidra',
    views: {
      'side-menu21': {
        templateUrl: 'templates/anhidrasCondiciones.html',
        controller: 'anhidrasCondicionesCtrl'
      }
    }
  })

  .state('menu.antrPicoHorizonte', {
    url: '/Antrópico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/antrPicoHorizonte.html',
        controller: 'antrPicoHorizonteCtrl'
      }
    }
  })

  .state('menu.arcillasExpansibles', {
    url: '/arcillasexpansibles',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arcillasExpansibles.html',
        controller: 'arcillasExpansiblesCtrl'
      }
    }
  })

  .state('menu.argLicoHorizonte', {
    url: '/Argilico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/argLicoHorizonte.html',
        controller: 'argLicoHorizonteCtrl'
      }
    }
  })

  .state('menu.arDico', {
    url: '/Aridico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/arDico.html',
        controller: 'arDicoCtrl'
      }
    }
  })

  .state('aridisol', {
    url: '/Aridisol',
    templateUrl: 'templates/aridisol.html',
    controller: 'aridisolCtrl'
  })

  .state('menu.bioturbaciN', {
    url: '/Bioturbacion',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bioturbaciN.html',
        controller: 'bioturbaciNCtrl'
      }
    }
  })

  .state('menu.cLcicoHorizonte', {
    url: '/Calcico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cLcicoHorizonte.html',
        controller: 'cLcicoHorizonteCtrl'
      }
    }
  })

  .state('menu.cMbicoHorizonte', {
    url: '/cambico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cMbicoHorizonte.html',
        controller: 'cMbicoHorizonteCtrl'
      }
    }
  })

  .state('menu.cambioTexturalAbrupto', {
    url: '/Cambio textural abrupto',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cambioTexturalAbrupto.html',
        controller: 'cambioTexturalAbruptoCtrl'
      }
    }
  })

  .state('menu.capaGlCica', {
    url: '/Capa glácica',
    views: {
      'side-menu21': {
        templateUrl: 'templates/capaGlCica.html',
        controller: 'capaGlCicaCtrl'
      }
    }
  })

  .state('menu.carbonatosSecundariosIdentificables', {
    url: '/Carbonatos secundarios',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carbonatosSecundariosIdentificables.html',
        controller: 'carbonatosSecundariosIdentificablesCtrl'
      }
    }
  })

  .state('menu.carbonatosLibres', {
    url: '/carbonatoslibres',
    views: {
      'side-menu21': {
        templateUrl: 'templates/carbonatosLibres.html',
        controller: 'carbonatosLibresCtrl'
      }
    }
  })

  .state('menu.cementaciN', {
    url: '/cementacion',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cementaciN.html',
        controller: 'cementaciNCtrl'
      }
    }
  })

  .state('menu.cromaChroma', {
    url: '/chroma',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cromaChroma.html',
        controller: 'cromaChromaCtrl'
      }
    }
  })

  .state('menu.conductividadElCtrica', {
    url: '/Conductividad eléctrica',
    views: {
      'side-menu21': {
        templateUrl: 'templates/conductividadElCtrica.html',
        controller: 'conductividadElCtricaCtrl'
      }
    }
  })

  .state('menu.concrecionesCalcReas', {
    url: '/Concreciones calcáreas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/concrecionesCalcReas.html',
        controller: 'concrecionesCalcReasCtrl'
      }
    }
  })

  .state('menu.conductividadHidrUlicaSaturadaKsat', {
    url: '/Conductividad hidráulica saturada (Ksat)',
    views: {
      'side-menu21': {
        templateUrl: 'templates/conductividadHidrUlicaSaturadaKsat.html',
        controller: 'conductividadHidrUlicaSaturadaKsatCtrl'
      }
    }
  })

  .state('menu.contactoLTico', {
    url: '/Contacto lítico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactoLTico.html',
        controller: 'contactoLTicoCtrl'
      }
    }
  })

  .state('menu.contactoParalTico', {
    url: '/Contacto paralítico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactoParalTico.html',
        controller: 'contactoParalTicoCtrl'
      }
    }
  })

  .state('menu.crIco', {
    url: '/Críico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crIco.html',
        controller: 'crIcoCtrl'
      }
    }
  })

  .state('menu.crioturbaciN', {
    url: '/Crioturbación',
    views: {
      'side-menu21': {
        templateUrl: 'templates/crioturbaciN.html',
        controller: 'crioturbaciNCtrl'
      }
    }
  })

  .state('menu.discontinuidadLitolGica', {
    url: '/Discontinuidad litológica',
    views: {
      'side-menu21': {
        templateUrl: 'templates/discontinuidadLitolGica.html',
        controller: 'discontinuidadLitolGicaCtrl'
      }
    }
  })

  .state('menu.durinDulos', {
    url: '/Durinódulos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/durinDulos.html',
        controller: 'durinDulosCtrl'
      }
    }
  })

  .state('menu.duripN', {
    url: '/Duripán',
    views: {
      'side-menu21': {
        templateUrl: 'templates/duripN.html',
        controller: 'duripNCtrl'
      }
    }
  })

  .state('menu.eluviaciNEluvial', {
    url: '/eluviación',
    views: {
      'side-menu21': {
        templateUrl: 'templates/eluviaciNEluvial.html',
        controller: 'eluviaciNEluvialCtrl'
      }
    }
  })

  .state('menu.epipedN', {
    url: '/Epipedón',
    views: {
      'side-menu21': {
        templateUrl: 'templates/epipedN.html',
        controller: 'epipedNCtrl'
      }
    }
  })

  .state('menu.episaturaciN', {
    url: '/Episaturación',
    views: {
      'side-menu21': {
        templateUrl: 'templates/episaturaciN.html',
        controller: 'episaturaciNCtrl'
      }
    }
  })

  .state('menu.folSticoEpipedN', {
    url: '/Folístico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/folSticoEpipedN.html',
        controller: 'folSticoEpipedNCtrl'
      }
    }
  })

  .state('menu.frGicasPropiedades', {
    url: '/Frágicas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frGicasPropiedades.html',
        controller: 'frGicasPropiedadesCtrl'
      }
    }
  })

  .state('menu.fragipN', {
    url: '/Fragipán',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fragipN.html',
        controller: 'fragipNCtrl'
      }
    }
  })

  .state('menu.frGido', {
    url: '/Frígido',
    views: {
      'side-menu21': {
        templateUrl: 'templates/frGido.html',
        controller: 'frGidoCtrl'
      }
    }
  })

  .state('menu.materialesGLicos', {
    url: '/Gélicos (Materiales)',
    views: {
      'side-menu21': {
        templateUrl: 'templates/materialesGLicos.html',
        controller: 'materialesGLicosCtrl'
      }
    }
  })

  .state('menu.gilgaiMicrorrelieve', {
    url: '/Gilgai',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gilgaiMicrorrelieve.html',
        controller: 'gilgaiMicrorrelieveCtrl'
      }
    }
  })

  .state('menu.glSsicoHorizonte', {
    url: '/Glóssico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/glSsicoHorizonte.html',
        controller: 'glSsicoHorizonteCtrl'
      }
    }
  })

  .state('menu.gypsicoHorizonte', {
    url: '/Gypsico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gypsicoHorizonte.html',
        controller: 'gypsicoHorizonteCtrl'
      }
    }
  })

  .state('menu.hMicoMaterial', {
    url: '/Hémico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hMicoMaterial.html',
        controller: 'hMicoMaterialCtrl'
      }
    }
  })

  .state('menu.hidromorfismo', {
    url: '/Hidromorfismo',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hidromorfismo.html',
        controller: 'hidromorfismoCtrl'
      }
    }
  })

  .state('menu.hipertRmico', {
    url: '/Hipertérmico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hipertRmico.html',
        controller: 'hipertRmicoCtrl'
      }
    }
  })

  .state('menu.hSticoHorizonte', {
    url: '/Hístico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hSticoHorizonte.html',
        controller: 'hSticoHorizonteCtrl'
      }
    }
  })

  .state('menu.hue', {
    url: '/hue',
    views: {
      'side-menu21': {
        templateUrl: 'templates/hue.html',
        controller: 'hueCtrl'
      }
    }
  })

  .state('menu.interdigitacionesDeMatLbicos', {
    url: '/Interdigitaciones',
    views: {
      'side-menu21': {
        templateUrl: 'templates/interdigitacionesDeMatLbicos.html',
        controller: 'interdigitacionesDeMatLbicosCtrl'
      }
    }
  })

  .state('menu.kNdicoHorizonte', {
    url: '/Kándico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/kNdicoHorizonte.html',
        controller: 'kNdicoHorizonteCtrl'
      }
    }
  })

  .state('menu.lamela', {
    url: '/Lamelas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/lamela.html',
        controller: 'lamelaCtrl'
      }
    }
  })

  .state('menu.loess', {
    url: '/loess',
    views: {
      'side-menu21': {
        templateUrl: 'templates/loess.html',
        controller: 'loessCtrl'
      }
    }
  })

  .state('menu.melNicoHorizonte', {
    url: '/Melánico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/melNicoHorizonte.html',
        controller: 'melNicoHorizonteCtrl'
      }
    }
  })

  .state('menu.mSico', {
    url: '/Mésico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mSico.html',
        controller: 'mSicoCtrl'
      }
    }
  })

  .state('menu.mLicoHorizonte', {
    url: '/Mólico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/mLicoHorizonte.html',
        controller: 'mLicoHorizonteCtrl'
      }
    }
  })

  .state('menu.nTricoHorizonte', {
    url: '/Nátrico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/nTricoHorizonte.html',
        controller: 'nTricoHorizonteCtrl'
      }
    }
  })

  .state('menu.CricoHorizonte', {
    url: '/Ócrico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/CricoHorizonte.html',
        controller: 'CricoHorizonteCtrl'
      }
    }
  })

  .state('menu.orden', {
    url: '/Orden',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orden.html',
        controller: 'ordenCtrl'
      }
    }
  })

  .state('menu.orsteinHorizonte', {
    url: '/Orstein',
    views: {
      'side-menu21': {
        templateUrl: 'templates/orsteinHorizonte.html',
        controller: 'orsteinHorizonteCtrl'
      }
    }
  })

  .state('menu.XicoHorizonte', {
    url: '/Óxico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/XicoHorizonte.html',
        controller: 'XicoHorizonteCtrl'
      }
    }
  })

  .state('menu.plGenoPlaggenHorizonte', {
    url: '/Plágeno',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plGenoPlaggenHorizonte.html',
        controller: 'plGenoPlaggenHorizonteCtrl'
      }
    }
  })

  .state('menu.pergLico', {
    url: '/Pergélico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pergLico.html',
        controller: 'pergLicoCtrl'
      }
    }
  })

  .state('menu.gLicoRGimenDeTemperatura', {
    url: '/Gélico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/gLicoRGimenDeTemperatura.html',
        controller: 'gLicoRGimenDeTemperaturaCtrl'
      }
    }
  })

  .state('menu.permafrost', {
    url: '/Permafrost',
    views: {
      'side-menu21': {
        templateUrl: 'templates/permafrost.html',
        controller: 'permafrostCtrl'
      }
    }
  })

  .state('menu.petrocLcicoHorizonte', {
    url: '/Petrocálcico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petrocLcicoHorizonte.html',
        controller: 'petrocLcicoHorizonteCtrl'
      }
    }
  })

  .state('menu.petrogPsicoHorizonte', {
    url: '/Petrogípsico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petrogPsicoHorizonte.html',
        controller: 'petrogPsicoHorizonteCtrl'
      }
    }
  })

  .state('menu.plCicoHorizonte', {
    url: '/Plácico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plCicoHorizonte.html',
        controller: 'plCicoHorizonteCtrl'
      }
    }
  })

  .state('menu.plintita', {
    url: '/Plintita',
    views: {
      'side-menu21': {
        templateUrl: 'templates/plintita.html',
        controller: 'plintitaCtrl'
      }
    }
  })

  .state('menu.pSIPorcentajeSodioInterc', {
    url: '/PSI',
    views: {
      'side-menu21': {
        templateUrl: 'templates/pSIPorcentajeSodioInterc.html',
        controller: 'pSIPorcentajeSodioIntercCtrl'
      }
    }
  })

  .state('menu.sLicoHorizonte', {
    url: '/Sálico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sLicoHorizonte.html',
        controller: 'sLicoHorizonteCtrl'
      }
    }
  })

  .state('menu.secciNDeControlDeHumedad', {
    url: '/Sección Control Humedad',
    views: {
      'side-menu21': {
        templateUrl: 'templates/secciNDeControlDeHumedad.html',
        controller: 'secciNDeControlDeHumedadCtrl'
      }
    }
  })

  .state('menu.secciNDeControlDeTamaODePartCulas', {
    url: '/SCparticulas',
    views: {
      'side-menu21': {
        templateUrl: 'templates/secciNDeControlDeTamaODePartCulas.html',
        controller: 'secciNDeControlDeTamaODePartCulasCtrl'
      }
    }
  })

  .state('menu.silicatos', {
    url: '/silicatos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/silicatos.html',
        controller: 'silicatosCtrl'
      }
    }
  })

  .state('menu.slickensides', {
    url: '/Slickensides',
    views: {
      'side-menu21': {
        templateUrl: 'templates/slickensides.html',
        controller: 'slickensidesCtrl'
      }
    }
  })

  .state('menu.sMbricoHorizonte', {
    url: '/Sómbrico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sMbricoHorizonte.html',
        controller: 'sMbricoHorizonteCtrl'
      }
    }
  })

  .state('menu.sphagnum', {
    url: '/Sphagnum',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sphagnum.html',
        controller: 'sphagnumCtrl'
      }
    }
  })

  .state('menu.spDicoHorizonte', {
    url: '/Spódico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spDicoHorizonte.html',
        controller: 'spDicoHorizonteCtrl'
      }
    }
  })

  .state('menu.spDicosMateriales', {
    url: '/Materiales Spódicos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/spDicosMateriales.html',
        controller: 'spDicosMaterialesCtrl'
      }
    }
  })

  .state('menu.sulfDicosMateriales', {
    url: '/Sulfídicos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfDicosMateriales.html',
        controller: 'sulfDicosMaterialesCtrl'
      }
    }
  })

  .state('menu.sulfRicoHorizonte', {
    url: '/Sulfúrico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sulfRicoHorizonte.html',
        controller: 'sulfRicoHorizonteCtrl'
      }
    }
  })

  .state('menu.tRmicoRGimenDeTemperatura', {
    url: '/Térmico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tRmicoRGimenDeTemperatura.html',
        controller: 'tRmicoRGimenDeTemperaturaCtrl'
      }
    }
  })

  .state('menu.tRricoRGimenDeHumedad', {
    url: '/Tórrico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/tRricoRGimenDeHumedad.html',
        controller: 'tRricoRGimenDeHumedadCtrl'
      }
    }
  })

  .state('menu.DicoRGimenDeHumedad', {
    url: '/Údico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/DicoRGimenDeHumedad.html',
        controller: 'DicoRGimenDeHumedadCtrl'
      }
    }
  })

  .state('menu.MbricoHorizonte', {
    url: '/Úmbrico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/MbricoHorizonte.html',
        controller: 'MbricoHorizonteCtrl'
      }
    }
  })

  .state('menu.usticoRGimenDeHumedad', {
    url: '/Ústico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/usticoRGimenDeHumedad.html',
        controller: 'usticoRGimenDeHumedadCtrl'
      }
    }
  })

  .state('menu.valorN', {
    url: '/Valor n',
    views: {
      'side-menu21': {
        templateUrl: 'templates/valorN.html',
        controller: 'valorNCtrl'
      }
    }
  })

  .state('menu.xRicoRGimenDeHumedad', {
    url: '/Xérico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/xRicoRGimenDeHumedad.html',
        controller: 'xRicoRGimenDeHumedadCtrl'
      }
    }
  })

  .state('menu.densidadAparente', {
    url: '/Densidad aparente',
    views: {
      'side-menu21': {
        templateUrl: 'templates/densidadAparente.html',
        controller: 'densidadAparenteCtrl'
      }
    }
  })

  .state('menu.perDico', {
    url: '/Perúdico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/perDico.html',
        controller: 'perDicoCtrl'
      }
    }
  })

  .state('menu.saturaciNConBases', {
    url: '/Saturación con bases',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saturaciNConBases.html',
        controller: 'saturaciNConBasesCtrl'
      }
    }
  })

  .state('menu.cuneiforme', {
    url: '/Cuneiforme',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cuneiforme.html',
        controller: 'cuneiformeCtrl'
      }
    }
  })

  .state('menu.rasgosRedoximRficos', {
    url: '/Rasgos redoximórficos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/rasgosRedoximRficos.html',
        controller: 'rasgosRedoximRficosCtrl'
      }
    }
  })

  .state('menu.isofrGido', {
    url: '/Isofrígido',
    views: {
      'side-menu21': {
        templateUrl: 'templates/isofrGido.html',
        controller: 'isofrGidoCtrl'
      }
    }
  })

  .state('menu.isohipertRmico', {
    url: '/isohipertermico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/isohipertRmico.html',
        controller: 'isohipertRmicoCtrl'
      }
    }
  })

  .state('menu.isotRmico', {
    url: '/isotermico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/isotRmico.html',
        controller: 'isotRmicoCtrl'
      }
    }
  })

  .state('menu.isomSico', {
    url: '/isomesico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/isomSico.html',
        controller: 'isomSicoCtrl'
      }
    }
  })

  .state('menu.contactoDNsico', {
    url: '/Contacto_dénsico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/contactoDNsico.html',
        controller: 'contactoDNsicoCtrl'
      }
    }
  })

  .state('menu.petrofRricoContacto', {
    url: '/Petroferrico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/petrofRricoContacto.html',
        controller: 'petrofRricoContactoCtrl'
      }
    }
  })

  .state('menu.fBricosMateriales', {
    url: '/Fibricos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/fBricosMateriales.html',
        controller: 'fBricosMaterialesCtrl'
      }
    }
  })

  .state('menu.sPricosMateriales', {
    url: '/Sapricos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/sPricosMateriales.html',
        controller: 'sPricosMaterialesCtrl'
      }
    }
  })

  .state('menu.saturaciNAgua', {
    url: '/saturacionconagua',
    views: {
      'side-menu21': {
        templateUrl: 'templates/saturaciNAgua.html',
        controller: 'saturaciNAguaCtrl'
      }
    }
  })

  .state('menu.humilVicosMateriales', {
    url: '/Humiluvico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/humilVicosMateriales.html',
        controller: 'humilVicosMaterialesCtrl'
      }
    }
  })

  .state('menu.iluviaciNIluvial', {
    url: '/iluvial',
    views: {
      'side-menu21': {
        templateUrl: 'templates/iluviaciNIluvial.html',
        controller: 'iluviaciNIluvialCtrl'
      }
    }
  })

  .state('menu.NdiceMelNico', {
    url: '/indicemelanico',
    views: {
      'side-menu21': {
        templateUrl: 'templates/NdiceMelNico.html',
        controller: 'NdiceMelNicoCtrl'
      }
    }
  })

  .state('galeria', {
    url: '/Galeria',
    templateUrl: 'templates/galeria.html',
    controller: 'galeriaCtrl'
  })

  .state('menu.modoDeUso', {
    url: '/ModoUso',
    views: {
      'side-menu21': {
        templateUrl: 'templates/modoDeUso.html',
        controller: 'modoDeUsoCtrl'
      }
    }
  })

  .state('menu.claveEpipedones', {
    url: '/claveEpipedones',
    views: {
      'side-menu21': {
        templateUrl: 'templates/claveEpipedones.html',
        controller: 'claveEpipedonesCtrl'
      }
    }
  })

  .state('menu.aluvial', {
    url: '/aluvial',
    views: {
      'side-menu21': {
        templateUrl: 'templates/aluvial.html',
        controller: 'aluvialCtrl'
      }
    }
  })

  .state('menu.cIC', {
    url: '/cICAparente',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cIC.html',
        controller: 'cICCtrl'
      }
    }
  })

  .state('menu.textura', {
    url: '/textura',
    views: {
      'side-menu21': {
        templateUrl: 'templates/textura.html',
        controller: 'texturaCtrl'
      }
    }
  })

  .state('menu.till', {
    url: '/till',
    views: {
      'side-menu21': {
        templateUrl: 'templates/till.html',
        controller: 'tillCtrl'
      }
    }
  })

  .state('menu.value', {
    url: '/value',
    views: {
      'side-menu21': {
        templateUrl: 'templates/value.html',
        controller: 'valueCtrl'
      }
    }
  })

  .state('menu.caCO3Equivalente', {
    url: '/caco3equivalente',
    views: {
      'side-menu21': {
        templateUrl: 'templates/caCO3Equivalente.html',
        controller: 'caCO3EquivalenteCtrl'
      }
    }
  })

  .state('menu.elementosFormativosOrden', {
    url: '/elementosformativosorden',
    views: {
      'side-menu21': {
        templateUrl: 'templates/elementosFormativosOrden.html',
        controller: 'elementosFormativosOrdenCtrl'
      }
    }
  })

  .state('menu.elementosFormativosSuborden', {
    url: '/elementosformativosSO',
    views: {
      'side-menu21': {
        templateUrl: 'templates/elementosFormativosSuborden.html',
        controller: 'elementosFormativosSubordenCtrl'
      }
    }
  })

  .state('menu.elementosFormativosGG', {
    url: '/elementosformativosGG',
    views: {
      'side-menu21': {
        templateUrl: 'templates/elementosFormativosGG.html',
        controller: 'elementosFormativosGGCtrl'
      }
    }
  })

  .state('menu.horizontesYCaracterSticasDeDiagnStico', {
    url: '/horizontesdiagnosticos',
    views: {
      'side-menu21': {
        templateUrl: 'templates/horizontesYCaracterSticasDeDiagnStico.html',
        controller: 'horizontesYCaracterSticasDeDiagnSticoCtrl'
      }
    }
  })

  .state('menu.endopedones', {
    url: '/endopedones',
    views: {
      'side-menu21': {
        templateUrl: 'templates/endopedones.html',
        controller: 'endopedonesCtrl'
      }
    }
  })

  .state('menu.caracterSticasDeDiagnStico', {
    url: '/CDminerales',
    views: {
      'side-menu21': {
        templateUrl: 'templates/caracterSticasDeDiagnStico.html',
        controller: 'caracterSticasDeDiagnSticoCtrl'
      }
    }
  })

  .state('menu.regMenesDeHumedadDeSuelo', {
    url: '/regimenhumedad',
    views: {
      'side-menu21': {
        templateUrl: 'templates/regMenesDeHumedadDeSuelo.html',
        controller: 'regMenesDeHumedadDeSueloCtrl'
      }
    }
  })

  .state('menu.regMenesDeTemperaturaDeSuelo', {
    url: '/regimentemperatura',
    views: {
      'side-menu21': {
        templateUrl: 'templates/regMenesDeTemperaturaDeSuelo.html',
        controller: 'regMenesDeTemperaturaDeSueloCtrl'
      }
    }
  })

  .state('menu.usoDeSoilTaxonomy', {
    url: '/mapaST',
    views: {
      'side-menu21': {
        templateUrl: 'templates/usoDeSoilTaxonomy.html',
        controller: 'usoDeSoilTaxonomyCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/blankpage/page1')


});