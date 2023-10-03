import { Component } from '@angular/core';

import { BarcodeScanner } from '@capacitor-community/barcode-scanner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  startScan = async () => {
  // Check camera permission
  // This is just a simple example, check out the better checks below
  // await BarcodeScanner.checkPermission({ force: true });

  // make background of WebView transparent
  // note: if you are using ionic this might not be enough, check below
  console.log('starting scan');
  alert('starting scan');
  BarcodeScanner.hideBackground();

  const result = await BarcodeScanner.startScan(); // start scanning and wait for a result

  // if the result has content
  if (result.hasContent) {
    console.log(result.content); // log the raw scanned content
  }
};
stopScan = () => {
  BarcodeScanner.showBackground();
  BarcodeScanner.stopScan();
};
prepare = () => {
  BarcodeScanner.prepare();
};
askUser = () => {
  this.prepare();

  let c = confirm('Do you want to scan a barcode?');

  if (c) {
    this.startScan();
  } else {
    this.stopScan();
  }
};
checkPermission = async () => {
  // check or request permission
  console.log("seeking permission");
  // alert("seeking permission");
  const status = await BarcodeScanner.checkPermission({ force: true });
  
  if (status.granted) {
    // the user granted permission
    console.log("permission granted");
    alert("permission granted");
    return true;
  }
    console.log("permission not granted");
    alert("permission not granted");

  return false;
};
  async scanQR(){
    console.log("scan called from html");
    // alert("scan called from html");
  if(await this.checkPermission()){
    this.startScan();
  }
  else{
  }
}
}
