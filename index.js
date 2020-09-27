const snmp = require("net-snmp");
const express = require('express')
const app = express()
const port = 80
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

let dcPowerSystemStatus1 = 1;
let dcPowerSystemFault1 = 1;

app.get('/', function (req, res) {
    res.send('Hello World!')
});

// Default options
const options = {
    port: 161,
    disableAuthorization: false,
    accessControlModelType: snmp.AccessControlModelType.Simple,
    engineID: "8000B98380XXXXXXXXXXXX", // where the X's are random hex digits
    transport: "udp4"
};

const callback = function (error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(JSON.stringify(data, null, 2));
    }
};

agent = snmp.createAgent(options, callback);
var authorizer = agent.getAuthorizer();
authorizer.addCommunity("public");
var acm = authorizer.getAccessControlModel();
acm.setCommunityAccess("public", snmp.AccessLevel.ReadOnly);

const mib = agent.getMib();


// This 'registerProvider()' sends a Register PDU to the master to register a region of the MIB
// for which the master will send "request processing" PDUs to the subagent.
agent.registerProvider({
    name: 'software_version',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.53864.1.1.1',  // OID 1
    scalarType: snmp.ObjectType.OctetString,
    handler: (mibRequest) => {
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('software_version', '6.1.1');

agent.registerProvider({
    name: 'dcPowerSystemBusbarVoltage1',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.2.1',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcPowerSystemBusbarVoltage1', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcPowerSystemBusbarVoltage1', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcPowerSystemTotalRectCurrent1',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.2.2',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcPowerSystemTotalRectCurrent1', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTotalRectCurrent1', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcPowerSystemTotalBatteryCurrent1',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.2.3',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcPowerSystemTotalBatteryCurrent1', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTotalBatteryCurrent1', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcPowerSystemTotalOutputCurrent1',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.2.4',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcPowerSystemTotalOutputCurrent1', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTotalOutputCurrent1', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcPowerSystemTotalOutputPower1',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.2.5',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcPowerSystemTotalOutputPower1', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTotalOutputPower1', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcPowerSystemStatus1',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.2.6',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcPowerSystemStatus1', getdcPowerSystemStatus1());
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcPowerSystemStatus1', getdcPowerSystemStatus1());

agent.registerProvider({
    name: 'dcPowerSystemFault1',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.2.7',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcPowerSystemFault1', getdcPowerSystemFault1());
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcPowerSystemFault1', getdcPowerSystemFault1());

agent.registerProvider({
    name: 'dcPowerSystemTemperature1',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.2.8',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcPowerSystemTemperature1', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcPowerSystemTemperature1', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcRectifierNumRectifiers',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.4.2.1.3',
    tableColumns: [
        {
            number: 1,
            name: "dcRectifierStatus1",
            type: snmp.ObjectType.Integer,
            handler: (mibRequest) => {
                mib.setScalarValue('dcRectifierStatus1', Math.floor(Math.random() * 101));
                mibRequest.done();
            }
        },
        {
            number: 2,
            name: "dcRectifierStatus2",
            type: snmp.ObjectType.Integer,
            handler: (mibRequest) => {
                mib.setScalarValue('dcRectifierStatus2', Math.floor(Math.random() * 101));
                mibRequest.done();
            }
        },
        {
            number: 3,
            name: "dcRectifierStatus3",
            type: snmp.ObjectType.Integer,
            handler: (mibRequest) => {
                mib.setScalarValue('dcRectifierStatus3', Math.floor(Math.random() * 101));
                mibRequest.done();
            }
        }
    ],
}, null);

agent.registerProvider({
    name: 'dcBatteryMainFault',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.5.1',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcBatteryMainFault', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcBatteryMainFault', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcBatteryNumBatteries',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.5.2',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcBatteryNumBatteries', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcBatteryNumBatteries', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcControlMode',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.9.1',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcControlMode', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcControlMode', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcControlRestartFaultyUnits',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.9.2',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcControlRestartFaultyUnits', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcControlRestartFaultyUnits', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcConfigFloatVoltage',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.10.1',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcConfigFloatVoltage', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcConfigFloatVoltage', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcConfigBoostVoltage',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.10.2',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcConfigBoostVoltage', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcConfigBoostVoltage', Math.floor(Math.random() * 101));

agent.registerProvider({
    name: 'dcConfigStandbyVoltage',
    type: snmp.MibProviderType.Scalar,
    oid: '1.3.6.1.4.1.27383.1.1.10.3',
    scalarType: snmp.ObjectType.Integer,
    handler: (mibRequest) => {
        mib.setScalarValue('dcConfigStandbyVoltage', Math.floor(Math.random() * 101));
        mibRequest.done();
    }
}, null);
agent.getMib().setScalarValue('dcConfigStandbyVoltage', Math.floor(Math.random() * 101));


function getdcPowerSystemStatus1() {
    //1 Auto, 2 Test, 3 Wartung
    return dcPowerSystemStatus1;
}

function getdcPowerSystemFault1() {
    //0 Stoerung, 1 OK, 2 Wartung
    return dcPowerSystemFault1;
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/status/:number', (req, res) => {
    let number = parseInt(req.params.number);
    if (number >= 1 && number <= 3) {
        dcPowerSystemStatus1 = number;
        res.send('ok!')
    }
    else {
        res.send('out of range. 1 Auto, 2 Test, 3 Wartung')
    }
})

app.get('/fault/:number', (req, res) => {
    let number = parseInt(req.params.number);
    if (number >= 0 && number <= 2) {
        dcPowerSystemFault1 = number;
        res.send('ok!')
    }
    else {
        res.send('out of range. 0 Stoerung, 1 OK, 2 Wartung')
    }
})