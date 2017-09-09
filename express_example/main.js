/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/**
 * Created by Andrew D.Laptev<a.d.laptev@gmail.com> on 1/21/15.
 */

var CAMERA_HOST = '192.168.102.139',
	USERNAME = 'admin',
	PASSWORD = '1111',
	PORT = 3000, 
	SERVER_DEVICE_ID = 'a8:16:04:c5:95:bf';

var http = require('http'),
	url = require('url'),
	io = require('socket.io-client'),
	onvif = require('./onvif/lib/onvif'),
	Cam = require('./onvif').Cam;

function getToken(callback){
	var options = {
		host: 'localhost:',
		port: '3000',
		path: '/login?username='+USERNAME+'&password='+PASSWORD+'&action=login',
		method: 'GET'
	};
	console.log('before request');
}

function socketConnect(token){
	socket = io.connect('http://10.13.11.152:3002', { query: 'token=' + token });
//	socket.on('connect', function (data) {
//        socket.emit('join', { device_id: SERVER_DEVICE_ID });
//
//        socket.on("join", function (data) {
//            console.log(data.message);
//        });
//        socket.on('error', function (data) {
//            console.log('error here');
//            console.log(data);
//        });
//        socket.on('connect_error', function (data) {
//            console.log(data);
//        });
//        socket.on('disconnect', function (reason) {
//            console.log("disconnect socket " + reason);
//        });
//
//        socket.on('OnvifControl', function(data){
//        	try{
//        		console.log(data);
//        		var dataReq = data;
//        		var hostname = dataReq.hostname ? dataReq.hostname : null;
//				var username = dataReq.username ? dataReq.username : null;
//				var password = dataReq.password ? dataReq.password : null;
//				var method = dataReq.method ? dataReq.method : null;
//				var dataPost = dataReq.data_post ? dataReq.data_post : null;
//
//				var cameraId = dataReq.camera_id ? dataReq.camera_id : null;
//				var dataExtend = dataReq.data_extend ? dataReq.data_extend : null;
//				//discovery cams
//				onvif.Discovery.probe(function(err, cams) {
//					if (err) { 
//						socket.emit('OnvifResult', {code: 1, error: err, message: 'Error when discovery'});
//						return false;
//					}
//					var port = null
//					cams.forEach(function(cam) {
//						console.log('list cameras');
//						console.log(cam.hostname + ':' + cam.port);
//						if(cam.hostname === hostname){
//							port = cam.port;
//						}
//						else if(hostname === '192.168.102.139'){
//							port = '2000';
//						}
//					});
//					if(!port){
//						socket.emit('OnvifResult', {code: 1, error: null, message: 'Cannot found camera'});
//						return false;	
//					}
//					new Cam({
//						hostname: hostname,
//						username: username,
//						password: password,
//						port: port
//					}, function(err) {
//						if (err) {
//							console.log('Connection Failed for ' + hostname + ' Port: ' + port + ' Username: ' + username + ' Password: ' + password);
//							return;
//						}
//						console.log('CONNECTED CAMERA ' + hostname);
//						this.absoluteMove({
//							x: 1
//							, y: 1
//							, zoom: 1
//						});
//
//						var camera = this;
//						if(typeof(camera[method]) !== "function"){
//							socket.emit('OnvifResult', {code: 1, error: 'no method ' +  method});
//						}
//						else if(dataPost){
//							camera[method](dataPost, function(err, data, xml){
//								if(err){
//									socket.emit('OnvifResult', {code: 1, error: err, camera_id: cameraId, device_id: SERVER_DEVICE_ID, action: method, data_extend: dataExtend});
//								}
//								else{
//									socket.emit('OnvifResult', {code: 0, data: data, camera_id: cameraId, device_id: SERVER_DEVICE_ID, action: method, data_extend: dataExtend});	
//								}
//							});	
//						}
//						else{
//							camera[method](function(err, data, xml){
//								if(err){
//									socket.emit('OnvifResult', {code: 1, error: err, camera_id: cameraId, device_id: SERVER_DEVICE_ID, action: method, data_extend: dataExtend});
//								}
//								else{
//									socket.emit('OnvifResult', {code: 0, data: data, camera_id: cameraId, device_id: SERVER_DEVICE_ID, action: method, data_extend: dataExtend});	
//								}
//							});	
//						}
//						
//					});
//				});
//        	}
//        	catch(e){
//        		console.log(e);
//        	}
//        });
//    });
}

getToken(function(token){
	socketConnect(token);
});
















