myCache
=======

A PhoneGap + AngularJS + Bootstrap  application, that illustrates the usage of localStorage to cache information, and display when network is not available


Instructions to Run:-

Clone the repo. Enter the folder. 

Execute 

    cordova build android

and then

    cordova run android

to run the app on your Android device. 

When internet is connected on device, the Hey there button will collect offers from internet, and will store the top 11 offers in the cache. 

When internet is disconnected, the offers from the cache will be displayed.

Note: Please ensure that JDK, Ant, Android SDK, Cordova v 3.3.0, Phonegap v 3.3.0 are installed. 
