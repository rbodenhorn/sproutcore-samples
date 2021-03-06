// ==========================================================================
// Project:   IphoneDemo
// Copyright: ©2009 My Company, Inc.
// ==========================================================================
/*globals IphoneDemo */

// This is the function that will start your app running.  The default
// implementation will load any fixtures you have created then instantiate
// your controllers and awake the elements on your page.
//
// As you develop your application you will probably want to override this.
// See comments for some pointers on what to do next.
//
IphoneDemo.main = function main() {

  // Step 1: Load Your Model Data
  // The default code here will load the fixtures you have defined.
  // Comment out the preload line and add something to refresh from the server
  // when you are ready to pull data from your server.
  //IphoneDemo.store.preload(IphoneDemo.FIXTURES) ;

  // Step 2: Instantiate Your Views
  // The default code here will make the mainPane for your application visible
  // on screen.  If you app gets any level of complexity, you will probably 
  // create multiple pages and panes.  
  IphoneDemo.getPath('mainPage.mainPane').append() ;

  // Step 3. Set the content property on your primary controller.
  // This will make your app come alive!

  // TODO: Set the content property on your primary controller
  // ex: .contactsController.set('content',.contacts);
} ;

function main() { IphoneDemo.main(); }
