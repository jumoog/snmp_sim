const snmp = require("net-snmp");
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 80;
app.listen(port, () =>
{
  console.log(`Example app listening at http://localhost:${port}`)
})
app.use('/static', express.static('public'));
app.use('/favicon.ico', express.static('public/favicon.ico'));
app.use(bodyParser.urlencoded(
{
  extended: false
}));
app.get('/', function (req, res)
{
  res.sendFile(path.join(__dirname + '/public/index.html'));
});
let dcPowerSystemStatus1 = 1;
let dcPowerSystemFault1 = 1;
let _Batterie_Entladung = 1;
let _stoerung_kommunikation_MCU_TCP_IP_Adapter = 1;
let _UGV_Redundanzfehler = 1;
let _UGV_Netzfehler = 1;
let _UGV_Batterieentladung_SV2 = 1;
let _UGV_Geraetestoerung_SV1 = 1;
let _Busfehler_zu_den_Gleichrichtern_System_Komponente = 1;
let _Gleichrichterfehler_Modulstoerung = 1;
let _UGV_Auslastung_gr_80_Proz = 1;

// Default options
const options = {
  port: 161,
  disableAuthorization: false,
  accessControlModelType: snmp.AccessControlModelType.Simple,
  engineID: "8000B98380XXXXXXXXXXXX", // where the X's are random hex digits
  transport: "udp4"
};
const callback = function (error, data)
{
  if (error)
  {
    console.error(error);
  }
  else
  {
    console.log(JSON.stringify(data, null, 2));
  }
};
agent = snmp.createAgent(options, callback);
var authorizer = agent.getAuthorizer();
authorizer.addCommunity("public");
var acm = authorizer.getAccessControlModel();
acm.setCommunityAccess("public", snmp.AccessLevel.ReadOnly);
const mib = agent.getMib();
agent.registerProvider(
{
  name: 'vendor_name',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.1.1',
  scalarType: snmp.ObjectType.OctetString,
  handler: (mibRequest) =>
  {
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('vendor_name', 'Benning');
agent.registerProvider(
{
  name: 'model_name',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.1.2',
  scalarType: snmp.ObjectType.OctetString,
  handler: (mibRequest) =>
  {
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('model_name', 'GBV 48/60V 600A');
agent.registerProvider(
{
  name: 'software_version',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.3.2',
  scalarType: snmp.ObjectType.OctetString,
  handler: (mibRequest) =>
  {
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('software_version', 'V 1.05.02 / 607');
agent.registerProvider(
{
  name: 'dcPowerSystemBusbarVoltage1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.2.1',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcPowerSystemBusbarVoltage1', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcPowerSystemBusbarVoltage1', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcPowerSystemTotalRectCurrent1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.2.2',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcPowerSystemTotalRectCurrent1', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTotalRectCurrent1', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcPowerSystemTotalBatteryCurrent1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.2.3',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcPowerSystemTotalBatteryCurrent1', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTotalBatteryCurrent1', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcPowerSystemTotalOutputCurrent1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.2.4',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcPowerSystemTotalOutputCurrent1', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTotalOutputCurrent1', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcPowerSystemTotalOutputPower1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.2.5',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcPowerSystemTotalOutputPower1', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTotalOutputPower1', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcPowerSystemStatus1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.2.6',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcPowerSystemStatus1', _dcPowerSystemStatus1);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcPowerSystemStatus1', _dcPowerSystemStatus1);
agent.registerProvider(
{
  name: 'dcPowerSystemFault1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.2.7',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcPowerSystemFault1', _dcPowerSystemFault1);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcPowerSystemFault1', _dcPowerSystemFault1);
agent.registerProvider(
{
  name: 'dcPowerSystemTemperature1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.2.8',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcPowerSystemTemperature1', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTemperature1', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcBatteryMainFault',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.5.1',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcBatteryMainFault', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcBatteryMainFault', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcBatteryNumBatteries',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.5.2',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcBatteryNumBatteries', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcBatteryNumBatteries', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcControlMode',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.9.1',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcControlMode', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcControlMode', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcControlRestartFaultyUnits',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.9.2',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcControlRestartFaultyUnits', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcControlRestartFaultyUnits', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcConfigFloatVoltage',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.10.1',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcConfigFloatVoltage', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcConfigFloatVoltage', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcConfigBoostVoltage',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.10.2',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcConfigBoostVoltage', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcConfigBoostVoltage', Math.floor(Math.random() * 101));
agent.registerProvider(
{
  name: 'dcConfigStandbyVoltage',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.10.3',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('dcConfigStandbyVoltage', Math.floor(Math.random() * 101));
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('dcConfigStandbyVoltage', Math.floor(Math.random() * 101));
// Stoerung Kommunikation MCU_TCP_IP Adapter
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'stoerung_kommunikation_MCU_TCP_IP_Adapter',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.1',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('stoerung_kommunikation_MCU_TCP_IP_Adapter', _stoerung_kommunikation_MCU_TCP_IP_Adapter);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('stoerung_kommunikation_MCU_TCP_IP_Adapter', _stoerung_kommunikation_MCU_TCP_IP_Adapter);
// UGV Redundanzfehler
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'UGV_Redundanzfehler',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.13',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('UGV_Redundanzfehler', _UGV_Redundanzfehler);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('UGV_Redundanzfehler', _UGV_Redundanzfehler);
// UGV Netzfehler
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'UGV_Netzfehler',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.2',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('UGV_Netzfehler', _UGV_Netzfehler);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('UGV_Netzfehler', _UGV_Netzfehler);
// UGV Batterieentladung SV2
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'UGV_Batterieentladung_SV2',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.22',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('UGV_Batterieentladung_SV2', _UGV_Batterieentladung_SV2);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('UGV_Batterieentladung_SV2', _UGV_Batterieentladung_SV2);
// UGV Geraetestoerung SV1
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'UGV_Geraetestoerung_SV1',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.23',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('UGV_Geraetestoerung_SV1', _UGV_Geraetestoerung_SV1);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('UGV_Geraetestoerung_SV1', _UGV_Geraetestoerung_SV1);
// Busfehler zu den Gleichrichtern_System Komponente
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'Busfehler_zu_den_Gleichrichtern_System_Komponente',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.24',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('Busfehler_zu_den_Gleichrichtern_System_Komponente', _Busfehler_zu_den_Gleichrichtern_System_Komponente);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('Busfehler_zu_den_Gleichrichtern_System_Komponente', _Busfehler_zu_den_Gleichrichtern_System_Komponente);
// Gleichrichterfehler_Modulstoerung
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'Gleichrichterfehler_Modulstoerung',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.3',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('Gleichrichterfehler_Modulstoerung', _Gleichrichterfehler_Modulstoerung);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('Gleichrichterfehler_Modulstoerung', _Gleichrichterfehler_Modulstoerung);
// UGV Auslastung gr 80 Proz
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'UGV_Auslastung_gr_80_Proz',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.68',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('UGV_Auslastung_gr_80_Proz', _UGV_Auslastung_gr_80_Proz);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('UGV_Auslastung_gr_80_Proz', _UGV_Auslastung_gr_80_Proz);
// Batterie Entladung
// 0 Normal, 1 Stoerung, 2 nicht vorhanden
agent.registerProvider(
{
  name: 'Batterie_Entladung',
  type: snmp.MibProviderType.Scalar,
  oid: '1.3.6.1.4.1.27383.1.1.11.4.7',
  scalarType: snmp.ObjectType.Integer,
  handler: (mibRequest) =>
  {
    mib.setScalarValue('Batterie_Entladung', _Batterie_Entladung);
    mibRequest.done();
  }
}, null);
agent.getMib().setScalarValue('Batterie_Entladung', _Batterie_Entladung);

app.post('/set', (req, res) =>
{
  let parsed = JSON.parse(req.body.form_data);
  _stoerung_kommunikation_MCU_TCP_IP_Adapter = parseInt(parsed._stoerung_kommunikation_MCU_TCP_IP_Adapter);
  _UGV_Redundanzfehler = parseInt(parsed._UGV_Redundanzfehler);
  _UGV_Netzfehler = parseInt(parsed._UGV_Netzfehler);
  _UGV_Batterieentladung_SV2 = parseInt(parsed._UGV_Batterieentladung_SV2);
  _UGV_Geraetestoerung_SV1 = parseInt(parsed._UGV_Geraetestoerung_SV1);
  _Busfehler_zu_den_Gleichrichtern_System_Komponente = parseInt(parsed._Busfehler_zu_den_Gleichrichtern_System_Komponente);
  _Gleichrichterfehler_Modulstoerung = parseInt(parsed._Gleichrichterfehler_Modulstoerung);
  _UGV_Auslastung_gr_80_Proz = parseInt(parsed._UGV_Auslastung_gr_80_Proz);
  _Batterie_Entladung = parseInt(parsed._Batterie_Entladung);
  res.send('ok!');
})