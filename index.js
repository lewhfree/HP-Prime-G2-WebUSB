navigator.usb.getDevices().then((devices) => {
  devices.forEach((device) => {
    console.log(device.productName);
    console.log(device.manufacturerName);
  });
});
