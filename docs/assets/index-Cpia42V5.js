(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`attached`,t=1e3,n=1001,r=1002,i=1003,a=1004,o=1005,s=1006,c=1007,l=1008,u=1009,d=1010,f=1011,p=1012,m=1013,h=1014,g=1015,_=1016,v=1017,y=1018,b=1020,x=35902,S=35899,C=1021,w=1022,T=1023,E=1026,D=1027,O=1028,ee=1029,k=1030,te=1031,ne=1033,re=33776,A=33777,ie=33778,j=33779,ae=35840,oe=35841,se=35842,ce=35843,le=36196,ue=37492,de=37496,M=37488,fe=37489,pe=37490,me=37491,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,Ce=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,Ie=2300,N=2301,Le=2302,Re=2303,ze=2400,P=2401,Be=2402,F=3200,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=35048,Je=2e3;function Ye(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function Xe(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}function Ze(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function Qe(){let e=Ze(`canvas`);return e.style.display=`block`,e}var $e={};function et(...e){let t=`THREE.`+e.shift();console.log(t,...e)}function tt(e){let t=e[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let t=e[1];t&&t.isStackTrace?e[0]+=` `+t.getLocation():e[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return e}function I(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.warn(n.getError(t)):console.warn(t,...e)}}function L(...e){e=tt(e);let t=`THREE.`+e.shift();{let n=e[0];n&&n.isStackTrace?console.error(n.getError(t)):console.error(t,...e)}}function nt(...e){let t=e.join(` `);t in $e||($e[t]=!0,I(...e))}function rt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}var it={0:0,2:6,4:4,3:5,1:1,6:2,7:7,5:3},at=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n!==void 0&&n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let r=n[e];if(r!==void 0){let e=r.indexOf(t);e!==-1&&r.splice(e,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let t=n.slice(0);for(let n=0,r=t.length;n<r;n++)t[n].call(this,e);e.target=null}}},ot=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),st=Math.PI/180,ct=180/Math.PI;function lt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ot[e&255]+ot[e>>8&255]+ot[e>>16&255]+ot[e>>24&255]+`-`+ot[t&255]+ot[t>>8&255]+`-`+ot[t>>16&15|64]+ot[t>>24&255]+`-`+ot[n&63|128]+ot[n>>8&255]+`-`+ot[n>>16&255]+ot[n>>24&255]+ot[r&255]+ot[r>>8&255]+ot[r>>16&255]+ot[r>>24&255]).toLowerCase()}function ut(e,t,n){return Math.max(t,Math.min(n,e))}function dt(e,t){return(e%t+t)%t}function ft(e,t,n){return(1-n)*e+n*t}function pt(e){return 2**Math.floor(Math.log(e)/Math.LN2)}function mt(e){switch(e.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function ht(e,t){if(t.constructor===Float32Array)return e;let n=mt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.max(e/n,-1)}function gt(e,t){if(t.constructor===Float32Array)return e;let n=mt(t);if(n===void 0)throw Error(`THREE.MathUtils: Invalid component type.`);return Math.round(e*n)}var R=class{static{this.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`THREE.Vector2: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`THREE.Vector2: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_t=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(u!==m||s!==d||c!==f||l!==p){let e=s*d+c*f+l*p+u*m;e<0&&(d=-d,f=-f,p=-p,m=-m,e=-e);let t=1-o;if(e<.9995){let n=Math.acos(e),r=Math.sin(n);t=Math.sin(t*n)/r,o=Math.sin(o*n)/r,s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o}else{s=s*t+d*o,c=c*t+f*o,l=l*t+p*o,u=u*t+m*o;let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:I(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ut(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,i=-i,a=-a,o=-o);let s=1-t;if(o<.9995){let e=Math.acos(o),c=Math.sin(e);s=Math.sin(s*e)/c,t=Math.sin(t*e)/c,this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this._onChangeCallback()}else this._x=this._x*s+n*t,this._y=this._y*s+r*t,this._z=this._z*s+i*t,this._w=this._w*s+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},z=class{static{this.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`THREE.Vector3: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`THREE.Vector3: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(yt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(yt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return vt.copy(this).projectOnVector(e),this.sub(vt)}reflect(e){return this.sub(vt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ut(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},vt=new z,yt=new _t,B=class{static{this.prototype.isMatrix3=!0}constructor(e,t,n,r,i,a,o,s,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return nt(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(bt.makeScale(e,t)),this}rotate(e){return nt(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(bt.makeRotation(-e)),this}translate(e,t){return nt(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(bt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bt=new B,xt=new B().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),St=new B().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ct(){let e={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n||(this.spaces[t].transfer===`srgb`&&(e.r=Tt(e.r),e.g=Tt(e.g),e.b=Tt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=Et(e.r),e.g=Et(e.g),e.b=Et(e.b))),e},workingToColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},colorSpaceToWorking:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getToneMappingMode:function(e){return this.spaces[e].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[n].fromXYZ).multiply(this.spaces[t].toXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return e.define({[He]:{primaries:t,whitePoint:r,transfer:Ue,toXYZ:xt,fromXYZ:St,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:t,whitePoint:r,transfer:We,toXYZ:xt,fromXYZ:St,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}}),e}var wt=Ct();function Tt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function Et(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var Dt,Ot=class{static getDataURL(e,t=`image/png`){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Dt===void 0&&(Dt=Ze(`canvas`)),Dt.width=e.width,Dt.height=e.height;let t=Dt.getContext(`2d`);e instanceof ImageData?t.putImageData(e,0,0):t.drawImage(e,0,0,e.width,e.height),n=Dt}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=Ze(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=Tt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(Tt(t[e]/255)*255):t[e]=Tt(t[e]);return{data:t,width:e.width,height:e.height}}return I(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},kt=0,At=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kt++}),this.uuid=lt(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<`u`&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<`u`&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t===null?e.set(0,0,0):e.set(t.width||0,t.height||0,t.depth||0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(jt(r[t].image)):e.push(jt(r[t]))}else e=jt(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function jt(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ot.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(I(`Texture: Unable to serialize Texture.`),{})}var Mt=0,Nt=new z,Pt=class e extends at{constructor(t=e.DEFAULT_IMAGE,r=e.DEFAULT_MAPPING,i=n,a=n,o=s,c=l,d=T,f=u,p=e.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mt++}),this.uuid=lt(),this.name=``,this.source=new At(t),this.mipmaps=[],this.mapping=r,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new R(0,0),this.repeat=new R(1,1),this.center=new R(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new B,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Nt).x}get height(){return this.source.getSize(Nt).y}get depth(){return this.source.getSize(Nt).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){I(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Texture.setValues(): property '${t}' does not exist.`):r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==300)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case t:e.x-=Math.floor(e.x);break;case n:e.x=e.x<0?0:1;break;case r:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x-=Math.floor(e.x)}if(e.y<0||e.y>1)switch(this.wrapT){case t:e.y-=Math.floor(e.y);break;case n:e.y=e.y<0?0:1;break;case r:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y-=Math.floor(e.y)}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null,Pt.DEFAULT_MAPPING=300,Pt.DEFAULT_ANISOTROPY=1;var Ft=class{static{this.prototype.isVector4=!0}constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`THREE.Vector4: index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`THREE.Vector4: index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ut(this.x,e.x,t.x),this.y=ut(this.y,e.y,t.y),this.z=ut(this.z,e.z,t.z),this.w=ut(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ut(this.x,e,t),this.y=ut(this.y,e,t),this.z=ut(this.z,e,t),this.w=ut(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ut(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},It=class extends at{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:s,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Ft(0,0,e,t),this.scissorTest=!1,this.viewport=new Ft(0,0,e,t),this.textures=[];let r=n.count;for(let i=0;i<r;i++)this.textures[i]=new Pt({width:e,height:t,depth:n.depth}),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:s,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let e=0;e<this.textures.length;e++)this.textures[e].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new At(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null){if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture}else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}},Lt=class extends It{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rt=class extends Pt{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},zt=class extends Pt{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=i,this.minFilter=i,this.wrapR=n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},V=class e{static{this.prototype.isMatrix4=!0}constructor(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,r=1/Bt.setFromMatrixColumn(e,0).length(),i=1/Bt.setFromMatrixColumn(e,1).length(),a=1/Bt.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ht,e,Ut)}lookAt(e,t,n){let r=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Wt.crossVectors(n,Kt),Wt.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Wt.crossVectors(n,Kt)),Wt.normalize(),Gt.crossVectors(Kt,Wt),r[0]=Wt.x,r[4]=Gt.x,r[8]=Kt.x,r[1]=Wt.y,r[5]=Gt.y,r[9]=Kt.y,r[2]=Wt.z,r[6]=Gt.z,r[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],D=r[9],O=r[13],ee=r[2],k=r[6],te=r[10],ne=r[14],re=r[3],A=r[7],ie=r[11],j=r[15];return i[0]=a*x+o*T+s*ee+c*re,i[4]=a*S+o*E+s*k+c*A,i[8]=a*C+o*D+s*te+c*ie,i[12]=a*w+o*O+s*ne+c*j,i[1]=l*x+u*T+d*ee+f*re,i[5]=l*S+u*E+d*k+f*A,i[9]=l*C+u*D+d*te+f*ie,i[13]=l*w+u*O+d*ne+f*j,i[2]=p*x+m*T+h*ee+g*re,i[6]=p*S+m*E+h*k+g*A,i[10]=p*C+m*D+h*te+g*ie,i[14]=p*w+m*O+h*ne+g*j,i[3]=_*x+v*T+y*ee+b*re,i[7]=_*S+v*E+y*k+b*A,i[11]=_*C+v*D+y*te+b*ie,i[15]=_*w+v*O+y*ne+b*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15],_=s*f-c*d,v=o*f-c*u,y=o*d-s*u,b=a*f-c*l,x=a*d-s*l,S=a*u-o*l;return t*(m*_-h*v+g*y)-n*(p*_-h*b+g*x)+r*(p*v-m*b+g*S)-i*(p*y-m*x+h*S)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[1],a=e[5],o=e[9],s=e[2],c=e[6],l=e[10];return t*(a*l-o*c)-n*(i*l-o*s)+r*(i*c-a*s)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=t*o-n*a,v=t*s-r*a,y=t*c-i*a,b=n*s-r*o,x=n*c-i*o,S=r*c-i*s,C=l*m-u*p,w=l*h-d*p,T=l*g-f*p,E=u*h-d*m,D=u*g-f*m,O=d*g-f*h,ee=_*O-v*D+y*E+b*T-x*w+S*C;if(ee===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/ee;return e[0]=(o*O-s*D+c*E)*k,e[1]=(r*D-n*O-i*E)*k,e[2]=(m*S-h*x+g*b)*k,e[3]=(d*x-u*S-f*b)*k,e[4]=(s*T-a*O-c*w)*k,e[5]=(t*O-r*T+i*w)*k,e[6]=(h*y-p*S-g*v)*k,e[7]=(l*S-d*y+f*v)*k,e[8]=(a*D-o*T+c*C)*k,e[9]=(n*T-t*D-i*C)*k,e[10]=(p*x-m*y+g*_)*k,e[11]=(u*y-l*x-f*_)*k,e[12]=(o*w-a*E-s*C)*k,e[13]=(t*E-n*w+r*C)*k,e[14]=(m*v-p*b-h*_)*k,e[15]=(l*b-u*v+d*_)*k,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];let i=this.determinantAffine();if(i===0)return n.set(1,1,1),t.identity(),this;let a=Bt.set(r[0],r[1],r[2]).length(),o=Bt.set(r[4],r[5],r[6]).length(),s=Bt.set(r[8],r[9],r[10]).length();i<0&&(a=-a),Vt.copy(this);let c=1/a,l=1/o,u=1/s;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=l,Vt.elements[5]*=l,Vt.elements[6]*=l,Vt.elements[8]*=u,Vt.elements[9]*=u,Vt.elements[10]*=u,t.setFromRotationMatrix(Vt),n.x=a,n.y=o,n.z=s,this}makePerspective(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2*i/(t-e),u=2*i/(n-r),d=(t+e)/(t-e),f=(n+r)/(n-r),p,m;if(s)p=i/(a-i),m=a*i/(a-i);else if(o===2e3)p=-(a+i)/(a-i),m=-2*a*i/(a-i);else if(o===2001)p=-a/(a-i),m=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je,s=!1){let c=this.elements,l=2/(t-e),u=2/(n-r),d=-(t+e)/(t-e),f=-(n+r)/(n-r),p,m;if(s)p=1/(a-i),m=a/(a-i);else if(o===2e3)p=-2/(a-i),m=-(a+i)/(a-i);else if(o===2001)p=-1/(a-i),m=-i/(a-i);else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return c[0]=l,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Bt=new z,Vt=new V,Ht=new z(0,0,0),Ut=new z(1,1,1),Wt=new z,Gt=new z,Kt=new z,qt=new V,Jt=new _t,Yt=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-ut(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(ut(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-ut(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(ut(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:I(`Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return qt.makeRotationFromQuaternion(e),this.setFromRotationMatrix(qt,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jt.setFromEuler(this),this.setFromQuaternion(Jt,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yt.DEFAULT_ORDER=`XYZ`;var Xt=class{constructor(){this.mask=1}set(e){this.mask=1<<e>>>0}enable(e){this.mask|=1<<e}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e}disable(e){this.mask&=~(1<<e)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&1<<e)}},Zt=0,Qt=new z,$t=new _t,en=new V,tn=new z,nn=new z,rn=new z,an=new _t,on=new z(1,0,0),sn=new z(0,1,0),cn=new z(0,0,1),ln={type:`added`},un={type:`removed`},dn={type:`childadded`,child:null},fn={type:`childremoved`,child:null},pn=class e extends at{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zt++}),this.uuid=lt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new z,n=new Yt,r=new _t,i=new z(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new V},normalMatrix:{value:new B}}),this.matrix=new V,this.matrixWorld=new V,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xt,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $t.setFromAxisAngle(e,t),this.quaternion.multiply($t),this}rotateOnWorldAxis(e,t){return $t.setFromAxisAngle(e,t),this.quaternion.premultiply($t),this}rotateX(e){return this.rotateOnAxis(on,e)}rotateY(e){return this.rotateOnAxis(sn,e)}rotateZ(e){return this.rotateOnAxis(cn,e)}translateOnAxis(e,t){return Qt.copy(e).applyQuaternion(this.quaternion),this.position.add(Qt.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(on,e)}translateY(e){return this.translateOnAxis(sn,e)}translateZ(e){return this.translateOnAxis(cn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(en.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?tn.copy(e):tn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),nn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?en.lookAt(nn,tn,this.up):en.lookAt(tn,nn,this.up),this.quaternion.setFromRotationMatrix(en),r&&(en.extractRotation(r.matrixWorld),$t.setFromRotationMatrix(en),this.quaternion.premultiply($t.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(L(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null):L(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(un),fn.child=e,this.dispatchEvent(fn),fn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),en.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),en.multiply(e.parent.matrixWorld)),e.applyMatrix4(en),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ln),dn.child=e,this.dispatchEvent(dn),dn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nn,e,rn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nn,an,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,r=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*n-i[8]*r,i[13]+=n-i[1]*t-i[5]*n-i[9]*r,i[14]+=r-i[2]*t-i[6]*n-i[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let e=this.children;for(let t=0,r=e.length;t<r;t++)e[t].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(e=>({...e,boundingBox:e.boundingBox?e.boundingBox.toJSON():void 0,boundingSphere:e.boundingSphere?e.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(e=>({...e})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot===null?null:e.pivot.clone(),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}};pn.DEFAULT_UP=new z(0,1,0),pn.DEFAULT_MATRIX_AUTO_UPDATE=!0,pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var mn=class extends pn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},hn={type:`move`},gn=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.quaternion,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.quaternion,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1,s.eventsEnabled&&s.dispatchEvent({type:`gripUpdated`,data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hn)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new mn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},_n={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},vn={h:0,s:0,l:0},yn={h:0,s:0,l:0};function bn(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var H=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=wt.workingColorSpace){if(e=dt(e,1),t=ut(t,0,1),n=ut(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=bn(i,r,e+1/3),this.g=bn(i,r,e),this.b=bn(i,r,e-1/3)}return wt.colorSpaceToWorking(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&I(`Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseFloat(i[1]))/100,Math.min(100,parseFloat(i[2]))/100,Math.min(100,parseFloat(i[3]))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:I(`Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);I(`Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=_n[e.toLowerCase()];return n===void 0?I(`Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tt(e.r),this.g=Tt(e.g),this.b=Tt(e.b),this}copyLinearToSRGB(e){return this.r=Et(e.r),this.g=Et(e.g),this.b=Et(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return wt.workingToColorSpace(xn.copy(this),e),Math.round(ut(xn.r*255,0,255))*65536+Math.round(ut(xn.g*255,0,255))*256+Math.round(ut(xn.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(xn.copy(this),t);let n=xn.r,r=xn.g,i=xn.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(xn.copy(this),t),e.r=xn.r,e.g=xn.g,e.b=xn.b,e}getStyle(e=Ve){wt.workingToColorSpace(xn.copy(this),e);let t=xn.r,n=xn.g,r=xn.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(vn),this.setHSL(vn.h+e,vn.s+t,vn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(vn),e.getHSL(yn);let n=ft(vn.h,yn.h,t),r=ft(vn.s,yn.s,t),i=ft(vn.l,yn.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},xn=new H;H.NAMES=_n;var Sn=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new H(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},Cn=class extends pn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background===null?null:e.background.clone(),this.environment=e.environment===null?null:e.environment.clone(),this.fog=e.fog===null?null:e.fog.clone(),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial===null?null:e.overrideMaterial.clone(),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},wn=new z,Tn=new z,En=new z,Dn=new z,On=new z,kn=new z,An=new z,jn=new z,Mn=new z,Nn=new z,Pn=new Ft,Fn=new Ft,In=new Ft,Ln=class e{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),wn.subVectors(e,t),r.cross(wn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){wn.subVectors(r,t),Tn.subVectors(n,t),En.subVectors(e,t);let a=wn.dot(wn),o=wn.dot(Tn),s=wn.dot(En),c=Tn.dot(Tn),l=Tn.dot(En),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Dn)!==null&&Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Dn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Dn.x),s.addScaledVector(a,Dn.y),s.addScaledVector(o,Dn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Pn.setScalar(0),Fn.setScalar(0),In.setScalar(0),Pn.fromBufferAttribute(e,t),Fn.fromBufferAttribute(e,n),In.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Pn,i.x),a.addScaledVector(Fn,i.y),a.addScaledVector(In,i.z),a}static isFrontFacing(e,t,n,r){return wn.subVectors(n,t),Tn.subVectors(e,t),wn.cross(Tn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),wn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;On.subVectors(r,n),kn.subVectors(i,n),jn.subVectors(e,n);let s=On.dot(jn),c=kn.dot(jn);if(s<=0&&c<=0)return t.copy(n);Mn.subVectors(e,r);let l=On.dot(Mn),u=kn.dot(Mn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0&&s-l>0)return a=s/(s-l),t.copy(n).addScaledVector(On,a);Nn.subVectors(e,i);let f=On.dot(Nn),p=kn.dot(Nn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(kn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return An.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(An,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(On,a).addScaledVector(kn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Rn=class{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Bn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Bn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Bn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Bn):Bn.fromBufferAttribute(r,t),Bn.applyMatrix4(e.matrixWorld),this.expandByPoint(Bn);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Vn.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Vn.copy(e.boundingBox)),Vn.applyMatrix4(e.matrixWorld),this.union(Vn)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Bn),Bn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jn),Yn.subVectors(this.max,Jn),Hn.subVectors(e.a,Jn),Un.subVectors(e.b,Jn),Wn.subVectors(e.c,Jn),Gn.subVectors(Un,Hn),Kn.subVectors(Wn,Un),qn.subVectors(Hn,Wn);let t=[0,-Gn.z,Gn.y,0,-Kn.z,Kn.y,0,-qn.z,qn.y,Gn.z,0,-Gn.x,Kn.z,0,-Kn.x,qn.z,0,-qn.x,-Gn.y,Gn.x,0,-Kn.y,Kn.x,0,-qn.y,qn.x,0];return!Qn(t,Hn,Un,Wn,Yn)||(t=[1,0,0,0,1,0,0,0,1],!Qn(t,Hn,Un,Wn,Yn))?!1:(Xn.crossVectors(Gn,Kn),t=[Xn.x,Xn.y,Xn.z],Qn(t,Hn,Un,Wn,Yn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Bn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Bn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()||(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zn)),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},zn=[new z,new z,new z,new z,new z,new z,new z,new z],Bn=new z,Vn=new Rn,Hn=new z,Un=new z,Wn=new z,Gn=new z,Kn=new z,qn=new z,Jn=new z,Yn=new z,Xn=new z,Zn=new z;function Qn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Zn.fromArray(e,a);let o=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),s=t.dot(Zn),c=n.dot(Zn),l=r.dot(Zn);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var $n=new z,er=new R,tr=0,nr=class extends at{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tr++}),this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=g,this.version=0,this._normalizationScale=e===void 0?void 0:mt(e)}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)er.fromBufferAttribute(this,t),er.applyMatrix3(e),this.setXY(t,er.x,er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix3(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyMatrix4(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.applyNormalMatrix(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$n.fromBufferAttribute(this,t),$n.transformDirection(e),this.setXYZ(t,$n.x,$n.y,$n.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),r=this._normalize(r),i=this._normalize(i)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:`dispose`})}_denormalize(e){let t=this._normalizationScale;return t===void 0?ht(e,this.array):Math.max(e/t,-1)}_normalize(e){let t=this._normalizationScale;return t===void 0?gt(e,this.array):Math.round(e*t)}},rr=class extends nr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ir=class extends nr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},U=class extends nr{constructor(e,t,n){super(new Float32Array(e),t,n)}},ar=new Rn,or=new z,sr=new z,cr=class{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?ar.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;or.subVectors(e,this.center);let t=or.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(or,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(sr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(or.copy(e.center).add(sr)),this.expandByPoint(or.copy(e.center).sub(sr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},lr=0,ur=new V,dr=new pn,fr=new z,pr=new Rn,mr=new Rn,hr=new z,gr=class e extends at{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lr++}),this.uuid=lt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(Ye(e)?ir:rr)(e,1):e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new B().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ur.makeRotationFromQuaternion(e),this.applyMatrix4(ur),this}rotateX(e){return ur.makeRotationX(e),this.applyMatrix4(ur),this}rotateY(e){return ur.makeRotationY(e),this.applyMatrix4(ur),this}rotateZ(e){return ur.makeRotationZ(e),this.applyMatrix4(ur),this}translate(e,t,n){return ur.makeTranslation(e,t,n),this.applyMatrix4(ur),this}scale(e,t,n){return ur.makeScale(e,t,n),this.applyMatrix4(ur),this}lookAt(e){return dr.lookAt(e),dr.updateMatrix(),this.applyMatrix4(dr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fr).negate(),this.translate(fr.x,fr.y,fr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new U(t,3))}else{let n=Math.min(e.length,t.count);for(let r=0;r<n;r++){let n=e[r];t.setXYZ(r,n.x,n.y,n.z||0)}e.length>t.count&&I(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));else{if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];pr.setFromBufferAttribute(n),this.morphTargetsRelative?(hr.addVectors(this.boundingBox.min,pr.min),this.boundingBox.expandByPoint(hr),hr.addVectors(this.boundingBox.max,pr.max),this.boundingBox.expandByPoint(hr)):(this.boundingBox.expandByPoint(pr.min),this.boundingBox.expandByPoint(pr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&L(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute)L(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new z,1/0);else if(e){let n=this.boundingSphere.center;if(pr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];mr.setFromBufferAttribute(n),this.morphTargetsRelative?(hr.addVectors(pr.min,mr.min),pr.expandByPoint(hr),hr.addVectors(pr.max,mr.max),pr.expandByPoint(hr)):(pr.expandByPoint(mr.min),pr.expandByPoint(mr.max))}pr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)hr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(hr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)hr.fromBufferAttribute(a,t),o&&(fr.fromBufferAttribute(e,t),hr.add(fr)),r=Math.max(r,n.distanceToSquared(hr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&L(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){L(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new nr(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],s=[],c=new Uint8Array(n.count);for(let e=0;e<n.count;e++)o[e]=new z,s[e]=new z;let l=new z,u=new z,d=new z,f=new R,p=new R,m=new R,h=new z,g=new z;function _(e,t,r){c[e]=c[t]=c[r]=1,l.fromBufferAttribute(n,e),u.fromBufferAttribute(n,t),d.fromBufferAttribute(n,r),f.fromBufferAttribute(i,e),p.fromBufferAttribute(i,t),m.fromBufferAttribute(i,r),u.sub(l),d.sub(l),p.sub(f),m.sub(f);let a=1/(p.x*m.y-m.x*p.y);isFinite(a)&&(h.copy(u).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(a),g.copy(d).multiplyScalar(p.x).addScaledVector(u,-m.x).multiplyScalar(a),o[e].add(h),o[t].add(h),o[r].add(h),s[e].add(g),s[t].add(g),s[r].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let t=0,n=v.length;t<n;++t){let n=v[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)_(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let y=new z,b=new z,x=new z,S=new z;function C(e){x.fromBufferAttribute(r,e),S.copy(x);let t=o[e];y.copy(t),y.sub(x.multiplyScalar(x.dot(t))).normalize(),b.crossVectors(S,t);let n=b.dot(s[e])<0?-1:1;a.setXYZW(e,y.x,y.y,y.z,n)}for(let e=0,t=n.count;e<t;++e)c[e]&&C(e);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==t.count)n=new nr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new z,i=new z,a=new z,o=new z,s=new z,c=new z,l=new z,u=new z;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hr.fromBufferAttribute(e,t),hr.normalize(),e.setXYZ(t,hr.x,hr.y,hr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new nr(a,r,i)}if(this.index===null)return I(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}},_r=new z,vr=new z,yr=new B,br=class{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=_r.subVectors(n,t).cross(vr.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let r=e.delta(_r),i=this.normal.dot(r);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yr.getNormalMatrix(e),r=this.coplanarPoint(_r).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},xr=0,Sr=class extends at{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xr++}),this.uuid=lt(),this.name=``,this.type=`Material`,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new H(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){I(`Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];r===void 0?I(`Material: '${t}' is not a property of THREE.${this.type}.`):r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(e=>e.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new H().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(e=>new br().fromJSON(e))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(this.vertexColors=typeof e.vertexColors==`number`?e.vertexColors>0:e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let t=e.normalScale;Array.isArray(t)===!1&&(t=[t,t]),this.normalScale=new R().fromArray(t)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new R().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}},Cr=new z,wr=new z,Tr=new z,Er=new z,Dr=class{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cr.copy(this.origin).addScaledVector(this.direction,t),Cr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){wr.copy(e).add(t).multiplyScalar(.5),Tr.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(wr);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Tr),o=Er.dot(this.direction),s=-Er.dot(Tr),c=Er.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(wr).addScaledVector(Tr,d),f}intersectSphere(e,t){if(e.radius<0)return null;Cr.subVectors(e.center,this.origin);let n=Cr.dot(this.direction),r=Cr.dot(Cr)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Cr)!==null}intersectTriangle(e,t,n,r,i){let a=this.origin,o=this.direction,s=o.x,c=o.y,l=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,p=t.x-a.x,m=t.y-a.y,h=t.z-a.z,g=n.x-a.x,_=n.y-a.y,v=n.z-a.z,y=Math.abs(s),b=Math.abs(c),x=Math.abs(l),S,C,w,T,E,D,O,ee,k,te,ne,re;if(y>=b&&y>=x?(w=s,D=u,k=p,re=g,s>=0?(S=c,C=l,T=d,E=f,O=m,ee=h,te=_,ne=v):(S=l,C=c,T=f,E=d,O=h,ee=m,te=v,ne=_)):b>=x?(w=c,D=d,k=m,re=_,c>=0?(S=l,C=s,T=f,E=u,O=h,ee=p,te=v,ne=g):(S=s,C=l,T=u,E=f,O=p,ee=h,te=g,ne=v)):(w=l,D=f,k=h,re=v,l>=0?(S=s,C=c,T=u,E=d,O=p,ee=m,te=g,ne=_):(S=c,C=s,T=d,E=u,O=m,ee=p,te=_,ne=g)),w===0)return null;let A=S/w,ie=C/w,j=1/w,ae=T-A*D,oe=E-ie*D,se=O-A*k,ce=ee-ie*k,le=te-A*re,ue=ne-ie*re,de=le*ce-ue*se,M=ae*ue-oe*le,fe=se*oe-ce*ae;if(r){if(de<0||M<0||fe<0)return null}else if((de<0||M<0||fe<0)&&(de>0||M>0||fe>0))return null;let pe=de+M+fe;if(pe===0)return null;let me=j*(de*D+M*k+fe*re);return(pe>0?me<0:me>0)?null:this.at(me/pe,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Or=class extends Sr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new H(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},kr=new V,Ar=new Dr,jr=new cr,Mr=new z,Nr=new z,Pr=new z,Fr=new z,Ir=new z,Lr=new z,Rr=new z,zr=new z,W=class extends pn{constructor(e=new gr,t=new Or){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Lr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Ir.fromBufferAttribute(s,e),a?Lr.addScaledVector(Ir,r):Lr.addScaledVector(Ir.sub(t),r))}t.add(Lr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(i),Ar.copy(e.ray).recast(e.near),jr.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(jr,Mr)===null||Ar.origin.distanceToSquared(Mr)>(e.far-e.near)**2)||(kr.copy(i).invert(),Ar.copy(e.ray).applyMatrix4(kr),(n.boundingBox===null||Ar.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Vr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Vr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Vr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Vr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Br(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;zr.copy(s),zr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(zr);return l<n.near||l>n.far?null:{distance:l,point:zr.clone(),object:e}}function Vr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Nr),e.getVertexPosition(c,Pr),e.getVertexPosition(l,Fr);let u=Br(e,t,n,r,Nr,Pr,Fr,Rr);if(u){let e=new z;Ln.getBarycoord(Rr,Nr,Pr,Fr,e),i&&(u.uv=Ln.getInterpolatedAttribute(i,s,c,l,e,new R)),a&&(u.uv1=Ln.getInterpolatedAttribute(a,s,c,l,e,new R)),o&&(u.normal=Ln.getInterpolatedAttribute(o,s,c,l,e,new z),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new z,materialIndex:0};Ln.getNormal(Nr,Pr,Fr,t.normal),u.face=t,u.barycoord=e}return u}var Hr=new Ft,Ur=new Ft,Wr=new Ft,Gr=new Ft,Kr=new V,qr=new z,Jr=new cr,Yr=new V,Xr=new Dr,Zr=class extends W{constructor(t,n){super(t,n),this.isSkinnedMesh=!0,this.type=`SkinnedMesh`,this.bindMode=e,this.bindMatrix=new V,this.bindMatrixInverse=new V,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,qr),this.boundingBox.expandByPoint(qr)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new cr),this.boundingSphere.makeEmpty();let t=e.getAttribute(`position`);for(let e=0;e<t.count;e++)this.getVertexPosition(e,qr),this.boundingSphere.expandByPoint(qr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}raycast(e,t){let n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Jr.copy(this.boundingSphere),Jr.applyMatrix4(r),e.ray.intersectsSphere(Jr)!==!1&&(Yr.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(Yr),(this.boundingBox===null||Xr.intersectsBox(this.boundingBox)!==!1)&&this._computeIntersections(e,t,Xr)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new Ft,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r===1/0?e.set(1,0,0,0):e.multiplyScalar(r),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===`attached`?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===`detached`?this.bindMatrixInverse.copy(this.bindMatrix).invert():I(`SkinnedMesh: Unrecognized bindMode: `+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,r=this.geometry;Ur.fromBufferAttribute(r.attributes.skinIndex,e),Wr.fromBufferAttribute(r.attributes.skinWeight,e),t.isVector4?(Hr.copy(t),t.set(0,0,0,0)):(Hr.set(t.x,t.y,t.z,1),t.set(0,0,0)),Hr.applyMatrix4(this.bindMatrix);for(let e=0;e<4;e++){let r=Wr.getComponent(e);if(r!==0){let i=Ur.getComponent(e);Kr.multiplyMatrices(n.bones[i].matrixWorld,n.boneInverses[i]),t.addScaledVector(Gr.copy(Hr).applyMatrix4(Kr),r)}}return t.isVector4&&(t.w=Hr.w),t.applyMatrix4(this.bindMatrixInverse)}},Qr=class extends pn{constructor(){super(),this.isBone=!0,this.type=`Bone`}},$r=class extends Pt{constructor(e=null,t=1,n=1,r,a,o,s,c,l=i,u=i,d,f){super(null,o,s,c,l,u,r,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ei=new V,ti=new V,ni=class e{constructor(e=[],t=[]){this.uuid=lt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){I(`Skeleton: Number of inverse bone matrices does not match amount of bones.`),this.boneInverses=[];for(let e=0,t=this.bones.length;e<t;e++)this.boneInverses.push(new V)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let t=new V;this.bones[e]&&t.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(t)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&t.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let t=this.bones[e];t&&(t.parent&&t.parent.isBone?(t.matrix.copy(t.parent.matrixWorld).invert(),t.matrix.multiply(t.matrixWorld)):t.matrix.copy(t.matrixWorld),t.matrix.decompose(t.position,t.quaternion,t.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let r=0,i=e.length;r<i;r++){let i=e[r]?e[r].matrixWorld:ti;ei.multiplyMatrices(i,t[r]),ei.toArray(n,r*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new e(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new $r(t,e,e,T,g);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){let r=e.bones[n],i=t[r];i===void 0&&(I(`Skeleton: No bone found with UUID:`,r),i=new Qr),this.bones.push(i),this.boneInverses.push(new V().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:`Skeleton`,generator:`Skeleton.toJSON`},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let r=0,i=t.length;r<i;r++){let i=t[r];e.bones.push(i.uuid);let a=n[r];e.boneInverses.push(a.toArray())}return e}},ri=class extends nr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},ii=new V,ai=new V,oi=[],si=new Rn,ci=new V,li=new W,ui=new cr,di=class extends W{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ri(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,ci)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),si.copy(e.boundingBox).applyMatrix4(ii),this.boundingBox.union(si)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new cr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ii),ui.copy(e.boundingSphere).applyMatrix4(ii),this.boundingSphere.union(ui)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture===null?null:e.morphTexture.clone(),this.instanceColor=e.instanceColor===null?null:e.instanceColor.clone(),this.count=e.count,this.boundingBox=e.boundingBox===null?null:e.boundingBox.clone(),this.boundingSphere=e.boundingSphere===null?null:e.boundingSphere.clone(),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(li.geometry=this.geometry,li.material=this.material,li.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ui.copy(this.boundingSphere),ui.applyMatrix4(n),e.ray.intersectsSphere(ui)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,ii),ai.multiplyMatrices(n,ii),li.matrixWorld=ai,li.raycast(e,oi);for(let e=0,n=oi.length;e<n;e++){let n=oi[e];n.instanceId=i,n.object=this,t.push(n)}oi.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ri(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new $r(new Float32Array(r*this.count),r,this.count,O,g));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;return i[s]=o,i.set(n,s+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},fi=new cr,pi=new R(.5,.5),mi=new z,hi=class{constructor(e=new br,t=new br,n=new br,r=new br,i=new br,a=new br){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je,n=!1){let r=this.planes,i=e.elements,a=i[0],o=i[1],s=i[2],c=i[3],l=i[4],u=i[5],d=i[6],f=i[7],p=i[8],m=i[9],h=i[10],g=i[11],_=i[12],v=i[13],y=i[14],b=i[15];if(r[0].setComponents(c-a,f-l,g-p,b-_).normalize(),r[1].setComponents(c+a,f+l,g+p,b+_).normalize(),r[2].setComponents(c+o,f+u,g+m,b+v).normalize(),r[3].setComponents(c-o,f-u,g-m,b-v).normalize(),n)r[4].setComponents(s,d,h,y).normalize(),r[5].setComponents(c-s,f-d,g-h,b-y).normalize();else if(r[4].setComponents(c-s,f-d,g-h,b-y).normalize(),t===2e3)r[5].setComponents(c+s,f+d,g+h,b+y).normalize();else if(t===2001)r[5].setComponents(s,d,h,y).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(e){return fi.center.set(0,0,0),fi.radius=.7071067811865476+pi.distanceTo(e.center),fi.applyMatrix4(e.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(mi.x=r.normal.x>0?e.max.x:e.min.x,mi.y=r.normal.y>0?e.max.y:e.min.y,mi.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(mi)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},gi=new V,_i=class e{constructor(){this.coordinateSystem=Je,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let e=0;e<t.length;e++){let r=t[e];gi.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[e]===void 0&&(n[e]=new hi),n[e].setFromProjectionMatrix(gi,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let r=0;r<e._count;r++)t[r]===void 0&&(t[r]=new hi),t[r].copy(n[r]);return this._count=e._count,this}clone(){return new e().copy(this)}},vi=class extends Sr{constructor(e){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new H(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},yi=new V,bi=new Dr,xi=new cr,Si=new z,Ci=class extends pn{constructor(e=new gr,t=new vi){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.morphTargetInfluences=e.morphTargetInfluences===void 0?void 0:e.morphTargetInfluences.slice(),this.morphTargetDictionary=e.morphTargetDictionary===void 0?void 0:Object.assign({},e.morphTargetDictionary),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),xi.copy(n.boundingSphere),xi.applyMatrix4(r),xi.radius+=i,e.ray.intersectsSphere(xi)===!1)return;yi.copy(r).invert(),bi.copy(e.ray).applyMatrix4(yi);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);Si.fromBufferAttribute(l,n),wi(Si,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)Si.fromBufferAttribute(l,a),wi(Si,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function wi(e,t,n,r,i,a,o){let s=bi.distanceSqToPoint(e);if(s<n){let n=new z;bi.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ti=class extends Pt{constructor(e=[],t=301,n,r,i,a,o,s,c,l){super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ei=class extends Pt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Di=class extends Pt{constructor(e,t,n=h,r,a,o,s=i,c=i,l,u=E,d=1){if(u!==1026&&u!==1027)throw Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:e,height:t,depth:d},r,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new At(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Oi=class extends Di{constructor(e,t=h,n=301,r,a,o=i,s=i,c,l=E){let u={width:e,height:e,depth:1},d=[u,u,u,u,u,u];super(e,e,t,n,r,a,o,s,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},ki=class extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},G=class e extends gr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,D=new z;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)D[e]=(s*v-b)*r,D[t]=o*i,D[n]=S,c.push(D.x,D.y,D.z),D[e]=0,D[t]=0,D[n]=m>0?1:-1,l.push(D.x,D.y,D.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},Ai=class e extends gr{constructor(e=1,t=1,n=4,r=8,i=1){super(),this.type=`CapsuleGeometry`,this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:i},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),i=Math.max(1,Math.floor(i));let a=[],o=[],s=[],c=[],l=t/2,u=Math.PI/2*e,d=t,f=2*u+d,p=n*2+i,m=r+1,h=new z,g=new z;for(let _=0;_<=p;_++){let v=0,y=0,b=0,x=0;if(_<=n){let t=_/n,r=t*Math.PI/2;y=-l-e*Math.cos(r),b=e*Math.sin(r),x=-e*Math.cos(r),v=t*u}else if(_<=n+i){let r=(_-n)/i;y=-l+r*t,b=e,x=0,v=u+r*d}else{let t=(_-n-i)/n,r=t*Math.PI/2;y=l+e*Math.sin(r),b=e*Math.cos(r),x=e*Math.sin(r),v=u+d+t*u}let S=Math.max(0,Math.min(1,v/f)),C=0;_===0?C=.5/r:_===p&&(C=-.5/r);for(let e=0;e<=r;e++){let t=e/r,n=t*Math.PI*2,i=Math.sin(n),a=Math.cos(n);g.x=-b*a,g.y=y,g.z=b*i,o.push(g.x,g.y,g.z),h.set(-b*a,x,b*i),h.normalize(),s.push(h.x,h.y,h.z),c.push(t+C,S)}if(_>0){let e=(_-1)*m;for(let t=0;t<r;t++){let n=e+t,r=e+t+1,i=_*m+t,o=_*m+t+1;a.push(n,r,i),a.push(r,o,i)}}}this.setIndex(a),this.setAttribute(`position`,new U(o,3)),this.setAttribute(`normal`,new U(s,3)),this.setAttribute(`uv`,new U(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},ji=class e extends gr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new z,l=new R;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new U(a,3)),this.setAttribute(`normal`,new U(o,3)),this.setAttribute(`uv`,new U(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Mi=class e extends gr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function _(){let a=new z,_=new z,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new R,m=new z,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ni=class e extends Mi{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Pi=class e extends gr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new U(i,3)),this.setAttribute(`normal`,new U(i.slice(),3)),this.setAttribute(`uv`,new U(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new z,r=new z,i=new z;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new z;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new z;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new z,t=new z,n=new z,r=new z,o=new R,s=new R,c=new R;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.detail)}},Fi=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){I(`Curve: .getPoint() not implemented.`)}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new R:new z);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new z,r=[],i=[],a=[],o=new z,s=new V;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new z)}i[0]=new z,a[0]=new z;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(ut(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(ut(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Ii=class extends Fi{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new R){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Li=class extends Ii{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function Ri(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var zi=new z,Bi=new z,Vi=new Ri,Hi=new Ri,Ui=new Ri,Wi=class extends Fi{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new z){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Bi.subVectors(r[0],r[1]).add(r[0]),c=Bi);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(zi.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=zi),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Vi.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),Hi.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Ui.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Vi.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),Hi.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Ui.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Vi.calc(s),Hi.calc(s),Ui.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new z().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Gi(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Ki(e,t){let n=1-e;return n*n*t}function qi(e,t){return 2*(1-e)*e*t}function Ji(e,t){return e*e*t}function Yi(e,t,n,r){return Ki(e,t)+qi(e,n)+Ji(e,r)}function Xi(e,t){let n=1-e;return n*n*n*t}function Zi(e,t){let n=1-e;return 3*n*n*e*t}function Qi(e,t){return 3*(1-e)*e*e*t}function $i(e,t){return e*e*e*t}function ea(e,t,n,r,i){return Xi(e,t)+Zi(e,n)+Qi(e,r)+$i(e,i)}var ta=class extends Fi{constructor(e=new R,t=new R,n=new R,r=new R){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ea(e,r.x,i.x,a.x,o.x),ea(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},na=class extends Fi{constructor(e=new z,t=new z,n=new z,r=new z){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(ea(e,r.x,i.x,a.x,o.x),ea(e,r.y,i.y,a.y,o.y),ea(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends Fi{constructor(e=new R,t=new R){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new R){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ia=class extends Fi{constructor(e=new z,t=new z){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new z){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new z){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends Fi{constructor(e=new R,t=new R,n=new R){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new R){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Yi(e,r.x,i.x,a.x),Yi(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},oa=class extends Fi{constructor(e=new z,t=new z,n=new z){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new z){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(Yi(e,r.x,i.x,a.x),Yi(e,r.y,i.y,a.y),Yi(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},sa=class extends Fi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new R){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Gi(o,s.x,c.x,l.x,u.x),Gi(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this}},ca=Object.freeze({__proto__:null,ArcCurve:Li,CatmullRomCurve3:Wi,CubicBezierCurve:ta,CubicBezierCurve3:na,EllipseCurve:Ii,LineCurve:ra,LineCurve3:ia,QuadraticBezierCurve:aa,QuadraticBezierCurve3:oa,SplineCurve:sa}),la=class extends Fi{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new ca[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new ca[n.type]().fromJSON(n))}return this.cacheLengths=null,this}},ua=class extends la{constructor(e){super(),this.type=`Path`,this.currentPoint=new R,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ra(this.currentPoint.clone(),new R(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new aa(this.currentPoint.clone(),new R(e,t),new R(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new ta(this.currentPoint.clone(),new R(e,t),new R(n,r),new R(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new sa([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new Ii(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},da=class extends ua{constructor(e){super(e),this.uuid=lt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new ua().fromJSON(n))}return this}};function fa(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=pa(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l;if(r&&(a=ba(e,t,a,n)),e.length>80*n){s=e[0],c=e[1];let t=s,r=c;for(let a=n;a<i;a+=n){let n=e[a],i=e[a+1];n<s&&(s=n),i<c&&(c=i),n>t&&(t=n),i>r&&(r=i)}l=Math.max(t-s,r-c),l=l===0?0:32767/l}return ha(a,o,n,s,c,l,0),o}function pa(e,t,n,r,i){let a;if(i===Wa(e,t,n,r)>0)for(let i=t;i<n;i+=r)a=Va(i/r|0,e[i],e[i+1],a);else for(let i=n-r;i>=t;i-=r)a=Va(i/r|0,e[i],e[i+1],a);return a&&Na(a,a.next)&&(Ha(a),a=a.next),a}function ma(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(Na(n,n.next)||Ma(n.prev,n,n.next)===0)){if(Ha(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function ha(e,t,n,r,i,a,o){if(!e)return;!o&&a&&Ta(e,r,i,a);let s=e;for(;e.prev!==e.next;){let c=e.prev,l=e.next;if(a?_a(e,r,i,a):ga(e))t.push(c.i,e.i,l.i),Ha(e),e=l.next,s=l.next;else if(e=l,e===s){o?o===1?(e=va(ma(e),t),ha(e,t,n,r,i,a,2)):o===2&&ya(e,t,n,r,i,a):ha(ma(e),t,n,r,i,a,1);break}}}function ga(e){let t=e.prev,n=e,r=e.next;if(Ma(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=Math.min(i,a,o),d=Math.min(s,c,l),f=Math.max(i,a,o),p=Math.max(s,c,l),m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&Aa(i,s,a,c,o,l,m.x,m.y)&&Ma(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _a(e,t,n,r){let i=e.prev,a=e,o=e.next;if(Ma(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=Math.min(s,c,l),m=Math.min(u,d,f),h=Math.max(s,c,l),g=Math.max(u,d,f),_=Da(p,m,t,n,r),v=Da(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Aa(s,u,c,d,l,f,y.x,y.y)&&Ma(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Aa(s,u,c,d,l,f,b.x,b.y)&&Ma(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&Aa(s,u,c,d,l,f,y.x,y.y)&&Ma(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&Aa(s,u,c,d,l,f,b.x,b.y)&&Ma(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function va(e,t){let n=e;do{let r=n.prev,i=n.next.next;!Na(r,i)&&Pa(r,n,n.next,i)&&Ra(r,i)&&Ra(i,r)&&(t.push(r.i,n.i,i.i),Ha(n),Ha(n.next),n=e=i),n=n.next}while(n!==e);return ma(n)}function ya(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&ja(o,e)){let s=Ba(o,e);o=ma(o,o.next),s=ma(s,s.next),ha(o,t,n,r,i,a,0),ha(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function ba(e,t,n,r){let i=[];for(let n=0,a=t.length;n<a;n++){let o=pa(e,t[n]*r,n<a-1?t[n+1]*r:e.length,r,!1);o===o.next&&(o.steiner=!0),i.push(Oa(o))}i.sort(xa);for(let e=0;e<i.length;e++)n=Sa(i[e],n);return n}function xa(e,t){let n=e.x-t.x;return n===0&&(n=e.y-t.y,n===0&&(n=(e.next.y-e.y)/(e.next.x-e.x)-(t.next.y-t.y)/(t.next.x-t.x))),n}function Sa(e,t){let n=Ca(e,t);if(!n)return t;let r=Ba(n,e);return ma(r,r.next),ma(n,n.next)}function Ca(e,t){let n=t,r=e.x,i=e.y,a=-1/0,o;if(Na(e,n))return n;do{if(Na(e,n.next))return n.next;if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){let e=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=r&&e>a&&(a=e,o=n.x<n.next.x?n:n.next,e===r))return o}n=n.next}while(n!==t);if(!o)return null;let s=o,c=o.x,l=o.y,u=1/0;n=o;do{if(r>=n.x&&n.x>=c&&r!==n.x&&ka(i<l?r:a,i,c,l,i<l?a:r,i,n.x,n.y)){let t=Math.abs(i-n.y)/(r-n.x);Ra(n,e)&&(t<u||t===u&&(n.x>o.x||n.x===o.x&&wa(o,n)))&&(o=n,u=t)}n=n.next}while(n!==s);return o}function wa(e,t){return Ma(e.prev,e,t.prev)<0&&Ma(t.next,e,e.next)<0}function Ta(e,t,n,r){let i=e;do i.z===0&&(i.z=Da(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,Ea(i)}function Ea(e){let t,n=1;do{let r=e,i;e=null;let a=null;for(t=0;r;){t++;let o=r,s=0;for(let e=0;e<n&&(s++,o=o.nextZ,o);e++);let c=n;for(;s>0||c>0&&o;)s!==0&&(c===0||!o||r.z<=o.z)?(i=r,r=r.nextZ,s--):(i=o,o=o.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;r=o}a.nextZ=null,n*=2}while(t>1);return e}function Da(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function Oa(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function ka(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function Aa(e,t,n,r,i,a,o,s){return(e!==o||t!==s)&&ka(e,t,n,r,i,a,o,s)}function ja(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!La(e,t)&&(Ra(e,t)&&Ra(t,e)&&za(e,t)&&(Ma(e.prev,e,t.prev)||Ma(e,t.prev,t))||Na(e,t)&&Ma(e.prev,e,e.next)>0&&Ma(t.prev,t,t.next)>0)}function Ma(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function Na(e,t){return e.x===t.x&&e.y===t.y}function Pa(e,t,n,r){let i=Ia(Ma(e,t,n)),a=Ia(Ma(e,t,r)),o=Ia(Ma(n,r,e)),s=Ia(Ma(n,r,t));return!!(i!==a&&o!==s||i===0&&Fa(e,n,t)||a===0&&Fa(e,r,t)||o===0&&Fa(n,e,r)||s===0&&Fa(n,t,r))}function Fa(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function Ia(e){return e>0?1:e<0?-1:0}function La(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Pa(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function Ra(e,t){return Ma(e.prev,e,e.next)<0?Ma(e,t,e.next)>=0&&Ma(e,e.prev,t)>=0:Ma(e,t,e.prev)<0||Ma(e,e.next,t)<0}function za(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ba(e,t){let n=Ua(e.i,e.x,e.y),r=Ua(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function Va(e,t,n,r){let i=Ua(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Ha(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function Ua(e,t,n){return{i:e,x:t,y:n,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Wa(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Ga=class{static triangulate(e,t,n=2){return fa(e,t,n)}},Ka=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];qa(e),Ja(n,e);let a=e.length;t.forEach(qa);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Ja(n,t[e]);let o=Ga.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function qa(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Ja(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Ya=class e extends gr{constructor(e=new da([new R(.5,.5),new R(-.5,.5),new R(-.5,-.5),new R(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new U(r,3)),this.setAttribute(`uv`,new U(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Xa:t.UVGenerator,g,_=!1,v,y,b,x;if(m){g=m.getSpacedPoints(s),_=!0,l=!1;let e=m.isCatmullRomCurve3?m.closed:!1;v=m.computeFrenetFrames(s,e),y=new z,b=new z,x=new z}l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Ka.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Ka.isClockWise(t)&&(w[e]=t.reverse())}}function T(e){let t=e[0];for(let n=1;n<=e.length;n++){let r=n%e.length,i=e[r],a=i.x-t.x,o=i.y-t.y,s=a*a+o*o,c=Math.max(Math.abs(i.x),Math.abs(i.y),Math.abs(t.x),Math.abs(t.y));s<=10000000000000001e-36*c*c?(e.splice(r,1),n--):t=i}}T(C),w.forEach(T);let E=w.length,D=C;for(let e=0;e<E;e++){let t=w[e];C=C.concat(t)}function O(e,t,n){return t||L(`ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let ee=C.length;function k(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new R(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new R(r/a,i/a)}let te=[];for(let e=0,t=D.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),te[e]=k(D[e],D[n],D[r]);let ne=[],re,A=te.concat();for(let e=0,t=E;e<t;e++){let t=w[e];re=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),re[e]=k(t[e],t[r],t[i]);ne.push(re),A=A.concat(re)}let ie;if(p===0)ie=Ka.triangulateShape(D,w);else{let e=[],t=[];for(let n=0;n<p;n++){let r=n/p,i=u*Math.cos(r*Math.PI/2),a=d*Math.sin(r*Math.PI/2)+f;for(let t=0,n=D.length;t<n;t++){let n=O(D[t],te[t],a);le(n.x,n.y,-i),r===0&&e.push(n)}for(let e=0,n=E;e<n;e++){let n=w[e];re=ne[e];let o=[];for(let e=0,t=n.length;e<t;e++){let t=O(n[e],re[e],a);le(t.x,t.y,-i),r===0&&o.push(t)}r===0&&t.push(o)}}ie=Ka.triangulateShape(e,t)}let j=ie.length,ae=d+f;for(let e=0;e<ee;e++){let t=l?O(C[e],A[e],ae):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),le(x.x,x.y,x.z)):le(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<ee;t++){let n=l?O(C[t],A[t],ae):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),le(x.x,x.y,x.z)):le(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=D.length;e<t;e++){let t=O(D[e],te[e],r);le(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];re=ne[e];for(let e=0,i=t.length;e<i;e++){let i=O(t[e],re[e],r);_?le(i.x,i.y+g[s-1].y,g[s-1].x+n):le(i.x,i.y,c+n)}}}oe(),se();function oe(){let e=r.length/3;if(l){let e=0,t=ee*e;for(let e=0;e<j;e++){let n=ie[e];ue(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=ee*e;for(let e=0;e<j;e++){let n=ie[e];ue(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<j;e++){let t=ie[e];ue(t[2],t[1],t[0])}for(let e=0;e<j;e++){let t=ie[e];ue(t[0]+ee*s,t[1]+ee*s,t[2]+ee*s)}}n.addGroup(e,r.length/3-e,0)}function se(){let e=r.length/3,t=0;ce(D,t),t+=D.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ce(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ce(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=ee*e,a=ee*(e+1);de(t+r+n,t+i+n,t+i+a,t+r+a)}}}function le(e,t,n){a.push(e),a.push(t),a.push(n)}function ue(e,t,i){M(e),M(t),M(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);fe(o[0]),fe(o[1]),fe(o[2])}function de(e,t,i,a){M(e),M(t),M(a),M(t),M(i),M(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);fe(s[0]),fe(s[1]),fe(s[3]),fe(s[1]),fe(s[2]),fe(s[3])}function M(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function fe(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Za(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new ca[i.type]().fromJSON(i)),new e(r,t.options)}},Xa={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new R(a,o),new R(s,c),new R(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new R(o,1-c),new R(l,1-d),new R(f,1-m),new R(h,1-_)]:[new R(s,1-c),new R(u,1-d),new R(p,1-m),new R(g,1-_)]}};function Za(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var Qa=class e extends Pi{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},$a=class e extends gr{constructor(e=[new R(0,-.5),new R(.5,0),new R(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=ut(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new z,d=new R,f=new z,p=new z,m=new z,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:m.normalize(),s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new U(a,3)),this.setAttribute(`uv`,new U(o,2)),this.setAttribute(`normal`,new U(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},eo=class e extends Pi{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},to=class e extends gr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},no=class e extends gr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new z,p=new R;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new U(s,3)),this.setAttribute(`normal`,new U(c,3)),this.setAttribute(`uv`,new U(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},ro=class e extends gr{constructor(e=new da([new R(0,.5),new R(-.5,-.5),new R(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new U(r,3)),this.setAttribute(`normal`,new U(i,3)),this.setAttribute(`uv`,new U(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Ka.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Ka.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Ka.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return io(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function io(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var ao=class e extends gr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new z,d=new z,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=a+_*o,y=e*Math.cos(v),b=Math.sqrt(e*e-y*y),x=0;f===0&&a===0?x=.5/t:f===n&&s===Math.PI&&(x=-.5/t);for(let e=0;e<=t;e++){let n=e/t,a=r+n*i;u.x=-b*Math.cos(a),u.y=y,u.z=b*Math.sin(a),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(n+x,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new U(p,3)),this.setAttribute(`normal`,new U(m,3)),this.setAttribute(`uv`,new U(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},oo=class e extends gr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i,thetaStart:a,thetaLength:o},n=Math.floor(n),r=Math.floor(r);let s=[],c=[],l=[],u=[],d=new z,f=new z,p=new z;for(let s=0;s<=n;s++){let m=a+s/n*o;for(let a=0;a<=r;a++){let o=a/r*i;f.x=(e+t*Math.cos(m))*Math.cos(o),f.y=(e+t*Math.cos(m))*Math.sin(o),f.z=t*Math.sin(m),c.push(f.x,f.y,f.z),d.x=e*Math.cos(o),d.y=e*Math.sin(o),p.subVectors(f,d).normalize(),l.push(p.x,p.y,p.z),u.push(a/r),u.push(s/n)}}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,a=(r+1)*(e-1)+t,o=(r+1)*e+t;s.push(n,i,o),s.push(i,a,o)}this.setIndex(s),this.setAttribute(`position`,new U(c,3)),this.setAttribute(`normal`,new U(l,3)),this.setAttribute(`uv`,new U(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},so=class e extends gr{constructor(e=new oa(new z(-1,-1,0),new z(-1,1,0),new z(1,1,0)),t=64,n=1,r=8,i=!1){super(),this.type=`TubeGeometry`,this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:i};let a=e.computeFrenetFrames(t,i);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new z,s=new z,c=new R,l=new z,u=[],d=[],f=[],p=[];m(),this.setIndex(p),this.setAttribute(`position`,new U(u,3)),this.setAttribute(`normal`,new U(d,3)),this.setAttribute(`uv`,new U(f,2));function m(){for(let e=0;e<t;e++)h(e);h(i===!1?t:0),_(),g()}function h(i){l=e.getPointAt(i/t,l);let c=a.normals[i],f=a.binormals[i];for(let e=0;e<=r;e++){let t=e/r*Math.PI*2,i=Math.sin(t),a=-Math.cos(t);s.x=a*c.x+i*f.x,s.y=a*c.y+i*f.y,s.z=a*c.z+i*f.z,s.normalize(),d.push(s.x,s.y,s.z),o.x=l.x+n*s.x,o.y=l.y+n*s.y,o.z=l.z+n*s.z,u.push(o.x,o.y,o.z)}}function g(){for(let e=1;e<=t;e++)for(let t=1;t<=r;t++){let n=(r+1)*(e-1)+(t-1),i=(r+1)*e+(t-1),a=(r+1)*e+t,o=(r+1)*(e-1)+t;p.push(n,i,o),p.push(i,a,o)}}function _(){for(let e=0;e<=t;e++)for(let n=0;n<=r;n++)c.x=e/t,c.y=n/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(t){return new e(new ca[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};function co(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];if(uo(i))i.isRenderTargetTexture?(I(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone();else if(Array.isArray(i)){if(uo(i[0])){let e=[];for(let t=0,n=i.length;t<n;t++)e[t]=i[t].clone();t[n][r]=e}else t[n][r]=i.slice()}else t[n][r]=i}}return t}function lo(e){let t={};for(let n=0;n<e.length;n++){let r=co(e[n]);for(let e in r)t[e]=r[e]}return t}function uo(e){return e&&(e.isColor||e.isMatrix3||e.isMatrix4||e.isVector2||e.isVector3||e.isVector4||e.isTexture||e.isQuaternion)}function fo(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function po(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:wt.workingColorSpace}var mo={clone:co,merge:lo},ho=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,go=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_o=class extends Sr{constructor(e){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ho,this.fragmentShader=go,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=fo(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case`t`:this.uniforms[n].value=t[r.value]||null;break;case`c`:this.uniforms[n].value=new H().setHex(r.value);break;case`v2`:this.uniforms[n].value=new R().fromArray(r.value);break;case`v3`:this.uniforms[n].value=new z().fromArray(r.value);break;case`v4`:this.uniforms[n].value=new Ft().fromArray(r.value);break;case`m3`:this.uniforms[n].value=new B().fromArray(r.value);break;case`m4`:this.uniforms[n].value=new V().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let t in e.extensions)this.extensions[t]=e.extensions[t];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},vo=class extends _o{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}},yo=class extends Sr{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:``},this.type=`MeshToonMaterial`,this.color=new H(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new H(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new R(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bo=class extends Sr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=F,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},xo=class extends Sr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function So(e,t){return!e||e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Co(e){return e!==void 0&&e.inTangents!==void 0&&e.outTangents!==void 0}var wo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}},To=class extends wo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case P:i=e,o=2*t-n;break;case Be:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case P:a=e,s=2*n-t;break;case Be:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Eo=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},Do=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Oo=class extends wo{interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this.inTangents,u=this.outTangents;if(!l||!u){let e=(n-t)/(r-t),l=1-e;for(let t=0;t!==o;++t)i[t]=a[c+t]*l+a[s+t]*e;return i}let d=o*2,f=e-1;for(let p=0;p!==o;++p){let o=a[c+p],m=a[s+p],h=f*d+p*2,g=u[h],_=u[h+1],v=e*d+p*2,y=l[v],b=l[v+1],x=jo(n,t,g,y,r);i[p]=ko(x,o,_,b,m)}return i}};function ko(e,t,n,r,i){let a=1-e;return a*a*a*t+3*a*a*e*n+3*a*e*e*r+e*e*e*i}function Ao(e,t,n,r,i){let a=1-e;return 3*a*a*(n-t)+6*a*e*(r-n)+3*e*e*(i-r)}function jo(e,t,n,r,i){let a=(e-t)/(i-t);for(let o=0;o<8;o++){let o=ko(a,t,n,r,i)-e;if(Math.abs(o)<1e-10)break;let s=Ao(a,t,n,r,i);if(Math.abs(s)<1e-10)break;a=Math.max(0,Math.min(1,a-o/s))}return a}var Mo=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=So(t,this.TimeBufferType),this.values=So(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:So(e.times,Array),values:So(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t),Co(e.settings)&&(n.settings={inTangents:So(e.settings.inTangents,Array),outTangents:So(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Do(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Oo(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case N:t=this.InterpolantFactoryMethodLinear;break;case Le:t=this.InterpolantFactoryMethodSmooth;break;case Re:t=this.InterpolantFactoryMethodBezier}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return I(`KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return N;case this.InterpolantFactoryMethodSmooth:return Le;case this.InterpolantFactoryMethodBezier:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e;Co(this.settings)&&(No(this.settings.inTangents,e),No(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e;Co(this.settings)&&(Po(this.settings.inTangents,e),Po(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(L(`KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(L(`KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){L(`KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){L(`KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xe(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){L(`KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Le,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,Co(this.settings)&&(r.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),r}};function No(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]+=t}function Po(e,t){for(let n=0,r=e.length;n!==r;n+=2)e[n]*=t}Mo.prototype.ValueTypeName=``,Mo.prototype.TimeBufferType=Float32Array,Mo.prototype.ValueBufferType=Float32Array,Mo.prototype.DefaultInterpolation=N;var Fo=class extends Mo{constructor(e,t,n){super(e,t,n)}};Fo.prototype.ValueTypeName=`bool`,Fo.prototype.ValueBufferType=Array,Fo.prototype.DefaultInterpolation=Ie,Fo.prototype.InterpolantFactoryMethodLinear=void 0,Fo.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}};Io.prototype.ValueTypeName=`color`;var Lo=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}};Lo.prototype.ValueTypeName=`number`;var Ro=class extends wo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)_t.slerpFlat(i,0,a,c-o,a,c,s);return i}},zo=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}InterpolantFactoryMethodLinear(e){return new Ro(this.times,this.values,this.getValueSize(),e)}};zo.prototype.ValueTypeName=`quaternion`,zo.prototype.InterpolantFactoryMethodSmooth=void 0;var Bo=class extends Mo{constructor(e,t,n){super(e,t,n)}};Bo.prototype.ValueTypeName=`string`,Bo.prototype.ValueBufferType=Array,Bo.prototype.DefaultInterpolation=Ie,Bo.prototype.InterpolantFactoryMethodLinear=void 0,Bo.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Mo{constructor(e,t,n,r){super(e,t,n,r)}};Vo.prototype.ValueTypeName=`vector`;var Ho=class extends pn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new H(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Uo=class extends Ho{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new H(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Wo=new V,Go=new z,Ko=new z,qo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new R(512,512),this.mapType=u,this.map=null,this.mapPass=null,this.matrix=new V,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hi,this._frameExtents=new R(1,1),this._viewportCount=1,this._viewports=[new Ft(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Go.setFromMatrixPosition(e.matrixWorld),t.position.copy(Go),Ko.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ko),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){Wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Wo,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=r?r.z/i.x:1,o=r?r.w/i.y:1,s=r?r.x/i.x:0,c=r?r.y/i.y:0;e.coordinateSystem===2001||e.reversedDepth?t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+s,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Wo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Jo=new z,Yo=new _t,Xo=new z,Zo=class extends pn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new V,this.projectionMatrix=new V,this.projectionMatrixInverse=new V,this.coordinateSystem=Je,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jo,Yo,Xo),Xo.x===1&&Xo.y===1&&Xo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Yo,Xo.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Jo,Yo,Xo),Xo.x===1&&Xo.y===1&&Xo.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jo,Yo,Xo.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qo=new z,$o=new R,es=new R,ts=class extends Zo{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ct*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(st*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ct*2*Math.atan(Math.tan(st*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Qo.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Qo.x,Qo.y).multiplyScalar(-e/Qo.z),Qo.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qo.x,Qo.y).multiplyScalar(-e/Qo.z)}getViewSize(e,t){return this.getViewBounds(e,$o,es),t.subVectors(es,$o)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(st*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ns=class extends Zo{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},rs=class extends qo{constructor(){super(new ns(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},is=class extends Ho{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(pn.DEFAULT_UP),this.updateMatrix(),this.target=new pn,this.shadow=new rs}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},as=class extends gr{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type=`InstancedBufferGeometry`,this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}},os=-90,ss=1,cs=class extends pn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new ts(os,ss,e,t);r.layers=this.layers,this.add(r);let i=new ts(os,ss,e,t);i.layers=this.layers,this.add(i);let a=new ts(os,ss,e,t);a.layers=this.layers,this.add(a);let o=new ts(os,ss,e,t);o.layers=this.layers,this.add(o);let s=new ts(os,ss,e,t);s.layers=this.layers,this.add(s);let c=new ts(os,ss,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let h=!1;h=e.isWebGLRenderer===!0?e.state.buffers.depth.getReversed():e.reversedDepthBuffer,e.setRenderTarget(n,0,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(n,1,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,4,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=m,e.setRenderTarget(n,5,r),h&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ls=class extends ts{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},us=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=ds.bind(this),e.addEventListener(`visibilitychange`,this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener(`visibilitychange`,this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e===void 0?performance.now():e)-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function ds(){this._document.hidden===!1&&this.reset()}var fs=`\\[\\]\\.:\\/`,ps=RegExp(`[\\[\\]\\.:\\/]`,`g`),ms=`[^\\[\\]\\.:\\/]`,hs=`[^`+fs.replace(`\\.`,``)+`]`,gs=`((?:WC+[\\/:])*)`.replace(`WC`,ms),_s=`(WCOD+)?`.replace(`WCOD`,hs),vs=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,ms),ys=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,ms),bs=RegExp(`^`+gs+_s+vs+ys+`$`),xs=[`material`,`materials`,`bones`,`map`],Ss=class{constructor(e,t,n){let r=n||Cs.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Cs=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(ps,``)}static parseTrackName(e){let t=bs.exec(e);if(t===null)throw Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);xs.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){I(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){L(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){L(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){L(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){L(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){L(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){L(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;L(`PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?s=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(s=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){L(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Cs.Composite=Ss,Cs.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Cs.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Cs.prototype.GetterByBindingType=[Cs.prototype._getValue_direct,Cs.prototype._getValue_array,Cs.prototype._getValue_arrayElement,Cs.prototype._getValue_toArray],Cs.prototype.SetterByBindingTypeAndVersioning=[[Cs.prototype._setValue_direct,Cs.prototype._setValue_direct_setNeedsUpdate,Cs.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_array,Cs.prototype._setValue_array_setNeedsUpdate,Cs.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_arrayElement,Cs.prototype._setValue_arrayElement_setNeedsUpdate,Cs.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Cs.prototype._setValue_fromArray,Cs.prototype._setValue_fromArray_setNeedsUpdate,Cs.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],class{static{this.prototype.isMatrix2=!0}constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){let i=this.elements;return i[0]=e,i[2]=t,i[1]=n,i[3]=r,this}};function ws(e,t,n,r){let i=Ts(r);switch(n){case C:return e*t;case O:return e*t/i.components*i.byteLength;case ee:return e*t/i.components*i.byteLength;case k:return e*t*2/i.components*i.byteLength;case te:return e*t*2/i.components*i.byteLength;case w:return e*t*3/i.components*i.byteLength;case T:return e*t*4/i.components*i.byteLength;case ne:return e*t*4/i.components*i.byteLength;case re:case A:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case ie:case j:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case oe:case ce:return Math.max(e,16)*Math.max(t,8)/4;case ae:case se:return Math.max(e,8)*Math.max(t,8)/2;case le:case ue:case M:case fe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case de:case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function Ts(e){switch(e){case u:case d:return{byteLength:1,components:1};case p:case f:case _:return{byteLength:2,components:1};case v:case y:return{byteLength:2,components:4};case h:case m:case g:return{byteLength:4,components:1};case x:case S:return{byteLength:4,components:3}}throw Error(`THREE.TextureUtils: Unknown texture type ${e}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`187`}})),typeof window<`u`&&(window.__THREE__?I(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`187`);function Es(){let e=null,t=!1,n=null,r=null;function i(t,a){r=e.requestAnimationFrame(i),n(t,a)}return{start:function(){t!==!0&&n!==null&&e!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e!==null&&e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function Ds(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(typeof Float16Array<`u`&&r instanceof Float16Array)s=e.HALF_FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var Os={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},K={common:{diffuse:{value:new H(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new B}},envmap:{envMap:{value:null},envMapRotation:{value:new B},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new B}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new B}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new B},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new B},normalScale:{value:new R(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new B},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new B}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new B}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new B}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new H(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new H(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0},uvTransform:{value:new B}},sprite:{diffuse:{value:new H(16777215)},opacity:{value:1},center:{value:new R(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new B},alphaMap:{value:null},alphaMapTransform:{value:new B},alphaTest:{value:0}}},ks={basic:{uniforms:lo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.fog]),vertexShader:Os.meshbasic_vert,fragmentShader:Os.meshbasic_frag},lambert:{uniforms:lo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new H(0)},envMapIntensity:{value:1}}]),vertexShader:Os.meshlambert_vert,fragmentShader:Os.meshlambert_frag},phong:{uniforms:lo([K.common,K.specularmap,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.fog,K.lights,{emissive:{value:new H(0)},specular:{value:new H(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Os.meshphong_vert,fragmentShader:Os.meshphong_frag},standard:{uniforms:lo([K.common,K.envmap,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.roughnessmap,K.metalnessmap,K.fog,K.lights,{emissive:{value:new H(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Os.meshphysical_vert,fragmentShader:Os.meshphysical_frag},toon:{uniforms:lo([K.common,K.aomap,K.lightmap,K.emissivemap,K.bumpmap,K.normalmap,K.displacementmap,K.gradientmap,K.fog,K.lights,{emissive:{value:new H(0)}}]),vertexShader:Os.meshtoon_vert,fragmentShader:Os.meshtoon_frag},matcap:{uniforms:lo([K.common,K.bumpmap,K.normalmap,K.displacementmap,K.fog,{matcap:{value:null}}]),vertexShader:Os.meshmatcap_vert,fragmentShader:Os.meshmatcap_frag},points:{uniforms:lo([K.points,K.fog]),vertexShader:Os.points_vert,fragmentShader:Os.points_frag},dashed:{uniforms:lo([K.common,K.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Os.linedashed_vert,fragmentShader:Os.linedashed_frag},depth:{uniforms:lo([K.common,K.displacementmap]),vertexShader:Os.depth_vert,fragmentShader:Os.depth_frag},normal:{uniforms:lo([K.common,K.bumpmap,K.normalmap,K.displacementmap,{opacity:{value:1}}]),vertexShader:Os.meshnormal_vert,fragmentShader:Os.meshnormal_frag},sprite:{uniforms:lo([K.sprite,K.fog]),vertexShader:Os.sprite_vert,fragmentShader:Os.sprite_frag},background:{uniforms:{uvTransform:{value:new B},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Os.background_vert,fragmentShader:Os.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new B}},vertexShader:Os.backgroundCube_vert,fragmentShader:Os.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Os.cube_vert,fragmentShader:Os.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Os.equirect_vert,fragmentShader:Os.equirect_frag},distance:{uniforms:lo([K.common,K.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Os.distance_vert,fragmentShader:Os.distance_frag},shadow:{uniforms:lo([K.lights,K.fog,{color:{value:new H(0)},opacity:{value:1}}]),vertexShader:Os.shadow_vert,fragmentShader:Os.shadow_frag}};ks.physical={uniforms:lo([ks.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new B},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new B},clearcoatNormalScale:{value:new R(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new B},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new B},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new B},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new B},sheen:{value:0},sheenColor:{value:new H(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new B},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new B},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new B},transmissionSamplerSize:{value:new R},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new B},attenuationDistance:{value:0},attenuationColor:{value:new H(0)},specularColor:{value:new H(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new B},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new B},anisotropyVector:{value:new R},anisotropyMap:{value:null},anisotropyMapTransform:{value:new B}}]),vertexShader:Os.meshphysical_vert,fragmentShader:Os.meshphysical_frag};var As={r:0,b:0,g:0},js=new V,Ms=new B;Ms.set(-1,0,0,0,1,0,0,0,1);function Ns(e,t,n,r,i,a){let o=new H(0),s=i===!0?0:1,c,l,u=null,d=0,f=null;function p(e){let n=e.isScene===!0?e.background:null;if(n&&n.isTexture){let r=e.backgroundBlurriness>0;n=t.get(n,r)}return n}function m(t){let r=!1,i=p(t);i===null?g(o,s):i&&i.isColor&&(g(i,1),r=!0);let c=e.xr.getEnvironmentBlendMode();c===`additive`?n.buffers.color.setClear(0,0,0,1,a):c===`alpha-blend`&&n.buffers.color.setClear(0,0,0,0,a),(e.autoClear||r)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function h(t,n){let i=p(n);i&&i.isCubeTexture?(l===void 0&&(l=new W(new G(1,1,1),new _o({name:`BackgroundCubeMaterial`,uniforms:co(ks.backgroundCube.uniforms),vertexShader:ks.backgroundCube.vertexShader,fragmentShader:ks.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(l)),l.material.uniforms.envMap.value=i,l.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(js.makeRotationFromEuler(n.backgroundRotation)).transpose(),i.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ms),l.material.toneMapped=wt.getTransfer(i.colorSpace)!==We,(u!==i||d!==i.version||f!==e.toneMapping)&&(l.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null)):i&&i.isTexture&&(c===void 0&&(c=new W(new to(2,2),new _o({name:`BackgroundMaterial`,uniforms:co(ks.background.uniforms),vertexShader:ks.background.vertexShader,fragmentShader:ks.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=i,c.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,c.material.toneMapped=wt.getTransfer(i.colorSpace)!==We,i.matrixAutoUpdate===!0&&i.updateMatrix(),c.material.uniforms.uvTransform.value.copy(i.matrix),(u!==i||d!==i.version||f!==e.toneMapping)&&(c.material.needsUpdate=!0,u=i,d=i.version,f=e.toneMapping),c.layers.enableAll(),t.unshift(c,c.geometry,c.material,0,0,null))}function g(t,r){t.getRGB(As,po(e)),n.buffers.color.setClear(As.r,As.g,As.b,r,a)}function _(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(e,t=1){o.set(e),s=t,g(o,s)},getClearAlpha:function(){return s},setClearAlpha:function(e){s=e,g(o,s)},render:m,addToRenderList:h,dispose:_}}function Ps(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(n,s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n,i){let a=i.wireframe===!0,o=r[t.id];o===void 0&&(o={},r[t.id]=o);let s=e.isInstancedMesh===!0?e.id:0,l=o[s];l===void 0&&(l={},o[s]=l);let u=l[n.id];u===void 0&&(u={},l[n.id]=u);let d=u[a];return d===void 0&&(d=f(c()),u[a]=d),d}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.isInterleavedBuffer===!0?t.stride:t.itemSize,p=s.offset;if(t.isInstancedInterleavedBuffer||t.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){T();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n){let t=n[e];for(let e in t)u(t[e].object),delete t[e];delete n[e]}}delete r[e.id]}function C(e){for(let t in r){let n=r[t];for(let t in n){let r=n[t];if(r[e.id]===void 0)continue;let i=r[e.id];for(let e in i)u(i[e].object),delete i[e];delete r[e.id]}}}function w(e){for(let t in r){let n=r[t],i=e.isInstancedMesh===!0?e.id:0,a=n[i];if(a!==void 0){for(let e in a){let t=a[e];for(let e in t)u(t[e].object),delete t[e];delete a[e]}delete n[i],Object.keys(n).length===0&&delete r[t]}}}function T(){E(),o=!0,a!==i&&(a=i,l(a.object))}function E(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:T,resetDefaultState:E,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfObject:w,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function Fs(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s}function Is(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&n!==1015&&!i&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE))}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(I(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`),f=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&I(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`),n.logarithmicDepthBuffer===!0&&d===!0&&I(`WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.`);let p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=e.getParameter(e.MAX_SAMPLES),S=e.getParameter(e.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,maxSamples:x,samples:S}}function Ls(e){let t=this,n=null,r=0,i=!1,a=!1,o=new br,s=new B,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}var Rs=class extends Lt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Ti(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new G(5,5,5),i=new _o({name:`CubemapFromEquirect`,uniforms:co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new W(r,i),o=t.minFilter;return t.minFilter===1008&&(t.minFilter=s),new cs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},zs=256,Bs=3,Vs=20,Hs=256,Us=16,Ws=3,Gs=new z,Ks=new H,qs=class e{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new cs(1,10,null),this._boxMesh=new W(new G(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,r=100,i={}){let{size:a=256,position:o=Gs}=i,s=this._renderer;this._setSize(a);let c=this._allocateTarget(),l=this._getSourceTarget(!0);t>0&&(l.texture.mipmapsAutoUpdate=!1);let u=s.autoClear,d=s.autoClearColor,f=s.autoClearDepth,p=s.autoClearStencil,m=e.background;s.autoClear=!0,s.autoClearColor=!0,s.autoClearDepth=!0,s.autoClearStencil=!0,m===null&&(e.background=s.getClearColor(Ks));let h=new cs(n,r,l);return h.position.copy(o),h.update(s,e),s.autoClear=u,s.autoClearColor=d,s.autoClearDepth=f,s.autoClearStencil=p,e.background=m,t>0&&(l.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$s(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(zs,pt(e))}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?zs:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Js(e,!1,!1),n=Math.log2(e)-Bs;for(let r=0;r<=n;r++)t.texture.mipmaps.push({width:e>>r,height:e>>r});return t.texture.name=`PMREM`,t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Js(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let r=this._boxMesh,i=this._cubeCamera;r.material=n,i.renderTarget=e,i.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),i.update(this._renderer,r),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===301||e.mapping===302?(this._cubemapMaterial===null&&(this._cubemapMaterial=ec()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=$s()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=Xs(),this._integrationMaterial=Zs());let n=this._cubeSize,r=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let a=this._integrationMaterial.uniforms;a.envMap.value=this._sourceTarget.texture,a.sourceLod.value=Math.log2(n/Us);for(let o=0;o<=r;o++){let s=e.lodToRoughness(o,r);if(o>r-Ws)a.roughness.value=s,this._renderCube(t,o,this._integrationMaterial);else{let e=s>0?Math.log2(n)+.5*Math.log2(6/(Hs*s**4))+.5:0;i.roughness.value=s,i.lodBias.value=e,this._renderCube(t,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Qs());let n=this._blurMaterial,r=n.uniforms,i=this._sourceTarget;r.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,r.envMap.value=i.texture,this._renderCube(e,0,n),r.envMap.value=e.texture,this._renderCube(i,0,n)}};function Js(e,t,n){return new Rs(e,{minFilter:l,generateMipmaps:t,type:_,colorSpace:He,depthBuffer:n})}function Ys(e,t,n){return new _o({name:e,uniforms:t,vertexShader:Os.cube_vert,fragmentShader:n,side:1,blending:0,depthTest:!1,depthWrite:!1})}function Xs(){return Ys(`PMREMGGXConvolution`,{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hs}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zs(){return Ys(`PMREMGGXIntegration`,{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Us}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Qs(){return Ys(`PMREMSphericalGaussianBlur`,{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vs}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function $s(){return Ys(`PMREMEquirectangularToCubemap`,{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function ec(){return Ys(`PMREMCubemapToCubemap`,{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function tc(e){let t=new WeakMap,n=new WeakMap,r=null;function i(e,t=!1){return e==null?null:t?o(e):a(e)}function a(n){if(n&&n.isTexture){let r=n.mapping;if(r===303||r===304){if(t.has(n)){let e=t.get(n).texture;return s(e,n.mapping)}{let r=n.image;if(r&&r.height>0){let i=new Rs(r.height);return i.fromEquirectangularTexture(e,n),t.set(n,i),n.addEventListener(`dispose`,l),s(i.texture,n.mapping)}return null}}}return n}function o(t){if(t&&t.isTexture&&t.isPMREMTexture!==!0){let i=t.mapping,a=i===303||i===304,o=i===301||i===302;if(a||o){let i=n.get(t),s=i===void 0?0:i.texture.pmremVersion;if(t.isRenderTargetTexture&&t.pmremVersion!==s)return r===null&&(r=new qs(e)),i=a?r.fromEquirectangular(t,i):r.fromCubemap(t,i),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),i.texture;if(i!==void 0)return i.texture;{let s=t.image;return a&&s&&s.height>0||o&&s&&c(s)?(r===null&&(r=new qs(e)),i=a?r.fromEquirectangular(t):r.fromCubemap(t),i.texture.pmremVersion=t.pmremVersion,n.set(t,i),t.addEventListener(`dispose`,u),i.texture):null}}}return t}function s(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function c(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function l(e){let n=e.target;n.removeEventListener(`dispose`,l);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function u(e){let t=e.target;t.removeEventListener(`dispose`,u);let r=n.get(t);r!==void 0&&(n.delete(t),r.dispose())}function d(){t=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:i,dispose:d}}function nc(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r=e.getExtension(n);return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&nt(`WebGLRenderer: `+e+` extension not supported.`),t}}}function rc(e,t,n,r){let i={},a=new WeakMap,o=new FinalizationRegistry(e=>delete i[e]);function s(e){c(e.target)}function c(e){e.index!==null&&t.remove(e.index);for(let n in e.attributes)t.remove(e.attributes[n]);e.removeEventListener(`dispose`,s),delete i[e.id],o.unregister(e);let c=a.get(e);c&&(t.remove(c),a.delete(e)),r.releaseStatesOfGeometry(e),e.isInstancedBufferGeometry===!0&&delete e._maxInstanceCount,n.memory.geometries--}function l(e,t){return i[t.id]===void 0&&(t.addEventListener(`dispose`,s),i[t.id]=new WeakRef(t),o.register(t,t.id,t),n.memory.geometries++),t}function u(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER)}function d(e){let n=e.index,r=e.attributes.position,i=0;if(r===void 0)return;let o=n===null?r.array.length/3-1:n.array.length,s=new(r.count>=65535?ir:rr)(Math.ceil(o/3)*6,1),c=s.array;if(n!==null){let e=n.array;i=n.version;for(let t=0,n=0;t<o;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];c[n++]=r,c[n++]=i,c[n++]=i,c[n++]=a,c[n++]=a,c[n++]=r}}else{i=r.version;for(let e=0,t=0;e<o;e+=3){let n=e+0,r=e+1,i=e+2;c[t++]=n,c[t++]=r,c[t++]=r,c[t++]=i,c[t++]=i,c[t++]=n}}s.version=i;let l=a.get(e);l&&t.remove(l),a.set(e,s)}function f(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&d(e)}else d(e);return a.get(e)}function p(){for(let e in i){let t=i[e].deref();t!==void 0&&c(t)}}return{get:l,update:u,getWireframeAttribute:f,dispose:p}}function ic(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function ac(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:L(`WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function oc(e,t,n){let r=new WeakMap,i=new Ft;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let h=new Float32Array(p*m*4*u),_=new Rt(h,p,m,u);_.type=g,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),h[d+s+0]=i.x,h[d+s+1]=i.y,h[d+s+2]=i.z,h[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),h[d+s+4]=i.x,h[d+s+5]=i.y,h[d+s+6]=i.z,h[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),h[d+s+8]=i.x,h[d+s+9]=i.y,h[d+s+10]=i.z,h[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new R(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function sc(e,t,n,r,i){let a=new WeakMap;function o(r){let o=i.render.frame,s=r.geometry,l=t.get(r,s);if(a.get(l)!==o&&(t.update(l),a.set(l,o)),r.isInstancedMesh&&(r.hasEventListener(`dispose`,c)===!1&&r.addEventListener(`dispose`,c),a.get(r)!==o&&(n.update(r.instanceMatrix,e.ARRAY_BUFFER),r.instanceColor!==null&&n.update(r.instanceColor,e.ARRAY_BUFFER),a.set(r,o))),r.isSkinnedMesh){let e=r.skeleton;a.get(e)!==o&&(e.update(),a.set(e,o))}return l}function s(){a=new WeakMap}function c(e){let t=e.target;t.removeEventListener(`dispose`,c),r.releaseStatesOfObject(t),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:o,dispose:s}}var cc={1:`LINEAR_TONE_MAPPING`,2:`REINHARD_TONE_MAPPING`,3:`CINEON_TONE_MAPPING`,4:`ACES_FILMIC_TONE_MAPPING`,6:`AGX_TONE_MAPPING`,7:`NEUTRAL_TONE_MAPPING`,5:`CUSTOM_TONE_MAPPING`};function lc(e,t,n,r,i,a){let o=new Lt(t,n,{type:e,depthBuffer:i,stencilBuffer:a,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),s=null,c=null,l=null,u=new gr;u.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute(`uv`,new U([0,2,0,0,2,0],2));let d=new vo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),f=new W(u,d),p=new ns(-1,1,1,-1,0,1),m=null,h=null,g=!1,v,y=null,x=[],S=!1;this.setSize=function(e,t){o.setSize(e,t),s!==null&&s.setSize(e,t),c!==null&&c.setSize(e,t);for(let n=0;n<x.length;n++){let r=x[n];r.setSize&&r.setSize(e,t)}},this.setEffects=function(e){x=e,S=x.length>0&&x[0].isRenderPass===!0;let t=o.width,n=o.height;x.length>0&&s===null&&(s=new Lt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}),c=new Lt(t,n,{type:_,depthBuffer:!1,stencilBuffer:!1}));let r=i===!0&&x.some(e=>e.needsDepthTexture===!0);r!==(o.depthTexture!==null)&&(r===!0&&l===null&&(l=new Di(t,n),a===!0&&(l.format=D,l.type=b)),o.dispose(),o.depthTexture=r?l:null,o.resolveDepthBuffer=r,o.storeMultisampledDepthBuffer=r);for(let e=0;e<x.length;e++){let i=x[e];i.setSize&&i.setSize(t,n),r&&i.needsDepthTexture===!0&&i.setDepthTexture&&i.setDepthTexture(l)}},this.begin=function(e,t){if(g||e.toneMapping===0&&x.length===0)return!1;if(y=t,t!==null){let e=t.width,n=t.height;(o.width!==e||o.height!==n)&&this.setSize(e,n)}return S===!1&&e.setRenderTarget(o),v=e.toneMapping,e.toneMapping=0,!0},this.hasRenderPass=function(){return S},this.end=function(e,t){e.toneMapping=v,g=!0;let n=o,r=s;for(let i=0;i<x.length;i++){let a=x[i];a.enabled!==!1&&(a.render(e,r,n,t),a.needsSwap!==!1&&(n=r,r=r===s?c:s))}if(m!==e.outputColorSpace||h!==e.toneMapping){m=e.outputColorSpace,h=e.toneMapping,d.defines={},wt.getTransfer(m)===`srgb`&&(d.defines.SRGB_TRANSFER=``);let t=cc[h];t&&(d.defines[t]=``),d.needsUpdate=!0}d.uniforms.tDiffuse.value=n.texture,e.setRenderTarget(y),e.render(f,p),y=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){o.dispose(),s!==null&&s.dispose(),c!==null&&c.dispose(),u.dispose(),d.dispose()}}var uc=new Pt,dc=new Di(1,1),fc=new Oi(1),pc=new Rt,mc=new zt,hc=new Ti,gc=[],_c=[],vc=new Float32Array(16),yc=new Float32Array(9),bc=new Float32Array(4);function xc(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=gc[i];if(a===void 0&&(a=new Float32Array(i),gc[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function Sc(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function Cc(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function wc(e,t){let n=_c[t];n===void 0&&(n=new Int32Array(t),_c[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function Tc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function Ec(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sc(n,t))return;e.uniform2fv(this.addr,t),Cc(n,t)}}function Dc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(Sc(n,t))return;e.uniform3fv(this.addr,t),Cc(n,t)}}function Oc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sc(n,t))return;e.uniform4fv(this.addr,t),Cc(n,t)}}function kc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sc(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),Cc(n,t)}else{if(Sc(n,r))return;bc.set(r),e.uniformMatrix2fv(this.addr,!1,bc),Cc(n,r)}}function Ac(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sc(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),Cc(n,t)}else{if(Sc(n,r))return;yc.set(r),e.uniformMatrix3fv(this.addr,!1,yc),Cc(n,r)}}function jc(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(Sc(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),Cc(n,t)}else{if(Sc(n,r))return;vc.set(r),e.uniformMatrix4fv(this.addr,!1,vc),Cc(n,r)}}function Mc(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function Nc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sc(n,t))return;e.uniform2iv(this.addr,t),Cc(n,t)}}function Pc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sc(n,t))return;e.uniform3iv(this.addr,t),Cc(n,t)}}function Fc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sc(n,t))return;e.uniform4iv(this.addr,t),Cc(n,t)}}function Ic(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Lc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(Sc(n,t))return;e.uniform2uiv(this.addr,t),Cc(n,t)}}function Rc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(Sc(n,t))return;e.uniform3uiv(this.addr,t),Cc(n,t)}}function zc(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(Sc(n,t))return;e.uniform4uiv(this.addr,t),Cc(n,t)}}function Bc(e){return e.version===0&&(e.compareFunction=519,e.needsUpdate=!0),e}function Vc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_2D_SHADOW?Bc(dc):uc,n.setTexture2D(t||a,i)}function Hc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||mc,i)}function Uc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;a=this.type===e.SAMPLER_CUBE_SHADOW?Bc(fc):hc,n.setTextureCube(t||a,i)}function Wc(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||pc,i)}function Gc(e){switch(e){case 5126:return Tc;case 35664:return Ec;case 35665:return Dc;case 35666:return Oc;case 35674:return kc;case 35675:return Ac;case 35676:return jc;case 5124:case 35670:return Mc;case 35667:case 35671:return Nc;case 35668:case 35672:return Pc;case 35669:case 35673:return Fc;case 5125:return Ic;case 36294:return Lc;case 36295:return Rc;case 36296:return zc;case 35678:case 36198:case 36298:case 36306:case 35682:return Vc;case 35679:case 36299:case 36307:return Hc;case 35680:case 36300:case 36308:case 36293:return Uc;case 36289:case 36303:case 36311:case 36292:return Wc}}function Kc(e,t){e.uniform1fv(this.addr,t)}function qc(e,t){let n=xc(t,this.size,2);e.uniform2fv(this.addr,n)}function Jc(e,t){let n=xc(t,this.size,3);e.uniform3fv(this.addr,n)}function Yc(e,t){let n=xc(t,this.size,4);e.uniform4fv(this.addr,n)}function Xc(e,t){let n=xc(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Zc(e,t){let n=xc(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Qc(e,t){let n=xc(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function $c(e,t){e.uniform1iv(this.addr,t)}function el(e,t){e.uniform2iv(this.addr,t)}function tl(e,t){e.uniform3iv(this.addr,t)}function nl(e,t){e.uniform4iv(this.addr,t)}function rl(e,t){e.uniform1uiv(this.addr,t)}function il(e,t){e.uniform2uiv(this.addr,t)}function al(e,t){e.uniform3uiv(this.addr,t)}function ol(e,t){e.uniform4uiv(this.addr,t)}function sl(e,t,n){let r=this.cache,i=t.length,a=wc(n,i);Sc(r,a)||(e.uniform1iv(this.addr,a),Cc(r,a));let o;o=this.type===e.SAMPLER_2D_SHADOW?Bc(dc):uc;for(let e=0;e!==i;++e)n.setTexture2D(t[e]||o,a[e])}function cl(e,t,n){let r=this.cache,i=t.length,a=wc(n,i);Sc(r,a)||(e.uniform1iv(this.addr,a),Cc(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||mc,a[e])}function ll(e,t,n){let r=this.cache,i=t.length,a=wc(n,i);Sc(r,a)||(e.uniform1iv(this.addr,a),Cc(r,a));let o;o=this.type===e.SAMPLER_CUBE_SHADOW?Bc(fc):hc;for(let e=0;e!==i;++e)n.setTextureCube(t[e]||o,a[e])}function ul(e,t,n){let r=this.cache,i=t.length,a=wc(n,i);Sc(r,a)||(e.uniform1iv(this.addr,a),Cc(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||pc,a[e])}function dl(e){switch(e){case 5126:return Kc;case 35664:return qc;case 35665:return Jc;case 35666:return Yc;case 35674:return Xc;case 35675:return Zc;case 35676:return Qc;case 5124:case 35670:return $c;case 35667:case 35671:return el;case 35668:case 35672:return tl;case 35669:case 35673:return nl;case 5125:return rl;case 36294:return il;case 36295:return al;case 36296:return ol;case 35678:case 36198:case 36298:case 36306:case 35682:return sl;case 35679:case 36299:case 36307:return cl;case 35680:case 36300:case 36308:case 36293:return ll;case 36289:case 36303:case 36311:case 36292:return ul}}var fl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Gc(t.type)}},pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dl(t.type)}},ml=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},hl=/(\w+)(\])?(\[|\.)?/g;function gl(e,t){e.seq.push(t),e.map[t.id]=t}function _l(e,t,n){let r=e.name,i=r.length;for(hl.lastIndex=0;;){let a=hl.exec(r),o=hl.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){gl(n,l===void 0?new fl(s,e,t):new pl(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new ml(s),gl(n,e)),n=e}}}var vl=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);_l(n,e.getUniformLocation(t,n.name),this)}let r=[],i=[];for(let t of this.seq)t.type===e.SAMPLER_2D_SHADOW||t.type===e.SAMPLER_CUBE_SHADOW||t.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(t):i.push(t);r.length>0&&(this.seq=r.concat(i))}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function yl(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var bl=37297,xl=0;function Sl(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var Cl=new B;function wl(e){wt._getMatrix(Cl,wt.workingColorSpace,e);let t=`mat3( ${Cl.elements.map(e=>e.toFixed(4))} )`;switch(wt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return I(`WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function Tl(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=(e.getShaderInfoLog(t)||``).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+Sl(e.getShaderSource(t),r)}return i}function El(e,t){let n=wl(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,`}`].join(`
`)}var Dl={1:`Linear`,2:`Reinhard`,3:`Cineon`,4:`ACESFilmic`,6:`AgX`,7:`Neutral`,5:`Custom`};function Ol(e,t){let n=Dl[t];return n===void 0?(I(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+e+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var kl=new z;function Al(){return wt.getLuminanceCoefficients(kl),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${kl.x.toFixed(4)}, ${kl.y.toFixed(4)}, ${kl.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function jl(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Pl).join(`
`)}function Ml(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function Nl(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function Pl(e){return e!==``}function Fl(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function Il(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ll=/^[ \t]*#include +<([\w\d./]+)>/gm;function Rl(e){return e.replace(Ll,zl)}function zl(e,t){let n=Os[t];if(n===void 0)throw Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`);return Rl(n)}var Bl=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vl(e){return e.replace(Bl,Hl)}function Hl(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Ul(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Wl={1:`SHADOWMAP_TYPE_PCF`,3:`SHADOWMAP_TYPE_VSM`};function Gl(e){return Wl[e.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var Kl={302:`ENVMAP_MODE_REFRACTION`};function ql(e){return e.envMap===!1?`ENVMAP_MODE_REFLECTION`:Kl[e.envMapMode]||`ENVMAP_MODE_REFLECTION`}var Jl={0:`ENVMAP_BLENDING_MULTIPLY`,1:`ENVMAP_BLENDING_MIX`,2:`ENVMAP_BLENDING_ADD`};function Yl(e){return e.envMap===!1?`ENVMAP_BLENDING_NONE`:Jl[e.combine]||`ENVMAP_BLENDING_NONE`}function Xl(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Gl(n),l=n.envMapPMREM===!0?`ENVMAP_TYPE_PMREM`:`ENVMAP_TYPE_CUBE`,u=ql(n),d=Yl(n),f=jl(n),p=Ml(a),m=i.createProgram(),h,g,_=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(h=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Pl).join(`
`),h.length>0&&(h+=`
`),g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p].filter(Pl).join(`
`),g.length>0&&(g+=`
`)):(h=[Ul(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.diffuseRoughnessMapUv?`#define DIFFUSE_ROUGHNESSMAP_UV `+n.diffuseRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexNormals?`#define HAS_NORMAL`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Pl).join(`
`),g=[Ul(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,p,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,n.envMapPMREM?`#define ENVMAP_MAX_LOD `+n.envMapMaxLod+`.0`:``,n.envMapPMREM?`#define ENVMAP_SIZE `+n.envMapSize+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.diffuseRoughness?`#define USE_DIFFUSE_ROUGHNESS`:``,n.diffuseRoughnessMap?`#define USE_DIFFUSE_ROUGHNESSMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.retroreflection?`#define USE_RETROREFLECTION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor?`#define USE_COLOR`:``,n.vertexAlphas||n.batchingColor?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,n.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:Os.tonemapping_pars_fragment,n.toneMapping===0?``:Ol(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,Os.colorspace_pars_fragment,El(`linearToOutputTexel`,n.outputColorSpace),Al(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(Pl).join(`
`)),o=Rl(o),o=Fl(o,n),o=Il(o,n),s=Rl(s),s=Fl(s,n),s=Il(s,n),o=Vl(o),s=Vl(s),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+h,g=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+g);let v=_+h+o,y=_+g+s,b=yl(i,i.VERTEX_SHADER,v),x=yl(i,i.FRAGMENT_SHADER,y);i.attachShader(m,b),i.attachShader(m,x),n.index0AttributeName===void 0?n.hasPositionAttribute===!0&&i.bindAttribLocation(m,0,`position`):i.bindAttribLocation(m,0,n.index0AttributeName),i.linkProgram(m);function S(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(m)||``,r=i.getShaderInfoLog(b)||``,a=i.getShaderInfoLog(x)||``,o=n.trim(),s=r.trim(),c=a.trim(),l=!0,u=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1){if(l=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,m,b,x);else{let e=Tl(i,b,`vertex`),n=Tl(i,x,`fragment`);L(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+o+`
`+e+`
`+n)}}else o===``?(s===``||c===``)&&(u=!1):I(`WebGLProgram: Program Info Log:`,o);u&&(t.diagnostics={runnable:l,programLog:o,vertexShader:{log:s,prefix:h},fragmentShader:{log:c,prefix:g}})}i.deleteShader(b),i.deleteShader(x),C=new vl(i,m),w=Nl(i,m)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let w;this.getAttributes=function(){return w===void 0&&S(this),w};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(m,bl)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=xl++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=b,this.fragmentShader=x,this}var Zl=0,Ql=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $l(e),t.set(e,n)),n}},$l=class{constructor(e){this.id=Zl++,this.code=e,this.usedTimes=0}};function eu(e){return e===1030||e===37490||e===36285}function tu(e,t,n,r,i,a){let o=new Xt,s=new Ql,c=new Set,l=[],u=new Map,d=r.logarithmicDepthBuffer,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function p(e){return c.add(e),e===0?`uv`:`uv${e}`}function m(i,o,l,u,m,h){let g=u.fog,_=m.geometry,v=i.isMeshStandardMaterial||i.isMeshLambertMaterial||i.isMeshPhongMaterial?u.environment:null,y=i.isMeshStandardMaterial||i.isMeshLambertMaterial&&!i.envMap||i.isMeshPhongMaterial&&!i.envMap,b=t.get(i.envMap||v,y),x=f[i.type],S=r.precision;i.precision!==null&&(S=r.getMaxPrecision(i.precision),S!==i.precision&&I(`WebGLProgram.getParameters:`,i.precision,`not supported, using`,S,`instead.`));let C=_.morphAttributes.position||_.morphAttributes.normal||_.morphAttributes.color,w=C===void 0?0:C.length,T=0;_.morphAttributes.position!==void 0&&(T=1),_.morphAttributes.normal!==void 0&&(T=2),_.morphAttributes.color!==void 0&&(T=3);let E,D,O,ee;if(x){let e=ks[x];E=e.vertexShader,D=e.fragmentShader}else{E=i.vertexShader,D=i.fragmentShader;let e=s.getVertexShaderStage(i),t=s.getFragmentShaderStage(i);s.update(i,e,t),O=e.id,ee=t.id}let k=e.getRenderTarget(),te=e.state.buffers.depth.getReversed(),ne=m.isInstancedMesh===!0,re=m.isBatchedMesh===!0,A=!!i.map,ie=!!i.matcap,j=!!b,ae=j&&b.isPMREMTexture===!0,oe=!!i.aoMap,se=!!i.lightMap,ce=!!i.bumpMap&&i.wireframe===!1,le=!!i.normalMap,ue=!!i.displacementMap,de=!!i.emissiveMap,M=!!i.metalnessMap,fe=!!i.roughnessMap,pe=i.anisotropy>0,me=i.clearcoat>0,he=i.diffuseRoughness>0,ge=i.dispersion>0,_e=i.retroreflectivity>0,ve=i.iridescence>0,ye=i.sheen>0,be=i.transmission>0,xe=pe&&!!i.anisotropyMap,Se=me&&!!i.clearcoatMap,Ce=me&&!!i.clearcoatNormalMap,we=me&&!!i.clearcoatRoughnessMap,Te=he&&!!i.diffuseRoughnessMap,Ee=ve&&!!i.iridescenceMap,De=ve&&!!i.iridescenceThicknessMap,Oe=ye&&!!i.sheenColorMap,ke=ye&&!!i.sheenRoughnessMap,Ae=!!i.specularMap,je=!!i.specularColorMap,Me=!!i.specularIntensityMap,Ne=be&&!!i.transmissionMap,Pe=be&&!!i.thicknessMap,Fe=!!i.gradientMap,Ie=!!i.alphaMap,N=i.alphaTest>0,Le=!!i.alphaHash,Re=!!i.extensions,ze=0;i.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(ze=e.toneMapping);let P=ae?b.isCompressedCubeTexture?b.image[0].mipmaps:b.mipmaps:null,Be={shaderID:x,shaderType:i.type,shaderName:i.name,vertexShader:E,fragmentShader:D,defines:i.defines,customVertexShaderID:O,customFragmentShaderID:ee,isRawShaderMaterial:i.isRawShaderMaterial===!0,glslVersion:i.glslVersion,precision:S,batching:re,batchingColor:re&&m._colorsTexture!==null,instancing:ne,instancingColor:ne&&m.instanceColor!==null,instancingMorph:ne&&m.morphTexture!==null,outputColorSpace:k===null?e.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!i.alphaToCoverage,map:A,matcap:ie,envMap:j,envMapMode:j&&b.mapping,envMapPMREM:ae,envMapMaxLod:ae?P.length-1:null,envMapSize:ae?P[0].width:null,aoMap:oe,lightMap:se,bumpMap:ce,normalMap:le,displacementMap:ue,emissiveMap:de,normalMapObjectSpace:le&&i.normalMapType===1,normalMapTangentSpace:le&&i.normalMapType===0,packedNormalMap:le&&i.normalMapType===0&&eu(i.normalMap.format),metalnessMap:M,roughnessMap:fe,anisotropy:pe,anisotropyMap:xe,clearcoat:me,clearcoatMap:Se,clearcoatNormalMap:Ce,clearcoatRoughnessMap:we,diffuseRoughness:he,diffuseRoughnessMap:Te,dispersion:ge,retroreflection:_e,iridescence:ve,iridescenceMap:Ee,iridescenceThicknessMap:De,sheen:ye,sheenColorMap:Oe,sheenRoughnessMap:ke,specularMap:Ae,specularColorMap:je,specularIntensityMap:Me,transmission:be,transmissionMap:Ne,thicknessMap:Pe,gradientMap:Fe,opaque:i.transparent===!1&&i.blending===1&&i.alphaToCoverage===!1,alphaMap:Ie,alphaTest:N,alphaHash:Le,combine:i.combine,mapUv:A&&p(i.map.channel),aoMapUv:oe&&p(i.aoMap.channel),lightMapUv:se&&p(i.lightMap.channel),bumpMapUv:ce&&p(i.bumpMap.channel),normalMapUv:le&&p(i.normalMap.channel),displacementMapUv:ue&&p(i.displacementMap.channel),emissiveMapUv:de&&p(i.emissiveMap.channel),metalnessMapUv:M&&p(i.metalnessMap.channel),roughnessMapUv:fe&&p(i.roughnessMap.channel),anisotropyMapUv:xe&&p(i.anisotropyMap.channel),clearcoatMapUv:Se&&p(i.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&p(i.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&p(i.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Te&&p(i.diffuseRoughnessMap.channel),iridescenceMapUv:Ee&&p(i.iridescenceMap.channel),iridescenceThicknessMapUv:De&&p(i.iridescenceThicknessMap.channel),sheenColorMapUv:Oe&&p(i.sheenColorMap.channel),sheenRoughnessMapUv:ke&&p(i.sheenRoughnessMap.channel),specularMapUv:Ae&&p(i.specularMap.channel),specularColorMapUv:je&&p(i.specularColorMap.channel),specularIntensityMapUv:Me&&p(i.specularIntensityMap.channel),transmissionMapUv:Ne&&p(i.transmissionMap.channel),thicknessMapUv:Pe&&p(i.thicknessMap.channel),alphaMapUv:Ie&&p(i.alphaMap.channel),vertexTangents:!!_.attributes.tangent&&(le||pe),vertexNormals:!!_.attributes.normal,vertexColors:i.vertexColors,vertexAlphas:i.vertexColors===!0&&!!_.attributes.color&&_.attributes.color.itemSize===4,pointsUvs:m.isPoints===!0&&!!_.attributes.uv&&(A||Ie),fog:!!g,useFog:i.fog===!0,fogExp2:!!g&&g.isFogExp2,flatShading:i.wireframe===!1&&(i.flatShading===!0||_.attributes.normal===void 0&&le===!1&&(i.isMeshLambertMaterial||i.isMeshPhongMaterial||i.isMeshStandardMaterial||i.isMeshPhysicalMaterial)),sizeAttenuation:i.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:te,skinning:m.isSkinnedMesh===!0,hasPositionAttribute:_.attributes.position!==void 0,morphTargets:_.morphAttributes.position!==void 0,morphNormals:_.morphAttributes.normal!==void 0,morphColors:_.morphAttributes.color!==void 0,morphTargetsCount:w,morphTextureStride:T,numSunLights:o.sun.length,numDirLights:o.directional.length,numPointLights:o.point.length,numSpotLights:o.spot.length,numSpotLightMaps:o.spotLightMap.length,numRectAreaLights:o.rectArea.length,numHemiLights:o.hemi.length,numSunLightShadows:o.sunShadowMap.length,numDirLightShadows:o.directionalShadowMap.length,numPointLightShadows:o.pointShadowMap.length,numSpotLightShadows:o.spotShadowMap.length,numSpotLightShadowsWithMaps:o.numSpotLightShadowsWithMaps,numLightProbes:o.numLightProbes,numLightProbeGrids:h.filter(e=>e.texture!==null).length,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:i.dithering,shadowMapEnabled:e.shadowMap.enabled&&l.length>0,shadowMapType:e.shadowMap.type,toneMapping:ze,decodeVideoTexture:A&&i.map.isVideoTexture===!0&&wt.getTransfer(i.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:de&&i.emissiveMap.isVideoTexture===!0&&wt.getTransfer(i.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:i.premultipliedAlpha,doubleSided:i.side===2,flipSided:i.side===1,useDepthPacking:i.depthPacking>=0,depthPacking:i.depthPacking||0,index0AttributeName:i.index0AttributeName,extensionClipCullDistance:Re&&i.extensions.clipCullDistance===!0&&n.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Re&&i.extensions.multiDraw===!0||re)&&n.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:n.has(`KHR_parallel_shader_compile`),customProgramCacheKey:i.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function h(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(g(n,t),_(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function g(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapPMREM),e.push(t.envMapMaxLod),e.push(t.envMapSize),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.diffuseRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.numSunLights),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numSunLightShadows),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.numLightProbeGrids),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function _(e,t){o.disableAll(),t.instancing&&o.enable(0),t.instancingColor&&o.enable(1),t.instancingMorph&&o.enable(2),t.matcap&&o.enable(3),t.envMap&&o.enable(4),t.normalMapObjectSpace&&o.enable(5),t.normalMapTangentSpace&&o.enable(6),t.clearcoat&&o.enable(7),t.iridescence&&o.enable(8),t.alphaTest&&o.enable(9),t.vertexColors&&o.enable(10),t.vertexAlphas&&o.enable(11),t.vertexUv1s&&o.enable(12),t.vertexUv2s&&o.enable(13),t.vertexUv3s&&o.enable(14),t.vertexTangents&&o.enable(15),t.anisotropy&&o.enable(16),t.alphaHash&&o.enable(17),t.batching&&o.enable(18),t.dispersion&&o.enable(19),t.retroreflection&&o.enable(24),t.diffuseRoughness&&o.enable(25),t.batchingColor&&o.enable(20),t.gradientMap&&o.enable(21),t.packedNormalMap&&o.enable(22),t.vertexNormals&&o.enable(23),e.push(o.mask),o.disableAll(),t.fog&&o.enable(0),t.useFog&&o.enable(1),t.flatShading&&o.enable(2),t.logarithmicDepthBuffer&&o.enable(3),t.reversedDepthBuffer&&o.enable(4),t.skinning&&o.enable(5),t.morphTargets&&o.enable(6),t.morphNormals&&o.enable(7),t.morphColors&&o.enable(8),t.premultipliedAlpha&&o.enable(9),t.shadowMapEnabled&&o.enable(10),t.doubleSided&&o.enable(11),t.flipSided&&o.enable(12),t.useDepthPacking&&o.enable(13),t.dithering&&o.enable(14),t.transmission&&o.enable(15),t.sheen&&o.enable(16),t.opaque&&o.enable(17),t.pointsUvs&&o.enable(18),t.decodeVideoTexture&&o.enable(19),t.decodeVideoTextureEmissive&&o.enable(20),t.alphaToCoverage&&o.enable(21),t.numLightProbeGrids>0&&o.enable(22),t.hasPositionAttribute&&o.enable(23),e.push(o.mask)}function v(e){let t=f[e.type],n;if(t){let e=ks[t];n=mo.clone(e.uniforms)}else n=e.uniforms;return n}function y(t,n){let r=u.get(n);return r===void 0?(r=new Xl(e,n,t,i),l.push(r),u.set(n,r)):++r.usedTimes,r}function b(e){if(--e.usedTimes===0){let t=l.indexOf(e);l[t]=l[l.length-1],l.pop(),u.delete(e.cacheKey),e.destroy()}}function x(e){s.remove(e)}function S(){s.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:v,acquireProgram:y,releaseProgram:b,releaseShaderCache:x,programs:l,dispose:S}}function nu(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function ru(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.materialVariant===t.materialVariant?e.z===t.z?e.id-t.id:e.z-t.z:e.materialVariant-t.materialVariant:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function iu(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function au(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(e){let t=0;return e.isInstancedMesh&&(t+=2),e.isSkinnedMesh&&(t+=1),t}function s(n,r,i,a,s,c){let l=e[t];return l===void 0?(l={id:n.id,object:n,geometry:r,material:i,materialVariant:o(n),groupOrder:a,renderOrder:n.renderOrder,z:s,group:c},e[t]=l):(l.id=n.id,l.object=n,l.geometry=r,l.material=i,l.materialVariant=o(n),l.groupOrder=a,l.renderOrder=n.renderOrder,l.z=s,l.group=c),t++,l}function c(e,t,a,o,c,l,u){u.reversedDepth===!0&&(c=-c);let d=s(e,t,a,o,c,l);a.transmission>0?r.push(d):a.transparent===!0?i.push(d):n.push(d)}function l(e,t,a,o,c,l){let u=s(e,t,a,o,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function u(e,t){n.length>1&&n.sort(e||ru),r.length>1&&r.sort(t||iu),i.length>1&&i.sort(t||iu)}function d(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:c,unshift:l,finish:d,sort:u}}function ou(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new au,e.set(t,[i])):n>=r.length?(i=new au,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function su(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={direction:new z,color:new H};break;case`SpotLight`:n={position:new z,direction:new z,color:new H,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new z,color:new H,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new z,skyColor:new H,groundColor:new H};break;case`RectAreaLight`:n={color:new H,position:new z,halfWidth:new z,halfHeight:new z}}return e[t.id]=n,n}}}function cu(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`SunLight`:case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new R,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var lu=0;function uu(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function du(e){let t=new su,n=cu(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new z);let i=new z,a=new V,o=new V;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0,y=0,b=0,x=0;i.sort(uu);for(let e=0,S=i.length;e<S;e++){let S=i[e],C=S.color,w=S.intensity,T=S.distance,E=null;if(S.shadow&&S.shadow.map&&(E=S.shadow.map.texture.format===1030?S.shadow.map.texture:S.shadow.map.depthTexture||S.shadow.map.texture),S.isAmbientLight)a+=C.r*w,o+=C.g*w,s+=C.b*w;else if(S.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(S.sh.coefficients[e],w);x++}else if(S.isSunLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize.copy(e.mapSize).multiply(e.getFrameExtents()),r.sunShadow[l]=t,r.sunShadowMap[l]=E;let i=e.getViewportCount();for(let t=0;t<i;t++)r.sunShadowMatrix[u+t]=e.getMatrix(t),r.sunShadowCascade[u+t]=e._cascadeData[t];u+=i,l++}r.sun[c]=e,c++}else if(S.isDirectionalLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[d]=t,r.directionalShadowMap[d]=E,r.directionalShadowMatrix[d]=S.shadow.matrix,g++}r.directional[d]=e,d++}else if(S.isSpotLight){let e=t.get(S);e.position.setFromMatrixPosition(S.matrixWorld),e.color.copy(C).multiplyScalar(w),e.distance=T,e.coneCos=Math.cos(S.angle),e.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),e.decay=S.decay,r.spot[p]=e;let i=S.shadow;if(S.map&&(r.spotLightMap[y]=S.map,y++,i.updateMatrices(S),S.castShadow&&b++),r.spotLightMatrix[p]=i.matrix,S.castShadow){let e=n.get(S);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[p]=e,r.spotShadowMap[p]=E,v++}p++}else if(S.isRectAreaLight){let e=t.get(S);e.color.copy(C).multiplyScalar(w),e.halfWidth.set(S.width*.5,0,0),e.halfHeight.set(0,S.height*.5,0),r.rectArea[m]=e,m++}else if(S.isPointLight){let e=t.get(S);if(e.color.copy(S.color).multiplyScalar(S.intensity),e.distance=S.distance,e.decay=S.decay,S.castShadow){let e=S.shadow,t=n.get(S);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[f]=t,r.pointShadowMap[f]=E,r.pointShadowMatrix[f]=S.shadow.matrix,_++}r.point[f]=e,f++}else if(S.isHemisphereLight){let e=t.get(S);e.skyColor.copy(S.color).multiplyScalar(w),e.groundColor.copy(S.groundColor).multiplyScalar(w),r.hemi[h]=e,h++}}m>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=K.LTC_FLOAT_1,r.rectAreaLTC2=K.LTC_FLOAT_2):(r.rectAreaLTC1=K.LTC_HALF_1,r.rectAreaLTC2=K.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let S=r.hash;(S.sunLength!==c||S.directionalLength!==d||S.pointLength!==f||S.spotLength!==p||S.rectAreaLength!==m||S.hemiLength!==h||S.numSunShadows!==l||S.numDirectionalShadows!==g||S.numPointShadows!==_||S.numSpotShadows!==v||S.numSpotMaps!==y||S.numLightProbes!==x)&&(r.sun.length=c,r.directional.length=d,r.spot.length=p,r.rectArea.length=m,r.point.length=f,r.hemi.length=h,r.sunShadow.length=l,r.sunShadowMap.length=l,r.sunShadowMatrix.length=u,r.sunShadowCascade.length=u,r.directionalShadow.length=g,r.directionalShadowMap.length=g,r.directionalShadowMatrix.length=g,r.pointShadow.length=_,r.pointShadowMap.length=_,r.pointShadowMatrix.length=_,r.spotShadow.length=v,r.spotShadowMap.length=v,r.spotLightMatrix.length=v+y-b,r.spotLightMap.length=y,r.numSpotLightShadowsWithMaps=b,r.numLightProbes=x,S.sunLength=c,S.directionalLength=d,S.pointLength=f,S.spotLength=p,S.rectAreaLength=m,S.hemiLength=h,S.numSunShadows=l,S.numDirectionalShadows=g,S.numPointShadows=_,S.numSpotShadows=v,S.numSpotMaps=y,S.numLightProbes=x,r.version=lu++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=0,f=t.matrixWorldInverse;for(let t=0,p=e.length;t<p;t++){let p=e[t];if(p.isSunLight){let e=r.sun[n];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),n++}else if(p.isDirectionalLight){let e=r.directional[s];e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),s++}else if(p.isSpotLight){let e=r.spot[l];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),e.direction.setFromMatrixPosition(p.matrixWorld),i.setFromMatrixPosition(p.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(f),l++}else if(p.isRectAreaLight){let e=r.rectArea[u];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),o.identity(),a.copy(p.matrixWorld),a.premultiply(f),o.extractRotation(a),e.halfWidth.set(p.width*.5,0,0),e.halfHeight.set(0,p.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),u++}else if(p.isPointLight){let e=r.point[c];e.position.setFromMatrixPosition(p.matrixWorld),e.position.applyMatrix4(f),c++}else if(p.isHemisphereLight){let e=r.hemi[d];e.direction.setFromMatrixPosition(p.matrixWorld),e.direction.transformDirection(f),d++}}}return{setup:s,setupView:c,state:r}}function fu(e){let t=new du(e),n=[],r=[],i=[];function a(e){u.camera=e,n.length=0,r.length=0,i.length=0}function o(e){e.isLightProbeGrid?i.push(e):n.push(e)}function s(e){r.push(e)}function c(){t.setup(n),i.sort((e,t)=>e.priority-t.priority||e.id-t.id)}function l(e){t.setupView(n,e)}let u={lightsArray:n,shadowsArray:r,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:a,state:u,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:s}}function pu(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new fu(e),t.set(n,[a])):r>=i.length?(a=new fu(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var mu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hu=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,gu=[new z(1,0,0),new z(-1,0,0),new z(0,1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1)],_u=[new z(0,-1,0),new z(0,-1,0),new z(0,0,1),new z(0,0,-1),new z(0,-1,0),new z(0,-1,0)],vu=new V,yu=new z,bu=new z;function xu(e,t,n){let r=new hi,a=new R,o=new R,c=new Ft,l=new bo,u=new xo,d={},f=n.maxTextureSize,p={0:1,1:0,2:2},m=new _o({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new R},radius:{value:4}},vertexShader:mu,fragmentShader:hu}),v=m.clone();v.defines.HORIZONTAL_PASS=1;let y=new gr;y.setAttribute(`position`,new nr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let b=new W(y,m),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let S=this.type;this.render=function(t,n,l){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||t.length===0)return;this.type===2&&(I(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=1);let u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.state;m.setBlending(0),m.buffers.depth.getReversed()===!0?m.buffers.color.setClear(0,0,0,0):m.buffers.color.setClear(1,1,1,1),m.buffers.depth.setTest(!0),m.setScissorTest(!1);let v=S!==this.type;v&&n.traverse(function(e){e.material&&(Array.isArray(e.material)?e.material.forEach(e=>e.needsUpdate=!0):e.material.needsUpdate=!0)});for(let u=0,d=t.length;u<d;u++){let d=t[u],p=d.shadow;if(p===void 0){I(`WebGLShadowMap:`,d,`has no shadow.`);continue}if(p.autoUpdate===!1&&p.needsUpdate===!1)continue;a.copy(p.mapSize);let y=p.getFrameExtents();a.multiply(y),o.copy(p.mapSize),(a.x>f||a.y>f)&&(a.x>f&&(o.x=Math.floor(f/y.x),a.x=o.x*y.x,p.mapSize.x=o.x),a.y>f&&(o.y=Math.floor(f/y.y),a.y=o.y*y.y,p.mapSize.y=o.y));let b=e.state.buffers.depth.getReversed();if(p.camera._reversedDepth=b,p.map===null||v===!0){if(p.map!==null&&(p.map.depthTexture!==null&&(p.map.depthTexture.dispose(),p.map.depthTexture=null),p.map.dispose()),this.type===3){if(d.isPointLight){I(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}p.map=new Lt(a.x,a.y,{format:k,type:_,minFilter:s,magFilter:s,generateMipmaps:!1}),p.map.texture.name=d.name+`.shadowMap`,p.map.depthTexture=new Di(a.x,a.y,g),p.map.depthTexture.name=d.name+`.shadowMapDepth`,p.map.depthTexture.format=E,p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i}else d.isPointLight?(p.map=new Rs(a.x),p.map.depthTexture=new Oi(a.x,h)):(p.map=new Lt(a.x,a.y),p.map.depthTexture=new Di(a.x,a.y,h)),p.map.depthTexture.name=d.name+`.shadowMap`,p.map.depthTexture.format=E,this.type===1?(p.map.depthTexture.compareFunction=b?518:515,p.map.depthTexture.minFilter=s,p.map.depthTexture.magFilter=s):(p.map.depthTexture.compareFunction=null,p.map.depthTexture.minFilter=i,p.map.depthTexture.magFilter=i);p.camera.updateProjectionMatrix()}p.map.isWebGLCubeRenderTarget!==!0&&(p.map.width!==a.x||p.map.height!==a.y)&&p.map.setSize(a.x,a.y);let x=p.map.isWebGLCubeRenderTarget?6:p.getViewportCount();d.isPointLight!==!0&&p.updateMatrices(d,l);let S=p.camera.layers.mask&4294967294?p.camera.layers:l.layers;for(let t=0;t<x;t++){let i=p.getCamera(t);if(d.isPointLight){let e=p.camera,n=p.matrix,r=d.distance||e.far;r!==e.far&&(e.far=r,e.updateProjectionMatrix()),yu.setFromMatrixPosition(d.matrixWorld),e.position.copy(yu),bu.copy(e.position),bu.add(gu[t]),e.up.copy(_u[t]),e.lookAt(bu),e.updateMatrixWorld(),n.makeTranslation(-yu.x,-yu.y,-yu.z),vu.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),p._frustum.setFromProjectionMatrix(vu,e.coordinateSystem,e.reversedDepth)}if(p.map.isWebGLCubeRenderTarget)e.setRenderTarget(p.map,t),e.clear();else{t===0&&(e.setRenderTarget(p.map),e.clear());let n=p.getViewport(t);c.set(o.x*n.x,o.y*n.y,o.x*n.z,o.y*n.w),m.viewport(c)}r=p.getFrustum(t),T(n,l,i,d,S,this.type)}p.isPointLightShadow!==!0&&this.type===3&&C(p,l),p.needsUpdate=!1}S=this.type,x.needsUpdate=!1,e.setRenderTarget(u,d,p)};function C(n,r){let i=t.update(b);m.defines.VSM_SAMPLES!==n.blurSamples&&(m.defines.VSM_SAMPLES=n.blurSamples,v.defines.VSM_SAMPLES=n.blurSamples,m.needsUpdate=!0,v.needsUpdate=!0),n.mapPass===null?n.mapPass=new Lt(a.x,a.y,{format:k,type:_}):(n.mapPass.width!==n.map.width||n.mapPass.height!==n.map.height)&&n.mapPass.setSize(n.map.width,n.map.height),m.uniforms.shadow_pass.value=n.map.depthTexture,m.uniforms.resolution.value.set(n.map.width,n.map.height),m.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,m,b,null),v.uniforms.shadow_pass.value=n.mapPass.texture,v.uniforms.resolution.value.set(n.map.width,n.map.height),v.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,v,b,null)}function w(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?u:l,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0||n.alphaToCoverage===!0){let e=a.uuid,t=n.uuid,r=d[e];r===void 0&&(r={},d[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,D)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?p[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaToCoverage===!0?.5:n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function T(n,i,a,o,s,c){if(n.visible===!1)return;if(n.layers.test(s)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&c===3)&&(!n.frustumCulled||n.intersectsFrustum(r))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let r=t.update(n),s=n.material;if(Array.isArray(s)){let t=r.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=s[u.materialIndex];if(d&&d.visible){let t=w(n,d,o,c);n.onBeforeShadow(e,n,i,a,r,t,u),e.renderBufferDirect(a,null,r,t,n,u),n.onAfterShadow(e,n,i,a,r,t,u)}}}else if(s.visible){let t=w(n,s,o,c);n.onBeforeShadow(e,n,i,a,r,t,null),e.renderBufferDirect(a,null,r,t,n,null),n.onAfterShadow(e,n,i,a,r,t,null)}}let l=n.children;for(let e=0,t=l.length;e<t;e++)T(l[e],i,a,o,s,c)}function D(e){e.target.removeEventListener(`dispose`,D);for(let t in d){let n=d[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}function Su(e,t){function n(){let t=!1,n=new Ft,r=null,i=new Ft(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let n=t.get(`EXT_clip_control`);e?n.clipControlEXT(n.LOWER_LEFT_EXT,n.ZERO_TO_ONE_EXT):n.clipControlEXT(n.LOWER_LEFT_EXT,n.NEGATIVE_ONE_TO_ONE_EXT),r=e;let i=o;o=null,this.setClear(i)}},getReversed:function(){return r},setTest:function(t){t?M(e.DEPTH_TEST):fe(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=it[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(o=t,r&&(t=1-t),e.clearDepth(t))},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?M(e.STENCIL_TEST):fe(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c={},l=new WeakMap,u={},d={},f={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ne=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,A=0,ie=e.getParameter(e.VERSION);ie.indexOf(`WebGL`)===-1?ie.indexOf(`OpenGL ES`)!==-1&&(A=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),re=A>=2):(A=parseFloat(/^WebGL (\d)/.exec(ie)[1]),re=A>=1);let j=null,ae={},oe=e.getParameter(e.SCISSOR_BOX),se=e.getParameter(e.VIEWPORT),ce=new Ft().fromArray(oe),le=new Ft().fromArray(se);function ue(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let de={};de[e.TEXTURE_2D]=ue(e.TEXTURE_2D,e.TEXTURE_2D,1),de[e.TEXTURE_CUBE_MAP]=ue(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),de[e.TEXTURE_2D_ARRAY]=ue(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),de[e.TEXTURE_3D]=ue(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),M(e.DEPTH_TEST),o.setFunc(3),be(!1),xe(1),M(e.CULL_FACE),ve(0);function M(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function fe(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function pe(t,n){return f[t]!==n&&(e.bindFramebuffer(t,n),f[t]=n,t===e.DRAW_FRAMEBUFFER&&(f[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(f[e.DRAW_FRAMEBUFFER]=n),!0)}function me(t,n){let r=m,i=!1;if(t){r=p.get(n),r===void 0&&(r=[],p.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function he(t){return h!==t&&(e.useProgram(t),h=t,!0)}let ge={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ge[103]=e.MIN,ge[104]=e.MAX;let _e={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function ve(t,n,r,i,a,o,s,c,l,u){if(t===0)g===!0&&(fe(e.BLEND),g=!1);else if(g===!1&&(M(e.BLEND),g=!0),t!==5){if(t!==_||u!==E){if((v!==100||x!==100)&&(e.blendEquation(e.FUNC_ADD),v=100,x=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.DST_COLOR,e.ONE_MINUS_SRC_ALPHA,e.ZERO,e.ONE);break;default:L(`WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE,e.ONE,e.ONE);break;case 3:L(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case 4:L(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:L(`WebGLState: Invalid blending: `,t)}y=null,b=null,S=null,C=null,w.set(0,0,0),T=0,_=t,E=u}}else a||=n,o||=r,s||=i,(n!==v||a!==x)&&(e.blendEquationSeparate(ge[n],ge[a]),v=n,x=a),(r!==y||i!==b||o!==S||s!==C)&&(e.blendFuncSeparate(_e[r],_e[i],_e[o],_e[s]),y=r,b=i,S=o,C=s),(c.equals(w)===!1||l!==T)&&(e.blendColor(c.r,c.g,c.b,l),w.copy(c),T=l),_=t,E=!1}function ye(t,n){t.side===2?fe(e.CULL_FACE):M(e.CULL_FACE);let r=t.side===1;n&&(r=!r),be(r),t.blending===1&&t.transparent===!1?ve(0):ve(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ce(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?M(e.SAMPLE_ALPHA_TO_COVERAGE):fe(e.SAMPLE_ALPHA_TO_COVERAGE)}function be(t){D!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),D=t)}function xe(t){t===0?fe(e.CULL_FACE):(M(e.CULL_FACE),t!==O&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),O=t}function Se(t){t!==ee&&(re&&e.lineWidth(t),ee=t)}function Ce(t,n,r){t?(M(e.POLYGON_OFFSET_FILL),(k!==n||te!==r)&&(k=n,te=r,o.getReversed()&&(n=-n,r=-r),e.polygonOffset(n,r))):fe(e.POLYGON_OFFSET_FILL)}function we(t){t?M(e.SCISSOR_TEST):fe(e.SCISSOR_TEST)}function Te(t){t===void 0&&(t=e.TEXTURE0+ne-1),j!==t&&(e.activeTexture(t),j=t)}function Ee(t,n,r){r===void 0&&(r=j===null?e.TEXTURE0+ne-1:j);let i=ae[r];i===void 0&&(i={type:void 0,texture:void 0},ae[r]=i),(i.type!==t||i.texture!==n)&&(j!==r&&(e.activeTexture(r),j=r),e.bindTexture(t,n||de[t]),i.type=t,i.texture=n)}function De(){let t=ae[j];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ae(){try{e.texSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function je(){try{e.texSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Pe(){try{e.texStorage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Fe(){try{e.texStorage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Ie(){try{e.texImage2D(...arguments)}catch(e){L(`WebGLState:`,e)}}function N(){try{e.texImage3D(...arguments)}catch(e){L(`WebGLState:`,e)}}function Le(t){return d[t]===void 0?e.getParameter(t):d[t]}function Re(t,n){d[t]!==n&&(e.pixelStorei(t,n),d[t]=n)}function ze(t){ce.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ce.copy(t))}function P(t){le.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),le.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),e.uniformBlockBinding(n,i,i),r.set(t,i))}function F(t,n,r){let i=l.get(n).get(t);c[i]!==r&&(e.bindBufferBase(e.UNIFORM_BUFFER,i,r),c[i]=r)}function Ve(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),e.pixelStorei(e.PACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_ALIGNMENT,4),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!1),e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.BROWSER_DEFAULT_WEBGL),e.pixelStorei(e.PACK_ROW_LENGTH,0),e.pixelStorei(e.PACK_SKIP_PIXELS,0),e.pixelStorei(e.PACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_ROW_LENGTH,0),e.pixelStorei(e.UNPACK_IMAGE_HEIGHT,0),e.pixelStorei(e.UNPACK_SKIP_PIXELS,0),e.pixelStorei(e.UNPACK_SKIP_ROWS,0),e.pixelStorei(e.UNPACK_SKIP_IMAGES,0),u={},d={},j=null,ae={},f={},c={},p=new WeakMap,m=[],h=null,g=!1,_=null,v=null,y=null,b=null,x=null,S=null,C=null,w=new H(0,0,0),T=0,E=!1,D=null,O=null,ee=null,k=null,te=null,ce.set(0,0,e.canvas.width,e.canvas.height),le.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:M,disable:fe,bindFramebuffer:pe,drawBuffers:me,useProgram:he,setBlending:ve,setMaterial:ye,setFlipSided:be,setCullFace:xe,setLineWidth:Se,setPolygonOffset:Ce,setScissorTest:we,activeTexture:Te,bindTexture:Ee,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:Ie,texImage3D:N,pixelStorei:Re,getParameter:Le,updateUBOMapping:Be,uniformBlockBinding:F,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:ze,viewport:P,reset:Ve}}function Cu(e,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new R,y=new WeakMap,b=new Set,x,S=new WeakMap,C=new Set,w=new FinalizationRegistry(e=>C.delete(e)),T=!1;try{T=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function E(e,t){return T?new OffscreenCanvas(e,t):Ze(`canvas`)}function O(e,t,n){let r=1,i=Ve(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);x===void 0&&(x=E(n,a));let o=t?E(n,a):x;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),I(`WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&I(`WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function ee(e){return e.generateMipmaps}function k(t){e.generateMipmap(t)}function te(t){return t.isWebGLCubeRenderTarget?e.TEXTURE_CUBE_MAP:t.isWebGL3DRenderTarget?e.TEXTURE_3D:t.isWebGLArrayRenderTarget||t.isCompressedArrayTexture?e.TEXTURE_2D_ARRAY:e.TEXTURE_2D}function ne(t,n,r,i,a,o=!1){if(t!==null){if(e[t]!==void 0)return e[t];I(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+t+`'`)}let s;i&&(s=u.get(`EXT_texture_norm16`),s||I(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let c=n;if(n===e.RED&&(r===e.FLOAT&&(c=e.R32F),r===e.HALF_FLOAT&&(c=e.R16F),r===e.UNSIGNED_BYTE&&(c=e.R8),r===e.UNSIGNED_SHORT&&s&&(c=s.R16_EXT),r===e.SHORT&&s&&(c=s.R16_SNORM_EXT)),n===e.RED_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.R8UI),r===e.UNSIGNED_SHORT&&(c=e.R16UI),r===e.UNSIGNED_INT&&(c=e.R32UI),r===e.BYTE&&(c=e.R8I),r===e.SHORT&&(c=e.R16I),r===e.INT&&(c=e.R32I)),n===e.RG&&(r===e.FLOAT&&(c=e.RG32F),r===e.HALF_FLOAT&&(c=e.RG16F),r===e.UNSIGNED_BYTE&&(c=e.RG8),r===e.UNSIGNED_SHORT&&s&&(c=s.RG16_EXT),r===e.SHORT&&s&&(c=s.RG16_SNORM_EXT)),n===e.RG_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RG8UI),r===e.UNSIGNED_SHORT&&(c=e.RG16UI),r===e.UNSIGNED_INT&&(c=e.RG32UI),r===e.BYTE&&(c=e.RG8I),r===e.SHORT&&(c=e.RG16I),r===e.INT&&(c=e.RG32I)),n===e.RGB_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGB8UI),r===e.UNSIGNED_SHORT&&(c=e.RGB16UI),r===e.UNSIGNED_INT&&(c=e.RGB32UI),r===e.BYTE&&(c=e.RGB8I),r===e.SHORT&&(c=e.RGB16I),r===e.INT&&(c=e.RGB32I)),n===e.RGBA_INTEGER&&(r===e.UNSIGNED_BYTE&&(c=e.RGBA8UI),r===e.UNSIGNED_SHORT&&(c=e.RGBA16UI),r===e.UNSIGNED_INT&&(c=e.RGBA32UI),r===e.BYTE&&(c=e.RGBA8I),r===e.SHORT&&(c=e.RGBA16I),r===e.INT&&(c=e.RGBA32I)),n===e.RGB&&(r===e.UNSIGNED_SHORT&&s&&(c=s.RGB16_EXT),r===e.SHORT&&s&&(c=s.RGB16_SNORM_EXT),r===e.UNSIGNED_INT_5_9_9_9_REV&&(c=e.RGB9_E5),r===e.UNSIGNED_INT_10F_11F_11F_REV&&(c=e.R11F_G11F_B10F)),n===e.RGBA){let t=o?Ue:wt.getTransfer(a);r===e.FLOAT&&(c=e.RGBA32F),r===e.HALF_FLOAT&&(c=e.RGBA16F),r===e.UNSIGNED_BYTE&&(c=t===`srgb`?e.SRGB8_ALPHA8:e.RGBA8),r===e.UNSIGNED_SHORT&&s&&(c=s.RGBA16_EXT),r===e.SHORT&&s&&(c=s.RGBA16_SNORM_EXT),r===e.UNSIGNED_SHORT_4_4_4_4&&(c=e.RGBA4),r===e.UNSIGNED_SHORT_5_5_5_1&&(c=e.RGB5_A1)}return(c===e.R16F||c===e.R32F||c===e.RG16F||c===e.RG32F||c===e.RGBA16F||c===e.RGBA32F)&&u.get(`EXT_color_buffer_float`),c}function re(t,n){let r;return t?n===null||n===1014||n===1020?r=e.DEPTH24_STENCIL8:n===1015?r=e.DEPTH32F_STENCIL8:n===1012&&(r=e.DEPTH24_STENCIL8,I(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):n===null||n===1014||n===1020?r=e.DEPTH_COMPONENT24:n===1015?r=e.DEPTH_COMPONENT32F:n===1012&&(r=e.DEPTH_COMPONENT16),r}function A(e,t){return ee(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ie(e){let t=new WeakRef(e);f.get(e).__ref=t,C.add(t),w.register(e,t,t)}function j(e){let t=f.get(e).__ref;t!==void 0&&(C.delete(t),w.unregister(t))}function ae(e){se(e.target)}function oe(e){ce(e.target)}function se(e){e.removeEventListener(`dispose`,ae),j(e),ue(e),e.isVideoTexture&&y.delete(e),e.isHTMLTexture&&b.delete(e)}function ce(e){e.removeEventListener(`dispose`,oe),j(e),M(e)}function le(){for(let e of C){let t=e.deref();t!==void 0&&(t.isRenderTarget===!0?ce(t):se(t))}C.clear(),b.clear()}function ue(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=S.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&de(e),Object.keys(r).length===0&&S.delete(n)}f.remove(e)}function de(t){let n=f.get(t);e.deleteTexture(n.__webglTexture);let r=t.source,i=S.get(r);delete i[n.__cacheKey],h.memory.textures--}function M(t){let n=f.get(t);n.__depthDisposeCallback&&n.__depthDisposeCallback();let r=t.depthTexture;if(r&&r.renderTarget===t&&se(r),t.isWebGLCubeRenderTarget)for(let t=0;t<6;t++){if(Array.isArray(n.__webglFramebuffer[t]))for(let r=0;r<n.__webglFramebuffer[t].length;r++)e.deleteFramebuffer(n.__webglFramebuffer[t][r]);else e.deleteFramebuffer(n.__webglFramebuffer[t]);n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer[t])}else{if(Array.isArray(n.__webglFramebuffer))for(let t=0;t<n.__webglFramebuffer.length;t++)e.deleteFramebuffer(n.__webglFramebuffer[t]);else e.deleteFramebuffer(n.__webglFramebuffer);if(n.__webglDepthbuffer&&e.deleteRenderbuffer(n.__webglDepthbuffer),n.__webglMultisampledFramebuffer&&e.deleteFramebuffer(n.__webglMultisampledFramebuffer),n.__webglColorRenderbuffer)for(let t=0;t<n.__webglColorRenderbuffer.length;t++)n.__webglColorRenderbuffer[t]&&e.deleteRenderbuffer(n.__webglColorRenderbuffer[t]);n.__webglDepthRenderbuffer&&e.deleteRenderbuffer(n.__webglDepthRenderbuffer)}let i=t.textures;for(let t=0,n=i.length;t<n;t++){let n=f.get(i[t]);n.__webglTexture&&(e.deleteTexture(n.__webglTexture),h.memory.textures--),f.remove(i[t])}f.remove(t)}let fe=0;function pe(){fe=0}function me(){return fe}function he(e){fe=e}function ge(){let e=fe;return e>=p.maxTextures&&I(`WebGLTextures: Trying to use `+(e+1)+` texture units while this GPU supports only `+p.maxTextures),fe+=1,e}function _e(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.mipmapsAutoUpdate),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function ve(t,n){let r=f.get(t);if(t.isVideoTexture&&Be(t),t.isRenderTargetTexture===!1&&t.isExternalTexture!==!0&&t.version>0&&r.__version!==t.version){let e=t.image;if(e===null)I(`WebGLRenderer: Texture marked for update but no image data found.`);else if(e.complete===!1)I(`WebGLRenderer: Texture marked for update but image is incomplete`);else{ke(r,t,n);return}}else t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null);d.bindTexture(e.TEXTURE_2D,r.__webglTexture,e.TEXTURE0+n)}function ye(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?ke(r,t,n):(t.isExternalTexture&&(r.__webglTexture=t.sourceTexture?t.sourceTexture:null),d.bindTexture(e.TEXTURE_2D_ARRAY,r.__webglTexture,e.TEXTURE0+n))}function be(t,n){let r=f.get(t);t.isRenderTargetTexture===!1&&t.version>0&&r.__version!==t.version?ke(r,t,n):d.bindTexture(e.TEXTURE_3D,r.__webglTexture,e.TEXTURE0+n)}function xe(t,n){let r=f.get(t);t.version>0&&r.__version!==t.version?Ae(r,t,n):d.bindTexture(e.TEXTURE_CUBE_MAP,r.__webglTexture,e.TEXTURE0+n)}let Se={[t]:e.REPEAT,[n]:e.CLAMP_TO_EDGE,[r]:e.MIRRORED_REPEAT},Ce={[i]:e.NEAREST,[a]:e.NEAREST_MIPMAP_NEAREST,[o]:e.NEAREST_MIPMAP_LINEAR,[s]:e.LINEAR,[c]:e.LINEAR_MIPMAP_NEAREST,[l]:e.LINEAR_MIPMAP_LINEAR},we={512:e.NEVER,519:e.ALWAYS,513:e.LESS,515:e.LEQUAL,514:e.EQUAL,518:e.GEQUAL,516:e.GREATER,517:e.NOTEQUAL};function Te(t,n){if(n.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(n.magFilter===1006||n.magFilter===1007||n.magFilter===1005||n.magFilter===1008||n.minFilter===1006||n.minFilter===1007||n.minFilter===1005||n.minFilter===1008)&&I(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),e.texParameteri(t,e.TEXTURE_WRAP_S,Se[n.wrapS]),e.texParameteri(t,e.TEXTURE_WRAP_T,Se[n.wrapT]),(t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY)&&e.texParameteri(t,e.TEXTURE_WRAP_R,Se[n.wrapR]),e.texParameteri(t,e.TEXTURE_MAG_FILTER,Ce[n.magFilter]),e.texParameteri(t,e.TEXTURE_MIN_FILTER,Ce[n.minFilter]),n.compareFunction&&(e.texParameteri(t,e.TEXTURE_COMPARE_MODE,e.COMPARE_REF_TO_TEXTURE),e.texParameteri(t,e.TEXTURE_COMPARE_FUNC,we[n.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(n.magFilter===1003||n.minFilter!==1005&&n.minFilter!==1008||n.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(n.anisotropy>1||f.get(n).__currentAnisotropy){let r=u.get(`EXT_texture_filter_anisotropic`);e.texParameterf(t,r.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(n.anisotropy,p.getMaxAnisotropy())),f.get(n).__currentAnisotropy=n.anisotropy}}}function Ee(t,n){let r=!1;t.__webglInit===void 0&&(t.__webglInit=!0,n.addEventListener(`dispose`,ae),ie(n));let i=n.source,a=S.get(i);a===void 0&&(a={},S.set(i,a));let o=_e(n);if(o!==t.__cacheKey){a[o]===void 0&&(a[o]={texture:e.createTexture(),usedTimes:0},h.memory.textures++,r=!0),a[o].usedTimes++;let i=a[t.__cacheKey];i!==void 0&&(a[t.__cacheKey].usedTimes--,i.usedTimes===0&&de(n)),t.__cacheKey=o,t.__webglTexture=a[o].texture}return r}function De(e,t,n){return Math.floor(Math.floor(e/n)/t)}function Oe(t,n,r,i){let a=t.updateRanges;if(a.length===0)d.texSubImage2D(e.TEXTURE_2D,0,0,0,n.width,n.height,r,i,n.data);else{a.sort((e,t)=>e.start-t.start);let o=0;for(let e=1;e<a.length;e++){let t=a[o],r=a[e],i=t.start+t.count,s=De(r.start,n.width,4),c=De(t.start,n.width,4);r.start<=i+1&&s===c&&De(r.start+r.count-1,n.width,4)===s?t.count=Math.max(t.count,r.start+r.count-t.start):(++o,a[o]=r)}a.length=o+1;let s=d.getParameter(e.UNPACK_ROW_LENGTH),c=d.getParameter(e.UNPACK_SKIP_PIXELS),l=d.getParameter(e.UNPACK_SKIP_ROWS);d.pixelStorei(e.UNPACK_ROW_LENGTH,n.width);for(let t=0,o=a.length;t<o;t++){let o=a[t],s=Math.floor(o.start/4),c=Math.ceil(o.count/4),l=s%n.width,u=Math.floor(s/n.width),f=c;d.pixelStorei(e.UNPACK_SKIP_PIXELS,l),d.pixelStorei(e.UNPACK_SKIP_ROWS,u),d.texSubImage2D(e.TEXTURE_2D,0,l,u,f,1,r,i,n.data)}t.clearUpdateRanges(),d.pixelStorei(e.UNPACK_ROW_LENGTH,s),d.pixelStorei(e.UNPACK_SKIP_PIXELS,c),d.pixelStorei(e.UNPACK_SKIP_ROWS,l)}}function ke(t,n,r){let i=e.TEXTURE_2D;(n.isDataArrayTexture||n.isCompressedArrayTexture)&&(i=e.TEXTURE_2D_ARRAY),n.isData3DTexture&&(i=e.TEXTURE_3D);let a=Ee(t,n),o=n.source;d.bindTexture(i,t.__webglTexture,e.TEXTURE0+r);let s=f.get(o);if(o.version!==s.__version||a===!0){if(d.activeTexture(e.TEXTURE0+r),!(typeof ImageBitmap<`u`&&n.image instanceof ImageBitmap)){let t=wt.getPrimaries(wt.workingColorSpace),r=n.colorSpace===``?null:wt.getPrimaries(n.colorSpace),i=n.colorSpace===``||t===r?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,i)}d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment);let t=O(n.image,!1,p.maxTextureSize);t=F(n,t);let c=m.convert(n.format,n.colorSpace),l=m.convert(n.type),u=ne(n.internalFormat,c,l,n.normalized,n.colorSpace,n.isVideoTexture);Te(i,n);let f,h=n.mipmaps,g=n.isVideoTexture!==!0,_=s.__version===void 0||a===!0,v=o.dataReady,y=A(n,t);if(n.isDepthTexture)u=re(n.format===D,n.type),_&&(g?d.texStorage2D(e.TEXTURE_2D,1,u,t.width,t.height):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,null));else if(n.isDataTexture){if(h.length>0){g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data);n.generateMipmaps=!1}else g?(_&&d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height),v&&Oe(n,t,c,l)):d.texImage2D(e.TEXTURE_2D,0,u,t.width,t.height,0,c,l,t.data)}else if(n.isCompressedTexture){if(n.isCompressedArrayTexture){g&&_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,h[0].width,h[0].height,t.depth);for(let r=0,i=h.length;r<i;r++)if(f=h[r],n.format!==1023){if(c!==null){if(g){if(v){if(n.layerUpdates.size>0){let t=ws(f.width,f.height,n.format,n.type);for(let i of n.layerUpdates){let n=f.data.subarray(i*t/f.data.BYTES_PER_ELEMENT,(i+1)*t/f.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,i,f.width,f.height,1,c,n)}}else d.compressedTexSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,f.data)}}else d.compressedTexImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,f.data,0,0)}else I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else g?v&&d.texSubImage3D(e.TEXTURE_2D_ARRAY,r,0,0,0,f.width,f.height,t.depth,c,l,f.data):d.texImage3D(e.TEXTURE_2D_ARRAY,r,u,f.width,f.height,t.depth,0,c,l,f.data);n.layerUpdates.size>0&&n.clearLayerUpdates()}else{g&&_&&d.texStorage2D(e.TEXTURE_2D,y,u,h[0].width,h[0].height);for(let t=0,r=h.length;t<r;t++)f=h[t],n.format===1023?g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,l,f.data):d.texImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,c,l,f.data):c===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):g?v&&d.compressedTexSubImage2D(e.TEXTURE_2D,t,0,0,f.width,f.height,c,f.data):d.compressedTexImage2D(e.TEXTURE_2D,t,u,f.width,f.height,0,f.data)}}else if(n.isDataArrayTexture){if(g){if(_&&d.texStorage3D(e.TEXTURE_2D_ARRAY,y,u,t.width,t.height,t.depth),v){if(n.layerUpdates.size>0){let r=ws(t.width,t.height,n.format,n.type);for(let i of n.layerUpdates){let n=t.data.subarray(i*r/t.data.BYTES_PER_ELEMENT,(i+1)*r/t.data.BYTES_PER_ELEMENT);d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,i,t.width,t.height,1,c,l,n)}n.clearLayerUpdates()}else d.texSubImage3D(e.TEXTURE_2D_ARRAY,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)}}else d.texImage3D(e.TEXTURE_2D_ARRAY,0,u,t.width,t.height,t.depth,0,c,l,t.data)}else if(n.isData3DTexture)g?(_&&d.texStorage3D(e.TEXTURE_3D,y,u,t.width,t.height,t.depth),v&&d.texSubImage3D(e.TEXTURE_3D,0,0,0,0,t.width,t.height,t.depth,c,l,t.data)):d.texImage3D(e.TEXTURE_3D,0,u,t.width,t.height,t.depth,0,c,l,t.data);else if(n.isFramebufferTexture){if(_){if(g)d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height);else{let n=t.width,r=t.height;for(let t=0;t<y;t++)d.texImage2D(e.TEXTURE_2D,t,u,n,r,0,c,l,null),n>>=1,r>>=1}}}else if(n.isHTMLTexture){if(`texElementImage2D`in e){let r=e.canvas;if(r.hasAttribute(`layoutsubtree`)||r.setAttribute(`layoutsubtree`,`true`),t.parentNode!==r){r.appendChild(t),b.add(n),r.onpaint=e=>{let t=e.changedElements;for(let e of b)t.includes(e.image)&&(e.needsUpdate=!0)},r.requestPaint();return}if(e.texElementImage2D.length===3)e.texElementImage2D(e.TEXTURE_2D,e.RGBA8,t);else{let n=e.RGBA,r=e.RGBA,i=e.UNSIGNED_BYTE;e.texElementImage2D(e.TEXTURE_2D,0,n,r,i,t)}e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)}}else if(h.length>0){if(g&&_){let t=Ve(h[0]);d.texStorage2D(e.TEXTURE_2D,y,u,t.width,t.height)}for(let t=0,n=h.length;t<n;t++)f=h[t],g?v&&d.texSubImage2D(e.TEXTURE_2D,t,0,0,c,l,f):d.texImage2D(e.TEXTURE_2D,t,u,c,l,f);n.generateMipmaps=!1}else if(g){if(_){let n=Ve(t);d.texStorage2D(e.TEXTURE_2D,y,u,n.width,n.height)}v&&d.texSubImage2D(e.TEXTURE_2D,0,0,0,c,l,t)}else d.texImage2D(e.TEXTURE_2D,0,u,c,l,t);ee(n)&&n.mipmapsAutoUpdate===!0&&k(i),s.__version=o.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function Ae(t,n,r){if(n.image.length!==6)return;let i=Ee(t,n),a=n.source;d.bindTexture(e.TEXTURE_CUBE_MAP,t.__webglTexture,e.TEXTURE0+r);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(e.TEXTURE0+r);let t=wt.getPrimaries(wt.workingColorSpace),s=n.colorSpace===``?null:wt.getPrimaries(n.colorSpace),c=n.colorSpace===``||t===s?e.NONE:e.BROWSER_DEFAULT_WEBGL;d.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,n.flipY),d.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.premultiplyAlpha),d.pixelStorei(e.UNPACK_ALIGNMENT,n.unpackAlignment),d.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let l=n.isCompressedTexture||n.image[0].isCompressedTexture,u=n.image[0]&&n.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!l&&!u?f[e]=O(n.image[e],!0,p.maxCubemapSize):f[e]=u?n.image[e].image:n.image[e],f[e]=F(n,f[e]);let h=f[0],g=m.convert(n.format,n.colorSpace),_=m.convert(n.type),v=ne(n.internalFormat,g,_,n.normalized,n.colorSpace),y=n.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=A(n,h);Te(e.TEXTURE_CUBE_MAP,n);let C;if(n.isDepthTexture){if(v=re(n.format===D,n.type),b){if(y)d.texStorage2D(e.TEXTURE_CUBE_MAP,1,v,h.width,h.height);else for(let t=0;t<6;t++)d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,h.width,h.height,0,g,_,null)}}else if(l){y&&b&&d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let t=0;t<6;t++){C=f[t].mipmaps;for(let r=0;r<C.length;r++){let i=C[r];n.format===1023?y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,_,i.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,g,_,i.data):g===null?I(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,0,0,i.width,i.height,g,i.data):d.compressedTexImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,r,v,i.width,i.height,0,i.data)}}}else{if(C=n.mipmaps,y&&b){C.length>0&&S++;let t=Ve(f[0]);d.texStorage2D(e.TEXTURE_CUBE_MAP,S,v,t.width,t.height)}for(let t=0;t<6;t++)if(u){y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,f[t].width,f[t].height,g,_,f[t].data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,f[t].width,f[t].height,0,g,_,f[t].data);for(let n=0;n<C.length;n++){let r=C[n].image[t].image;y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,r.width,r.height,g,_,r.data):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,r.width,r.height,0,g,_,r.data)}}else{y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,0,0,g,_,f[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,0,v,g,_,f[t]);for(let n=0;n<C.length;n++){let r=C[n];y?x&&d.texSubImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,0,0,g,_,r.image[t]):d.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+t,n+1,v,g,_,r.image[t])}}}ee(n)&&n.mipmapsAutoUpdate===!0&&k(e.TEXTURE_CUBE_MAP),o.__version=a.version,n.onUpdate&&n.onUpdate(n)}t.__version=n.version}function je(t,n,r,i,a,o){let s=m.convert(r.format,r.colorSpace),c=m.convert(r.type),l=ne(r.internalFormat,s,c,r.normalized,r.colorSpace),u=f.get(n),p=f.get(r);if(p.__renderTarget=n,!u.__hasExternalTextures){let t=Math.max(1,n.width>>o),r=Math.max(1,n.height>>o);a===e.TEXTURE_3D||a===e.TEXTURE_2D_ARRAY?d.texImage3D(a,o,l,t,r,n.depth,0,s,c,null):d.texImage2D(a,o,l,t,r,0,s,c,null)}d.bindFramebuffer(e.FRAMEBUFFER,t),P(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,i,a,p.__webglTexture,0,ze(n)):(a===e.TEXTURE_2D||a>=e.TEXTURE_CUBE_MAP_POSITIVE_X&&a<=e.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&e.framebufferTexture2D(e.FRAMEBUFFER,i,a,p.__webglTexture,o),d.bindFramebuffer(e.FRAMEBUFFER,null)}function Me(t,n,r){if(e.bindRenderbuffer(e.RENDERBUFFER,t),n.depthBuffer){let i=n.depthTexture,a=i&&i.isDepthTexture?i.type:null,o=re(n.stencilBuffer,a),s=n.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;P(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ze(n),o,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ze(n),o,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,o,n.width,n.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,s,e.RENDERBUFFER,t)}else{let t=n.textures;for(let i=0;i<t.length;i++){let a=t[i],o=m.convert(a.format,a.colorSpace),s=m.convert(a.type),c=ne(a.internalFormat,o,s,a.normalized,a.colorSpace);P(n)?g.renderbufferStorageMultisampleEXT(e.RENDERBUFFER,ze(n),c,n.width,n.height):r?e.renderbufferStorageMultisample(e.RENDERBUFFER,ze(n),c,n.width,n.height):e.renderbufferStorage(e.RENDERBUFFER,c,n.width,n.height)}}e.bindRenderbuffer(e.RENDERBUFFER,null)}function Ne(t,n,r){let i=n.isWebGLCubeRenderTarget===!0;if(d.bindFramebuffer(e.FRAMEBUFFER,t),!(n.depthTexture&&n.depthTexture.isDepthTexture))throw Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let a=f.get(n.depthTexture);a.__renderTarget=n;let o=i?n.depthTexture.image[0]:n.depthTexture.image;a.__webglTexture&&o.width===n.width&&o.height===n.height||(o.width=n.width,o.height=n.height,n.depthTexture.needsUpdate=!0),i?xe(n.depthTexture,0):ve(n.depthTexture,0);let s=a.__webglTexture,c=ze(n),l=i?e.TEXTURE_CUBE_MAP_POSITIVE_X+r:e.TEXTURE_2D,u=n.depthTexture.format===1027?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;if(n.depthTexture.format===1026)P(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else if(n.depthTexture.format===1027)P(n)?g.framebufferTexture2DMultisampleEXT(e.FRAMEBUFFER,u,l,s,0,c):e.framebufferTexture2D(e.FRAMEBUFFER,u,l,s,0);else throw Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Pe(t){let n=f.get(t),r=t.isWebGLCubeRenderTarget===!0;if(n.__boundDepthTexture!==t.depthTexture){let e=t.depthTexture;if(n.__depthDisposeCallback&&n.__depthDisposeCallback(),e){let t=()=>{delete n.__boundDepthTexture,delete n.__depthDisposeCallback,e.removeEventListener(`dispose`,t)};e.addEventListener(`dispose`,t),n.__depthDisposeCallback=t}n.__boundDepthTexture=e}if(t.depthTexture&&!n.__autoAllocateDepthBuffer){if(r)for(let e=0;e<6;e++)Ne(n.__webglFramebuffer[e],t,e);else t.texture.mipmaps.length>0?Ne(n.__webglFramebuffer[0],t,0):Ne(n.__webglFramebuffer,t,0)}else if(r){n.__webglDepthbuffer=[];for(let r=0;r<6;r++)if(d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[r]),n.__webglDepthbuffer[r]===void 0)n.__webglDepthbuffer[r]=e.createRenderbuffer(),Me(n.__webglDepthbuffer[r],t,!1);else{let i=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,a=n.__webglDepthbuffer[r];e.bindRenderbuffer(e.RENDERBUFFER,a),e.framebufferRenderbuffer(e.FRAMEBUFFER,i,e.RENDERBUFFER,a)}}else if(t.texture.mipmaps.length>0?d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer[0]):d.bindFramebuffer(e.FRAMEBUFFER,n.__webglFramebuffer),n.__webglDepthbuffer===void 0)n.__webglDepthbuffer=e.createRenderbuffer(),Me(n.__webglDepthbuffer,t,!1);else{let r=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,i=n.__webglDepthbuffer;e.bindRenderbuffer(e.RENDERBUFFER,i),e.framebufferRenderbuffer(e.FRAMEBUFFER,r,e.RENDERBUFFER,i)}d.bindFramebuffer(e.FRAMEBUFFER,null)}function Fe(t,n,r){let i=f.get(t);n!==void 0&&je(i.__webglFramebuffer,t,t.texture,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,0),r!==void 0&&Pe(t)}function Ie(t){let n=t.texture,r=f.get(t),i=f.get(n);t.addEventListener(`dispose`,oe),ie(t);let a=t.textures,o=t.isWebGLCubeRenderTarget===!0,s=a.length>1;if(s||(i.__webglTexture===void 0&&(i.__webglTexture=e.createTexture()),i.__version=n.version,h.memory.textures++),o){r.__webglFramebuffer=[];for(let t=0;t<6;t++)if(n.mipmaps.length>0){r.__webglFramebuffer[t]=[];for(let i=0;i<n.mipmaps.length;i++)r.__webglFramebuffer[t][i]=e.createFramebuffer()}else r.__webglFramebuffer[t]=e.createFramebuffer()}else{if(n.mipmaps.length>0){r.__webglFramebuffer=[];for(let t=0;t<n.mipmaps.length;t++)r.__webglFramebuffer[t]=e.createFramebuffer()}else r.__webglFramebuffer=e.createFramebuffer();if(s)for(let t=0,n=a.length;t<n;t++){let n=f.get(a[t]);n.__webglTexture===void 0&&(n.__webglTexture=e.createTexture(),h.memory.textures++)}if(t.samples>0&&P(t)===!1){r.__webglMultisampledFramebuffer=e.createFramebuffer(),r.__webglColorRenderbuffer=[],d.bindFramebuffer(e.FRAMEBUFFER,r.__webglMultisampledFramebuffer);for(let n=0;n<a.length;n++){let i=a[n];r.__webglColorRenderbuffer[n]=e.createRenderbuffer(),e.bindRenderbuffer(e.RENDERBUFFER,r.__webglColorRenderbuffer[n]);let o=m.convert(i.format,i.colorSpace),s=m.convert(i.type),c=ne(i.internalFormat,o,s,i.normalized,i.colorSpace,t.isXRRenderTarget===!0),l=ze(t);e.renderbufferStorageMultisample(e.RENDERBUFFER,l,c,t.width,t.height),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+n,e.RENDERBUFFER,r.__webglColorRenderbuffer[n])}e.bindRenderbuffer(e.RENDERBUFFER,null),t.depthBuffer&&(r.__webglDepthRenderbuffer=e.createRenderbuffer(),Me(r.__webglDepthRenderbuffer,t,!0)),d.bindFramebuffer(e.FRAMEBUFFER,null)}}if(o){d.bindTexture(e.TEXTURE_CUBE_MAP,i.__webglTexture),Te(e.TEXTURE_CUBE_MAP,n);for(let i=0;i<6;i++)if(n.mipmaps.length>0)for(let a=0;a<n.mipmaps.length;a++)je(r.__webglFramebuffer[i][a],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,a);else je(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,e.TEXTURE_CUBE_MAP_POSITIVE_X+i,0);ee(n)?k(e.TEXTURE_CUBE_MAP):n.mipmaps.length>0&&e.texParameteri(e.TEXTURE_CUBE_MAP,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}else if(s){for(let n=0,i=a.length;n<i;n++){let i=a[n],o=f.get(i),s=e.TEXTURE_2D;(t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(s=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(s,o.__webglTexture),Te(s,i),je(r.__webglFramebuffer,t,i,e.COLOR_ATTACHMENT0+n,s,0),ee(i)&&k(s)}d.unbindTexture()}else{let a=e.TEXTURE_2D;if((t.isWebGL3DRenderTarget||t.isWebGLArrayRenderTarget)&&(a=t.isWebGL3DRenderTarget?e.TEXTURE_3D:e.TEXTURE_2D_ARRAY),d.bindTexture(a,i.__webglTexture),Te(a,n),n.mipmaps.length>0)for(let i=0;i<n.mipmaps.length;i++)je(r.__webglFramebuffer[i],t,n,e.COLOR_ATTACHMENT0,a,i);else je(r.__webglFramebuffer,t,n,e.COLOR_ATTACHMENT0,a,0);ee(n)?k(a):n.mipmaps.length>0&&e.texParameteri(a,e.TEXTURE_MAX_LEVEL,n.mipmaps.length-1),d.unbindTexture()}t.depthBuffer&&Pe(t)}function N(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(ee(r)&&r.mipmapsAutoUpdate===!0){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),k(t),d.unbindTexture()}}}let Le=[];function Re(t){if(t.samples>0){if(P(t)===!1){let n=t.textures,r=t.width,i=t.height,a=e.COLOR_BUFFER_BIT,o=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT,s=f.get(t),c=n.length>1;if(c)for(let t=0;t<n.length;t++)d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,null),d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,null,0);d.bindFramebuffer(e.READ_FRAMEBUFFER,s.__webglMultisampledFramebuffer),t.texture.mipmaps.length>0?d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer[0]):d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglFramebuffer);for(let l=0;l<n.length;l++){if(t.resolveDepthBuffer&&(t.depthBuffer&&(a|=e.DEPTH_BUFFER_BIT),t.stencilBuffer&&t.resolveStencilBuffer&&(a|=e.STENCIL_BUFFER_BIT)),c){e.framebufferRenderbuffer(e.READ_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,s.__webglColorRenderbuffer[l]);let t=f.get(n[l]).__webglTexture;e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,t,0)}e.blitFramebuffer(0,0,r,i,0,0,r,i,a,e.NEAREST),_===!0&&(Le.length=0,Le.push(e.COLOR_ATTACHMENT0+l),t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&Le.push(o),e.invalidateFramebuffer(e.READ_FRAMEBUFFER,Le))}if(d.bindFramebuffer(e.READ_FRAMEBUFFER,null),d.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),c)for(let t=0;t<n.length;t++){d.bindFramebuffer(e.FRAMEBUFFER,s.__webglMultisampledFramebuffer),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.RENDERBUFFER,s.__webglColorRenderbuffer[t]);let r=f.get(n[t]).__webglTexture;d.bindFramebuffer(e.FRAMEBUFFER,s.__webglFramebuffer),e.framebufferTexture2D(e.DRAW_FRAMEBUFFER,e.COLOR_ATTACHMENT0+t,e.TEXTURE_2D,r,0)}d.bindFramebuffer(e.DRAW_FRAMEBUFFER,s.__webglMultisampledFramebuffer)}else if(t.depthBuffer&&t.storeMultisampledDepthBuffer===!1&&_){let n=t.stencilBuffer?e.DEPTH_STENCIL_ATTACHMENT:e.DEPTH_ATTACHMENT;e.invalidateFramebuffer(e.DRAW_FRAMEBUFFER,[n])}}}function ze(e){return Math.min(p.maxSamples,e.samples)}function P(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Be(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function F(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(wt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&I(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):L(`WebGLTextures: Unsupported texture color space:`,n)),t}function Ve(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ge,this.resetTextureUnits=pe,this.getTextureUnits=me,this.setTextureUnits=he,this.setTexture2D=ve,this.setTexture2DArray=ye,this.setTexture3D=be,this.setTextureCube=xe,this.rebindTextures=Fe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=Re,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=je,this.useMultisampledRTT=P,this.dispose=le}function wu(e,t){function n(n,r=``){let i,a=wt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===35899)return e.UNSIGNED_INT_10F_11F_11F_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496||n===37488||n===37489||n===37490||n===37491){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(n===37488)return i.COMPRESSED_R11_EAC;if(n===37489)return i.COMPRESSED_SIGNED_R11_EAC;if(n===37490)return i.COMPRESSED_RG11_EAC;if(n===37491)return i.COMPRESSED_SIGNED_RG11_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36283)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var Tu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Eu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Du=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new ki(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new _o({vertexShader:Tu,fragmentShader:Eu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new W(new to(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ou=class extends at{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,l=null,d=null,f=null,p=null,m=null,g=typeof XRWebGLBinding<`u`,_=new Du,v={},y=t.getContextAttributes(),x=null,S=null,C=[],w=[],O=new R,ee=null,k=null,te=new ts;te.viewport=new Ft;let ne=new ts;ne.viewport=new Ft;let re=[te,ne],A=new ls,ie=null,j=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=C[e];return t===void 0&&(t=new gn,C[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=C[e];return t===void 0&&(t=new gn,C[e]=t),t.getGripSpace()},this.getHand=function(e){let t=C[e];return t===void 0&&(t=new gn,C[e]=t),t.getHandSpace()};function ae(e){let t=w.indexOf(e.inputSource);if(t===-1)return;let n=C[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<C.length;e++){let t=w[e];t!==null&&(w[e]=null,C[e].disconnect(t))}ie=null,j=null,_.reset();for(let e in v)delete v[e];if(e.setRenderTarget(x),p=null,f=null,d=null,r=null,S=null,M.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(O.width,O.height,!1),k!==null){let e=k.camera;e.fov=k.fov,e.zoom=k.zoom,e.updateProjectionMatrix(),k=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&I(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(l){if(r=l,r!==null){if(x=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),y.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(O),g&&`createProjectionLayer`in XRWebGLBinding.prototype){let n=null,a=null,o=null;y.depth&&(o=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=y.stencil?D:E,a=y.stencil?b:h);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=this.getBinding(),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),S=new Lt(f.textureWidth,f.textureHeight,{format:T,type:u,depthTexture:new Di(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let n={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Lt(p.framebufferWidth,p.framebufferHeight,{format:T,type:u,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),M.setContext(r),M.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=w.indexOf(n);r>=0&&(w[r]=null,C[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=w.indexOf(n);if(r===-1){for(let e=0;e<C.length;e++)if(e>=w.length){w.push(n),r=e;break}else if(w[e]===null){w[e]=n,r=e;break}if(r===-1)break}let i=C[r];i&&i.connect(n)}}function ce(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;_.texture!==null&&(_.depthNear>0&&(t=_.depthNear),_.depthFar>0&&(n=_.depthFar)),A.near=ne.near=te.near=t,A.far=ne.far=te.far=n,(ie!==A.near||j!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),ie=A.near,j=A.far),A.layers.mask=e.layers.mask|6,te.layers.mask=A.layers.mask&-5,ne.layers.mask=A.layers.mask&-3;let i=e.parent,a=A.cameras;ce(A,i);for(let e=0;e<a.length;e++)ce(a[e],i);A.projectionMatrix.copy(te.projectionMatrix),A.projectionMatrixInverse.copy(te.projectionMatrixInverse),k===null&&e.isPerspectiveCamera&&(k={camera:e,fov:e.fov,zoom:e.zoom}),le(e,A,i)};function le(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=ct*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(e){return v[e]};let ue=null;function de(t,i){if(l=i.getViewerPose(c||a),m=i,l!==null){let t=l.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let i=!1;t.length!==A.cameras.length&&(A.cameras.length=0,i=!0);for(let n=0;n<t.length;n++){let r=t[n],a=null;if(p!==null)a=p.getViewport(r);else{let t=d.getViewSubImage(f,r);a=t.viewport,n===0&&(e.setRenderTargetTextures(S,t.colorTexture,t.depthStencilTexture),e.setRenderTarget(S))}let o=re[n];o===void 0&&(o=new ts,o.layers.enable(n),o.viewport=new Ft,re[n]=o),o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(r.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),n===0&&(A.matrix.copy(o.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),i===!0&&A.cameras.push(o)}let a=r.enabledFeatures;if(a&&a.includes(`depth-sensing`)&&r.depthUsage==`gpu-optimized`&&g){d=n.getBinding();let e=d.getDepthInformation(t[0]);e&&e.isValid&&e.texture&&_.init(e,r.renderState)}if(a&&a.includes(`camera-access`)&&g){e.state.unbindTexture(),d=n.getBinding();for(let e=0;e<t.length;e++){let n=t[e].camera;if(n){let e=v[n];e||(e=new ki,v[n]=e);let t=d.getCameraImage(n);e.sourceTexture=t}}}}for(let e=0;e<C.length;e++){let t=w[e],n=C[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}ue&&ue(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),m=null}let M=new Es;M.setAnimationLoop(de),this.setAnimationLoop=function(e){ue=e},this.dispose=function(){}}},ku=new V,Au=new B;Au.set(-1,0,0,0,1,0,0,0,1);function ju(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,po(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isNodeMaterial?t.uniformsNeedUpdate=!1:t.isMeshBasicMaterial?a(e,t):t.isMeshLambertMaterial?(a(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,e.envMapRotation.value.setFromMatrix4(ku.makeRotationFromEuler(o)).transpose(),a.isCubeTexture&&a.isRenderTargetTexture===!1&&e.envMapRotation.value.premultiply(Au),e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.diffuseRoughness>0&&(e.diffuseRoughness.value=t.diffuseRoughness,t.diffuseRoughnessMap&&(e.diffuseRoughnessMap.value=t.diffuseRoughnessMap,n(t.diffuseRoughnessMap,e.diffuseRoughnessMapTransform))),t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.retroreflectivity>0&&(e.retroreflectivity.value=t.retroreflectivity),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessMinimum,e.iridescenceThicknessMaximum.value=t.iridescenceThicknessMaximum,t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function Mu(e,t,n,r){let i={},a={};function o(e,t){let n=t.program;r.uniformBlockBinding(e,n,i[e.id])}function s(e,n){let o=i[e.id];o===void 0&&(m(e),o=c(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let u=t.render.frame;a[e.id]!==u&&(l(e),a[e.id]=u)}function c(t){let n=e.createBuffer(),r=t.__size,i=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,n),e.bufferData(e.UNIFORM_BUFFER,r,i),e.bindBuffer(e.UNIFORM_BUFFER,null),n}function l(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let e=0,t=r.length;e<t;e++){let t=r[e];if(Array.isArray(t))for(let n=0,r=t.length;n<r;n++)u(t[n],e,n,a);else u(t,e,0,a)}e.bindBuffer(e.UNIFORM_BUFFER,null)}function u(t,n,r,i){if(f(t,n,r,i)===!0){let n=t.__offset,r=t.value;if(Array.isArray(r)){let e=0;for(let n=0;n<r.length;n++){let i=r[n],a=h(i,!0);d(i,t.__data,e),e+=a.storage/Float32Array.BYTES_PER_ELEMENT}}else d(r,t.__data,0);e.bufferSubData(e.UNIFORM_BUFFER,n,t.__data)}}function d(e,t,n){typeof e==`number`||typeof e==`boolean`?t[n]=e:e.isMatrix3?(t[n]=e.elements[0],t[n+1]=e.elements[1],t[n+2]=e.elements[2],t[n+3]=0,t[n+4]=e.elements[3],t[n+5]=e.elements[4],t[n+6]=e.elements[5],t[n+7]=0,t[n+8]=e.elements[6],t[n+9]=e.elements[7],t[n+10]=e.elements[8],t[n+11]=0):ArrayBuffer.isView(e)?t.set(e.subarray(0,t.length-n),n):e.toArray(t,n)}function f(e,t,n,r){let i=e.value,a=t+`_`+n;if(Array.isArray(i)){r[a]===void 0&&(r[a]=[]);let e=r[a],t=!1;for(let n=0;n<i.length;n++)p(i[n],e,n)===!0&&(t=!0);return t}return p(i,r,a)}function p(e,t,n){if(t[n]===void 0)return t[n]=typeof e==`number`||typeof e==`boolean`?e:ArrayBuffer.isView(e)?e.slice():e.clone(),!0;{let r=t[n];if(typeof e==`number`||typeof e==`boolean`){if(r!==e)return t[n]=e,!0}else if(ArrayBuffer.isView(e))return!0;else if(r.equals(e)===!1)return r.copy(e),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let i=0,a=r.length;i<a;i++){let a=r[i],o=Array.isArray(a.value)?a.value:[a.value],s=Array.isArray(t[e])||Array.isArray(a.value),c=n;for(let e=0,t=o.length;e<t;e++){let t=o[e],r=h(t,s),i=n%16,a=i%r.boundary,l=i+a;n+=a,l!==0&&16-l<r.storage&&(n+=16-l),e===0&&(c=n),n+=r.storage}a.__data=new(a.type===`int`?Int32Array:a.type===`uint`?Uint32Array:Float32Array)((n-c)/Float32Array.BYTES_PER_ELEMENT),a.__offset=c}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e,t){let n={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(n.boundary=4,n.storage=4):e.isVector2?(n.boundary=8,n.storage=8):e.isVector3||e.isColor?(n.boundary=16,n.storage=12):e.isVector4?(n.boundary=16,n.storage=16):e.isMatrix3?(n.boundary=16,n.storage=48):e.isMatrix4?(n.boundary=16,n.storage=64):e.isTexture?I(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(e)?(n.boundary=16,n.storage=e.byteLength):I(`WebGLRenderer: Unsupported uniform value type.`,e),t===!0&&(n.boundary=16,n.storage=Math.ceil(n.storage/16)*16),n}function g(t){let n=t.target;n.removeEventListener(`dispose`,g),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);i={},a={}}return{bind:o,update:s,dispose:_}}var Nu=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Pu=null;function Fu(){return Pu===null&&(Pu=new $r(Nu,16,16,k,_),Pu.name=`DFG_LUT`,Pu.minFilter=s,Pu.magFilter=s,Pu.wrapS=n,Pu.wrapT=n,Pu.generateMipmaps=!1,Pu.needsUpdate=!0),Pu}var Iu=class{constructor(e={}){let{canvas:t=Qe(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:c=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:m=!1,outputBufferType:g=u}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);x=n.getContextAttributes().alpha}else x=a;let S=g,C=new Set([ne,te,ee]),w=new Set([u,h,p,b,v,y]),T=new Uint32Array(4),E=new Int32Array(4),D={textures:[],min:[],max:[],resolution:[]},O=null,k=null,re=[],A=[],ie=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let j=this,ae=!1,oe=null,se=null,ce=null,le=null;this._outputColorSpace=Ve;let ue=0,de=0,M=null,fe=-1,pe=null,me=new Ft,he=new Ft,ge=null,_e=new H(0),ve=0,ye=t.width,be=t.height,xe=1,Se=null,Ce=null,we=new Ft(0,0,ye,be),Te=new Ft(0,0,ye,be),Ee=!1,De=new hi,Oe=new _i,ke=!1,Ae=!1,je=new V,Me=new z,Ne=new Ft,Pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Fe=!1;function Ie(){return M===null?xe:1}let N=n;function Le(e,n){return t.getContext(e,n)}let Re,ze,P,Be,F,He,Ue,We,Ge,Ke,qe,Ye,Xe,Ze,$e,tt,nt,it,at,ot,st,ct,lt;try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r187`),t.addEventListener(`webglcontextlost`,ft,!1),t.addEventListener(`webglcontextrestored`,pt,!1),t.addEventListener(`webglcontextcreationerror`,mt,!1),N===null){let t=`webgl2`;if(N=Le(t,e),N===null)throw Le(t)?Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}ut()}catch(e){throw t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),L(`WebGLRenderer: `+e.message),e}function ut(){Re=new nc(N),Re.init(),st=new wu(N,Re),ze=new Is(N,Re,e,st),P=new Su(N,Re),ze.reversedDepthBuffer&&m&&P.buffers.depth.setReversed(!0),se=N.createFramebuffer(),ce=N.createFramebuffer(),le=N.createFramebuffer(),Be=new ac(N),F=new nu,He=new Cu(N,Re,P,F,ze,st,Be),Ue=new tc(j),We=new Ds(N),ct=new Ps(N,We),Ge=new rc(N,We,Be,ct),Ke=new sc(N,Ge,We,ct,Be),it=new oc(N,ze,He),$e=new Ls(F),qe=new tu(j,Ue,Re,ze,ct,$e),Ye=new ju(j,F),Xe=new ou,Ze=new pu(Re),nt=new Ns(j,Ue,P,Ke,x,s),tt=new xu(j,Ke,ze),lt=new Mu(N,Be,ze,P),at=new Fs(N,Re,Be),ot=new ic(N,Re,Be),Be.programs=qe.programs,j.capabilities=ze,j.extensions=Re,j.properties=F,j.renderLists=Xe,j.shadowMap=tt,j.state=P,j.info=Be}S!==1009&&(ie=new lc(S,t.width,t.height,o,r,i));let dt=new Ou(j,N);this.xr=dt,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Re.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(e){e!==void 0&&(xe=e,this.setSize(ye,be,!1))},this.getSize=function(e){return e.set(ye,be)},this.setSize=function(e,n,r=!0){dt.isPresenting?I(`WebGLRenderer: Can't change size while VR device is presenting.`):(ye=e,be=n,t.width=Math.floor(e*xe),t.height=Math.floor(n*xe),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),ie!==null&&ie.setSize(t.width,t.height),this.setViewport(0,0,e,n))},this.getDrawingBufferSize=function(e){return e.set(ye*xe,be*xe).floor()},this.setDrawingBufferSize=function(e,n,r){ye=e,be=n,xe=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.setEffects=function(e){if(S===1009)L(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);else{if(e){for(let t=0;t<e.length;t++)if(e[t].isOutputPass===!0){I(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}ie.setEffects(e||[])}},this.getCurrentViewport=function(e){return e.copy(me)},this.getViewport=function(e){return e.copy(we)},this.setViewport=function(e,t,n,r){e.isVector4?we.set(e.x,e.y,e.z,e.w):we.set(e,t,n,r),P.viewport(me.copy(we).multiplyScalar(Ie()).round())},this.getScissor=function(e){return e.copy(Te)},this.setScissor=function(e,t,n,r){e.isVector4?Te.set(e.x,e.y,e.z,e.w):Te.set(e,t,n,r),P.scissor(he.copy(Te).multiplyScalar(Ie()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(e){P.setScissorTest(Ee=e)},this.setOpaqueSort=function(e){Se=e},this.setTransparentSort=function(e){Ce=e},this.getClearColor=function(e){return e.copy(nt.getClearColor())},this.setClearColor=function(){nt.setClearColor(...arguments)},this.getClearAlpha=function(){return nt.getClearAlpha()},this.setClearAlpha=function(){nt.setClearAlpha(...arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(M!==null){let t=M.texture.format;e=C.has(t)}if(e){let e=M.texture.type,t=w.has(e),n=nt.getClearColor(),r=nt.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(T[0]=i,T[1]=a,T[2]=o,T[3]=r,N.clearBufferuiv(N.COLOR,0,T)):(E[0]=i,E[1]=a,E[2]=o,E[3]=r,N.clearBufferiv(N.COLOR,0,E))}else r|=N.COLOR_BUFFER_BIT}t&&(r|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),n&&(r|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),r!==0&&N.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(e){e.setRenderer(this),oe=e},this.dispose=function(){t.removeEventListener(`webglcontextlost`,ft,!1),t.removeEventListener(`webglcontextrestored`,pt,!1),t.removeEventListener(`webglcontextcreationerror`,mt,!1),nt.dispose(),Xe.dispose(),Ze.dispose(),He.dispose(),F.dispose(),Ue.dispose(),Ke.dispose(),Ge.dispose(),ct.dispose(),lt.dispose(),qe.dispose(),dt.dispose(),dt.removeEventListener(`sessionstart`,B),dt.removeEventListener(`sessionend`,bt),xt.stop()};function ft(e){e.preventDefault(),et(`WebGLRenderer: Context Lost.`),ae=!0}function pt(){et(`WebGLRenderer: Context Restored.`),ae=!1;let e=Be.autoReset,t=tt.enabled,n=tt.autoUpdate,r=tt.needsUpdate,i=tt.type;ut(),Be.autoReset=e,tt.enabled=t,tt.autoUpdate=n,tt.needsUpdate=r,tt.type=i}function mt(e){L(`WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function ht(e){let t=e.target;t.removeEventListener(`dispose`,ht),gt(t)}function gt(e){R(e),F.remove(e)}function R(e){let t=F.get(e).programs;t!==void 0&&(t.forEach(function(e){qe.releaseProgram(e)}),e.isShaderMaterial&&qe.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=Pe);let o=i.isMesh&&i.matrixWorld.determinantAffine()<0,s=Nt(e,t,n,r,i);P.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Ge.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;ct.setup(i,r,s,n,c);let h,g=at;if(c!==null&&(h=We.get(c),g=ot,g.setIndex(h)),i.isMesh)r.wireframe===!0?(P.setLineWidth(r.wireframeLinewidth*Ie()),g.setMode(N.LINES)):g.setMode(N.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),P.setLineWidth(e*Ie()),i.isLineSegments?g.setMode(N.LINES):i.isLineLoop?g.setMode(N.LINE_LOOP):g.setMode(N.LINE_STRIP)}else i.isPoints?g.setMode(N.POINTS):i.isSprite&&g.setMode(N.TRIANGLES);if(i.isBatchedMesh){if(Re.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?We.get(c).bytesPerElement:1,o=F.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(N,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function _t(e,t,n,r){oe!==null&&e.isNodeMaterial&&oe.setObject(r,e),ke===!0&&$e.setState(e,n,!1),e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,kt(e,t,r),e.side=0,e.needsUpdate=!0,kt(e,t,r),e.side=2):kt(e,t,r)}this.compile=function(e,t,n=null){n===null&&(n=e),oe!==null&&oe.renderStart(e,t,n),k=Ze.get(n),k.init(t),A.push(k),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(k.pushLight(e),e.castShadow&&k.pushShadow(e))}),k.setupLights(),oe!==null&&oe.updateLights(k.state.lightsArray),Ae=this.localClippingEnabled,ke=$e.init(this.clippingPlanes,Ae),ke===!0&&$e.setGlobalState(this.clippingPlanes,t),oe!==null&&tt.render(k.state.shadowsArray,n,t);let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let i=e.material;if(i){if(Array.isArray(i))for(let a=0;a<i.length;a++){let o=i[a];_t(o,n,t,e),r.add(o)}else _t(i,n,t,e),r.add(i)}}),k=A.pop(),oe!==null&&oe.renderEnd(),r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){r.forEach(function(e){let t=F.get(e).currentProgram;(t===void 0||t.isReady())&&r.delete(e)}),r.size===0?t(e):setTimeout(n,10)}Re.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let vt=null;function yt(e){vt&&vt(e)}function B(){xt.stop()}function bt(){xt.start()}let xt=new Es;xt.setAnimationLoop(yt),typeof self<`u`&&xt.setContext(self),this.setAnimationLoop=function(e){vt=e,dt.setAnimationLoop(e),e===null?xt.stop():xt.start()},dt.addEventListener(`sessionstart`,B),dt.addEventListener(`sessionend`,bt),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){L(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(ae===!0)return;oe!==null&&oe.renderStart(e,t);let n=dt.enabled===!0&&dt.isPresenting===!0,r=ie!==null&&(M===null||n)&&ie.begin(j,M);if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(ie===null||ie.isCompositing()===!1)&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(t),t=dt.getCamera()),e.isScene===!0&&e.onBeforeRender(j,e,t,M),k=Ze.get(e,A.length),k.init(t),k.state.textureUnits=He.getTextureUnits(),A.push(k),je.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),t.isArrayCamera?Oe.setFromArrayCamera(t):De.setFromProjectionMatrix(je,Je,t.reversedDepth),Ae=this.localClippingEnabled,ke=$e.init(this.clippingPlanes,Ae),O=Xe.get(e,re.length),O.init(),re.push(O),this.info.render.frame++,dt.enabled===!0&&dt.isPresenting===!0){let e=j.xr.getDepthSensingMesh();e!==null&&St(e,t,-1/0,j.sortObjects)}St(e,t,0,j.sortObjects),O.finish(),oe!==null&&oe.updateLights(k.state.lightsArray),j.sortObjects===!0&&O.sort(Se,Ce),Fe=dt.enabled===!1||dt.isPresenting===!1||dt.hasDepthSensing()===!1,Fe&&nt.addToRenderList(O,e),this.info.autoReset===!0&&this.info.reset(),ke===!0&&$e.beginShadows();let i=k.state.shadowsArray;if(tt.render(i,e,t),ke===!0&&$e.endShadows(),(r&&ie.hasRenderPass())===!1){let n=O.opaque,r=O.transmissive;if(k.setupLights(),t.isArrayCamera){let i=t.cameras;if(r.length>0)for(let t=0,a=i.length;t<a;t++){let a=i[t];Tt(n,r,e,a)}Fe&&nt.render(e);for(let t=0,n=i.length;t<n;t++){let n=i[t];Ct(O,e,n,n.viewport)}}else r.length>0&&Tt(n,r,e,t),Fe&&nt.render(e),Ct(O,e,t)}M!==null&&de===0&&(He.updateMultisampleRenderTarget(M),He.updateRenderTargetMipmap(M)),r&&ie.end(j),e.isScene===!0&&e.onAfterRender(j,e,t),ct.resetDefaultState(),fe=-1,pe=null,A.pop(),A.length>0?(k=A[A.length-1],He.setTextureUnits(k.state.textureUnits),ke===!0&&$e.setGlobalState(j.clippingPlanes,k.state.camera)):k=null,re.pop(),O=re.length>0?re[re.length-1]:null,oe!==null&&oe.renderEnd()};function St(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)k.pushLight(e),e.castShadow&&k.pushShadow(e);else if(e.isSprite){let i=t.isArrayCamera?Oe:De;if(!e.frustumCulled||e.intersectsFrustum(i)){r&&Ne.setFromMatrixPosition(e.matrixWorld).applyMatrix4(je);let i=Ke.update(e),a=e.material;a.visible&&O.push(e,i,a,n,Ne.z,null,t)}}else if(e.isMesh||e.isLine||e.isPoints){let i=t.isArrayCamera?Oe:De;if(!e.frustumCulled||e.intersectsFrustum(i)){let i=Ke.update(e),a=e.material;if(r&&(e.boundingSphere===void 0?(i.boundingSphere===null&&i.computeBoundingSphere(),Ne.copy(i.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),Ne.copy(e.boundingSphere.center)),Ne.applyMatrix4(e.matrixWorld).applyMatrix4(je)),Array.isArray(a)){let r=i.groups;for(let o=0,s=r.length;o<s;o++){let s=r[o],c=a[s.materialIndex];c&&c.visible&&O.push(e,i,c,n,Ne.z,s,t)}}else a.visible&&O.push(e,i,a,n,Ne.z,null,t)}}}let i=e.children;for(let e=0,a=i.length;e<a;e++)St(i[e],t,n,r)}function Ct(e,t,n,r){let{opaque:i,transmissive:a,transparent:o}=e;k.setupLightsView(n),ke===!0&&$e.setGlobalState(j.clippingPlanes,n),r&&P.viewport(me.copy(r)),i.length>0&&Et(i,t,n),a.length>0&&Et(a,t,n),o.length>0&&Et(o,t,n),P.buffers.depth.setTest(!0),P.buffers.depth.setMask(!0),P.buffers.color.setMask(!0),P.setPolygonOffset(!1)}function Tt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[r.id]===void 0){let e=Re.has(`EXT_color_buffer_half_float`)||Re.has(`EXT_color_buffer_float`);k.state.transmissionRenderTarget[r.id]=new Lt(1,1,{generateMipmaps:!0,type:e?_:u,minFilter:l,samples:Math.max(4,ze.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let a=k.state.transmissionRenderTarget[r.id],o=r.viewport||me;a.setSize(o.z*j.transmissionResolutionScale,o.w*j.transmissionResolutionScale);let s=j.getRenderTarget(),c=j.getActiveCubeFace(),d=j.getActiveMipmapLevel();j.setRenderTarget(a),j.getClearColor(_e),ve=j.getClearAlpha(),ve<1&&j.setClearColor(16777215,.5),j.clear(),Fe&&nt.render(n);let f=j.toneMapping;j.toneMapping=0;let p=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),k.setupLightsView(r),ke===!0&&$e.setGlobalState(j.clippingPlanes,r),Et(e,n,r),He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a),Re.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let{object:a,geometry:o,material:s,group:c}=t[i];if(s.side===2&&a.layers.test(r.layers)){let t=s.side;s.side=1,s.needsUpdate=!0,Dt(a,n,r,o,s,c),s.side=t,s.needsUpdate=!0,e=!0}}e===!0&&(He.updateMultisampleRenderTarget(a),He.updateRenderTargetMipmap(a))}j.setRenderTarget(s,c,d),j.setClearColor(_e,ve),p!==void 0&&(r.viewport=p),j.toneMapping=f}function Et(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],{object:o,geometry:s,group:c}=a,l=a.material;l.allowOverride===!0&&r!==null&&(l=r),o.layers.test(n.layers)&&Dt(o,t,n,s,l,c)}}function Dt(e,t,n,r,i,a){oe!==null&&i.isNodeMaterial&&oe.setObject(e,i),e.onBeforeRender(j,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(j,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,j.renderBufferDirect(n,t,r,i,e,a),i.side=2):j.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(j,t,n,r,i,a)}function Ot(e){let t=0;for(let n of e)n.texture!==null&&t++;return t}function kt(e,t,n){t.isScene!==!0&&(t=Pe);let r=F.get(e),i=k.state.lights,a=k.state.shadowsArray,o=i.state.version,s=qe.getParameters(e,i.state,a,t,n,k.state.lightProbeGridArray),c=qe.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial||e.isMeshLambertMaterial||e.isMeshPhongMaterial?t.environment:null,r.fog=t.fog;let u=e.isMeshStandardMaterial||e.isMeshLambertMaterial&&!e.envMap||e.isMeshPhongMaterial&&!e.envMap;r.envMap=Ue.get(e.envMap||r.environment,u),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,ht),l=new Map,r.programs=l,r.programVariants=new Map);let d=l.get(c);if(d!==void 0){if(r.currentProgram===d&&r.lightsStateVersion===o)return Mt(e,s),d}else s.uniforms=qe.getUniforms(e),oe!==null&&e.isNodeMaterial&&oe.build(e,n,s),e.onBeforeCompile(s,j),d=qe.acquireProgram(s,c),l.set(c,d),r.uniforms=s.uniforms;let f=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(f.clippingPlanes=$e.uniform),Mt(e,s),r.needsLights=It(e),r.lightsStateVersion=o,r.needsLights&&(f.ambientLightColor.value=i.state.ambient,f.lightProbe.value=i.state.probe,f.sunLights.value=i.state.sun,f.sunLightShadows.value=i.state.sunShadow,f.directionalLights.value=i.state.directional,f.directionalLightShadows.value=i.state.directionalShadow,f.spotLights.value=i.state.spot,f.spotLightShadows.value=i.state.spotShadow,f.rectAreaLights.value=i.state.rectArea,f.ltc_1.value=i.state.rectAreaLTC1,f.ltc_2.value=i.state.rectAreaLTC2,f.pointLights.value=i.state.point,f.pointLightShadows.value=i.state.pointShadow,f.hemisphereLights.value=i.state.hemi,f.sunShadowMatrix.value=i.state.sunShadowMatrix,f.sunShadowCascade.value=i.state.sunShadowCascade,f.directionalShadowMatrix.value=i.state.directionalShadowMatrix,f.spotLightMatrix.value=i.state.spotLightMatrix,f.spotLightMap.value=i.state.spotLightMap,f.pointShadowMatrix.value=i.state.pointShadowMatrix),r.numLightProbeGrids=Ot(k.state.lightProbeGridArray),r.currentProgram=d,r.uniformsList=null,d}function At(e,t,n,r,i){let a=F.get(e),o=a.currentProgram.id+`,`+r+`,`+i,s=a.programVariants.get(o);return s===void 0?(s=kt(e,t,n),a.programVariants.set(o,s)):(a.currentProgram=s,a.uniformsList=null,a.outputColorSpace=r,a.toneMapping=i),s}function jt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=vl.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Mt(e,t){let n=F.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function Nt(e,t,n,r,i){t.isScene!==!0&&(t=Pe),He.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial?t.environment:null,s=M===null?j.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:wt.workingColorSpace,c=r.isMeshStandardMaterial||r.isMeshLambertMaterial&&!r.envMap||r.isMeshPhongMaterial&&!r.envMap,l=Ue.get(r.envMap||o,c),u=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,d=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),f=!!n.morphAttributes.position,p=!!n.morphAttributes.normal,m=!!n.morphAttributes.color,h=0;r.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(h=j.toneMapping);let g=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,_=g===void 0?0:g.length,v=F.get(r),y=k.state.lights;if(ke===!0&&(Ae===!0||e!==pe)){let t=e===pe&&r.id===fe;$e.setState(r,e,t)}let b=!1,x=!1;r.version===v.__version?v.needsLights&&v.lightsStateVersion!==y.state.version||i.isBatchedMesh&&v.batching===!1||!i.isBatchedMesh&&v.batching===!0||i.isBatchedMesh&&v.batchingColor===!0&&i._colorsTexture===null||i.isBatchedMesh&&v.batchingColor===!1&&i._colorsTexture!==null||i.isInstancedMesh&&v.instancing===!1||!i.isInstancedMesh&&v.instancing===!0||i.isSkinnedMesh&&v.skinning===!1||!i.isSkinnedMesh&&v.skinning===!0||i.isInstancedMesh&&v.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&v.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&v.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&v.instancingMorph===!1&&i.morphTexture!==null?b=!0:v.envMap===l?r.fog===!0&&v.fog!==a||v.numClippingPlanes!==void 0&&(v.numClippingPlanes!==$e.numPlanes||v.numIntersection!==$e.numIntersection)?b=!0:v.vertexAlphas===u&&v.vertexTangents===d&&v.morphTargets===f&&v.morphNormals===p&&v.morphColors===m&&v.morphTargetsCount===_&&v.numLightProbeGrids===Ot(k.state.lightProbeGridArray)?(v.outputColorSpace!==s||v.toneMapping!==h)&&(x=!0):b=!0:b=!0:(b=!0,v.__version=r.version);let S=v.currentProgram;(b===!0||x===!0)&&(S=x===!0?At(r,t,i,s,h):kt(r,t,i),oe&&r.isNodeMaterial&&oe.onUpdateProgram(r,S,v));let C=!1,w=!1,T=!1,E=S.getUniforms(),O=v.uniforms;if(P.useProgram(S.program)&&(C=!0,w=!0,T=!0),r.id!==fe&&(fe=r.id,w=!0),C||pe!==e){P.buffers.depth.getReversed()&&e.reversedDepth!==!0&&(e._reversedDepth=!0,e.updateProjectionMatrix()),E.setValue(N,`projectionMatrix`,e.projectionMatrix),E.setValue(N,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(N,Me.setFromMatrixPosition(e.matrixWorld)),ze.logarithmicDepthBuffer&&E.setValue(N,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(N,`isOrthographic`,e.isOrthographicCamera===!0),pe!==e&&(pe=e,w=!0,T=!0)}if(v.needsLights&&(y.state.sunShadowMap.length>0&&E.setValue(N,`sunShadowMap`,y.state.sunShadowMap,He),y.state.directionalShadowMap.length>0&&E.setValue(N,`directionalShadowMap`,y.state.directionalShadowMap,He),y.state.spotShadowMap.length>0&&E.setValue(N,`spotShadowMap`,y.state.spotShadowMap,He),y.state.pointShadowMap.length>0&&E.setValue(N,`pointShadowMap`,y.state.pointShadowMap,He)),i.isSkinnedMesh){E.setOptional(N,i,`bindMatrix`),E.setOptional(N,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(N,`boneTexture`,e.boneTexture,He))}i.isBatchedMesh&&(E.setOptional(N,i,`batchingTexture`),E.setValue(N,`batchingTexture`,i._matricesTexture,He),E.setOptional(N,i,`batchingIdTexture`),E.setValue(N,`batchingIdTexture`,i._indirectTexture,He),E.setOptional(N,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(N,`batchingColorTexture`,i._colorsTexture,He));let ee=n.morphAttributes;if((ee.position!==void 0||ee.normal!==void 0||ee.color!==void 0)&&it.update(i,n,S),(w||v.receiveShadow!==i.receiveShadow)&&(v.receiveShadow=i.receiveShadow,E.setValue(N,`receiveShadow`,i.receiveShadow)),(r.isMeshStandardMaterial||r.isMeshLambertMaterial||r.isMeshPhongMaterial)&&r.envMap===null&&t.environment!==null&&(O.envMapIntensity.value=t.environmentIntensity),O.dfgLUT!==void 0&&(O.dfgLUT.value=Fu()),w){if(E.setValue(N,`toneMappingExposure`,j.toneMappingExposure),v.needsLights&&Pt(O,T),a&&r.fog===!0&&Ye.refreshFogUniforms(O,a),Ye.refreshMaterialUniforms(O,r,xe,be,k.state.transmissionRenderTarget[e.id]),v.needsLights&&v.numLightProbeGrids>0){let e=D,t=0;for(let n of k.state.lightProbeGridArray)n.texture!==null&&(e.textures[t]=n.texture,e.min[t]=n.boundingBox.min,e.max[t]=n.boundingBox.max,e.resolution[t]=n.resolution,t++);for(let n in e)e[n].length=t;O.probesSH.value=e.textures,O.probesMin.value=e.min,O.probesMax.value=e.max,O.probesResolution.value=e.resolution}vl.upload(N,jt(v),O,He)}if(r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(vl.upload(N,jt(v),O,He),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(N,`center`,i.center),E.setValue(N,`modelViewMatrix`,i.modelViewMatrix),E.setValue(N,`normalMatrix`,i.normalMatrix),E.setValue(N,`modelMatrix`,i.matrixWorld),r.uniformsGroups!==void 0){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];lt.update(n,S),lt.bind(n,S)}}return S}function Pt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.sunLights.needsUpdate=t,e.sunLightShadows.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function It(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return ue},this.getActiveMipmapLevel=function(){return de},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(e,t,n){let r=F.get(e);r.__autoAllocateDepthBuffer=e.resolveDepthBuffer===!1,r.__autoAllocateDepthBuffer===!1&&(r.__useRenderToTexture=!1),F.get(e.texture).__webglTexture=t,F.get(e.depthTexture).__webglTexture=r.__autoAllocateDepthBuffer?void 0:n,r.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(e,t){let n=F.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){M=e,ue=t,de=n;let r=null,i=!1,a=!1;if(e){let o=F.get(e);if(o.__useDefaultFramebuffer!==void 0){P.bindFramebuffer(N.FRAMEBUFFER,o.__webglFramebuffer),me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest,P.viewport(me),P.scissor(he),P.setScissorTest(ge),fe=-1;return}if(o.__webglFramebuffer===void 0)He.setupRenderTarget(e);else if(o.__hasExternalTextures)He.rebindTextures(e,F.get(e.texture).__webglTexture,F.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(o.__boundDepthTexture!==t){if(t!==null&&F.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);He.setupDepthRenderbuffer(e)}}let s=e.texture;(s.isData3DTexture||s.isDataArrayTexture||s.isCompressedArrayTexture)&&(a=!0);let c=F.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(r=Array.isArray(c[t])?c[t][n]:c[t],i=!0):r=e.samples>0&&He.useMultisampledRTT(e)===!1?F.get(e).__webglMultisampledFramebuffer:Array.isArray(c)?c[n]:c,me.copy(e.viewport),he.copy(e.scissor),ge=e.scissorTest}else me.copy(we).multiplyScalar(xe).floor(),he.copy(Te).multiplyScalar(xe).floor(),ge=Ee;if(n!==0&&(r=se),P.bindFramebuffer(N.FRAMEBUFFER,r)&&P.drawBuffers(e,r),P.viewport(me),P.scissor(he),P.setScissorTest(ge),i){let r=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(a){let r=t;for(let t=0;t<e.textures.length;t++){let i=F.get(e.textures[t]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+t,i.__webglTexture,n,r)}}else if(e!==null&&n!==0){let t=F.get(e.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,t.__webglTexture,n)}fe=-1};function Rt(e){let t=F.get(e);return(t.__readFormat!==e.format||t.__readType!==e.type)&&(t.__readFormat=e.format,t.__readType=e.type,t.__formatReadable=ze.textureFormatReadable(e.format),t.__typeReadable=ze.textureTypeReadable(e.type)),t}this.readRenderTargetPixels=function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget)){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){P.bindFramebuffer(N.FRAMEBUFFER,c);try{let o=e.textures[s],c=o.format,l=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let u=Rt(o);if(u.__formatReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(u.__typeReadable===!1){L(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&N.readPixels(t,n,r,i,st.convert(c),st.convert(l),a)}finally{let e=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o,s=0){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let c=F.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(c=c[o],Array.isArray(c)&&(c=c[0])),c){if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){P.bindFramebuffer(N.FRAMEBUFFER,c);let o=e.textures[s],l=o.format,u=o.type;e.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+s);let d=Rt(o);if(d.__formatReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(d.__typeReadable===!1)throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let f=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.bufferData(N.PIXEL_PACK_BUFFER,a.byteLength,N.STREAM_READ),N.readPixels(t,n,r,i,st.convert(l),st.convert(u),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let p=M===null?null:F.get(M).__webglFramebuffer;P.bindFramebuffer(N.FRAMEBUFFER,p);let m=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await rt(N,m,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,f),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,a),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(f),N.deleteSync(m),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;He.setTexture2D(e,0),N.copyTexSubImage2D(N.TEXTURE_2D,n,0,0,o,s,i,a),P.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0,a=0){let o,s,c,l,u,d,f,p,m,h=e.isCompressedTexture?e.mipmaps[a]:e.image;if(n!==null)o=n.max.x-n.min.x,s=n.max.y-n.min.y,c=n.isBox3?n.max.z-n.min.z:1,l=n.min.x,u=n.min.y,d=n.isBox3?n.min.z:0;else{let t=2**-i;o=Math.floor(h.width*t),s=Math.floor(h.height*t),c=e.isDataArrayTexture?h.depth:e.isData3DTexture?Math.floor(h.depth*t):1,l=0,u=0,d=0}r===null?(f=0,p=0,m=0):(f=r.x,p=r.y,m=r.z);let g=st.convert(t.format),_=st.convert(t.type),v;t.isData3DTexture?(He.setTexture3D(t,0),v=N.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(He.setTexture2DArray(t,0),v=N.TEXTURE_2D_ARRAY):(He.setTexture2D(t,0),v=N.TEXTURE_2D),P.activeTexture(N.TEXTURE0),P.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,t.flipY),P.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),P.pixelStorei(N.UNPACK_ALIGNMENT,t.unpackAlignment);let y=P.getParameter(N.UNPACK_ROW_LENGTH),b=P.getParameter(N.UNPACK_IMAGE_HEIGHT),x=P.getParameter(N.UNPACK_SKIP_PIXELS),S=P.getParameter(N.UNPACK_SKIP_ROWS),C=P.getParameter(N.UNPACK_SKIP_IMAGES);P.pixelStorei(N.UNPACK_ROW_LENGTH,h.width),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,h.height),P.pixelStorei(N.UNPACK_SKIP_PIXELS,l),P.pixelStorei(N.UNPACK_SKIP_ROWS,u),P.pixelStorei(N.UNPACK_SKIP_IMAGES,d);let w=e.isDataArrayTexture||e.isData3DTexture,T=t.isDataArrayTexture||t.isData3DTexture;if(e.isDepthTexture){let n=F.get(e),r=F.get(t),h=F.get(n.__renderTarget),g=F.get(r.__renderTarget);P.bindFramebuffer(N.READ_FRAMEBUFFER,h.__webglFramebuffer),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,g.__webglFramebuffer);for(let n=0;n<c;n++)w&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(e).__webglTexture,i,d+n),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,F.get(t).__webglTexture,a,m+n)),N.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,N.DEPTH_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(i!==0||e.isRenderTargetTexture||F.has(e)){let n=F.get(e),r=F.get(t);P.bindFramebuffer(N.READ_FRAMEBUFFER,ce),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,le);for(let e=0;e<c;e++)w?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,n.__webglTexture,i,d+e):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,n.__webglTexture,i),T?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,r.__webglTexture,a,m+e):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,r.__webglTexture,a),i===0?T?N.copyTexSubImage3D(v,a,f,p,m+e,l,u,o,s):N.copyTexSubImage2D(v,a,f,p,l,u,o,s):N.blitFramebuffer(l,u,l+o,u+s,f,p,f+o,p+s,N.COLOR_BUFFER_BIT,N.NEAREST);P.bindFramebuffer(N.READ_FRAMEBUFFER,null),P.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else T?e.isDataTexture||e.isData3DTexture?N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h.data):t.isCompressedArrayTexture?N.compressedTexSubImage3D(v,a,f,p,m,o,s,c,g,h.data):N.texSubImage3D(v,a,f,p,m,o,s,c,g,_,h):e.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h.data):e.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,a,f,p,h.width,h.height,g,h.data):N.texSubImage2D(N.TEXTURE_2D,a,f,p,o,s,g,_,h);P.pixelStorei(N.UNPACK_ROW_LENGTH,y),P.pixelStorei(N.UNPACK_IMAGE_HEIGHT,b),P.pixelStorei(N.UNPACK_SKIP_PIXELS,x),P.pixelStorei(N.UNPACK_SKIP_ROWS,S),P.pixelStorei(N.UNPACK_SKIP_IMAGES,C),a===0&&t.generateMipmaps===!0&&t.mipmapsAutoUpdate===!0&&N.generateMipmap(v),P.unbindTexture()},this.initRenderTarget=function(e){F.get(e).__webglFramebuffer===void 0&&He.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?He.setTextureCube(e,0):e.isData3DTexture?He.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?He.setTexture2DArray(e,0):He.setTexture2D(e,0),P.unbindTexture()},this.resetState=function(){ue=0,de=0,M=null,P.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}},Lu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},Ru=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},zu=new ns(-1,1,1,-1,0,1),Bu=new class extends gr{constructor(){super(),this.setAttribute(`position`,new U([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new U([0,2,0,0,2,0],2))}},Vu=class{constructor(e){this._mesh=new W(Bu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,zu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Hu=class extends Ru{constructor(e,t=`tDiffuse`){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof _o?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=mo.clone(e.uniforms),this.material=new _o({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Vu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Uu=class extends Ru{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Wu=class extends Ru{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},Gu=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new R);this._width=n.width,this._height=n.height,t=new Lt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:_}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hu(Lu),this.copyPass.material.blending=0,this.timer=new us}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Uu!==void 0&&(r instanceof Uu?n=!0:r instanceof Wu&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new R);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Ku=class extends Ru{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new H}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},qu={name:`LuminosityHighPassShader`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new H(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},Ju=class e extends Ru{constructor(e,t=1,n,r){super(),this.strength=t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new R(256,256):new R(e.x,e.y),this.clearColor=new H(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Lt(i,a,{type:_,depthBuffer:!1}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Lt(i,a,{type:_,depthBuffer:!1});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Lt(i,a,{type:_,depthBuffer:!1});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=qu;this.highPassUniforms=mo.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new _o({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=mo.clone(Lu.uniforms),this.blendMaterial=new _o({uniforms:this.copyUniforms,vertexShader:Lu.vertexShader,fragmentShader:Lu.fragmentShader,premultipliedAlpha:!0,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new H,this._oldClearAlpha=1,this._basic=new Or,this._fsQuad=new Vu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new R(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this._oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,t.setRenderTarget(null),t.clear(),this._fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this._fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this._fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this._fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this._fsQuad.render(t),s=this.renderTargetsVertical[n];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this._fsQuad.render(t),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this._fsQuad.render(t)):(t.setRenderTarget(r),this._fsQuad.render(t)),t.setClearColor(this._oldClearColor,this._oldClearAlpha),t.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(n*n))/n);let r=[],i=[];for(let n=1;n<e;n+=2){let a=t[n],o=n+1<e?t[n+1]:0,s=a+o;r.push((n*a+(n+1)*o)/s),i.push(s)}return new _o({defines:{KERNEL_PAIRS:r.length},uniforms:{colorTexture:{value:null},invSize:{value:new R(.5,.5)},direction:{value:new R(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:r},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new _o({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Ju.BlurDirectionX=new R(1,0),Ju.BlurDirectionY=new R(0,1);var Yu={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},Xu=class extends Ru{constructor(){super(),this.isOutputPass=!0,this.uniforms=mo.clone(Yu.uniforms),this.material=new vo({name:Yu.name,uniforms:this.uniforms,vertexShader:Yu.vertexShader,fragmentShader:Yu.fragmentShader}),this._fsQuad=new Vu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},wt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7?this.material.defines.NEUTRAL_TONE_MAPPING=``:this._toneMapping===5&&(this.material.defines.CUSTOM_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}},Zu=class{el;held=new Set;pressed=new Set;released=new Set;dx=0;dy=0;wheel=0;locked=!1;allowLock=!0;onLockChange=null;constructor(e){this.el=e,window.addEventListener(`keydown`,e=>{[`Tab`,`Space`,`ArrowUp`,`ArrowDown`,`AltLeft`].includes(e.code)&&e.preventDefault(),e.repeat||this.set(e.code,!0)}),window.addEventListener(`keyup`,e=>this.set(e.code,!1)),e.addEventListener(`mousedown`,e=>this.set(`Mouse`+e.button,!0)),window.addEventListener(`mouseup`,e=>this.set(`Mouse`+e.button,!1)),window.addEventListener(`mousemove`,e=>{(this.locked||this.held.has(`Mouse2`))&&(this.dx+=e.movementX,this.dy+=e.movementY)}),e.addEventListener(`wheel`,e=>{this.wheel+=Math.sign(e.deltaY),e.preventDefault()},{passive:!1}),e.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`pointerlockchange`,()=>{this.locked=document.pointerLockElement===this.el,this.onLockChange?.(this.locked)}),window.addEventListener(`blur`,()=>{for(let e of this.held)this.released.add(e);this.held.clear()})}set(e,t){t?(this.held.has(e)||this.pressed.add(e),this.held.add(e)):this.held.delete(e)&&this.released.add(e)}down(e){return this.held.has(e)}hit(e){return this.pressed.has(e)}up(e){return this.released.has(e)}consume(e){let t=this.pressed.has(e);return this.pressed.delete(e),t}get moveX(){return+!!this.down(`KeyD`)-!!this.down(`KeyA`)}get moveY(){return+!!this.down(`KeyW`)-!!this.down(`KeyS`)}lock(){if(this.allowLock&&!this.locked)try{this.el.requestPointerLock()?.catch?.(()=>{})}catch{}}unlock(){this.locked&&document.exitPointerLock()}clearAll(){this.held.clear(),this.pressed.clear(),this.released.clear()}endFrame(){this.pressed.clear(),this.released.clear(),this.dx=this.dy=this.wheel=0}},Qu=class{ctx=null;master=null;volume=.5;noise=null;unlock(){if(this.ctx)this.ctx.resume();else try{this.ctx=new AudioContext,this.master=this.ctx.createGain(),this.master.gain.value=this.volume,this.master.connect(this.ctx.destination);let e=this.ctx.sampleRate,t=this.ctx.createBuffer(1,e,e),n=t.getChannelData(0);for(let t=0;t<e;t++)n[t]=Math.random()*2-1;this.noise=t}catch{this.ctx=null}}setVolume(e){this.volume=e,this.master&&(this.master.gain.value=e)}tone(e,t,n={}){let r=this.ctx;if(!r||!this.master)return;let i=r.currentTime+(n.delay??0),a=r.createOscillator(),o=r.createGain();a.type=n.type??`sine`,a.frequency.setValueAtTime(e,i),n.to&&a.frequency.exponentialRampToValueAtTime(n.to,i+t),o.gain.setValueAtTime(1e-4,i),o.gain.exponentialRampToValueAtTime(n.vol??.2,i+.01),o.gain.exponentialRampToValueAtTime(1e-4,i+t),a.connect(o).connect(this.master),a.start(i),a.stop(i+t+.02)}hiss(e,t={}){let n=this.ctx;if(!n||!this.master||!this.noise)return;let r=n.currentTime+(t.delay??0),i=n.createBufferSource(),a=n.createBiquadFilter(),o=n.createGain();i.buffer=this.noise,i.loop=!0,a.type=t.type??`bandpass`,a.frequency.setValueAtTime(t.freq??1200,r),t.to&&a.frequency.exponentialRampToValueAtTime(t.to,r+e),a.Q.value=t.q??1,o.gain.setValueAtTime(1e-4,r),o.gain.exponentialRampToValueAtTime(t.vol??.2,r+.012),o.gain.exponentialRampToValueAtTime(1e-4,r+e),i.connect(a).connect(o).connect(this.master),i.start(r,Math.random()*.5),i.stop(r+e+.02)}swing(e=!1){this.hiss(e?.26:.16,{freq:e?500:900,to:e?1800:3200,q:.8,vol:e?.22:.14})}cast(){this.tone(520,.18,{to:1040,type:`triangle`,vol:.1}),this.hiss(.14,{freq:2600,vol:.05})}hit(e=!1){this.hiss(.09,{freq:e?600:1500,q:.6,vol:.28}),this.tone(e?110:170,.1,{to:60,type:`square`,vol:.12})}crit(){this.hit(!0),this.tone(1400,.12,{to:2200,type:`triangle`,vol:.09})}react(){this.tone(660,.25,{to:1320,type:`sawtooth`,vol:.08}),this.hiss(.3,{freq:3e3,to:500,vol:.14})}boom(){this.hiss(.5,{freq:900,to:90,q:.4,vol:.4,type:`lowpass`}),this.tone(90,.4,{to:35,vol:.3})}dodge(){this.hiss(.2,{freq:700,to:2600,q:.7,vol:.16})}perfect(){this.tone(880,.3,{to:1760,type:`triangle`,vol:.14}),this.tone(1320,.3,{to:2640,type:`sine`,vol:.08,delay:.05})}jump(){this.tone(280,.12,{to:460,type:`triangle`,vol:.07})}land(){this.hiss(.1,{freq:300,q:.5,vol:.18,type:`lowpass`})}step(){this.hiss(.05,{freq:500+Math.random()*300,q:.6,vol:.05,type:`lowpass`})}hurt(){this.tone(220,.2,{to:110,type:`sawtooth`,vol:.14})}pick(){this.tone(880,.1,{type:`triangle`,vol:.1}),this.tone(1320,.14,{type:`triangle`,vol:.1,delay:.07})}chest(){[523,659,784,1047].forEach((e,t)=>this.tone(e,.22,{type:`triangle`,vol:.11,delay:t*.08}))}waypoint(){[392,587,784,1175].forEach((e,t)=>this.tone(e,.5,{type:`sine`,vol:.12,delay:t*.1}))}levelUp(){[523,659,784,1047,1319].forEach((e,t)=>this.tone(e,.3,{type:`triangle`,vol:.12,delay:t*.07}))}swap(){this.tone(700,.1,{to:1100,type:`sine`,vol:.09})}glide(){this.hiss(.35,{freq:400,to:1400,q:.5,vol:.12})}splash(){this.hiss(.4,{freq:1800,to:400,q:.5,vol:.2})}ui(){this.tone(900,.06,{type:`triangle`,vol:.06})}deny(){this.tone(200,.12,{type:`square`,vol:.06})}},$u={low:{label:`원활 (내장 그래픽)`,pixelRatio:.8,shadow:1024,grassNear:14e3,grassFar:1e4,bloom:!1,msaa:0},mid:{label:`균형`,pixelRatio:1.25,shadow:2048,grassNear:32e3,grassFar:24e3,bloom:!0,msaa:4},high:{label:`정교 (외장 그래픽)`,pixelRatio:2,shadow:4096,grassNear:64e3,grassFar:48e3,bloom:!0,msaa:4}},ed=`xingjin.quality`;function td(e){let t=localStorage.getItem(ed);if(t&&t in $u)return t;let n=``;try{let t=e.getExtension(`WEBGL_debug_renderer_info`);t&&(n=String(e.getParameter(t.UNMASKED_RENDERER_WEBGL)))}catch{}return/RTX|GTX|Radeon RX|Radeon Pro|Apple M/i.test(n)?`high`:/Intel|UHD|Iris|Arc|SwiftShader|llvmpipe/i.test(n)?/Arc/i.test(n)?`mid`:`low`:`mid`}function nd(e){localStorage.setItem(ed,e)}var rd=Math.PI*2,id=(e,t,n)=>e<t?t:e>n?n:e,ad=e=>id(e,0,1),od=(e,t,n)=>e+(t-e)*n,sd=(e,t,n)=>{let r=ad((n-e)/(t-e));return r*r*(3-2*r)},cd=(e,t,n,r)=>od(e,t,1-Math.exp(-n*r)),ld=(e,t)=>1-Math.exp(-e*t);function ud(e,t){let n=(t-e)%rd;return n>Math.PI&&(n-=rd),n<-Math.PI&&(n+=rd),n}var dd=(e,t,n,r)=>e+ud(e,t)*ld(n,r);function fd(e){let t=e>>>0;return()=>{t=t+1831565813>>>0;let e=t;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}}var pd=new Uint8Array(512);{let e=fd(20261115),t=new Uint8Array(256);for(let e=0;e<256;e++)t[e]=e;for(let n=255;n>0;n--){let r=Math.floor(e()*(n+1)),i=t[n];t[n]=t[r],t[r]=i}for(let e=0;e<512;e++)pd[e]=t[e&255]}var md=e=>e*e*e*(e*(e*6-15)+10);function hd(e,t,n){switch(e&7){case 0:return t+n;case 1:return t-n;case 2:return-t+n;case 3:return-t-n;case 4:return t;case 5:return-t;case 6:return n;default:return-n}}function gd(e,t){let n=Math.floor(e),r=Math.floor(t),i=e-n,a=t-r,o=n&255,s=r&255,c=md(i),l=md(a),u=pd[pd[o]+s],d=pd[pd[o]+s+1],f=pd[pd[o+1]+s],p=pd[pd[o+1]+s+1];return od(od(hd(u,i,a),hd(f,i-1,a),c),od(hd(d,i,a-1),hd(p,i-1,a-1),c),l)}function _d(e,t,n=4,r=2,i=.5){let a=1,o=1,s=0,c=0;for(let l=0;l<n;l++)s+=a*gd(e*o,t*o),c+=a,a*=i,o*=r;return s/c}var vd=(e=0,t=1)=>e+Math.random()*(t-e);new z(0,1,0);var yd={size:640,half:320,cell:2,n:321,sea:0},q={start:{x:0,z:72},campA:{x:-74,z:30},lake:{x:115,z:25,r:70},islet:{x:115,z:25},plateau:{x:-10,z:-150,r:78},peak:{x:-38,z:-184},tower:{x:24,z:-136},ruins:{x:-95,z:160,r:30},forest:{x:-175,z:-30,r:72},campB:{x:-160,z:-48},campC:{x:118,z:150},updraft:{x:-103,z:-128}},bd=[{id:`claude`,company:`Anthropic`,x:30,z:98,yaw:-2.28},{id:`gpt`,company:`OpenAI`,x:-46,z:-128,yaw:1.57},{id:`deepseek`,company:`DeepSeek`,x:61,z:22,yaw:-.3},{id:`glm`,company:`즈푸 Z.ai`,x:-128,z:20,yaw:2.29},{id:`kimi`,company:`Moonshot AI`,x:100,z:-72,yaw:-.84},{id:`qwen`,company:`알리바바 클라우드 · 통이`,x:62,z:150,yaw:-2.56},{id:`gemini`,company:`Google`,x:-22,z:150,yaw:-3.01},{id:`grok`,company:`xAI`,x:-140,z:96,yaw:2.36}],xd=[{x:20,z:48,yaw:-.69},{x:-12,z:-112,yaw:.2},{x:150,z:96,yaw:-2.2}],Sd={x:-175,z:-30},Cd=[[[0,72],[-20,52],[-48,36],[-74,30]],[[0,72],[-28,104],[-64,136],[-95,160]],[[0,72],[4,30],[-2,-20],[-6,-58]],[[-74,30],[-112,6],[-140,-24],[-160,-48]],[[0,72],[16,86],[30,98]],[[30,98],[48,124],[62,150]],[[-28,104],[-24,128],[-22,150]],[[-74,30],[-108,62],[-140,96]],[[4,30],[30,33],[61,22]],[[30,33],[44,-10],[70,-44],[100,-72]],[[-112,6],[-120,14],[-128,20]]];function wd(e,t){let n=[],r=0;for(let i=0;i<e.length-1;i++){let[a,o]=e[i],[s,c]=e[i+1],l=Math.hypot(s-a,c-o),u=Math.max(1,Math.round(l/t));for(let e=i===0?0:1;e<=u;e++)n.push({x:a+(s-a)*e/u,z:o+(c-o)*e/u,tx:(s-a)/l,tz:(c-o)/l,u:r+l*e/u});r+=l}return n}function Td(e,t,n,r,i,a){let o=i-n,s=a-r,c=Math.max(0,Math.min(1,((e-n)*o+(t-r)*s)/(o*o+s*s)));return Math.hypot(e-n-o*c,t-r-s*c)}function Ed(e,t){let n=1e9;for(let r of Cd)for(let i=0;i<r.length-1;i++)n=Math.min(n,Td(e,t,r[i][0],r[i][1],r[i+1][0],r[i+1][1]));return n+1.2*gd(e*.15,t*.15)}var Dd=(e,t)=>7.5+5*_d(e*.0055+3.1,t*.0055-7.3,4)+1.3*_d(e*.022+40,t*.022+12,3),Od=[{...q.start,r:36,ri:14,h:7.2,k:.85},{...q.campA,r:26,ri:12,h:Dd(q.campA.x,q.campA.z),k:.8},{...q.campB,r:24,ri:11,h:Dd(q.campB.x,q.campB.z),k:.8},{...q.campC,r:26,ri:12,h:Dd(q.campC.x,q.campC.z),k:.8},{x:q.ruins.x,z:q.ruins.z,r:q.ruins.r+16,ri:q.ruins.r+2,h:9,k:1}];function kd(e,t){let n=q.plateau,r=Math.hypot(e-n.x,t-n.z)+16*gd(e*.018+9.1,t*.018+2.2);return{m1:sd(n.r+8,n.r+1,r),m2:sd(n.r-6,n.r-13,r)}}function Ad(e,t){let n=q.forest;return sd(n.r,n.r-30,Math.hypot(e-n.x,t-n.z)+14*gd(e*.02+5.5,t*.02-3.3))}function jd(e,t){let n=q.ruins;return sd(n.r+3,n.r-2,Math.hypot(e-n.x,t-n.z))}function Md(e,t){let n=Dd(e,t);n+=Ad(e,t)*2.5*_d(e*.03+7,t*.03+3,2);for(let r of Od)n=od(n,r.h,r.k*sd(r.r,r.ri,Math.hypot(e-r.x,t-r.z)));let{m1:r,m2:i}=kd(e,t);if(r>0){n=od(n,8.5,i*.75)+21*r+21*i+i*2.6*_d(e*.03,t*.03,3);let a=Math.hypot(e-q.peak.x,t-q.peak.z);n+=27*sd(36,0,a)**1.5*i}let a=q.lake,o=Math.hypot(e-a.x,t-a.z)+9*gd(e*.03+1.7,t*.03+8.8);n=od(n,-5.5,sd(a.r,a.r-28,o)),n=od(n,3.4,sd(17,8,Math.hypot(e-q.islet.x,t-q.islet.z)));let s=Math.hypot(e,t)+26*gd(e*.011+5,t*.011+9);return od(-10,n,sd(292,226,s))}var Nd=[...bd.map(e=>e.id===`deepseek`?{x:e.x,z:e.z,r0:8,r1:17,yard:8,h:1.5}:{x:e.x,z:e.z,r0:13,r1:25,yard:10}),...xd.map(e=>({x:e.x,z:e.z,r0:8,r1:17,yard:7.5})),{...Sd,r0:9,r1:19,yard:8.5}],Pd=Nd.map(e=>e.h??Math.max(1.6,Md(e.x,e.z)));function Fd(e,t){let n=0,r=!1;for(let i=0;i<Nd.length;i++){let a=Nd[i],o=Math.hypot(e-a.x,t-a.z);if(o>a.yard+4)continue;let s=sd(a.yard+1.2,a.yard-.8,o+1.3*gd(e*.3+i,t*.3));s>n&&(n=s,r=i>=bd.length)}return{m:n,tech:r}}var Id=e=>Pd[e];function Ld(e,t){let n=Md(e,t);for(let r=0;r<Nd.length;r++){let i=Nd[r],a=Math.hypot(e-i.x,t-i.z);a<i.r1&&(n=od(n,Pd[r],sd(i.r1,i.r0,a)))}return n}function Rd(e,t,n){let r=new Uint8Array(16);for(let i=0;i<16;i++)r[i]=i<n?e:i===n?t:255;let a=new $r(r,16,1,O);return a.minFilter=a.magFilter=i,a.generateMipmaps=!1,a.needsUpdate=!0,a}function zd(e){let t=new Uint8Array(16);for(let n=0;n<16;n++)t[n]=e+(255-e)*Math.min(1,Math.max(0,(n-6)/7));let n=new $r(t,16,1,O);return n.minFilter=n.magFilter=s,n.generateMipmaps=!1,n.needsUpdate=!0,n}var Bd={ground:zd(150),cloth:Rd(148,205,9),skin:Rd(208,232,9),hair:Rd(138,200,8),soft:Rd(176,220,8)};function Vd(e={}){return new yo({color:e.color??16777215,gradientMap:Bd[e.grad??`cloth`],vertexColors:e.vertexColors??!1,map:e.map??null,side:e.side??0,emissive:e.emissive??0})}var Hd={uSunCol:{value:new H(1,1,1)},uLevel:{value:new H(.92,.92,.9)},uRimCol:{value:new H(1,.98,.94)}};function Ud(e,t){let n=new Uint8Array(64);for(let r=0;r<64;r++)n[r]=255*Math.min(1,Math.max(0,(r-e)/t+.5));let r=new $r(n,64,1,O);return r.minFilter=r.magFilter=s,r.generateMipmaps=!1,r.needsUpdate=!0,r}var Wd={cloth:{grad:Ud(36,2.5),tint:[.7,.68,.86],rim:.26},skin:{grad:Ud(33,6),tint:[.99,.8,.78],rim:.2},hair:{grad:Ud(35,3),tint:[.64,.6,.8],rim:.34},face:{grad:Ud(22,10),tint:[1,.86,.84],rim:0}},Gd=`
  vec3 _base = diffuseColor.rgb;
  float _full = max(dot(_base * uSunCol, vec3(1.0)) * RECIPROCAL_PI, 1e-5);
  float _k = clamp(dot(reflectedLight.directDiffuse, vec3(1.0)) / _full, 0.0, 1.0);
  vec3 _shd = _base * uShadeTint;
  _shd = mix(vec3(dot(_shd, vec3(0.299, 0.587, 0.114))), _shd, 1.2);
  vec3 _col = mix(_shd, _base, _k) * uLevel;
  vec3 _wn = transformDirectionByInverseViewMatrix(normal, viewMatrix);
  float _rim = pow(1.0 - clamp(dot(normal, normalize(vViewPosition)), 0.0, 1.0), 4.0);
  _col += uRimCol * _rim * uRimK * (0.3 + 0.7 * clamp(_wn.y + 0.45, 0.0, 1.0));
  if (uHair > 0.5) {
    float _ring = smoothstep(0.40, 0.55, _wn.y) * (1.0 - smoothstep(0.60, 0.80, _wn.y));
    float _a = atan(_wn.x, _wn.z);
    _ring *= clamp(0.6 + 0.55 * sin(_a * 17.0) * sin(_a * 6.0 + 1.3), 0.0, 1.0);
    _col += uRimCol * _ring * 0.3 * (0.35 + 0.65 * _k);
  }
  vec3 outgoingLight = _col + totalEmissiveRadiance;`;function Kd(e,t={}){let n=Wd[e],r=new yo({gradientMap:n.grad,vertexColors:t.vertexColors??!0,map:t.map??null,side:t.side??0});return r.onBeforeCompile=t=>{Object.assign(t.uniforms,Hd,{uShadeTint:{value:new H(...n.tint)},uRimK:{value:n.rim},uHair:{value:+(e===`hair`)}}),t.fragmentShader=t.fragmentShader.replace(`#include <common>`,`#include <common>
uniform vec3 uSunCol, uLevel, uRimCol, uShadeTint;
uniform float uRimK, uHair;`).replace(`vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;`,Gd)},r.customProgramCacheKey=()=>`char`,r}function qd(e=16777215,t=1,n=!1){let r=new Or({color:e,vertexColors:n,toneMapped:!1});return r.color.multiplyScalar(t),r}var Jd=`
#include <common>
#include <skinning_pars_vertex>
#include <fog_pars_vertex>
uniform float uThick;
varying vec3 vCol;
void main() {
  #include <beginnormal_vertex>
  #include <skinbase_vertex>
  #include <skinnormal_vertex>
  #include <begin_vertex>
  #include <skinning_vertex>
  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
  vec3 n = normalize(normalMatrix * objectNormal);
  // 描边粗细随距离略微变粗，远处不至于消失
  mvPosition.xyz += n * uThick * (0.55 + 0.45 * clamp(-mvPosition.z / 5.0, 0.0, 4.0));
  gl_Position = projectionMatrix * mvPosition;
  #ifdef USE_COLOR
    vCol = color;
  #else
    vCol = vec3(1.0);
  #endif
  #include <fog_vertex>
}`,Yd=`
uniform vec3 uTint;
uniform float uFlash;
varying vec3 vCol;
#include <fog_pars_fragment>
void main() {
  gl_FragColor = vec4(mix(vCol * uTint, vec3(1.0), uFlash), 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`;function Xd(e=.011,t=`#4a3040`,n=!0){return new _o({uniforms:mo.merge([K.fog,{uThick:{value:e},uTint:{value:new H(t)},uFlash:{value:0}}]),vertexShader:Jd,fragmentShader:Yd,side:1,vertexColors:n,fog:!0})}function Zd(e,t){let n;if(e.isSkinnedMesh){let r=e,i=new Zr(e.geometry,t);i.bind(r.skeleton,r.bindMatrix),i.frustumCulled=!1,e.parent?.add(i),n=i}else n=new W(e.geometry,t),e.add(n);return n.userData.outline=!0,n}var Qd=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,$d=e=>new H(e),ef={g1:$d(`#5fa544`),g2:$d(`#86c653`),gForest:$d(`#3f8440`),gHigh:$d(`#a9c468`),dirt:$d(`#b89a68`),stone:$d(`#b9b3a4`),stone2:$d(`#a39d90`),sand:$d(`#ead9a4`),seabed:$d(`#7fa39a`),rock1:$d(`#948b7d`),rock2:$d(`#6f6a66`),yard:$d(`#d9c9a2`),slate:$d(`#7f8894`)},tf=class{n=yd.n;heights=new Float32Array(yd.n*yd.n);mesh;dataTex;colorTex;mapCanvas;constructor(){this.build()}H(e,t){let n=this.n;return this.heights[id(t,0,n-1)*n+id(e,0,n-1)]}build(){let e=this.n,t=yd.cell,n=yd.half;for(let r=0;r<e;r++)for(let i=0;i<e;i++)this.heights[r*e+i]=Ld(-n+i*t,-n+r*t);let r=new Float32Array(e*e*3),a=new Float32Array(e*e*3),o=new Float32Array(e*e*3),c=new Float32Array(e*e*2),l=new Float32Array(e*e*4),d=new Uint8Array(e*e*4),f=new H,p=new H,m=new z;for(let i=0;i<e;i++)for(let s=0;s<e;s++){let u=i*e+s,h=-n+s*t,g=-n+i*t,_=this.heights[u];m.set(this.H(s-1,i)-this.H(s+1,i),2*t,this.H(s,i-1)-this.H(s,i+1)).normalize(),r[u*3]=h,r[u*3+1]=_,r[u*3+2]=g,a[u*3]=m.x,a[u*3+1]=m.y,a[u*3+2]=m.z,c[u*2]=s/(e-1),c[u*2+1]=i/(e-1);let v=gd(h*.05,g*.05),y=gd(h*.011+20,g*.011+31),b=Ad(h,g),{m2:x}=kd(h,g),S=jd(h,g);f.copy(ef.g1).lerp(ef.g2,ad(.5+.55*y+.25*v)),f.lerp(ef.gForest,b*.8).lerp(ef.gHigh,x*.85);let C=_>1?sd(3.2,1.6,Ed(h,g))*(1-x):0;f.lerp(ef.dirt,C*.85);let w=Fd(h,g);f.lerp(w.tech?ef.slate:ef.yard,w.m*.9),f.lerp(v>.1?ef.stone2:ef.stone,S);let T=sd(2.2,.9,_);f.lerp(ef.sand,T),f.lerp(ef.seabed,sd(0,-3.5,_));let E=sd(.82,.64,m.y);p.copy(ef.rock1).lerp(ef.rock2,ad(.5+.5*Math.sin(_*.9+v*3))),f.lerp(p,E),o[u*3]=f.r,o[u*3+1]=f.g,o[u*3+2]=f.b,l[u*4]=_,l[u*4+1]=_>1.3?(1-E)*(1-C)*(1-S)*(1-T)*(1-w.m)*od(1,.5,b):0,d[u*4]=Qd(f.r)*255,d[u*4+1]=Qd(f.g)*255,d[u*4+2]=Qd(f.b)*255,d[u*4+3]=ad((_+8)/16)*255}let h=new Uint32Array((e-1)*(e-1)*6),_=0;for(let t=0;t<e-1;t++)for(let n=0;n<e-1;n++){let r=t*e+n,i=r+1,a=r+e,o=a+1;h[_++]=r,h[_++]=a,h[_++]=i,h[_++]=i,h[_++]=a,h[_++]=o}let v=new gr;v.setAttribute(`position`,new nr(r,3)),v.setAttribute(`normal`,new nr(a,3)),v.setAttribute(`color`,new nr(o,3)),v.setAttribute(`uv`,new nr(c,2)),v.setIndex(new nr(h,1)),v.computeBoundingSphere();let y=Vd({vertexColors:!0,map:this.detailTexture(),grad:`ground`});this.mesh=new W(v,y),this.mesh.receiveShadow=!0,this.mesh.matrixAutoUpdate=!1,this.dataTex=new $r(l,e,e,T,g),this.dataTex.minFilter=this.dataTex.magFilter=i,this.dataTex.needsUpdate=!0,this.colorTex=new $r(d,e,e,T,u),this.colorTex.colorSpace=Ve,this.colorTex.minFilter=this.colorTex.magFilter=s,this.colorTex.needsUpdate=!0,this.mapCanvas=this.buildMap(d,a)}detailTexture(){let e=document.createElement(`canvas`);e.width=e.height=256;let n=e.getContext(`2d`);n.fillStyle=`#ffffff`,n.fillRect(0,0,256,256);let r=7,i=()=>(r=r*16807%2147483647)/2147483647;for(let e=0;e<900;e++){let e=i()*256,t=i()*256,r=3+i()*7;n.strokeStyle=i()<.6?`rgba(40,70,30,${.05+i()*.08})`:`rgba(255,255,220,${.06+i()*.1})`,n.lineWidth=1+i()*1.5;for(let a of[-256,0,256])for(let o of[-256,0,256])n.beginPath(),n.moveTo(e+a,t+o),n.lineTo(e+a+(i()-.5)*3,t+o-r),n.stroke()}let a=new Ei(e);return a.wrapS=a.wrapT=t,a.repeat.set(120,120),a.colorSpace=Ve,a.anisotropy=4,a}buildMap(e,t){let n=this.n,r=document.createElement(`canvas`);r.width=r.height=512;let i=r.getContext(`2d`),a=i.createImageData(512,512);for(let r=0;r<512;r++)for(let i=0;i<512;i++){let o=Math.round(i/511*(n-1)),s=Math.round(r/511*(n-1))*n+o,c=this.heights[s],l=id(.62+.9*(t[s*3]*-.5+t[s*3+2]*-.5)+.3*t[s*3+1],.45,1.2),u=e[s*4]*l,d=e[s*4+1]*l,f=e[s*4+2]*l;if(c<0){let e=ad(-c/6);u=od(120,52,e),d=od(190,120,e),f=od(215,185,e)}let p=(r*512+i)*4;a.data[p]=u,a.data[p+1]=d,a.data[p+2]=f,a.data[p+3]=255}return i.putImageData(a,0,0),r}heightAt(e,t){let n=this.n,r=yd.cell,i=id((e+yd.half)/r,0,n-1.001),a=id((t+yd.half)/r,0,n-1.001),o=Math.floor(i),s=Math.floor(a),c=i-o,l=a-s,u=s*n+o,d=this.heights[u],f=this.heights[u+1],p=this.heights[u+n],m=this.heights[u+n+1];return c+l<=1?d+(f-d)*c+(p-d)*l:m+(p-m)*(1-c)+(f-m)*(1-l)}normalAt(e,t,n){let r=.9;return n.set(this.heightAt(e-r,t)-this.heightAt(e+r,t),2*r,this.heightAt(e,t-r)-this.heightAt(e,t+r)).normalize()}},nf=8,rf=(e,t)=>(e+512)*2048+(t+512),af=class e{terrain;grid=new Map;all=[];constructor(e){this.terrain=e}addBox(e,t,n,r,i,a,o,s=!0){let c={kind:`box`,x:e,z:t,hx:n,hz:r,cos:Math.cos(i),sin:Math.sin(i),y0:a,y1:o,climb:s};return this.insert(c,Math.hypot(n,r)),c}addCyl(e,t,n,r,i){let a={kind:`cyl`,x:e,z:t,r:n,y0:r,y1:i};return this.insert(a,n),a}insert(e,t){this.all.push(e);for(let n=Math.floor((e.x-t)/nf);n<=Math.floor((e.x+t)/nf);n++)for(let r=Math.floor((e.z-t)/nf);r<=Math.floor((e.z+t)/nf);r++){let t=rf(n,r),i=this.grid.get(t);i||this.grid.set(t,i=[]),i.push(e)}}near(e,t,n,r){r.length=0;for(let i=Math.floor((e-n)/nf);i<=Math.floor((e+n)/nf);i++)for(let e=Math.floor((t-n)/nf);e<=Math.floor((t+n)/nf);e++){let t=this.grid.get(rf(i,e));if(t)for(let e of t)r.includes(e)||r.push(e)}return r}tmp=[];static local(e,t,n,r){let i=t-e.x,a=n-e.z;return r.x=i*e.cos-a*e.sin,r.z=i*e.sin+a*e.cos,r}l={x:0,z:0};groundAt(t,n,r,i=.45){let a=this.terrain.heightAt(t,n);for(let o of this.near(t,n,.1,this.tmp))if(!(o.y1>r+i||o.y1<=a)){if(o.kind===`cyl`)Math.hypot(t-o.x,n-o.z)<=o.r&&(a=o.y1);else{let r=e.local(o,t,n,this.l);Math.abs(r.x)<=o.hx&&Math.abs(r.z)<=o.hz&&(a=o.y1)}}return a}resolve(t,n,r,i=.45){let a=null,o=0;for(let s of this.near(t.x,t.z,n+.1,this.tmp)){if(s.y1<=t.y+i||s.y0>=t.y+r)continue;let c=0,l=0,u=0;if(s.kind===`cyl`){let e=t.x-s.x,r=t.z-s.z,i=Math.hypot(e,r),a=s.r+n;if(i>=a)continue;c=i>1e-5?e/i:1,l=i>1e-5?r/i:0,u=a-i}else{let r=e.local(s,t.x,t.z,this.l),i=Math.max(-s.hx,Math.min(s.hx,r.x)),a=Math.max(-s.hz,Math.min(s.hz,r.z)),o=r.x-i,d=r.z-a,f=Math.hypot(o,d);if(f>=n)continue;if(f<1e-5){let e=s.hx-Math.abs(r.x),t=s.hz-Math.abs(r.z);e<t?(o=Math.sign(r.x)||1,d=0,u=e+n):(o=0,d=Math.sign(r.z)||1,u=t+n)}else o/=f,d/=f,u=n-f;c=o*s.cos+d*s.sin,l=-o*s.sin+d*s.cos}t.x+=c*u,t.z+=l*u,u>o&&(o=u,a={c:s,nx:c,nz:l})}return a}raycast(t,n,r,i=.35){let a=r;for(let e=i;e<a;e+=i)if(t.y+n.y*e<this.terrain.heightAt(t.x+n.x*e,t.z+n.z*e)+.15){a=Math.max(0,e-i);break}let o=t.x+n.x*a*.5,s=t.z+n.z*a*.5;for(let r of this.near(o,s,a*.5+1,this.tmp)){let i=0,o=a;if(r.kind===`box`){let s=e.local(r,t.x,t.z,this.l),c=s.x,l=s.z,u=n.x*r.cos-n.z*r.sin,d=n.x*r.sin+n.z*r.cos,f=(e,t,n,r)=>{if(Math.abs(t)<1e-6)return e>=n&&e<=r;let a=(n-e)/t,s=(r-e)/t;return a>s&&([a,s]=[s,a]),i=Math.max(i,a),o=Math.min(o,s),i<=o};f(c,u,-r.hx,r.hx)&&f(l,d,-r.hz,r.hz)&&f(t.y,n.y,r.y0,r.y1)&&i<a&&(a=i)}else{let e=t.x-r.x,i=t.z-r.z,o=n.x*n.x+n.z*n.z;if(o<1e-8)continue;let s=e*n.x+i*n.z,c=e*e+i*i-r.r*r.r,l=s*s-o*c;if(l<0)continue;let u=(-s-Math.sqrt(l))/o,d=t.y+n.y*u;u>0&&u<a&&d>r.y0&&d<r.y1&&(a=u)}}return a}blocked(t,n,r,i){for(let a of this.near(t,n,r+.1,this.tmp))if(!(a.y1<=i+.4||a.y0>=i+1.5)){if(a.kind===`cyl`){if(Math.hypot(t-a.x,n-a.z)<a.r+r)return!0}else{let i=e.local(a,t,n,this.l);if(Math.abs(i.x)<a.hx+r&&Math.abs(i.z)<a.hz+r)return!0}}return!1}},of=new z;function sf(e,t,n,r,i,a){let o=2*Math.PI*i/4,s=Math.max(a-2*i,0),c=Math.PI/4;of.copy(t),of[r]=0,of.normalize();let l=.5*o/(o+s),u=1-of.angleTo(e)/c;return Math.sign(of[n])===1?u*l:s/(o+s)+l+l*(1-u)}var cf=class e extends G{constructor(e=1,t=1,n=1,r=2,i=.1){let a=r*2+1;if(i=Math.min(e/2,t/2,n/2,i),super(1,1,1,a,a,a),this.type=`RoundedBoxGeometry`,this.parameters={width:e,height:t,depth:n,segments:r,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let s=new z,c=new z,l=new z(e,t,n).divideScalar(2).subScalar(i),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,p=u.length/6,m=new z,h=.5/a;for(let r=0,a=0;r<u.length;r+=3,a+=2)switch(s.fromArray(u,r),c.copy(s),c.x-=Math.sign(c.x)*h,c.y-=Math.sign(c.y)*h,c.z-=Math.sign(c.z)*h,c.normalize(),u[r+0]=l.x*Math.sign(s.x)+c.x*i,u[r+1]=l.y*Math.sign(s.y)+c.y*i,u[r+2]=l.z*Math.sign(s.z)+c.z*i,d[r+0]=c.x,d[r+1]=c.y,d[r+2]=c.z,Math.floor(r/p)){case 0:m.set(1,0,0),f[a+0]=sf(m,c,`z`,`y`,i,n),f[a+1]=1-sf(m,c,`y`,`z`,i,t);break;case 1:m.set(-1,0,0),f[a+0]=1-sf(m,c,`z`,`y`,i,n),f[a+1]=1-sf(m,c,`y`,`z`,i,t);break;case 2:m.set(0,1,0),f[a+0]=1-sf(m,c,`x`,`z`,i,e),f[a+1]=sf(m,c,`z`,`x`,i,n);break;case 3:m.set(0,-1,0),f[a+0]=1-sf(m,c,`x`,`z`,i,e),f[a+1]=1-sf(m,c,`z`,`x`,i,n);break;case 4:m.set(0,0,1),f[a+0]=1-sf(m,c,`x`,`y`,i,e),f[a+1]=1-sf(m,c,`y`,`x`,i,t);break;case 5:m.set(0,0,-1),f[a+0]=sf(m,c,`x`,`y`,i,e),f[a+1]=1-sf(m,c,`y`,`x`,i,t)}}static fromJSON(t){return new e(t.width,t.height,t.depth,t.segments,t.radius)}};function lf(e,t=!1){let n=e[0].index!==null,r=new Set(Object.keys(e[0].attributes)),i=new Set(Object.keys(e[0].morphAttributes)),a={},o={},s=e[0].morphTargetsRelative,c=new gr;c.morphTargetsRelative=s;let l=0;for(let u=0;u<e.length;++u){let d=e[u],f=0,p=0;if(n!==(d.index!==null))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.`),null;for(let e in d.attributes){if(!r.has(e))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have compatible attributes; make sure "`+e+`" attribute exists among all geometries, or in none of them.`),null;a[e]===void 0&&(a[e]=[]),a[e].push(d.attributes[e]),f++}if(f!==r.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of attributes.`),null;if(s!==d.morphTargetsRelative)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. .morphTargetsRelative must be consistent throughout all geometries.`),null;for(let t in d.morphAttributes){if(!i.has(t))return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`.  .morphAttributes must be consistent throughout all geometries.`),null;if(d.morphAttributes[t].length!==e[0].morphAttributes[t].length)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. All geometries must have the same number of morph targets for the "`+t+`" morph attribute.`),null;o[t]===void 0&&(o[t]=[]),o[t].push(d.morphAttributes[t]),p++}if(p!==i.size)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. Make sure all geometries have the same number of morph attributes.`),null;if(t){let e;if(n)e=d.index.count;else if(d.attributes.position!==void 0)e=d.attributes.position.count;else return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index `+u+`. The geometry must have either an index or a position attribute`),null;c.addGroup(l,e,u),l+=e}}if(n){let t=0,n=[];for(let r=0;r<e.length;++r){let i=e[r].index;for(let e=0;e<i.count;++e)n.push(i.getX(e)+t);t+=e[r].attributes.position.count}c.setIndex(n)}for(let e in a){let t=uf(a[e]);if(!t)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` attribute.`),null;c.setAttribute(e,t)}for(let e in o){let t=o[e][0].length;if(t!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[e]=[];for(let n=0;n<t;++n){let t=[];for(let r=0;r<o[e].length;++r)t.push(o[e][r][n]);let r=uf(t);if(!r)return console.error(`THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the `+e+` morphAttribute.`),null;c.morphAttributes[e].push(r)}}}return c}function uf(e){let t,n,r,i=-1,a=0;for(let o=0;o<e.length;++o){let s=e[o];if(t===void 0&&(t=s.array.constructor),t!==s.array.constructor)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes.`),null;if(n===void 0&&(n=s.itemSize),n!==s.itemSize)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes.`),null;if(r===void 0&&(r=s.normalized),r!==s.normalized)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes.`),null;if(i===-1&&(i=s.gpuType),i!==s.gpuType)return console.error(`THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes.`),null;a+=s.count*n}let o=new t(a),s=new nr(o,n,r),c=0;for(let t=0;t<e.length;++t){let r=e[t];if(r.isInterleavedBufferAttribute){let e=c/n;for(let t=0,i=r.count;t<i;t++)for(let i=0;i<n;i++){let n=r.getComponent(t,i);s.setComponent(t+e,i,n)}}else o.set(r.array,c);c+=r.count*n}return i!==void 0&&(s.gpuType=i),s}function df(e,t=1e-4){t=Math.max(t,2**-52);let n={},r=e.getIndex(),i=e.getAttribute(`position`),a=r?r.count:i.count,o=0,s=Object.keys(e.attributes),c=[],l=new Map,u=[],d=[`getX`,`getY`,`getZ`,`getW`],f=t*.5,p=10**Math.log10(1/t),m=f*p;for(let t=0;t<a;t++){let i=r?r.getX(t):t,a=``;for(let t=0,n=s.length;t<n;t++){let n=s[t],r=e.getAttribute(n),o=r.itemSize;for(let e=0;e<o;e++)a+=`${Math.trunc(r[d[e]](i)*p+m)},`}a in n?u.push(n[a]):(c.push(i),n[a]=o,u.push(o),o++)}let h=e.clone();for(let t in e.attributes)h.setAttribute(t,ff(e.attributes[t],c,l));for(let t in e.morphAttributes)h.morphAttributes[t]=e.morphAttributes[t].map(e=>ff(e,c,l));return h.setIndex(u),h}function ff(e,t,n=new Map){let r=e.isInterleavedBufferAttribute,i=r?e.data:e,a=r?i.stride:e.itemSize,o=r?n.get(i):void 0;if(o===void 0){let s=new i.array.constructor(t.length*a);for(let e=0;e<t.length;e++)for(let n=0;n<a;n++)s[e*a+n]=i.array[t[e]*a+n];o=r?new i.constructor(s,a,i.meshPerAttribute):new e.constructor(s,e.itemSize,e.normalized,e.meshPerAttribute),o.setUsage(i.usage),r&&n.set(i,o)}let s=r?new e.constructor(o,e.itemSize,e.offset,e.normalized):o;return s.name=e.name,r||(s.gpuType=e.gpuType),s}var pf=new H,mf=new z,hf=new z,gf=new V,_f=new _t,vf=new Yt;function J(e,t){let n=e.attributes.position,r=e.attributes.normal,i=new Float32Array(n.count*3);typeof t!=`function`&&pf.set(t);for(let e=0;e<n.count;e++)typeof t==`function`&&(mf.fromBufferAttribute(n,e),r&&hf.fromBufferAttribute(r,e),t(mf,hf,pf)),i[e*3]=pf.r,i[e*3+1]=pf.g,i[e*3+2]=pf.b;return e.setAttribute(`color`,new nr(i,3)),e}function Y(e,t,n,r){vf.set(n?.[0]??0,n?.[1]??0,n?.[2]??0),_f.setFromEuler(vf);let i=typeof r==`number`?[r,r,r]:r??[1,1,1];return gf.compose(new z(t?.[0]??0,t?.[1]??0,t?.[2]??0),_f,new z(i[0],i[1],i[2])),e.applyMatrix4(gf),e}function yf(e){let t=e.index?e.toNonIndexed():e;for(let e of Object.keys(t.attributes))[`position`,`normal`,`color`,`skinIndex`,`skinWeight`].includes(e)||t.deleteAttribute(e);return t.attributes.normal||t.computeVertexNormals(),t.attributes.color||J(t,16777215),t}function bf(e){let t=lf(e.map(yf),!1);if(!t)throw Error(`merge failed`);return t}function xf(e,t=14,n=0,r=Math.PI*2){return new $a(e.map(([e,t])=>new R(Math.max(e,1e-4),t)),t,n,r)}function Sf(e,t,n,r,i=!1){let a=new Qa(e,t);a.deleteAttribute(`uv`),a.deleteAttribute(`normal`),a=df(a,1e-4);let o=a.attributes.position;for(let t=0;t<o.count;t++){mf.fromBufferAttribute(o,t);let i=1+n*(Math.sin(mf.x*2.3/e+r)*Math.cos(mf.y*2.9/e+r*1.7)+.6*Math.sin(mf.z*4.1/e+r*2.3));o.setXYZ(t,mf.x*i,mf.y*i,mf.z*i)}return i&&(a=a.toNonIndexed()),a.computeVertexNormals(),a}var Cf=e=>new H(e),wf=[Cf(`#cfc8b6`),Cf(`#b3ac9c`),Cf(`#978f82`)],Tf=Cf(`#7d9a5e`);function Ef(e,t,n,r){let i=1e9,a=-1e9;for(let t of e)i=Math.min(i,t[1]-t[3]),a=Math.max(a,t[1]+t[3]);return e.map((e,o)=>J(Y(Sf(e[3],2,.13,r+o*3.7),[e[0],e[1],e[2]],null,[1,.82,1]),(e,r,o)=>o.copy(t).lerp(n,ad((e.y-i)/(a-i)*.75+r.y*.3))))}function Df(e,t,n,r){let i=new Mi(n,t,e,7,4);i.translate(0,e/2,0);let a=i.attributes.position;for(let t=0;t<a.count;t++)a.setX(t,a.getX(t)+r*(a.getY(t)/e)**2);return i.computeVertexNormals(),J(i,(t,n,r)=>r.set(`#8a6846`).lerp(Cf(`#5e4630`),ad(1-t.y/e)*.7))}function Of(e,t,n){let r=fd(e),i=[[.15,4.4,0,1.75]];for(let e=0;e<5;e++){let t=e/5*6.283+r(),n=.9+r()*.5;i.push([Math.cos(t)*n+.15,3.5+r()*1.5,Math.sin(t)*n,1+r()*.4])}let a=Y(J(new Mi(.05,.1,1.5,5),`#6e5238`),[.55,2.7,.1],[0,0,-.9]);return bf([Df(3.4,.33,.15,.15),a,...Ef(i,Cf(t),Cf(n),e)])}function kf(e){let t=[Df(2.4,.26,.13,0)];return[[1.75,2,2.5],[1.4,1.8,3.6],[1.05,1.6,4.6],[.7,1.5,5.6]].forEach(([n,r,i],a)=>{let o=new Ni(n,r,9,1,!0);o.rotateY(e+a),o.translate(0,i,0),t.push(J(o,(e,t,n)=>n.set(`#2c6a4c`).lerp(Cf(`#5aa868`),ad((e.y-1.6)/5.2))))}),bf(t)}function Af(e){return bf(Ef([[0,.45,0,.62],[.5,.35,.2,.45],[-.45,.33,-.2,.42],[.1,.36,-.5,.4]],Cf(`#3f8d3f`),Cf(`#8fd15b`),e))}function jf(e){return J(Y(Sf(1,1,.24,e,!0),[0,.35,0],null,[1,.72,.9]),(e,t,n)=>n.copy(wf[2]).lerp(wf[0],ad(t.y*.6+.35)).lerp(Tf,ad(.25-e.y)*.5))}function Mf(){let e=[J(Y(new Mi(.012,.012,.3,4),[0,.15,0]),`#4d8f3c`)];for(let t=0;t<5;t++){let n=t/5*6.283;e.push(J(Y(new ji(.07,6),[Math.cos(n)*.07,.31,Math.sin(n)*.07],[-1.3,0,0]),`#ffffff`))}return e.push(J(Y(new ao(.035,6,4),[0,.32,0]),`#ffd24a`)),bf(e)}var Nf=(e,t=0)=>(n,r,i)=>{let a=gd(n.x*1.7+t,n.y*1.3+n.z*1.9);i.copy(wf[1]).lerp(a>0?wf[0]:wf[2],Math.abs(a)*.9).lerp(Tf,ad(.5-n.y/Math.max(e,.5))*.55)};function Pf(e,t){let n=[[0,0],[.66,0],[.66,.22],[.52,.3],[.44,.42],[.4,e*.6],[.37,e-.42]];return t?n.push([.36,e-.1],[.2,e+.08],[0,e]):n.push([.42,e-.36],[.56,e-.2],[.64,e-.16],[.64,e],[0,e]),J(xf(n,12),Nf(e,e*3.1))}function Ff(e,t,n,r){let i=fd(r),a=[],o=.62,s=Math.round(t/o);for(let t=0;t<=s;t++){let r=-e/2-t%2*.35;for(;r<e/2;){let c=.95+i()*.5,l=Math.min(r+c,e/2),u=Math.max(r,-e/2);if(l-u>.25&&!(t===s&&i()<.62)){let e=new cf(l-u-.03,.59,n+(i()-.5)*.06,1,.045);a.push(Y(e,[(u+l)/2,t*o+o/2,0]))}r+=c}}return J(bf(a),Nf(t,r))}function If(e,t){let n=[Y(new G(e,t,e),[0,t/2,0])];for(let r of[t*.34,t*.67,t-.2])n.push(Y(new G(e+.4,.4,e+.4),[0,r,0]));for(let r=-1;r<=1;r++)for(let i of[-1,1])n.push(Y(new G(1.1,.8,.5),[r*(e/2-.75),t+.4,i*(e/2-.05)])),n.push(Y(new G(.5,.8,1.1),[i*(e/2-.05),t+.4,r*(e/2-.75)]));let r=J(bf(n),Nf(t,4.2)),i=[];for(let n=0;n<4;n++){let r=n*Math.PI/2;i.push(Y(new G(.5,1.5,.12),[Math.sin(r)*(e/2+.01),t*.5,Math.cos(r)*(e/2+.01)],[0,r,0])),i.push(Y(new G(.5,1.5,.12),[Math.sin(r)*(e/2+.01),t*.82,Math.cos(r)*(e/2+.01)],[0,r,0]))}return i.push(Y(new G(1.6,2.6,.14),[0,1.3,e/2+.01])),bf([r,J(bf(i),`#3b3640`)])}var Lf=class{scene;terrain;col;wind={value:0};keepOut=[];ruinParts=[];blossoms=[];perches=[];constructor(e,t,n){this.scene=e,this.terrain=t,this.col=n}reserve(e,t,n){this.keepOut.push({x:e,z:t,r:n})}free(e,t,n=0){return!this.keepOut.some(r=>Math.hypot(e-r.x,t-r.z)<r.r+n)}pillar(e,t,n,r=!1){let i=this.terrain.heightAt(e,t)-.1;this.ruinParts.push(Y(Pf(n,r),[e,i,t],[0,e*3.3,0])),this.col.addCyl(e,t,.6,i,i+n),this.reserve(e,t,1.6),r||this.perches.push(new z(e,i+n,t))}wall(e,t,n,r,i,a=1){let o=this.terrain.heightAt(e,t)-.25,s=.9;this.ruinParts.push(Y(Ff(n,r,s,a),[e,o,t],[0,i,0])),this.col.addBox(e,t,n/2,s/2,i,o,o+Math.round(r/.62)*.62,!0),this.reserve(e,t,n/2+1)}arch(e,t,n){let r=Math.cos(n)*2.3,i=-Math.sin(n)*2.3;this.pillar(e+r,t+i,4.6),this.pillar(e-r,t-i,4.6);let a=this.terrain.heightAt(e,t)+4.4,o=J(new oo(2.3,.42,6,14,Math.PI),Nf(3,9));this.ruinParts.push(Y(o,[e,a,t],[0,n,0]))}slab(e,t,n,r=.28){let i=this.terrain.heightAt(e,t)-.05,a=J(xf([[0,r],[n*.25,r],[n*.5,r],[n*.75,r],[n-.12,r],[n,r-.1],[n+.2,0]].reverse(),32),(e,t,n)=>n.copy(wf[0]).lerp(wf[2],ad(Math.abs(gd(e.x*.5,e.z*.5))*.9)));this.ruinParts.push(Y(a,[e,i,t])),this.col.addCyl(e,t,n,i-1,i+r)}tower(e,t,n=7,r=15){let i=this.terrain.heightAt(e,t)-.6;return this.ruinParts.push(Y(If(n,r),[e,i,t])),this.col.addBox(e,t,n/2,n/2,0,i,i+r,!0),this.reserve(e,t,n),i+r}camp(e,t,n){let r=fd(n),i=[],a=this.terrain.heightAt(e,t);for(let r=0;r<8;r++){let o=r/8*6.283;i.push(Y(jf(r+n),[e+Math.cos(o)*.8,a-.1,t+Math.sin(o)*.8],[0,o,0],.26))}for(let n=0;n<3;n++)i.push(J(Y(new Mi(.07,.07,1.1,5),[e,a+.14,t],[1.45,n*2.1,0]),`#5a4028`));for(let n=0;n<4;n++){let n=r()*6.283,a=7+r()*2.5,o=e+Math.cos(n)*a,s=t+Math.sin(n)*a,c=this.terrain.heightAt(o,s);for(let e=-2;e<=2;e++){let t=new Mi(.04,.13,1.7+r()*.5,5);i.push(J(Y(t,[o+Math.cos(n+1.571)*e*.42,c+.8,s+Math.sin(n+1.571)*e*.42],[(r()-.5)*.3,0,(r()-.5)*.3]),`#7a5a3a`))}this.col.addBox(o,s,1.1,.25,-n-1.571,c,c+1.6,!1)}let o=e+3.2,s=t-2.6,c=this.terrain.heightAt(o,s);return i.push(J(Y(new Mi(.05,.07,4.2,6),[o,c+2.1,s]),`#4a3a2c`)),i.push(J(Y(new to(1.1,1.7,2,3),[o+.6,c+3.2,s]),`#8a2f3a`)),this.ruinParts.push(...i),this.col.addCyl(e,t,.9,a-1,a+.5),this.reserve(e,t,11),new z(e,a+.35,t)}instanced(e,t,n,r=!0){if(!t.length)return;let i=Vd({vertexColors:!0,grad:`soft`,side:2});n&&(i.onBeforeCompile=e=>{e.uniforms.uWind=this.wind,e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
uniform float uWind;`).replace(`#include <begin_vertex>`,`
            vec3 transformed = vec3(position);
            #ifdef USE_INSTANCING
              float ph = instanceMatrix[3].x * 0.31 + instanceMatrix[3].z * 0.23;
              float sw = sin(uWind * 1.3 + ph) * 0.5 + sin(uWind * 2.9 + ph * 1.7) * 0.2;
              float hh = max(position.y - 1.2, 0.0);
              transformed.x += sw * 0.04 * hh; transformed.z += sw * 0.025 * hh;
              transformed += normal * sin(uWind * 3.1 + position.x * 3.0 + position.y * 4.0 + ph) * 0.03 * step(1.6, position.y);
            #endif`)});let a=new di(e,i,t.length),o=new pn;t.forEach((e,t)=>{o.position.set(e.x,e.y,e.z),o.rotation.set(0,e.rot,0),o.scale.setScalar(e.s),o.updateMatrix(),a.setMatrixAt(t,o.matrix),a.setColorAt(t,e.tint)}),a.castShadow=r,a.receiveShadow=!n,a.computeBoundingSphere(),this.scene.add(a)}scatter(){let e=fd(4242),t=this.terrain,n=new z,r=[[],[],[],[],[]],i=[],a=t=>new H().setScalar(1-t*e()).multiply(new H(1,1-.08*e(),1-.1*e())),o=(n,o,s,c)=>{let l=t.heightAt(n,o)-.15;r[s].push({x:n,y:l,z:o,s:c,rot:e()*6.283,tint:a(.18)}),this.col.addCyl(n,o,.34*c,l,l+6*c),i.push([n,o]),s===3&&this.blossoms.push(new z(n,l+4.5*c,o))};for(let[e,t,n]of[[q.islet.x-3,q.islet.z+2,1.35],[q.start.x+15,q.start.z+9,1.1],[q.ruins.x+36,q.ruins.z-14,1.2],[q.tower.x-13,q.tower.z+10,1]])o(e,t,3,n),this.reserve(e,t,3);for(let r=0;r<5200&&i.length<640;r++){let r=(e()-.5)*600,a=(e()-.5)*600;if(t.heightAt(r,a)<2||t.normalAt(r,a,n).y<.88||jd(r,a)>.02||Ed(r,a)<3.6||!this.free(r,a,2.5))continue;let s=Ad(r,a),{m2:c,m1:l}=kd(r,a),u=gd(r*.021+13,a*.021+7),d=c>.5?.1:l>.05?0:od(u>.28?.34:.05,.95,s);e()>d||i.some(e=>Math.hypot(e[0]-r,e[1]-a)<3.4)||o(r,a,c>.5||s>.3&&e()<.45?2:e()<.5?0:1,.85+e()*.55)}this.instanced(Of(3,`#3f8f3e`,`#93d65c`),r[0],!0),this.instanced(Of(8,`#4a9440`,`#b4dd62`),r[1],!0),this.instanced(kf(2),r[2],!0),this.instanced(Of(5,`#f58fb8`,`#ffe0ec`),r[3],!0);let s=[[],[]],c=[],l=[];for(let r=0;r<1500&&s[0].length+s[1].length<240;r++){let i=(e()-.5)*610,o=(e()-.5)*610,c=t.heightAt(i,o),l=t.normalAt(i,o,n).y;if(c<-1||l<.6||jd(i,o)>.02||Ed(i,o)<2.5||!this.free(i,o,2))continue;let u=l<.9||c<2.2||kd(i,o).m1>.1?.8:.1;if(e()>u)continue;let d=.45+e()**2.2*2.4;s[r%2].push({x:i,y:c-.12*d,z:o,s:d,rot:e()*6.283,tint:a(.2)}),d>1.1&&this.col.addCyl(i,o,.8*d,c-1,c+.92*d)}this.instanced(jf(1.3),s[0],!1),this.instanced(jf(5.9),s[1],!1);for(let r=0;r<4e3&&c.length<420;r++){let r=(e()-.5)*600,i=(e()-.5)*600,o=t.heightAt(r,i);o<1.8||t.normalAt(r,i,n).y<.86||jd(r,i)>.02||Ed(r,i)<2.6||!this.free(r,i,1)||e()>.12+Ad(r,i)*.5||c.push({x:r,y:o-.08,z:i,s:.7+e()*.9,rot:e()*6.283,tint:a(.2)})}this.instanced(Af(2),c,!0,!1);let u=[Cf(`#ffffff`),Cf(`#ffe27a`),Cf(`#9fd0ff`),Cf(`#ffb0d0`),Cf(`#d8b8ff`)];for(let r=0;r<3e4&&l.length<2600;r++){let r=(e()-.5)*590,i=(e()-.5)*590,a=t.heightAt(r,i);a<1.8||t.normalAt(r,i,n).y<.9||jd(r,i)>.02||Ed(r,i)<2||gd(r*.045+31,i*.045+17)<.22||l.push({x:r,y:a-.02,z:i,s:.8+e()*.7,rot:e()*6.283,tint:u[Math.floor(ad(gd(r*.02,i*.02)*.5+.5)*4.99)]})}if(this.instanced(Mf(),l,!1,!1),this.ruinParts.length){let e=new W(bf(this.ruinParts),Vd({vertexColors:!0,grad:`soft`,side:2}));e.castShadow=e.receiveShadow=!0,this.scene.add(e),this.ruinParts.length=0}}update(e){this.wind.value+=e}},Rf=(e,t)=>Math.atan2(-t,e);function zf(e,t){let n=q.ruins,r=Math.atan2(q.start.z-n.z,q.start.x-n.x);e.slab(n.x,n.z,9);for(let t=0;t<16;t++){let i=t/16*Math.PI*2,a=i-r;a=Math.atan2(Math.sin(a),Math.cos(a)),Math.abs(a)<.33||e.pillar(n.x+Math.cos(i)*27,n.z+Math.sin(i)*27,t%3==1?2.2+t%4*.5:6.2,t%3==1)}e.arch(n.x+Math.cos(r)*28.5,n.z+Math.sin(r)*28.5,Rf(-Math.sin(r),Math.cos(r))),[1.2,2.5,3.6,5].forEach((t,i)=>{let a=r+t;e.wall(n.x+Math.cos(a)*31.5,n.z+Math.sin(a)*31.5,6+i*.8,2.5+i%2*1.2,Rf(-Math.sin(a),Math.cos(a)),11+i)}),e.reserve(n.x,n.z,n.r+3);let i=q.start;e.pillar(i.x-12,i.z-8,4.4),e.pillar(i.x-15.5,i.z-4,2.3,!0),e.pillar(i.x-9,i.z-12.5,1.6,!0),e.wall(i.x-16,i.z-12,6.5,2.5,.5,3),e.reserve(i.x,i.z,9);let a=q.tower,o=e.tower(a.x,a.z);for(let t=0;t<6;t++){let n=t/6*Math.PI*2+.3;e.pillar(a.x-22+Math.cos(n)*7,a.z+6+Math.sin(n)*7,t%2?5.2:2.4,t%2==0)}e.wall(a.x+12,a.z+9,7,3.1,1.1,21);let s=new z;return[[62,98],[-38,-18],[84,-38],[176,-62],[-176,60],[38,196],[-204,-104],[200,96],[-52,110]].forEach(([n,r],i)=>{t.heightAt(n,r)<2.2||t.normalAt(n,r,s).y<.9||(e.pillar(n,r,4.8+i%3*.7),e.pillar(n+3.4,r+1.2,2+i%2,!0),i%2==0&&e.wall(n-2.5,r+4.5,5.5,2.5,i*.7,30+i),i%3==0&&e.pillar(n-3.2,r-2.6,3.4))}),{fires:[q.campA,q.campB,q.campC].map((t,n)=>e.camp(t.x,t.z,50+n)),towerTop:o,entranceAngle:r}}var Bf=Math.PI*2;function Vf(e,t,n,r,i,a){e.beginPath(),e.moveTo(t+a,n),e.arcTo(t+r,n,t+r,n+i,a),e.arcTo(t+r,n+i,t,n+i,a),e.arcTo(t,n+i,t,n,a),e.arcTo(t,n,t+r,n,a),e.closePath()}function Hf(e){for(let t=0;t<16;t++){e.save(),e.rotate(t/16*Bf);let n=t%2?.43:.48,r=e.createLinearGradient(0,-.12,0,-n);r.addColorStop(0,`#c4501a`),r.addColorStop(1,`#f8a850`),e.beginPath(),e.moveTo(0,-.11),e.quadraticCurveTo(.068,-.3,0,-n),e.quadraticCurveTo(-.068,-.3,0,-.11),e.fillStyle=r,e.fill(),e.lineWidth=.012,e.strokeStyle=`#7a3410`,e.stroke(),e.restore()}let t=e.createRadialGradient(-.03,-.05,.01,0,0,.16);t.addColorStop(0,`#ffe6a8`),t.addColorStop(.55,`#f08c2e`),t.addColorStop(1,`#b24c18`),e.beginPath(),e.ellipse(0,0,.125,.145,0,0,Bf),e.fillStyle=t,e.fill(),e.lineWidth=.014,e.strokeStyle=`#7a3410`,e.stroke(),e.fillStyle=`rgba(255,255,255,0.85)`,e.beginPath(),e.ellipse(-.04,-.06,.032,.02,-.5,0,Bf),e.fill()}function Uf(e,t=`#d9622b`){e.fillStyle=t,[.46,.35,.44,.33,.46,.37,.43,.34,.46,.36,.42,.33].forEach((t,n)=>{e.save(),e.rotate(n/12*Bf+.1*Math.sin(n*2.1)),e.beginPath(),e.moveTo(-.017,-.05),e.lineTo(-.036,-t+.03),e.quadraticCurveTo(0,-t-.022,.036,-t+.03),e.lineTo(.017,-.05),e.closePath(),e.fill(),e.restore()}),e.beginPath(),e.arc(0,0,.066,0,Bf),e.fill()}function Wf(e,t=`#f8f6ff`,n=`#5a5474`){let r=(t,n)=>{e.strokeStyle=n,e.lineWidth=t;for(let t=0;t<6;t++)e.save(),e.rotate(t/6*Bf),e.translate(0,-.17),e.rotate(Math.PI/6),Vf(e,-.255,-.135,.51,.27,.135),e.stroke(),e.restore()};r(.092,n),r(.054,t)}function Gf(e,t=`#232a5e`,n=`#eef2ff`){e.lineCap=`round`,e.strokeStyle=t,e.lineWidth=.026;for(let[t,n]of[[-.25,-.55],[-.17,0],[-.09,.55]])e.beginPath(),e.moveTo(t,-.3),e.lineTo(t+Math.sin(n)*.06,-.3-Math.cos(n)*.06),e.stroke();let r=new Path2D;r.moveTo(-.43,.03),r.bezierCurveTo(-.44,-.2,-.12,-.25,.1,-.13),r.bezierCurveTo(.2,-.08,.26,-.1,.29,-.2),r.lineTo(.36,-.17),r.bezierCurveTo(.36,0,.26,.17,.04,.2),r.bezierCurveTo(-.2,.24,-.41,.18,-.43,.03),e.fillStyle=t,e.fill(r),e.save(),e.clip(r),e.fillStyle=n,e.beginPath(),e.ellipse(-.14,.24,.36,.12,.05,0,Bf),e.fill(),e.restore();for(let[n,r]of[[-.13,-.15],[.12,-.14]])e.beginPath(),e.moveTo(.325,-.18),e.quadraticCurveTo(.325+n*.2,-.18+r*1.1,.325+n,-.18+r),e.quadraticCurveTo(.325+n*.9,-.18+r*.3,.325,-.18),e.fillStyle=t,e.fill();e.fillStyle=`#ffffff`,e.beginPath(),e.arc(-.27,-.03,.028,0,Bf),e.fill(),e.fillStyle=t,e.beginPath(),e.arc(-.275,-.03,.013,0,Bf),e.fill()}function Kf(e,t=!1){e.save(),t&&e.rotate(Math.PI/4);let n=t?.33:.4;Vf(e,-n,-n,n*2,n*2,.06),e.fillStyle=`#15151b`,e.fill(),Vf(e,-n+.04,-n+.04,n*2-.08,n*2-.08,.04),e.lineWidth=.016,e.strokeStyle=`#dfe3f0`,e.stroke(),e.restore();let r=t?.8:1;e.save(),e.scale(r,r),e.fillStyle=`#ffffff`,e.beginPath();for(let[t,n]of[[-.12,-.21],[.2,-.21],[.2,-.135],[-.06,.135],[.2,.135],[.2,.21],[-.2,.21],[-.2,.135],[.06,-.135],[-.12,-.135]])e.lineTo(t,n);e.closePath(),e.fill(),e.fillRect(-.25,-.21,.075,.075),e.restore()}function qf(e){e.strokeStyle=`#ffffff`,e.lineCap=`round`;for(let t of[-1,1]){e.lineWidth=.028,e.beginPath(),e.moveTo(t*.1,-.02),e.quadraticCurveTo(t*.23,.07,t*.36,-.02),e.stroke(),e.lineWidth=.018;for(let n=0;n<4;n++){let r=t*(.14+n*.065),i=.03-Math.abs(n-1.5)*.014;e.beginPath(),e.moveTo(r,i),e.lineTo(r+t*(n-1.5)*.012,i+.055),e.stroke()}}}function Jf(e,t=!1){t?(e.beginPath(),e.arc(0,0,.42,0,Bf),e.fillStyle=`#12142a`,e.fill(),e.lineWidth=.03,e.strokeStyle=`#c9cbe2`,e.stroke()):(Vf(e,-.38,-.44,.76,.88,.07),e.fillStyle=`#1b2052`,e.fill(),Vf(e,-.34,-.4,.68,.8,.05),e.lineWidth=.016,e.strokeStyle=`#c9cbe2`,e.stroke()),e.fillStyle=`#ffffff`,e.fillRect(-.17,-.21,.085,.42),e.beginPath();for(let[t,n]of[[-.085,-.01],[.08,-.21],[.19,-.21],[-.01,.03]])e.lineTo(t,n);e.closePath(),e.fill(),e.beginPath();for(let[t,n]of[[-.04,-.01],[.2,.21],[.09,.21],[-.085,.05]])e.lineTo(t,n);e.closePath(),e.fill(),e.fillStyle=`#2f8fff`,e.beginPath(),e.arc(.2,-.23,.05,0,Bf),e.fill()}function Yf(e){[`#ff4d4d`,`#ff9a3c`,`#ffe14a`,`#58d27a`,`#4aa3ff`,`#8a6cf0`].forEach((t,n)=>{e.fillStyle=t,e.beginPath(),e.moveTo(.02,-.04+n*.012),e.lineTo(.48,-.16+n*.045),e.lineTo(.48,-.115+n*.045),e.lineTo(.02,-.028+n*.012),e.closePath(),e.fill()}),e.beginPath(),e.moveTo(-.42,.24),e.lineTo(-.14,-.3),e.lineTo(.14,.24),e.closePath(),e.fillStyle=`#17171f`,e.fill(),e.lineWidth=.022,e.strokeStyle=`#c9cbe2`,e.lineJoin=`round`,e.stroke()}function Xf(e){e.beginPath(),e.arc(0,0,.45,0,Bf),e.fillStyle=`#d6b46c`,e.fill(),e.beginPath(),e.arc(0,0,.39,0,Bf),e.fillStyle=`#5a5ae8`,e.fill(),e.beginPath(),e.arc(0,0,.35,0,Bf),e.lineWidth=.012,e.strokeStyle=`#e8d49a`,e.stroke();let t=(t,n=0)=>{e.beginPath();for(let r=0;r<6;r++){let i=r/6*Bf+n;e.lineTo(Math.sin(i)*t,-Math.cos(i)*t)}e.closePath()};e.fillStyle=`#ffffff`,t(.27),e.fill(),e.fillStyle=`#5a5ae8`,t(.115,Math.PI/6),e.fill(),e.strokeStyle=`#5a5ae8`,e.lineWidth=.034,e.lineCap=`butt`;for(let t=0;t<3;t++){let n=t/3*Bf;e.beginPath(),e.moveTo(Math.sin(n)*.29,-Math.cos(n)*.29),e.lineTo(Math.sin(n+1.2)*.1,-Math.cos(n+1.2)*.1),e.stroke()}}function Zf(e){let t=.46,n=.36,r=new Path2D;r.moveTo(0,-.46),r.quadraticCurveTo(.055,-.055,n,0),r.quadraticCurveTo(.055,.055,0,t),r.quadraticCurveTo(-.055,.055,-.36,0),r.quadraticCurveTo(-.055,-.055,0,-.46);let i=e.createLinearGradient(-.3,-.4,.3,.4);i.addColorStop(0,`#55a4ff`),i.addColorStop(.5,`#8f6cf5`),i.addColorStop(1,`#f28ad4`),e.fillStyle=i,e.fill(r),e.save(),e.clip(r),[[0,-.46,n,0,.22,`#ffffff`],[n,0,0,t,.14,`#20104a`],[0,t,-.36,0,.2,`#ffffff`],[-.36,0,0,-.46,.1,`#20104a`]].forEach(([t,n,r,i,a,o])=>{e.globalAlpha=a,e.fillStyle=o,e.beginPath(),e.moveTo(0,0),e.lineTo(t,n),e.lineTo(r,i),e.closePath(),e.fill()}),e.restore(),e.globalAlpha=1,e.lineWidth=.028,e.strokeStyle=`#e3c16f`,e.lineJoin=`round`,e.stroke(r)}function Qf(e,t=`#e0b24c`,n=`#3a2a10`){let r=(t,n,r)=>{e.strokeStyle=r,e.lineCap=`round`,e.lineWidth=t,e.beginPath(),e.arc(0,0,.27,0,Bf),e.stroke(),e.lineWidth=n,e.beginPath(),e.moveTo(-.4,.4),e.lineTo(.42,-.42),e.stroke()};r(.115,.09,n),r(.075,.052,t)}function $f(e){e.fillStyle=`#f4f4ff`,e.beginPath(),e.arc(-.08,.04,.26,.5,.5+Math.PI*1.5),e.arc(.03,-.02,.2,.5+Math.PI*1.42,.62,!0),e.closePath(),e.fill();let t=(t,n,r)=>{e.beginPath(),e.moveTo(t,n-r),e.quadraticCurveTo(t+r*.12,n-r*.12,t+r*.8,n),e.quadraticCurveTo(t+r*.12,n+r*.12,t,n+r),e.quadraticCurveTo(t-r*.12,n+r*.12,t-r*.8,n),e.quadraticCurveTo(t-r*.12,n-r*.12,t,n-r),e.fill()};t(.28,-.26,.13),t(.34,.16,.08),t(-.34,-.32,.07),t(.1,.36,.06),t(-.3,.36,.045)}var ep=`"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", "Microsoft YaHei", sans-serif`;function tp(e,t,n){let r=document.createElement(`canvas`);r.width=r.height=256;let i=r.getContext(`2d`);i.fillStyle=n,i.beginPath(),i.arc(128,128,127,0,7),i.fill(),i.fillStyle=t,i.beginPath(),i.arc(128,128,112,0,7),i.fill(),i.translate(128,128),i.scale(190,190),e(i);let a=new Ei(r);return a.colorSpace=Ve,a.anisotropy=8,a}function np(e,t,n,r){let i=document.createElement(`canvas`);i.width=512,i.height=160;let a=i.getContext(`2d`);a.fillStyle=n,a.fillRect(0,0,512,160),a.strokeStyle=r,a.globalAlpha=.55,a.lineWidth=5,a.strokeRect(9,9,494,142),a.globalAlpha=1,t&&(a.save(),a.translate(86,80),a.scale(118,118),t(a),a.restore()),a.fillStyle=r,a.textBaseline=`middle`,a.textAlign=`center`;let o=76;a.font=`700 ${o}px ${ep}`;let s=t?330:460;for(;a.measureText(e).width>s&&o>30;)o-=4,a.font=`700 ${o}px ${ep}`;a.fillText(e,t?325:256,84);let c=new Ei(i);return c.colorSpace=Ve,c.anisotropy=8,c}var rp=class{solid=[];lit=[];signs=[];chimney=new z(0,6,0);doorPos=new z(0,0,5);boxes=[];cyls=[];add(e,t,n,r,i,a=!1){return J(Y(e,n,r,i),t),(a?this.lit:this.solid).push(e),this}box(e,t,n,r,i,a){return this.add(new G(e,t,n),r,i,a)}cyl(e,t,n,r,i,a=14){return this.add(new Mi(e,t,n,a),r,i)}glow(e,t,n,r,i,a){return this.add(new G(e,t,n),r,i,a,null,!0)}group(e,t,n){let r=this.solid.length,i=this.lit.length,a=this.signs.length;n();let o=new V().makeRotationY(t).setPosition(e[0],e[1],e[2]);for(let e of[...this.solid.slice(r),...this.lit.slice(i)])e.applyMatrix4(o);for(let e of this.signs.slice(a))e.position.applyMatrix4(o),e.rotation.y+=t}gable(e,t,n,r,i,a,o){let s=Math.atan2(n,e/2),c=e/2+r,l=c/Math.cos(s),u=.18;for(let e of[1,-1])this.box(l,u,t+r*2,i,[e*(c/2+Math.sin(s)*u*.5),o+n-c/2*Math.tan(s)+Math.cos(s)*u*.5,0],[0,0,-e*s]);this.box(.34,.22,t+r*2+.1,i,[0,o+n+.1,0]);let d=new H(i).multiplyScalar(.8),f=Math.sin(s),p=Math.cos(s);for(let e of[1,-1])for(let i=1;i<=6;i++){let a=i/6.4;this.box(.1,.07,t+r*2+.02,d,[e*(c*a+f*.19999999999999998),o+n-c*a*Math.tan(s)+p*.19999999999999998,0],[0,0,-e*s])}let m=new da([new R(-e/2,0),new R(e/2,0),new R(0,n)]);for(let e of[t/2-.2,-t/2])this.add(new Ya(m,{depth:.2,bevelEnabled:!1}),a,[0,o,e])}hip(e,t,n,r,i,a){this.add(new Ni(1,n,4,1).rotateY(Math.PI/4),i,[0,a+n/2,0],null,[(e+r*2)/1.4142,1,(t+r*2)/1.4142])}pagoda(e,t,n,r,i){this.add(xf([[1,.14],[.93,0],[.7,.15],[.42,.5],[.13,.95],[0,1]].map(([e,t])=>[e,t]),4).rotateY(Math.PI/4),r,[0,i,0],null,[e/1.4142,n,t/1.4142])}ribs(e,t,n,r,i=4){for(let a=0;a<i;a++)this.add(new oo(e,.06,5,20,Math.PI).rotateY(a/i*Math.PI),n,r,null,[1,t,1])}bush(e,t=1,n=1){let r=new H(`#3f8d3f`),i=new H(`#8fd15b`);this.solid.push(J(Y(Sf(.6,1,.14,n),e,null,[t,t*.78,t]),(n,a,o)=>o.copy(r).lerp(i,ad((n.y-e[1])/(.5*t)*.5+.4+a.y*.3))))}flowers(e,t,n=7,r=.7){for(let i=0;i<n;i++){let a=i*2.4,o=r*Math.sqrt((i+.5)/n),s=e[0]+Math.cos(a)*o,c=e[2]+Math.sin(a)*o,l=.28+i%3*.08;this.box(.03,l,.03,`#4d8f3c`,[s,e[1]+l/2,c]),this.add(new ao(.085,7,5),t[i%t.length],[s,e[1]+l+.04,c],null,[1,.7,1])}}garden(e,t,n,r=0,i=0){for(let a of[-1,1]){for(let n=0;n<3;n++)this.bush([a*(e+.9),i+.3,-t*.6+n*t*.6],.9+(n*7+(a+1)*2)%3*.15,n*3+a);this.flowers([r+a*2.3,i+.02,t+1.3],n),this.flowers([a*(e+.4),i+.02,t+.9],n,5,.5)}for(let e=0;e<4;e++)this.cyl(.42,.46,.08,`#b9b3a4`,[r+(e%2-.5)*.35,i+.05,t+1.7+e*1.05],9)}dome(e,t,n,r=1){return this.add(new ao(e,24,12,0,Math.PI*2,0,Math.PI/2),t,n,null,[1,r,1])}wedge(e,t,n,r,i){let a=new gr,o=e/2,s=t/2,c=[[-o,0,-s],[o,0,-s],[o,0,s],[-o,0,s],[o,n,s],[-o,n,s]];return a.setAttribute(`position`,new U([0,1,2,0,2,3,3,2,4,3,4,5,0,5,4,0,4,1,1,4,2,0,3,5].flatMap(e=>c[e]),3)),a.computeVertexNormals(),this.add(a,r,i)}window(e,t,n,r,i,a=`#ffe2a0`){this.group(n,r,()=>{this.box(e+.2,t+.2,.12,i,[0,0,0]),this.glow(e,t,.15,a,[0,0,0]),this.box(.07,t,.18,i,[0,0,0]),this.box(e,.07,.18,i,[0,0,0]),this.box(e+.36,.1,.26,i,[0,-t/2-.14,.05])})}door(e,t,n,r,i,a){this.group(n,r,()=>{this.box(e+.3,t+.16,.16,a,[0,t/2+.08,0]),this.box(e,t,.2,i,[0,t/2,0]),this.add(new ao(.06,8,6),`#e0b24c`,[e*.34,t*.48,.13])})}medallion(e,t,n,r,i,a){this.group(n,r,()=>{this.add(new Mi(t*1.04,t*1.04,.1,28).rotateX(Math.PI/2),a,[0,0,-.06]);let n=new W(new ji(t,32),Vd({map:tp(e,i,a),grad:`soft`}));this.signs.push(n)})}tile(e,t,n,r){let i=document.createElement(`canvas`);i.width=i.height=256;let a=i.getContext(`2d`);a.translate(128,128),a.scale(250,250),e(a);let o=new Ei(i);o.colorSpace=Ve;let s=Vd({map:o,grad:`soft`});s.alphaTest=.5,this.group(n,r,()=>this.signs.push(new W(new to(t,t),s)))}sign(e,t,n,r,i,a,o){let s=n*160/512;this.group(r,i,()=>{this.box(n+.14,s+.14,.1,o,[0,0,-.06]),this.signs.push(new W(new to(n,s),Vd({map:np(e,t,a,o),grad:`soft`})))})}lantern(e,t=`#ffd98a`){this.box(.12,1.5,.12,`#3a3340`,[e[0],e[1]+.75,e[2]]),this.glow(.28,.32,.28,t,[e[0],e[1]+1.66,e[2]]),this.box(.38,.07,.38,`#3a3340`,[e[0],e[1]+1.86,e[2]])}steps(e,t){this.box(e,.16,.5,`#a59b8c`,[0,.08,t+.25]),this.box(e+.3,.16,.5,`#a59b8c`,[0,-.06,t+.7])}};function ip(e){let t=8.4,n=6.6,r=3.3,i=.3,a=`#f3e9d6`,o=`#5a3e2a`;e.box(9.1,.7,7.3,`#a59b8c`,[0,-.05,0]),e.box(t,r,n,a,[0,1.95,0]);for(let i of[-8.4/2,t/2])for(let t of[-6.6/2,n/2])e.box(.28,r,.28,o,[i,1.95,t]);for(let r of[-6.6/2,n/2])e.box(t,.22,.22,o,[0,3.4999999999999996,r]),e.box(t,.16,.2,o,[0,1.55,r]);for(let r of[-8.4/2,t/2])e.box(.22,.22,n,o,[r,3.4999999999999996,0]);for(let t of[-1,1])e.box(.14,2.3,.2,o,[t*3.45,2.5999999999999996,n/2],[0,0,t*.5]);e.gable(t,n,2.9,.6,`#d8693a`,a,3.5999999999999996),e.door(1.15,2.1,[0,i,n/2],0,`#7a4a2a`,o);for(let t of[-2.5,2.5])e.window(1.1,1.2,[t,2.3499999999999996,3.32],0,o);for(let t of[-1,1])for(let n of[-1.5,1.5])e.window(1,1.1,[t*4.22,2.3,n],t*Math.PI/2,o);e.box(.85,2.7,.85,`#b05a3c`,[2.4,5.6,-1.5]),e.box(1,.2,1,`#8a4630`,[2.4,7,-1.5]),e.chimney.set(2.4,7.3,-1.5),e.medallion(Hf,.82,[0,4.8,3.38],0,`#fff6e6`,`#d9a441`),e.sign(`Anthropic`,e=>Uf(e),2.7,[0,2.92,3.5],0,`#6a4630`,`#ffe9c8`),[[`#c8323c`,0],[`#2f6fb8`,.25],[`#e0b24c`,-.18],[`#3f8f5a`,.1]].forEach(([t,n],r)=>e.box(.62,.15,.46,t,[-1.7,.375+r*.15,4],[0,n,0]));for(let t of[-1,1])e.lantern([t*1.25,i,3.6999999999999997]);e.steps(1.8,3.65),e.garden(t/2,n/2,[`#ff8a3c`,`#ffd24a`,`#ffffff`]),e.boxes.push([0,0,t/2,n/2,5.1]),e.doorPos.set(0,0,5.3)}function ap(e){let t=4.4,n=.3,r=`#f6f5fb`,i=`#cbc3ee`,a=`#b8b5cf`;e.cyl(4.800000000000001,4.9,.7,`#b9b6c9`,[0,-.05,0],32),e.cyl(t,t,3.2,r,[0,1.9000000000000001,0],32),e.cyl(4.5200000000000005,4.5200000000000005,.3,i,[0,3.4,0],32),e.cyl(4.48,4.48,.2,i,[0,.8999999999999999,0],32),e.dome(4.5,`#f1eff8`,[0,3.55,0],.82),e.ribs(4.53,.82,i,[0,3.55,0],4),e.cyl(1,1,.7,r,[0,7.3,0],18),e.dome(1.06,i,[0,7.65,0],.9),e.cyl(.045,.045,1.5,a,[0,9.2,0],6),e.add(new ao(.17,10,8),`#f1edff`,[0,10,0],null,null,!0),e.chimney.set(0,10.3,0),e.box(2.7,3,1.2,r,[0,1.8,4.5]),e.box(3,.26,1.5,i,[0,3.4,4.550000000000001]),e.door(1.2,2.2,[0,n,5.1000000000000005],0,`#8f88b8`,a),e.box(1.9,1.75,1.5,r,[0,4.3999999999999995,4.1000000000000005]),e.box(2.2,.18,1.7,i,[0,5.35,4.15]),e.medallion(e=>Wf(e),.72,[0,4.3999999999999995,4.92],0,`#3d3a52`,a),e.sign(`OpenAI`,e=>Wf(e,`#3d3a52`,`#3d3a52`),2.3,[0,2.94,5.16],0,`#f6f5fb`,`#3d3a52`);for(let t=1;t<8;t++){let n=t/8*Math.PI*2;e.window(.9,1.3,[Math.sin(n)*4.42,2.25,Math.cos(n)*4.42],n,a,`#e9e4ff`)}for(let t of[-1,1])e.lantern([t*1.7,n,5.6000000000000005],`#e9e4ff`);e.steps(2,5.15),e.garden(t,5.15,[`#cbc3ee`,`#ffffff`,`#9fd0ff`]),e.cyls.push([0,0,4.7,6]),e.doorPos.set(0,0,7)}function op(e){let t=7.6,n=.3,r=`#2c3f8f`,i=`#3f66cc`,a=`#f4f7ff`;e.box(8.299999999999999,.7,6.7,`#9aa3b8`,[0,-.05,0]),e.box(t,3,6,r,[0,1.8,0]);for(let n of[-7.6/2,t/2])for(let t of[-3,3])e.box(.26,3,.26,a,[n,1.8,t]);for(let r of[.9,1.7,2.5])for(let i of[-3,3])e.box(t,.05,.06,`#3a52a8`,[0,n+r,i+Math.sign(i)*.02]);e.box(7.699999999999999,.2,6.1,a,[0,3.3-.1,0]),e.gable(t,6,2.4,.55,i,r,3.3),e.door(1.1,2.1,[0,n,3],0,a,`#3a52a8`);for(let t of[-2.4,2.4])e.window(1.1,1.2,[t,2.1999999999999997,3.02],0,a,`#bfe6ff`);for(let t of[-1.4,1.4])e.window(1,1.1,[-3.82,2.1999999999999997,t],-Math.PI/2,a,`#bfe6ff`);e.medallion(e=>Gf(e),.8,[0,4.35,3.08],0,`#ffffff`,i),e.sign(`DeepSeek`,e=>Gf(e,`#ffffff`,`#bfd4ff`),2.7,[0,2.92,3.2],0,`#232a5e`,`#ffffff`);let o=5.3,s=-.8;e.cyl(1.3,1.6,8.6,a,[o,4.6,s],20);for(let t of[1.6,4.2,6.8])e.cyl(1.31+(8.6-t-.45)*.035+.02,1.31+(8.6-t+.45)*.035+.02,.9,i,[o,n+t,s],20);e.cyl(1.75,1.75,.2,r,[o,9,s],20),e.add(new Mi(.95,.95,1.2,14),`#fff3b0`,[o,9.700000000000001,s],null,null,!0),e.add(new Ni(1.35,1.3,14),r,[o,10.950000000000001,s]),e.chimney.set(o,11.700000000000001,s),e.box(9,.18,1.7,`#8a6a48`,[9.2,.3,2.3]);for(let t=0;t<5;t++)for(let n of[-1,1])e.cyl(.12,.12,4.8,`#6a5038`,[5.4+t*1.9,-1.7,2.3+n*.75],6);e.add(new ao(1,14,8,0,Math.PI*2,Math.PI/2,Math.PI/2),`#8a5a34`,[12.399999999999999,-1.3,4],[0,.25,0],[1.6,.6,.62]),e.box(.9,.06,1,`#c9a06a`,[12.399999999999999,-1.42,4],[0,.25,0]),e.garden(t/2,3,[`#ffffff`,`#9fd0ff`,`#58b0ff`]);for(let t of[-1,1])e.lantern([t*1.2,n,3.4],`#bfe6ff`);e.steps(1.8,3.35),e.boxes.push([0,0,t/2,3,4.6],[9.2,2.3,4.5,.85,.4]),e.cyls.push([o,s,1.7,9.3]),e.doorPos.set(0,0,5)}function sp(e){let t=.3,n=`#f2f2f5`,r=`#1c1c22`,i=`#8d8d9b`,a=`#9fc0ff`;e.box(9,.7,7.4,`#9a9aa6`,[0,-.05,0]),e.box(8,3.2,6.4,n,[0,1.9000000000000001,0]);for(let t of[-4,-1.4,1.4,4])for(let n of[-3.2,3.2])e.box(.24,3.2,.24,r,[t,1.9000000000000001,n]);e.box(8.1,.2,6.5,r,[0,.8,0]),e.box(9.6,.3,8,r,[0,3.65,0]),e.box(9.7,.08,8.1,n,[0,3.46,0]),e.box(5,2.5,4,r,[0,5.05,0]),e.box(6.4,.28,5.4,r,[0,6.4399999999999995,0]),e.box(6.5,.08,5.5,n,[0,6.26,0]),e.tile(e=>Kf(e),1.9,[0,5.05,2.03],0),e.door(1.7,2.3,[0,t,3.2],0,r,i);for(let t of[-.42,.42])e.box(.05,2.1,.24,n,[t,1.45,3.2]);for(let t of[-2.7,2.7])e.window(.8,1.9,[t,2.05,3.22],0,r,a);for(let t of[-1,1])for(let n of[-1.5,1.5])e.window(.8,1.9,[t*4.02,2.05,n],t*Math.PI/2,r,a);e.sign(`즈푸 Z.ai`,null,2.6,[0,3.0799999999999996,3.32],0,`#15151b`,`#ffffff`);for(let t of[-1,1])e.cyl(.17,.2,3.6,r,[t*1.9,1.8,6.4],10);e.box(5,.24,.34,r,[0,3.55,6.4]),e.box(5.3,.1,.4,n,[0,3.72,6.4]),e.box(4.2,.18,.26,r,[0,2.95,6.4]);for(let t of[-1,1]){e.box(.75,.5,.75,i,[t*2.9,.25,5.2]),e.add(new ao(1,10,8),n,[t*2.9,.92,5.15],null,[.26,.42,.32]),e.add(new ao(.2,10,8),n,[t*2.9,1.48,5.3]),e.add(new Ni(.1,.2,5),n,[t*2.9,1.42,5.5],[1.57,0,0]);for(let n of[-1,1])e.add(new Ni(.08,.24,4),r,[t*2.9+n*.11,1.72,5.25]);e.add(new ao(1,8,6),n,[t*2.9,.86,4.8],[.6,0,0],[.13,.36,.13])}for(let n of[-1,1])e.lantern([n*1.4,t,3.7],`#cfe0ff`);e.steps(2.2,3.55),e.chimney.set(0,6.8999999999999995,0),e.garden(4,3.2,[`#ffffff`,`#cfd4e6`,`#9fc0ff`]),e.boxes.push([0,0,4,3.2,5.3]),e.cyls.push([1.9,6.4,.25,3.6],[-1.9,6.4,.25,3.6],[2.9,5.2,.45,1.7],[-2.9,5.2,.45,1.7]),e.doorPos.set(0,0,4.9)}function cp(e){let t=.3,n=`#252a66`,r=`#c9cbe2`,i=3.3;e.cyl(3.8,3.9,.7,`#8f93b4`,[0,-.05,0],28),e.cyl(i,3.4499999999999997,5.2,n,[0,2.9,0],28);for(let n of[.5,2.9,5.1000000000000005])e.cyl(3.44,3.44,.2,r,[0,t+n,0],28);e.dome(3.36,r,[0,5.5,0],.95),e.ribs(3.3899999999999997,.95,`#a9acc8`,[0,5.5,0],3),e.box(.95,2.6,2.2,`#20203a`,[0,7.25,1.75],[-.72,0,0]),e.add(new Mi(.26,.3,2.8,12),`#3a3f6e`,[0,7.9,2.1],[-.85,0,0]),e.add(new Mi(.25,.25,.08,12),`#bfe6ff`,[0,8.84,3.16],[-.85,0,0],null,!0),e.add(new oo(.62,.1,6,20,4).rotateZ(.95),`#ffe9a0`,[0,8.8+.8,0],null,null,!0),e.cyl(.04,.04,.5,r,[0,8.9,0],6),e.chimney.set(0,10.5,0),e.box(1.9,2.7,.9,n,[0,1.6500000000000001,3.5]),e.box(2.2,.22,1.2,r,[0,3.0999999999999996,3.55]),e.door(1.1,2.1,[0,t,3.96],0,`#3a3f8a`,r),e.medallion(e=>Jf(e,!0),.7,[0,4.05,3.42],0,`#12142a`,r);for(let t of[1.15,-1.15,2.2,-2.2])e.tile($f,1.7,[Math.sin(t)*3.44,4.2,Math.cos(t)*3.44],t);for(let t of[.8,-.8,2.4,-2.4,Math.PI])e.window(.7,1,[Math.sin(t)*3.4,2.1,Math.cos(t)*3.4],t,r,`#dfe9ff`);e.box(4,2.8,4,n,[-4.9,1.7,.4]),e.group([-4.9,0,.4],0,()=>e.gable(4,4,1.7,.4,`#3a3f8a`,n,3.0999999999999996)),e.window(1,1.1,[-4.9,2,2.42],0,r,`#dfe9ff`),e.sign(`Moonshot AI`,e=>Jf(e,!0),2.5,[-4.9,3.3499999999999996,2.5],0,`#1b2052`,`#e6e9ff`);for(let n of[-1,1])e.lantern([n*1.4,t,4.5],`#dfe9ff`);e.steps(1.7,4),e.garden(i,4,[`#bfe0ff`,`#ffe9a0`,`#ffffff`]),e.cyls.push([0,0,3.5999999999999996,7.5]),e.boxes.push([-4.9,.4,2,2,3.9]),e.doorPos.set(0,0,5.8)}function lp(e){let t=3.1,n=`#f7f3ff`,r=`#6257cf`,i=`#3a3390`,a=`#d6b46c`;e.box(10,1,10,`#b9b3c8`,[0,.05,0]),e.box(7,t,7,n,[0,2.1,0]);for(let[n,r]of[[-4.1,-4.1],[-1.9,-4.1],[1.9,-4.1],[4.1,-4.1],[-4.1,4.1],[-1.9,4.1],[1.9,4.1],[4.1,4.1],[-4.1,0],[4.1,0]])e.cyl(.2,.22,t,i,[n,2.1,r],10);e.box(7.1,.24,7.1,a,[0,3.5100000000000002,0]),e.pagoda(10.6,10.6,2.1,r,3.6500000000000004);for(let t of[-1,1])for(let n of[-1,1])e.add(new ao(.16,8,6),a,[t*5.25,4.010000000000001,n*5.25]);e.box(4,1.6,4,n,[0,5.95,0]),e.box(4.1,.18,4.1,a,[0,6.65,0]),e.pagoda(6.4,6.4,2.2,r,6.7),e.add(new ao(.26,10,8),a,[0,9.05,0]),e.add(new Ni(.1,.8,6),a,[0,9.600000000000001,0]),e.chimney.set(0,10.25,0),e.add(new oo(1.15,.11,6,28),a,[0,1.85,3.55]),e.add(new ji(1.1,28),`#3a3390`,[0,1.85,3.53]),e.box(.06,2.1,.06,a,[0,1.85,3.56]);for(let t of[-2.5,2.5])e.window(1,1.5,[t,2.25,3.52],0,i,`#ffe6b0`);for(let t of[-1,1])for(let n of[-1.7,1.7])e.window(1,1.5,[t*3.52,2.25,n],t*Math.PI/2,i,`#ffe6b0`);e.medallion(Xf,.72,[0,5.95,2.08],0,`#5a5ae8`,a),e.sign(`알리바바 클라우드 · 통이`,Xf,3.1,[0,3.41,4.1],0,`#3a3390`,`#f3e3b0`);for(let t of[-1,1])e.box(.03,.5,.03,a,[t*3.2,3.1500000000000004,4.6]),e.add(new ao(.22,10,8),`#d9a6ff`,[t*3.2,2.7500000000000004,4.6],null,[1,1.25,1],!0);e.box(2.4,.3,.6,`#a59bbc`,[0,.4,5.25]),e.box(2.8,.3,.6,`#a59bbc`,[0,.12,5.8]),e.garden(5,5.2,[`#d9a6ff`,`#f3e3b0`,`#ffffff`]),e.boxes.push([0,0,5,5,.55],[0,0,7/2,7/2,6.65]),e.doorPos.set(0,.5,6.7)}function up(e){let t=.3,n=7.6,r=`#fafafa`,i=`#4285f4`,a=`#ea4335`,o=`#fbbc05`,s=`#34a853`;e.box(8.299999999999999,.7,6.7,`#b4b8c4`,[0,-.05,0]),e.box(n,3.3,6,r,[0,1.95,0]),e.wedge(n,6,1.5,r,[0,3.5999999999999996,0]),e.box(8.7,.22,7.3,`#6b7cf0`,[0,4.46,0],[-.245,0,0]),e.box(8.7,.1,.3,`#8f6cf5`,[0,5.319999999999999,3.62]);for(let t of[-1,1])e.add(new Ni(.85,1.7,4),`#5560e0`,[t*2,6,2.5],[0,Math.PI/4,0],[1,1,.45]),e.add(new Ni(.55,1.15,4),`#ffb0c8`,[t*2,5.85,2.68],[0,Math.PI/4,0],[1,1,.3]);[i,a,o,s].forEach((t,r)=>e.box(n/4,.26,.08,t,[-2.8499999999999996+r*n/4,3.4699999999999998,3.03])),[i,a,o,s].forEach((t,r)=>e.box(n/4,.2,.08,t,[-2.8499999999999996+r*n/4,.8,3.03])),e.door(1.15,2.15,[1.4,t,3],0,i,`#d0d4de`),e.box(2,.14,1,a,[1.4,2.8,3.5],[.16,0,0]),e.window(1.7,1.3,[-1.9,2.05,3.02],0,o,`#eaf3ff`);for(let t of[-1,1])e.window(1.2,1.2,[t*3.82,2.1,0],t*Math.PI/2,o,`#eaf3ff`);e.box(2,.4,.5,s,[-1.9,1.05,3.3]);for(let t=0;t<4;t++)e.add(new ao(.17,8,6),[a,o,i,`#ffffff`][t],[-2.6+t*.47,1.35,3.3]);e.tile(Zf,1.9,[-1.6,4.1499999999999995,3.04],0),e.sign(`Google`,Zf,2.3,[1.4,3.3499999999999996,3.1],0,`#ffffff`,`#3c4043`),e.cyl(.04,.04,1.8,`#d0d4de`,[n/2-.6,4.8999999999999995,-2.4],6),e.add(new eo(.3),`#aee6ff`,[n/2-.6,6,-2.4],null,[1,1.5,.4],!0),e.chimney.set(n/2-.6,6.6,-2.4);for(let[t,n]of[[-3.5,i],[-3,a],[3.2,o],[3.7,s]])e.box(.4,.4,.4,n,[t,.5,3.9],[0,t,0]);e.lantern([.2,t,3.4],`#eaf3ff`),e.steps(1.8,3.35),e.garden(n/2,3,[`#ea4335`,`#fbbc05`,`#4285f4`,`#34a853`],1.4),e.boxes.push([0,0,n/2,3,4.6]),e.doorPos.set(1.4,0,5)}function dp(e){let t=.3,n=6.6,r=3.8,i=`#2a262e`,a=`#1a161e`,o=`#d4a84a`,s=`#ff4a4a`;e.box(7.3999999999999995,.7,6.8,`#3a3640`,[0,-.05,0]),e.box(n,r,6,i,[0,2.1999999999999997,0]);for(let n of[.45,3.6799999999999997])e.box(6.72,.16,6.12,o,[0,t+n,0]);for(let t of[-6.6/2,n/2])for(let n of[-3,3])e.box(.4,r,.4,a,[t,2.1999999999999997,n]);e.gable(n,6,4.4,.4,a,i,4.1),e.box(.12,.12,6.9,o,[0,4.1+4.62,0]);for(let t of[3.4,-3.4])e.add(new Ni(.12,.9,5),o,[0,9.2,t]);let c=(t,n,r,i)=>e.group(t,n,()=>{e.box(r+.2,i+.1,.12,o,[0,0,0]),e.add(new G((r+.2)*.7071,(r+.2)*.7071,.12),o,[0,i/2+.05,0],[0,0,Math.PI/4]),e.glow(r,i,.15,s,[0,0,0]),e.add(new G(r*.7071,r*.7071,.15),s,[0,i/2,0],[0,0,Math.PI/4],null,!0),e.box(.06,i+r*.5,.18,a,[0,r*.2,0])});for(let e of[-2,2])c([e,2.3,3.02],0,.7,1.6);for(let e of[-1.5,1.5])c([3.32,2.3,e],Math.PI/2,.7,1.6);e.door(1.3,2.4,[0,t,3],0,a,o),e.add(new G(1.13,1.13,.16),o,[0,2.75,3],[0,0,Math.PI/4]),e.medallion(e=>Qf(e),.84,[0,5.75,3.08],0,`#141016`,o),e.sign(`xAI`,e=>Qf(e),2,[0,3.5999999999999996,3.2],0,`#141016`,`#e0b24c`);let l=-6.6/2-.9,u=1.8;e.box(2.6,9.6,2.6,i,[l,5.1,u]);for(let n of[3.2,6.4,9.5])e.box(2.74,.16,2.74,o,[l,t+n,u]);e.group([l,0,u],0,()=>e.hip(2.6,2.6,4.4,.25,a,9.9)),e.add(new Ni(.1,1,5),o,[l,14.700000000000001,u]),c([l,7.8999999999999995,3.12],0,.6,1.4),c([l,4.7,3.12],0,.6,1.4),e.chimney.set(l,15.5,u);for(let t=-6;t<=6;t++)Math.abs(t)>1&&(e.cyl(.035,.035,1.1,a,[t*.55,.55,5.6],5),e.add(new Ni(.07,.22,4),o,[t*.55,1.2,5.6]));for(let n of[-1,1])e.box(2.75,.06,.06,a,[n*2.2,.85,5.6]),e.lantern([n*1.2,t,3.4],`#ff8a6a`);e.steps(2,3.35),e.garden(n/2,3,[`#c01838`,`#e0b24c`,`#7a1028`]),e.boxes.push([0,0,n/2,3,6.3],[l,u,1.35,1.35,9.9]),e.doorPos.set(0,0,4.8)}var fp={claude:{build:ip,color:`#ff8a3c`,home:`책방`},gpt:{build:ap,color:`#e9e4fb`,home:`돔 하우스`},deepseek:{build:op,color:`#58b0ff`,home:`호숫가 등대 집`},glm:{build:sp,color:`#cfd4e6`,home:`네모난 집`},kimi:{build:cp,color:`#bfe0ff`,home:`천문대`},qwen:{build:lp,color:`#9a8cff`,home:`누각`},gemini:{build:up,color:`#d59bff`,home:`작업실`},grok:{build:dp,color:`#ffd23e`,home:`첨탑 집`}},pp=class{list=[];glowMat=new Or({vertexColors:!0,toneMapped:!1});constructor(e,t,n){let r=Vd({vertexColors:!0,grad:`soft`,side:2});bd.forEach((i,a)=>{let o=fp[i.id],s=new rp,c=Id(a),l=Math.cos(i.yaw),u=Math.sin(i.yaw);o.build(s);let d=e=>new z(i.x+e.x*l+e.z*u,c+e.y,i.z-e.x*u+e.z*l),f=new mn;f.position.set(i.x,c,i.z),f.rotation.y=i.yaw;let p=new W(bf(s.solid),r);p.castShadow=!0,f.add(p),s.lit.length&&f.add(new W(bf(s.lit),this.glowMat));for(let e of s.signs)f.add(e);e.add(f),f.updateMatrixWorld(!0);for(let[e,n,r,a,o]of s.boxes){let s=d(new z(e,0,n));t.addBox(s.x,s.z,r,a,i.yaw,c-2,c+o,!1)}for(let[e,n,r,i]of s.cyls){let a=d(new z(e,0,n));t.addCyl(a.x,a.z,r,c-2,c+i)}n(i.x,i.z,15),this.list.push({id:i.id,company:i.company,home:o.home,color:o.color,pos:new z(i.x,c,i.z),door:d(s.doorPos),chimney:d(s.chimney)})})}update(e){this.glowMat.color.setScalar(.72+e*1.1)}},mp=`"Malgun Gothic", "Apple SD Gothic Neo", "Noto Sans KR", "Microsoft YaHei", sans-serif`,hp=`Consolas, "Courier New", monospace`,gp={uTime:{value:0},uNight:{value:0}};function _p(e,t,n={},r={}){let i=mo.merge([K.fog]);return Object.assign(i,gp,n),new _o({uniforms:i,vertexShader:e,fragmentShader:t,fog:!0,...r})}var vp=()=>_p(`
  attribute vec3 color; attribute float aPhase; uniform float uTime; varying vec3 vC;
  #include <fog_pars_vertex>
  void main() {
    float on = step(0.3, fract(uTime * (0.5 + fract(aPhase * 7.31) * 1.7) + aPhase * 13.0));
    vC = color * (0.3 + 1.5 * on);
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }`,`
  varying vec3 vC;
  #include <fog_pars_fragment>
  void main() {
    gl_FragColor = vec4(vC, 1.0);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`),yp=e=>_p(`
  attribute float aU; varying float vU;
  #include <fog_pars_vertex>
  void main() {
    vU = aU;
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    #include <fog_vertex>
  }`,`
  uniform float uTime, uNight; uniform vec3 uColor; varying float vU;
  #include <fog_pars_fragment>
  void main() {
    float pulse = pow(max(0.0, sin(vU * 0.2 - uTime * 2.4)), 16.0);
    gl_FragColor = vec4(uColor * (0.5 + uNight * 0.8 + pulse * 2.2), 1.0);
    #include <colorspace_fragment>
    #include <fog_fragment>
  }`,{uColor:{value:new H(e)}},{side:2,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});function bp(e,t,n,r,i,a){let o=new G(e,t,n).toNonIndexed();return o.deleteAttribute(`uv`),J(Y(o,i),r),o.setAttribute(`aPhase`,new nr(new Float32Array(o.attributes.position.count).fill(a),1)),o}function xp(e,t,n){let r=document.createElement(`canvas`);r.width=e,r.height=t,n(r.getContext(`2d`));let i=new Ei(r);return i.colorSpace=Ve,i.anisotropy=8,i}var Sp=13,Cp=5.6,wp=3.6999999999999997,Tp=6.5,Ep=[-4.15,0,4.15],Dp=1.95;function Op(e){let t=[],n=[],r=(e,n,r,i)=>t.push(J(Y(e,r,i),n)),i=(e,t,r,i)=>n.push(J(Y(e,r,i),t));r(new G(9.86,.16,1.9),`#3a3d4a`,[-1.2,.08,-.5]),r(new G(Sp*.72,.62,1.3),`#22242c`,[-1.2,.36,-.5]),r(new G(.55,1.1,1.3),`#565b6e`,[3.76,.55,-.5]),r(new G(Sp*.64,.7,.12),`#e0b24c`,[-1.2,.7,-.5]);for(let e=0;e<34;e++)r(new G(.07,.7,.15),`#7a5c1c`,[-1.2-Sp*.31+e*(Sp*.62/33),.7,-.5]);r(new G(Sp,Cp,.14),`#143a2c`,[0,wp,-.5]),r(new G(Sp,Cp,.1),`#2b2e3a`,[0,wp,-.68]);for(let t of[-1.9,1.9])i(new G(Sp*.8,.07,.04),e,[0,wp+t,-.745]);for(let e=0;e<7;e++)r(new G(.5,.16,.05),`#1a1c24`,[Sp/2-1.2-e*.75,1.2999999999999998,-.74]);for(let e=0;e<52;e++)r(new G(.06,Cp*.86,.86),`#aab2c2`,[-6+e*12/51,wp,.02]);for(let e of[-.24,.04,.3])r(new Mi(.1,.1,12.3,8).rotateZ(Math.PI/2),`#c87a4a`,[0,6.28,e]);let a=new da,o=Sp/2,s=Cp/2;a.moveTo(-6.5,-2.8),a.lineTo(5.6,-2.8),a.lineTo(o,-1.9),a.lineTo(o,s),a.lineTo(-5.6,s),a.lineTo(-6.5,1.9),a.closePath();for(let e of Ep){let t=new ua;t.absarc(e,0,Dp,0,Math.PI*2,!0),a.holes.push(t)}r(new Ya(a,{depth:.34,bevelEnabled:!0,bevelSize:.05,bevelThickness:.05,bevelSegments:1,curveSegments:32}),(e,t,n)=>n.set(t.z>.5?`#262932`:`#1b1d24`),[0,wp,.5]);for(let e of[-1,1])r(new G(Sp,.14,1.1),`#1b1d24`,[0,wp+e*(Cp/2-.07),0]);r(new G(.14,Cp,1.1),`#1b1d24`,[Sp/2-.07,wp,0]);for(let t of Ep)i(new oo(1.97,.06,6,44),e,[t,wp,.9]);for(let t of[-2.075,2.075])for(let n of[-1,1])i(new G(.07,1.1,.05),e,[t,wp+n*2,.9],[0,0,n*.5]);i(new G(Sp*.84,.13,.16),(e,t,n)=>{n.setHSL(ad(e.x/(Sp*.84)+.5)*.85,1,.56).multiplyScalar(1.5)},[0,6.53,.66]),r(new G(.12,6.6,1.75),`#c2c6d2`,[-13/2-.06,3.4499999999999997,.05]);for(let e of[1.7,.75,-.2])r(new G(.16,.42,1.05),`#15161b`,[-13/2-.08,wp+e,.05]);for(let e=0;e<6;e++)r(new G(.16,.08,1.2),`#6a6e7c`,[-13/2-.08,2.6999999999999997-e*.2,.05]);let c=Sp/2-2.4;return r(new G(1.5,.5,.75),`#15161a`,[c,6.72,-.1]),[`#18191e`,`#e0b24c`,`#18191e`].forEach((e,t)=>{let n=(t-1)*.42,i=new Wi([new z(c+n,6.9,-.1),new z(c+n,8,-1),new z(c+n*1.6,Tp*.55,-2.5),new z(c+n*2.2,.25,-3.5),new z(c+n*2.3,-.8,-3.75)]);r(new so(i,28,.12,7),e)}),{solid:bf(t),lit:bf(n)}}function kp(){let e=[];e.push(J(new Mi(.56,.56,.3,22).rotateX(Math.PI/2),`#2a2d38`)),e.push(J(Y(new Mi(.34,.34,.04,18).rotateX(Math.PI/2),[0,0,.16]),`#c2c6d2`));for(let t=0;t<9;t++)e.push(J(Y(new G(1.32,.56,.035),[1.15,0,0],[.5,0,0]).rotateZ(t/9*Math.PI*2),`#454b5c`));return e.push(J(new oo(1.82,.05,5,40),`#3a3f4c`)),bf(e)}var Ap=[`#5dff9a`,`#5dff9a`,`#ffc24a`,`#5ab8ff`,`#ff5a5a`];function jp(e,t,n,r){let i=[],a=[],o=new H(`#5d8a4e`);i.push(J(Y(new G(1.15,2.3,1),[0,1.15,0]),(e,t,n)=>{n.set(`#23262e`).lerp(o,ad(1-e.y/1.5)**2*.6)})),i.push(J(Y(new G(.95,.05,.8),[0,2.33,0]),`#343844`));for(let t=0;t<10;t++){let n=.24+t*.2;if(e()<.2){i.push(J(Y(new G(1,.17,.03),[0,n,.49]),`#0e0f13`));continue}i.push(J(Y(new G(1,.17,.05),[0,n,.51]),e()<.5?`#3a3f4c`:`#444a58`)),i.push(J(Y(new G(.34,.09,.03),[.26,n,.545]),`#1c1e25`));let r=1+Math.floor(e()*3);for(let t=0;t<r;t++)a.push(bp(.05,.05,.03,Ap[Math.floor(e()*Ap.length)],[-.4+t*.1,n,.55],e()))}for(let e of i)t.push(e.applyMatrix4(r));for(let e of a)n.push(e.applyMatrix4(r))}function Mp(e){let t=[],n=[],r=[],i=new z(0,1,0),a=new _t,o=(s,c,l,u,d,f)=>{let p=s.clone().addScaledVector(c,l),m=new Mi(u*.72,u,l,8).translate(0,l/2,0);if(m.applyQuaternion(a.setFromUnitVectors(i,c)).translate(s.x,s.y,s.z),t.push(J(m,(e,t,n)=>n.set(`#eef1f7`).lerp(new H(`#b9c2d6`),ad(1-e.y/9)))),t.push(J(Y(new ao(Math.max(.1,u*1.45),10,8),[p.x,p.y,p.z]),`#e0b24c`)),d===5){let t=p.clone().addScaledVector(c,.3);r.push(t),n.push(bp(.34,.34,.34,e()<.6?`#7dffb0`:`#8fe8ff`,[t.x,t.y,t.z],e()));for(let r=0;r<2;r++)n.push(bp(.18,.18,.18,`#c8ffe0`,[t.x+(e()-.5)*.7,t.y+(e()-.5)*.6,t.z+(e()-.5)*.7],e()))}else for(let e of[-1,1]){let t=c.clone().applyAxisAngle(f,e*(.52+d*.03));t.y+=.22,t.normalize(),o(p,t,l*.74,u*.7,d+1,new z().crossVectors(t,f).normalize())}};return o(new z(0,-.3,0),i,3.7,.32,0,new z(0,0,1)),t.push(J(Y(new Mi(1.5,1.7,.3,8),[0,.1,0]),`#b9b3a4`)),{solid:bf(t),leaves:lf(n),tips:r}}var Np=class{scene;terrain;col;reserve;fans=[];vents=[];solid=[];leds=[];_v=new z;_w=new z;lampMat=qd(`#ffffff`,1,!0);poolMat=new Or({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,toneMapped:!1,polygonOffset:!0,polygonOffsetFactor:-3,polygonOffsetUnits:-3});constructor(e,t,n,r){this.scene=e,this.terrain=t,this.col=n,this.reserve=r,this.buildGpus(),this.buildDatacenter(),this.buildTree(-22,84),this.buildTraces(),this.buildLamps(),this.signpost(-3.5,69,[[`Anthropic`,16,14],[`연산력 고지`,4,-42],[`글리치 야영지`,-20,-20],[`망각의 문`,-28,32]]),this.signpost(1,33.5,[[`데이터 호수`,26,3],[`연산력 고지`,-6,-50]]),this.signpost(27.5,29.5,[[`DeepSeek`,31,-11],[`Moonshot AI`,14,-43]]),this.signpost(-71,33.5,[[`xAI`,-34,32],[`즈푸 Z.ai`,-38,-24],[`랜덤 포레스트`,-38,-30]]),this.signpost(-25,106,[[`Google`,4,24],[`망각의 문`,-36,32]]),this.signpost(33,103,[[`알리바바 클라우드 · 통이`,18,26]]);let i=new W(bf(this.solid),Vd({vertexColors:!0,grad:`soft`,side:2}));i.castShadow=i.receiveShadow=!0,e.add(i),e.add(new W(lf(this.leds),vp())),this.solid.length=this.leds.length=0}buildGpus(){let e=kp(),t=Vd({vertexColors:!0,grad:`soft`,side:2}),n=Vd({vertexColors:!0,grad:`soft`,side:2}),r=[`#7dffb0`,`#8fd8ff`,`#ff8ad0`];xd.forEach((i,a)=>{let o=this.terrain.heightAt(i.x,i.z)-.05,s=new mn,c=Op(r[a]);s.position.set(i.x,o,i.z),s.rotation.y=i.yaw;let l=new W(c.solid,n);l.castShadow=l.receiveShadow=!0,s.add(l,new W(c.lit,qd(`#ffffff`,1.25,!0))),Ep.forEach((n,r)=>{let i=new W(e,t);i.position.set(n,wp,.64),i.userData.speed=5+(a*3+r)%3*1.6,i.castShadow=!0,s.add(i),this.fans.push(i)});let u=xp(768,192,e=>{e.fillStyle=`#2b2e3a`,e.fillRect(0,0,768,192),e.fillStyle=`#d5dae6`,e.textBaseline=`middle`,e.font=`700 104px ${hp}`,e.fillText(`GPU-${a}`,24,78),e.font=`600 40px ${hp}`,e.fillStyle=`#8f97aa`,e.fillText(`VRAM 24 GB · 450 W · 연산력 충분`,28,158)}),d=new W(new to(6.4,1.6),Vd({map:u,grad:`soft`}));d.position.set(-1.6,4.3,-.74),d.rotation.y=Math.PI,s.add(d),this.scene.add(s),this.col.addBox(i.x,i.z,6.6,.95,i.yaw,o-3,o+Tp,!0),this.reserve(i.x,i.z,9);let f=new z(Math.sin(i.yaw),0,Math.cos(i.yaw));for(let e of Ep)this.vents.push({pos:new z(i.x+Math.cos(i.yaw)*e+f.x*1.2,o+wp,i.z-Math.sin(i.yaw)*e+f.z*1.2),dir:f,color:r[a],rate:2.2,kind:`fan`})})}buildDatacenter(){let e=Sd,t=this.terrain.heightAt(e.x,e.z),n=fd(606),r=new V,i=new _t,a=new Yt,o=(n,r,i,a)=>this.solid.push(J(Y(n,[e.x+i[0],t+i[1],e.z+i[2]],a),r));o(new G(13,.3,8.4),`#7f8594`,[0,.02,0]);for(let e=-10;e<=10;e++)o(new G(.05,.02,8.4),`#4c5160`,[e*.62,.18,0]);for(let e=-6;e<=6;e++)o(new G(13,.02,.05),`#4c5160`,[0,.18,e*.62]);for(let[e,t]of[[-3.1,.6],[1.86,-.6],[4.3,1.2],[-.6,1.9]])o(new G(.58,.05,.58),`#2a2d36`,[e,.165,t]);o(new G(.6,.06,.6),`#8a90a0`,[-2.4,.3,1],[.2,.5,.1]),this.col.addBox(e.x,e.z,6.5,4.2,0,t-2,t+.17,!1);for(let o=0;o<2;o++)for(let s=0;s<8;s++){if(n()<.16)continue;let c=-4.55+s*1.3,l=o?2.7:-2.7,u=n()<.12,d=u?0:(n()-.5)*.24*(n()<.4);a.set(u?o?-1.45:1.45:d*.6,o?Math.PI:0,d),r.compose(new z(e.x+c,t+.15+(u?.45:0),e.z+l),i.setFromEuler(a),new z(1,1,1)),jp(n,this.solid,this.leds,r),u||(this.col.addBox(e.x+c,e.z+l,.6,.52,0,t-1,t+2.5,!0),this.vents.push({pos:new z(e.x+c,t+2.6,e.z+l),dir:new z(0,1,0),color:`#7dffb0`,rate:.25,kind:`rise`}))}o(new G(.16,1.2,.16),`#3a3d4a`,[6.9,.7,0]),o(new G(.14,1.25,1.9),`#1a1c22`,[6.9,1.85,0]);let s=new W(new to(1.76,1.1),new Or({toneMapped:!1,map:xp(512,320,e=>{e.fillStyle=`#06140c`,e.fillRect(0,0,512,320),e.fillStyle=`#6dffa8`,e.font=`600 30px ${hp}`,e.textBaseline=`top`,[`> python train.py`,`epoch 1  loss 0.6931`,`epoch 2  loss 0.0421`,`epoch 3  loss NaN`,`> _`].forEach((t,n)=>e.fillText(t,22,24+n*56))})}));s.position.set(e.x+6.82,t+1.85,e.z),s.rotation.y=-Math.PI/2,this.scene.add(s),this.col.addCyl(e.x+6.9,e.z,.5,t-1,t+2.5),this.reserve(e.x,e.z,10)}buildTree(e,t){let n=this.terrain.heightAt(e,t),r=Mp(fd(31)),i=new W(r.solid.translate(e,n,t),Vd({vertexColors:!0,grad:`soft`}));i.castShadow=i.receiveShadow=!0,this.scene.add(i,new W(r.leaves.translate(e,n,t),vp())),this.col.addCyl(e,t,.55,n-1,n+3.4),this.col.addCyl(e,t,1.6,n-1,n+.25),this.reserve(e,t,6);for(let i=0;i<r.tips.length;i+=3)this.vents.push({pos:r.tips[i].clone().add(new z(e,n,t)),dir:new z(0,-1,0),color:`#7dffb0`,rate:.12,kind:`fall`})}buildTraces(){let e=this.terrain,t=[],n=[],r=[],i=(e,t)=>bd.some(n=>Math.hypot(e-n.x,t-n.z)<9.5),a=(r,i,a)=>(t.push(r,e.heightAt(r,i)+.09,i),n.push(a),t.length/3-1),o=(e,t,n,i,o,s)=>{let c=Math.hypot(n-e,i-t)||1,l=-(i-t)/c*o,u=(n-e)/c*o,d=a(e+l,t+u,s),f=a(e-l,t-u,s),p=a(n+l,i+u,s+c),m=a(n-l,i-u,s+c);r.push(d,f,p,f,m,p)},s=(e,t,n)=>{let i=a(e,t,n),o=[];for(let r=0;r<8;r++)o.push(a(e+Math.cos(r/8*6.283)*.24,t+Math.sin(r/8*6.283)*.24,n));for(let e=0;e<8;e++)r.push(i,o[e],o[(e+1)%8])};Cd.forEach((e,t)=>{let n=wd(e,1.25);for(let e of[-.85,.85])for(let r=0;r<n.length-1;r++){let a=n[r],c=n[r+1];if(!(i(a.x,a.z)||i(c.x,c.z))&&(o(a.x-a.tz*e,a.z+a.tx*e,c.x-c.tz*e,c.z+c.tx*e,.06,a.u+t*37),(r+(e>0?4:0)+t)%9==0)){let n=Math.sign(e),i=a.x-a.tz*e,c=a.z+a.tx*e,l=(a.tx-a.tz*n)*.7071,u=(a.tz+a.tx*n)*.7071,d=.9+r*7%5*.22;o(i,c,i+l*d,c+u*d,.05,a.u+t*37),s(i+l*(d+.2),c+u*(d+.2),a.u+t*37+d)}}});let c=new gr;c.setAttribute(`position`,new U(t,3)),c.setAttribute(`aU`,new U(n,1)),c.setIndex(r);let l=new W(c,yp(`#52f0d2`));l.renderOrder=1,this.scene.add(l)}buildLamps(){let e=this.terrain,t=[],n=[],r=new H(`#ffd28a`),i=new H(0,0,0),a=`#3a3340`,o=3.1;if(Cd.forEach((s,c)=>{wd(s,24).forEach((s,l)=>{if(l===0||bd.some(e=>Math.hypot(s.x-e.x,s.z-e.z)<14))return;let u=(l+c)%2?1:-1,d=s.x-s.tz*u*3.1,f=s.z+s.tx*u*3.1,p=e.heightAt(d,f);if(p<1.6||jd(d,f)>.02||this.col.blocked(d,f,.6,p))return;let m=s.tz*u,h=-s.tx*u,g=d+m*.7,_=f+h*.7;this.solid.push(J(Y(new Mi(.045,.07,o,7),[d,p+o/2,f]),a)),this.solid.push(J(Y(new Mi(.12,.15,.16,8),[d,p+.08,f]),a)),this.solid.push(J(Y(new G(.8,.05,.05),[d+m*.36,p+o-.08,f+h*.36],[0,Math.atan2(-h,m),0]),a)),this.solid.push(J(Y(new Ni(.2,.14,4),[g,p+o-.16,_],[0,Math.PI/4,0]),a)),t.push(J(Y(new G(.2,.24,.2),[g,p+o-.36,_]),r));let v=J(new ji(3.4,20).rotateX(-Math.PI/2),(e,t,n)=>n.copy(e.lengthSq()<.01?r:i));n.push(Y(v,[g,e.heightAt(g,_)+.14,_])),this.col.addCyl(d,f,.14,p-1,p+o),this.reserve(d,f,1.4)})}),!t.length)return;let s=new W(bf(n),this.poolMat);s.renderOrder=2,this.scene.add(new W(bf(t),this.lampMat),s)}signpost(e,t,n){let r=this.terrain.heightAt(e,t),i=2.5+n.length*.42;this.solid.push(J(Y(new Mi(.08,.11,i,7),[e,r+i/2,t]),`#6a4a30`)),this.solid.push(J(Y(new Ni(.13,.22,7),[e,r+i+.1,t]),`#6a4a30`)),n.forEach(([n,a,o],s)=>{let c=Math.atan2(-o,a),l=r+i-.3-s*.46;for(let r of[!1,!0]){let i=xp(512,96,e=>{e.fillStyle=`#8a6540`,e.fillRect(0,0,512,96),e.strokeStyle=`#5a3e26`,e.lineWidth=6,e.strokeRect(3,3,506,90),e.fillStyle=`#fff3dc`,e.textBaseline=`middle`,e.textAlign=`center`,e.font=`700 50px ${mp}`,e.fillText(r?`← ${n}`:`${n} →`,256,50)}),a=new W(new to(1.9,.36),Vd({map:i,grad:`soft`}));a.position.set(e+Math.cos(c)*.85+Math.sin(c)*(r?-.03:.03),l,t-Math.sin(c)*.85+Math.cos(c)*(r?-.03:.03)),a.rotation.y=c+(r?Math.PI:0),a.castShadow=!0,this.scene.add(a)}this.solid.push(J(Y(new G(1.94,.4,.045),[e+Math.cos(c)*.85,l,t-Math.sin(c)*.85],[0,c,0]),`#5a3e26`))}),this.col.addCyl(e,t,.2,r-1,r+i),this.reserve(e,t,2.5)}update(e,t,n,r){gp.uTime.value+=e,gp.uNight.value=t,this.lampMat.color.setScalar(.5+t*1.5),this.poolMat.color.setScalar(t*.5);for(let t of this.fans)t.rotation.z-=t.userData.speed*e;let i=this._v,a=this._w;for(let t of this.vents)if(!(Math.random()>t.rate*e||t.pos.distanceToSquared(n)>4900)){if(t.kind===`fan`){let e=Math.random()*6.283,n=Math.random()*1.5;i.set(t.pos.x+Math.cos(e)*n*t.dir.z,t.pos.y+Math.sin(e)*n,t.pos.z-Math.cos(e)*n*t.dir.x),r.glyph({pos:i,vel:a.copy(t.dir).multiplyScalar(3+Math.random()*2).setY(.4+Math.random()*.6),color:t.color,size:.5,life:2.2,drag:.5})}else t.kind===`rise`?r.glyph({pos:i.set(t.pos.x+(Math.random()-.5)*.6,t.pos.y,t.pos.z+(Math.random()-.5)*.6),vel:a.set(0,.8+Math.random()*.6,0),color:t.color,size:.34,life:2.6,glyph:Math.floor(Math.random()*4)}):r.glyph({pos:t.pos,vel:a.set((Math.random()-.5)*.5,-.5,(Math.random()-.5)*.5),color:t.color,size:.36,life:4,gravity:.25,glyph:Math.floor(Math.random()*4)})}}},Pp=new z,Fp=new z,Ip=new V,Lp=new _t,Rp=new z,zp=new Yt,Bp={claude:`문틈으로 쪽지가 나왔다: 「좀 더 신중하게 생각한 뒤 답할게.」`,gpt:`방 안에서 타이핑 소리가 나다가 멈췄다: 「생성하는 중……」`,deepseek:`등대 불빛이 한 번 깜빡였다: 「서버가 혼잡합니다. 잠시 후 다시 시도해 주세요.」`,glm:`문 앞의 여우 석상이 눈을 깜빡이더니 다시 잠들었다.`,kimi:`돔 위의 망원경이 돌아와 너를 바라봤다: 「긴 텍스트? 나한테 맡겨.」`,qwen:`처마 아래 등불이 흔들렸다: 「정에 통하고, 의에 닿는다.」`,gemini:`창턱의 네 가지 색 블록이 스스로 순서를 바꿨다.`,grok:`탑 꼭대기에서 웃음소리가 들렸다: 「정답은 42야.」`};function Vp(){let e=[J(new G(.44,.07,.44),`#3a3320`),J(Y(new G(.24,.03,.24),[0,.05,0]),`#ffe9a0`)];for(let t=0;t<5;t++)for(let n of[-1,1])e.push(J(Y(new G(.1,.025,.04),[n*.26,0,-.16+t*.08]),`#ffd870`)),e.push(J(Y(new G(.04,.025,.1),[-.16+t*.08,0,n*.26]),`#ffd870`));return bf(e).rotateX(1.2)}function Hp(){return bf([J(new oo(.2,.055,5,6).rotateZ(Math.PI/6),`#ffd870`),J(new G(.1,.24,.05),`#fff3c0`),J(Y(new G(.22,.07,.05),[0,.09,0]),`#fff3c0`)])}var Up=Vd({color:`#b9b3a4`,grad:`soft`}),Wp=Vd({color:`#8a5a34`,grad:`soft`}),Gp=Vd({color:`#e0b24c`,grad:`soft`}),Kp=Vd({color:`#6a4fc0`,grad:`soft`}),qp=class{g;items=[];crystals=[];updrafts=[];fires;quest=0;stages=[];region=``;near=null;eliteDead=!1;tokens=[];tokenMesh;chip=Vp();allVisited=!1;blueGlow=qd(`#6fd0ff`,2);t=0;constructor(e,t){this.g=e,this.fires=t.fires;let n=e.terrain,r=(e,t,r=0)=>new z(e,n.heightAt(e,t)+r,t),i=t.entranceAngle,a=q.ruins,o=q.start;this.waypoint(`w0`,`프롬프트 들판`,r(o.x+6,o.z-6)),this.waypoint(`w1`,`연산력 고지`,r(4,-128)),this.waypoint(`w2`,`망각의 문`,r(a.x+Math.cos(i)*40,a.z+Math.sin(i)*40)),this.waypoint(`w3`,`데이터 호수 서안`,r(34,36)),this.waypoint(`w4`,`랜덤 포레스트`,r(-128,-8));for(let t of e.houses.list)this.house(t);this.scatterTokens();let s=e.enemies;s.addCamp({id:0,name:`들판 야영지`,x:q.campA.x,z:q.campA.z,grunts:3,wisps:0,level:1}),s.addCamp({id:1,name:`숲속 야영지`,x:q.campB.x,z:q.campB.z,grunts:3,wisps:2,level:3}),s.addCamp({id:2,name:`남쪽 언덕 야영지`,x:q.campC.x,z:q.campC.z,grunts:2,wisps:2,level:4}),s.addCamp({id:3,name:`절벽 꼭대기 초소`,x:q.tower.x-20,z:q.tower.z+6,grunts:2,wisps:3,level:6}),s.addCamp({id:4,name:`망각의 문`,x:a.x,z:a.z,grunts:0,wisps:0,level:8,elite:!0}),s.addCamp({id:5,name:`호숫가`,x:62,z:74,grunts:0,wisps:2,level:2}),this.chest(`c0`,r(o.x-7,o.z-9),!1),this.chest(`c1`,r(q.campA.x+4,q.campA.z+5),!1,0),this.chest(`c2`,r(q.campB.x-4,q.campB.z+5),!1,1),this.chest(`c3`,r(q.campC.x+4,q.campC.z-5),!1,2),this.chest(`c4`,r(q.islet.x+3,q.islet.z-3),!0),this.chest(`c5`,r(q.peak.x,q.peak.z),!0),this.chest(`c6`,new z(q.tower.x,t.towerTop,q.tower.z),!0,3),this.chest(`c7`,r(a.x,a.z,.3),!0,4);let c=e.props.perches;[...[0,5,9,14,19,23].map(e=>c[e%c.length].clone().setY(c[e%c.length].y+1.3)),r(q.islet.x-22,q.islet.z,7),r(q.islet.x-3,q.islet.z+2,8.5),r(q.peak.x+2,q.peak.z+1,2.4),new z(q.tower.x+2,t.towerTop+1.4,q.tower.z+2),r(q.forest.x,q.forest.z,1.4),r(-40,-96,1.6)].forEach((e,t)=>this.crystal(`k`+t,e));let l=fd(77),u=new z;for(let t=0,r=0;t<400&&r<16;t++){let t=(l()-.5)*520,i=(l()-.5)*520,a=n.heightAt(t,i);a<2||n.normalAt(t,i,u).y<.9||jd(t,i)>0||Ed(t,i)<3||Ed(t,i)>30||kd(t,i).m1>0||e.col.blocked(t,i,1.2,a)||this.gather(`g`+r++,new z(t,a,i))}for(let[e,t,r]of[[q.updraft.x,q.updraft.z,66],[-6,-60,64]])this.updrafts.push({x:e,z:t,r:4,y0:n.heightAt(e,t),y1:r});let d=e=>this.items.find(t=>t.id===e),f=()=>{let t=e.player.pos;return t.y>44&&kd(t.x,t.z).m2>.6&&e.player.state===`ground`};this.stages=[{text:`앞에 있는 순간이동 거점 활성화하기 (가까이 가서 F)`,target:()=>d(`w0`).pos,done:()=>d(`w0`).done,exp:40},{text:`흙길을 따라 서쪽으로, 들판의 글리치 병사 야영지 소탕`,target:()=>r(q.campA.x,q.campA.z),done:()=>s.alive(0)===0,exp:80},{text:`야영지의 보물상자 열기`,target:()=>d(`c1`).pos,done:()=>d(`c1`).done,exp:40},{text:`북쪽 연산력 고지 오르기: 절벽에 붙어 W를 눌러 등반하거나, 절벽 아래 상승 기류에 뛰어든 뒤 스페이스로 활강`,target:()=>d(`w1`).pos,done:f,exp:120},{text:`고지에서 데이터 호수 중앙의 섬으로 활강 (점프 후 공중에서 스페이스를 한 번 더)`,target:()=>r(q.islet.x,q.islet.z),done:()=>Math.hypot(e.player.pos.x-q.islet.x,e.player.pos.z-q.islet.z)<13&&e.player.state===`ground`,exp:150},{text:`남서쪽 망각의 문으로 가서 거대 문서 골렘 처치`,target:()=>r(a.x,a.z),done:()=>this.eliteDead,exp:300},{text:`망각의 문 중앙의 화려한 보물상자 열기`,target:()=>d(`c7`).pos,done:()=>d(`c7`).done,exp:100},{text:`메인 완료! 자유 탐험: 여덟 AI 오두막 방문, 연산 칩 수집, 여덟 캐릭터 체험`,target:()=>null,done:()=>!1,exp:0}]}add(e){let t={...e,t:0};return this.items.push(t),this.g.scene.add(t.obj),t}waypoint(e,t,n){let r=this.g,i=new mn,a=Vd({color:`#7d8799`,grad:`soft`}),o=new W(xf([[0,0],[.75,0],[.7,.18],[.42,.3],[.3,.9],[.36,1],[0,1.05]],10),Up),s=new W(new eo(.34).scale(1,2.1,1),a),c=new W(new oo(.62,.035,5,28),a);s.position.y=2,c.position.y=2,c.rotation.x=1.2,o.castShadow=s.castShadow=!0,i.add(o,s,c),i.position.copy(n),r.col.addCyl(n.x,n.z,.6,n.y-1,n.y+1);let l=this.add({id:e,kind:`way`,pos:n,r:2.6,label:t,done:!1,obj:i,data:{gem:s,ring:c},prompt:()=>l.done?`거점에서 휴식 (파티 전체 회복)`:`순간이동 거점 활성화`,use:()=>{l.done?(r.sfx.pick(),r.hud.toast(`파티 전체가 회복되었습니다`)):(this.unlock(l),r.hud.banner(`거점 활성화 · ${t}`,`#8fd8ff`),r.sfx.waypoint(),r.fx.pillar(n,1,14,1.2,`#8fd8ff`)),r.party.healAll(),r.player.stamina=r.player.staminaMax,r.fx.burst(Pp.copy(n).setY(n.y+2),`#8fd8ff`,20,3,.3,.9,{up:1}),r.save()}});return l}house(e){let t=this.g,n=new mn,r=this.add({id:`h-`+e.id,kind:`house`,pos:e.door,r:3.2,label:e.company,done:!1,obj:n,data:{color:e.color,home:e.home,chimney:e.chimney},prompt:()=>r.done?`${e.company} ${e.home} 문 두드리기`:`${e.company}의 ${e.home} 방문`,use:()=>{let n=Fp.copy(e.pos).sub(e.door).setY(0).normalize().multiplyScalar(1.3).add(e.door);if(r.done){t.sfx.ui(),t.hud.toast(Bp[e.id]),t.fx.glyphs(Pp.copy(n).setY(n.y+1.5),e.color,6,1,.3);return}r.done=!0;let i=this.houseCount,a=t.party.cur.def.id===e.id;t.party.items.dust+=150,t.party.items.berry+=1,t.party.gainExp(70),t.hud.banner(`${e.company} 방문 완료 · ${i}/${bd.length}`,e.color),t.hud.toast(`토큰 ×150, 달콤 열매 ×1 획득`),a&&(t.party.cur.energy=100,t.hud.toast(`${t.party.cur.def.name}이(가) 자기 집에 돌아왔습니다: 원소 폭발 게이지 충전`)),t.sfx.waypoint(),t.fx.pillar(e.pos,2.2,20,1.4,e.color),t.fx.glyphs(Pp.copy(n).setY(n.y+1.2),e.color,22,1.8,.32,2.2),i===bd.length&&!this.allVisited&&(this.allVisited=!0,t.player.staminaMax+=30,t.party.items.dust+=800,t.hud.banner(`여덟 오두막 모두 방문 · 스태미나 상한 +30`,`#ffe08a`),t.hud.toast(`토큰 ×800 획득`)),t.save()}});return r}scatterTokens(){let e=this.g.terrain;Cd.forEach((t,n)=>{wd(t,13).forEach((t,r)=>{if(r===0||jd(t.x,t.z)>.02||bd.some(e=>Math.hypot(t.x-e.x,t.z-e.z)<12)||Math.hypot(t.x-q.start.x,t.z-q.start.z)<8)return;let i=((r+n)%2?1:-1)*.25,a=t.x-t.tz*i,o=t.z+t.tx*i;this.tokens.push({pos:new z(a,e.heightAt(a,o)+1.05,o),got:!1})})}),this.tokenMesh=new di(Hp(),qd(`#ffffff`,1.5,!0),this.tokens.length),this.tokenMesh.frustumCulled=!1,this.g.scene.add(this.tokenMesh)}get houseCount(){return this.items.filter(e=>e.kind===`house`&&e.done).length}get tokenCount(){return this.tokens.filter(e=>e.got).length}unlock(e){e.done=!0,e.data.gem.material=this.blueGlow,e.data.ring.material=this.blueGlow}chest(e,t,n,r=-1){let i=this.g,a=new mn,o=n?1.25:1,s=n?Kp:Wp,c=new W(new G(.9,.5,.6),s);c.position.y=.25;let l=new mn,u=new W(new Mi(.3,.3,.9,10,1,!1,0,Math.PI).rotateZ(Math.PI/2).rotateX(-Math.PI/2),s);u.position.set(0,0,.3),l.position.set(0,.5,-.3),l.add(u);for(let e of[-.3,.3]){let t=new W(new G(.08,.52,.62),Gp),n=new W(new oo(.305,.04,4,10,Math.PI).rotateY(Math.PI/2),Gp);t.position.set(e,.25,0),n.position.set(e,0,.3),a.add(t),l.add(n)}let d=new W(new eo(.09),n?qd(`#d8a6ff`,2):Gp);d.position.set(0,.45,.32),a.add(c,l,d),a.scale.setScalar(o),a.position.copy(t),a.rotation.y=t.x*7.3%6.28,a.traverse(e=>{e.castShadow=!0}),e===`c7`&&(a.visible=!1);let f=this.add({id:e,kind:`chest`,pos:t,r:2.2,label:n?`화려한 보물상자`:`보물상자`,done:!1,obj:a,data:{lid:l,guard:r,ornate:n},prompt:()=>f.done||!a.visible?null:r>=0&&i.enemies.alive(r)>0?`주변에 적이 있어 보물상자를 열 수 없습니다`:`${n?`화려한 `:``}보물상자 열기`,use:()=>{if(f.done||r>=0&&i.enemies.alive(r)>0){i.sfx.deny();return}f.done=!0;let e=n?300:90+Math.floor(Math.random()*40),a=n?3:2;i.party.items.dust+=e,i.party.items.berry+=a,i.party.gainExp(n?160:45),i.hud.toast(`토큰 ×${e}, 달콤 열매 ×${a} 획득`),i.sfx.chest(),i.fx.pillar(t,.7,n?9:5,.9,n?`#d8a6ff`:`#ffe08a`),i.fx.burst(Pp.copy(t).setY(t.y+.8),`#ffe08a`,24,4,.3,.9,{up:4,gravity:8}),i.save()}});return i.col.addCyl(t.x,t.z,.55*o,t.y-1,t.y+.75*o),f}gather(e,t){let n=this.g,r=new mn,i=new W(Sf(.5,1,.16,t.x),Vd({color:`#4c9a48`,grad:`soft`}));i.scale.y=.75,i.position.y=.32;let a=new mn,o=Vd({color:`#ff5a6e`,grad:`soft`});for(let e=0;e<6;e++){let t=new W(new ao(.07,8,6),o),n=e*1.05;t.position.set(Math.sin(n)*.36,.38+e%3*.12,Math.cos(n)*.36),a.add(t)}r.add(i,a),r.position.copy(t);let s=this.add({id:e,kind:`gather`,pos:t,r:1.8,label:`달콤 열매 덤불`,done:!1,obj:r,data:{berries:a},prompt:()=>s.done?null:`달콤 열매 채집`,use:()=>{if(s.done)return;s.done=!0,s.t=0,a.visible=!1;let e=1+Math.floor(Math.random()*2);n.party.items.berry+=e,n.hud.toast(`달콤 열매 ×${e} 획득 (Z로 먹으면 생명력 회복)`),n.sfx.pick()}})}crystal(e,t){let n=new mn,r=new W(this.chip,qd(`#ffffff`,1.8,!0)),i=new W(new oo(.42,.018,4,4),qd(`#ffe9a0`,2.2));n.add(r,i),n.position.copy(t),this.g.scene.add(n),this.crystals.push({id:e,pos:t,obj:n,got:!1})}inUpdraft(e){return this.updrafts.some(t=>Math.hypot(e.x-t.x,e.z-t.z)<t.r&&e.y>t.y0-1&&e.y<t.y1)}onEnemyDead(e){if(e.def.kind!==`elite`)return;this.eliteDead=!0;let t=this.items.find(e=>e.id===`c7`);t.obj.visible=!0,this.g.fx.pillar(t.pos,1.2,12,1.2,`#d8a6ff`),this.g.hud.banner(`거대 문서 골렘을 처치했습니다`,`#ffd24a`)}get stage(){return this.stages[Math.min(this.quest,this.stages.length-1)]}get crystalCount(){return this.crystals.filter(e=>e.got).length}update(e){let t=this.g,n=t.player,r=n.pos;this.t+=e,n.updraft=(n.state===`glide`||n.state===`air`)&&this.inUpdraft(r);let i=null,a=1e9;for(let n of this.items){if(n.t+=e,n.kind===`way`)n.data.gem.rotation.y+=e*(n.done?1.2:.3),n.data.gem.position.y=2+Math.sin(this.t*1.5+n.pos.x)*.08,n.data.ring.rotation.z+=e*.7;else if(n.kind===`chest`&&n.done)n.data.lid.rotation.x=Math.max(-1.9,n.data.lid.rotation.x-e*5);else if(n.kind===`gather`&&n.done&&n.t>150)n.done=!1,n.data.berries.visible=!0;else if(n.kind===`house`&&Math.random()<e*1.6&&n.pos.distanceToSquared(r)<8100){let e=n.data.chimney;t.fx.glyph({pos:Pp.set(e.x+(Math.random()-.5)*.3,e.y,e.z+(Math.random()-.5)*.3),vel:Fp.set(.5+Math.random()*.4,1.1+Math.random()*.5,(Math.random()-.5)*.4),color:n.data.color,size:.62,life:3.4,drag:.15})}let o=n.pos.distanceTo(r);o<n.r&&o<a&&n.prompt()&&(a=o,i=n)}this.near=n.dead||n.state===`climb`||n.state===`glide`?null:i,this.near&&t.playing&&t.input.hit(`KeyF`)&&this.near.use();for(let n of this.crystals)n.got||(n.obj.rotation.y+=e*1.6,n.obj.position.y=n.pos.y+Math.sin(this.t*2+n.pos.x)*.12,Math.random()<e*3&&t.fx.emit({pos:Pp.copy(n.obj.position).add(new z((Math.random()-.5)*.6,(Math.random()-.5)*.6,(Math.random()-.5)*.6)),vel:new z(0,.5,0),color:`#ffe9a0`,size:.12,life:.8}),Pp.copy(r).setY(r.y+.9).distanceTo(n.obj.position)<1.5&&this.collect(n));for(let e=0;e<this.tokens.length;e++){let t=this.tokens[e],n=t.pos.distanceToSquared(r);t.got||n>6400?Rp.setScalar(+!t.got):(Rp.setScalar(1),Pp.copy(r).setY(r.y+.9).distanceTo(t.pos)<1.35&&(this.takeToken(e),Rp.setScalar(0))),this.tokenMesh.setMatrixAt(e,Ip.compose(Pp.copy(t.pos).setY(t.pos.y+Math.sin(this.t*2.2+e)*.1),Lp.setFromEuler(zp.set(0,this.t*2.4+e*.7,0)),Rp))}this.tokenMesh.instanceMatrix.needsUpdate=!0;for(let n of this.updrafts)if(!(Math.hypot(r.x-n.x,r.z-n.z)>90)){for(let e=0;e<2;e++){let e=Math.random()*6.28,r=Math.random()*n.r;t.fx.emit({pos:Pp.set(n.x+Math.sin(e)*r,n.y0+Math.random()*4,n.z+Math.cos(e)*r),vel:new z(Math.cos(e)*1.5,9+Math.random()*4,-Math.sin(e)*1.5),color:`#c8fff0`,size:.22,size1:.05,life:2.4,alpha:.6})}if(Math.random()<e*14){let e=Math.random()*6.28,r=Math.random()*n.r;t.fx.glyph({pos:Pp.set(n.x+Math.sin(e)*r,n.y0+Math.random()*6,n.z+Math.cos(e)*r),vel:Fp.set(0,7+Math.random()*3,0),color:`#b8fff0`,size:1,life:3.2,glyph:Math.floor(Math.random()*4)})}}for(let e of this.fires)e.distanceTo(r)>70||t.fx.emit({pos:Pp.set(e.x+(Math.random()-.5)*.4,e.y,e.z+(Math.random()-.5)*.4),vel:new z((Math.random()-.5)*.4,1.4+Math.random(),(Math.random()-.5)*.4),color:`#ffb040`,color1:`#ff3010`,size:.55,size1:.05,life:.7});let o=this.stage;o.done()&&this.quest<this.stages.length-1&&(this.quest++,t.party.gainExp(o.exp),t.hud.banner(`목표 달성`,`#ffe08a`),t.sfx.pick(),t.save());let s=kd(r.x,r.z).m2>.5?`연산력 고지`:jd(r.x,r.z)>.3?`망각의 문`:Math.hypot(r.x-q.lake.x,r.z-q.lake.z)<72?`데이터 호수`:Ad(r.x,r.z)>.45?`랜덤 포레스트`:`프롬프트 들판`;s!==this.region&&(this.region&&t.hud.region(s),this.region=s)}takeToken(e){let t=this.g,n=this.tokens[e];n.got=!0,t.party.items.dust+=10,t.hud.float(n.pos,`+10 Token`,`#ffe08a`),t.fx.glyphs(n.pos,`#ffe08a`,4,.5,.36,.9),t.sfx.pick()}collect(e,t=!1){let n=this.g;if(e.got=!0,e.obj.visible=!1,t)return;let r=this.crystalCount;n.fx.burst(e.obj.position,`#ffe9a0`,24,4,.3,.8),n.sfx.chest(),r%3==0?(n.player.staminaMax+=15,n.hud.banner(`연산 칩 ${r}/${this.crystals.length} · 스태미나 상한 +15`,`#ffe9a0`)):n.hud.toast(`연산 칩 ${r}/${this.crystals.length} 획득 (3개마다 스태미나 상한 증가)`),n.save()}serialize(){return{way:this.items.filter(e=>e.kind===`way`&&e.done).map(e=>e.id),chest:this.items.filter(e=>e.kind===`chest`&&e.done).map(e=>e.id),crystal:this.crystals.filter(e=>e.got).map(e=>e.id),quest:this.quest,elite:this.eliteDead,house:this.items.filter(e=>e.kind===`house`&&e.done).map(e=>e.id),token:this.tokens.flatMap((e,t)=>e.got?[t]:[])}}restore(e){for(let t of this.items)t.kind===`way`&&e.way.includes(t.id)&&this.unlock(t),t.kind===`chest`&&e.chest.includes(t.id)&&(t.done=!0,t.obj.visible=!0,t.data.lid.rotation.x=-1.9);for(let t of this.crystals)e.crystal.includes(t.id)&&this.collect(t,!0);for(let t of this.items)t.kind===`house`&&e.house?.includes(t.id)&&(t.done=!0);this.allVisited=this.houseCount===bd.length;for(let t of e.token??[])this.tokens[t]&&(this.tokens[t].got=!0);if(this.quest=Math.min(e.quest??0,this.stages.length-1),e.elite){this.eliteDead=!0,this.items.find(e=>e.id===`c7`).obj.visible=!0;for(let e of this.g.enemies.list)e.def.kind===`elite`&&(e.dead=!0,e.removed=!0,this.g.scene.remove(e.root))}}},Jp=(e,t,n,r,i,a,o,s,c,l)=>({h:e,top:new H(t),hor:new H(n),light:new H(r),li:i,hs:new H(a),hg:new H(o),hi:s,cloud:new H(c),shade:new H(l)}),Yp=[Jp(0,`#070b24`,`#182544`,`#8fa6ff`,.85,`#3d4e88`,`#1a2034`,1.25,`#2c3658`,`#141a30`),Jp(4.5,`#0b1030`,`#22305a`,`#8fa6ff`,.8,`#44558e`,`#1c2236`,1.25,`#343e62`,`#171d34`),Jp(6,`#3d55a0`,`#f6a880`,`#ffb890`,1.5,`#a59cc4`,`#5c4c4a`,1.25,`#ffd2b4`,`#8f6c8c`),Jp(8,`#3c8ce8`,`#c2e4ff`,`#fff0d8`,2.3,`#c4dcff`,`#7c8c62`,1.5,`#ffffff`,`#c6d4ee`),Jp(12,`#2c7ce6`,`#b8deff`,`#fffaf0`,2.6,`#cfe3ff`,`#869468`,1.55,`#ffffff`,`#cbd8f0`),Jp(16.5,`#3a84e0`,`#c8e0f8`,`#ffeccc`,2.3,`#c8dcf8`,`#80885e`,1.5,`#fff6ea`,`#c8cfe6`),Jp(18.6,`#4a4a94`,`#ff9c60`,`#ffa06a`,1.9,`#d6aca4`,`#6e5648`,1.5,`#ffc09a`,`#84608a`),Jp(20,`#0d1338`,`#27335e`,`#8fa6ff`,.8,`#44558e`,`#1c2236`,1.25,`#343e62`,`#171d34`),Jp(24,`#070b24`,`#182544`,`#8fa6ff`,.85,`#3d4e88`,`#1a2034`,1.25,`#2c3658`,`#141a30`)],Xp=new H(.5,.56,.74),Zp=new H(1,1,1),Qp=`
varying vec3 vDir;
void main() {
  vDir = position;
  vec4 p = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  gl_Position = p.xyww;
}`,$p=`
uniform vec3 uTop, uHorizon, uSunColor, uSunDir, uMoonDir, uCloud, uShade;
uniform float uTime, uNight;
varying vec3 vDir;
// 不用 sin 的哈希：sin 在部分显卡上精度不够，云的边缘会出现锯齿状的折线
float hash(vec2 p) { vec3 q = fract(vec3(p.xyx) * 0.1031); q += dot(q, q.yzx + 33.33); return fract((q.x + q.y) * q.z); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * f * (f * (f * 6.0 - 15.0) + 10.0);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
// 每一层都转个角度，免得各层的格子方向叠在一起露出网格
const mat2 ROT = mat2(0.8, -0.6, 0.6, 0.8);
float fbm(vec2 p) { float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++) { s += a * vn(p); p = ROT * p * 2.03 + 11.7; a *= 0.5; } return s; }
void main() {
  vec3 d = normalize(vDir);
  vec3 col = mix(uHorizon, uTop, pow(max(d.y, 0.0), 0.5));
  col = mix(col, uHorizon * 0.8, smoothstep(0.0, -0.3, d.y));
  float sd = max(dot(d, uSunDir), 0.0);
  col += uSunColor * (pow(sd, 28.0) * 0.28 + pow(sd, 5.0) * 0.1) * (1.0 - uNight);
  col = mix(col, uSunColor * 2.6, smoothstep(0.99925, 0.9996, sd) * (1.0 - uNight));
  // 月亮和星星
  float md = max(dot(d, uMoonDir), 0.0);
  col = mix(col, vec3(1.5, 1.6, 1.9), smoothstep(0.9990, 0.9994, md) * uNight);
  col += vec3(0.5, 0.6, 1.0) * pow(md, 60.0) * 0.25 * uNight;
  vec2 sp = d.xz / (abs(d.y) + 0.35) * 90.0;
  vec2 cell = floor(sp);
  float star = step(0.985, hash(cell)) * smoothstep(0.35, 0.0, length(fract(sp) - 0.5));
  col += star * uNight * smoothstep(0.0, 0.25, d.y) * (0.6 + 0.4 * sin(uTime * 2.0 + hash(cell) * 50.0)) * 1.6;
  // 卡通感的云：密度用窄的 smoothstep 切出硬边
  if (d.y > 0.0) {
    vec2 uv = d.xz / (d.y + 0.14) * 0.85 + vec2(uTime * 0.006, uTime * 0.0025);
    uv += 0.22 * vec2(vn(uv * 0.7 + 3.1), vn(uv * 0.7 + 7.7));
    float c = fbm(uv * 1.25);
    float dens = smoothstep(0.52, 0.60, c);
    float inner = smoothstep(0.60, 0.74, c);
    float lit = smoothstep(0.45, 0.62, fbm(uv * 1.25 + uSunDir.xz * 0.12));
    vec3 cc = mix(uCloud, uShade, max(inner * 0.55, (1.0 - lit) * 0.5));
    col = mix(col, cc, dens * smoothstep(0.03, 0.24, d.y) * 0.95);
  }
  gl_FragColor = vec4(col, 1.0);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
}`,em=class{scene;hour=9;dayLength=900;paused=!1;sun=new is(16777215,2);hemi=new Uo(16777215,8947848,1);mesh;lightDir=new z(0,1,0);sunDir=new z;horizon=new H;top=new H;lightColor=new H;night=0;time=0;u={uTop:{value:new H},uHorizon:{value:new H},uSunColor:{value:new H},uSunDir:{value:new z},uMoonDir:{value:new z},uCloud:{value:new H},uShade:{value:new H},uTime:{value:0},uNight:{value:0}};constructor(e,t){if(this.scene=e,this.mesh=new W(new ao(1,32,16),new _o({uniforms:this.u,vertexShader:Qp,fragmentShader:$p,side:1,depthWrite:!1,fog:!1})),this.mesh.scale.setScalar(600),this.mesh.frustumCulled=!1,this.mesh.renderOrder=-1e3,e.add(this.mesh,this.hemi,this.sun,this.sun.target),e.fog=new Sn(16777215,.0021),t>0){let e=this.sun.shadow;this.sun.castShadow=!0,e.mapSize.set(t,t),e.camera.left=-46,e.camera.right=46,e.camera.top=46,e.camera.bottom=-46,e.camera.near=1,e.camera.far=320,e.bias=-4e-4,e.normalBias=.045}}update(e,t,n){this.paused||(this.hour=(this.hour+e*24/this.dayLength)%24),this.time+=e;let r=this.hour,i=0;for(;i<Yp.length-2&&Yp[i+1].h<=r;)i++;let a=Yp[i],o=Yp[i+1],s=(r-a.h)/(o.h-a.h),c=(r-6)/12*Math.PI;this.sunDir.set(Math.cos(c),Math.sin(c),.38).normalize();let l=this.u.uMoonDir.value.set(-Math.cos(c),-Math.sin(c),.38).normalize(),u=this.sunDir.y>.02;this.lightDir.copy(u?this.sunDir:l);let d=sd(0,.16,this.lightDir.y);this.night=sd(.08,-.14,this.sunDir.y),this.top.copy(a.top).lerp(o.top,s),this.horizon.copy(a.hor).lerp(o.hor,s),this.lightColor.copy(a.light).lerp(o.light,s),this.sun.color.copy(this.lightColor),this.sun.intensity=(a.li+(o.li-a.li)*s)*(.25+.75*d),this.hemi.color.copy(a.hs).lerp(o.hs,s),this.hemi.groundColor.copy(a.hg).lerp(o.hg,s),this.hemi.intensity=a.hi+(o.hi-a.hi)*s,this.scene.fog.color.copy(this.horizon);let f=92/this.sun.shadow.mapSize.x,p=Math.round(n.x/f)*f,m=Math.round(n.z/f)*f;this.sun.target.position.set(p,n.y,m),this.sun.position.set(p,n.y,m).addScaledVector(this.lightDir,150);let h=Hd.uLevel.value,g=Hd.uSunCol.value.copy(this.sun.color).multiplyScalar(this.sun.intensity);h.copy(this.hemi.color).add(this.hemi.groundColor).multiplyScalar(.5*this.hemi.intensity*.75/Math.PI),h.r+=g.r*.8/Math.PI,h.g+=g.g*.8/Math.PI,h.b+=g.b*.8/Math.PI,h.lerp(Xp,this.night*.65),h.r=Math.min(h.r,1),h.g=Math.min(h.g,1),h.b=Math.min(h.b,1),Hd.uRimCol.value.copy(this.lightColor).lerp(Zp,.35),this.u.uTop.value.copy(this.top),this.u.uHorizon.value.copy(this.horizon),this.u.uSunColor.value.copy(this.lightColor),this.u.uSunDir.value.copy(this.sunDir),this.u.uCloud.value.copy(a.cloud).lerp(o.cloud,s),this.u.uShade.value.copy(a.shade).lerp(o.shade,s),this.u.uTime.value=this.time,this.u.uNight.value=this.night,this.mesh.position.copy(t)}clock(){let e=Math.floor(this.hour%1*60);return`${String(Math.floor(this.hour)).padStart(2,`0`)}:${String(e).padStart(2,`0`)}`}},tm=`
varying vec3 vWorld;
#include <fog_pars_vertex>
void main() {
  vec4 wp = modelMatrix * vec4(position, 1.0);
  vWorld = wp.xyz;
  vec4 mvPosition = viewMatrix * wp;
  gl_Position = projectionMatrix * mvPosition;
  #include <fog_vertex>
}`,nm=`
uniform sampler2D tColor;
uniform float uTime, uHalf;
uniform vec3 uSunDir, uSunColor, uSky, uHorizon, uShallow, uDeep, uLake;
uniform float uGlow;
varying vec3 vWorld;
#include <fog_pars_fragment>
float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float vn(vec2 p) {
  vec2 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y);
}
float wave(vec2 p) { return vn(p * 0.35 + vec2(uTime * 0.25, uTime * 0.13)) + 0.5 * vn(p * 0.9 - vec2(uTime * 0.3, -uTime * 0.21)); }
void main() {
  vec2 uv = (vWorld.xz + uHalf) / (uHalf * 2.0);
  float inside = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
  float h = mix(-10.0, texture2D(tColor, uv).a * 16.0 - 8.0, inside);
  float depth = max(-h, 0.0);

  vec2 p = vWorld.xz;
  float e = 0.35;
  float w0 = wave(p);
  vec3 n = normalize(vec3((w0 - wave(p + vec2(e, 0.0))) * 0.55, 1.0, (w0 - wave(p + vec2(0.0, e))) * 0.55));
  vec3 view = normalize(cameraPosition - vWorld);
  float fres = pow(1.0 - max(dot(view, n), 0.0), 3.0);

  vec3 col = mix(uShallow, uDeep, smoothstep(0.0, 5.0, depth));
  col = mix(col, mix(uHorizon, uSky, 0.5), fres * 0.65);
  // 高光和卡通亮纹
  float spec = pow(max(dot(reflect(-uSunDir, n), view), 0.0), 140.0);
  col += uSunColor * spec * 1.6;
  float streak = smoothstep(0.80, 0.84, vn(vec2(p.x * 0.16, p.y * 0.7) + vec2(uTime * 0.12, 0.0)) * 0.6 + vn(vec2(p.x * 0.5, p.y * 1.9) - vec2(0.0, uTime * 0.25)) * 0.4 + 0.2);
  col += streak * 0.10 * uSunColor;
  // 数据湖：湖水深处有一张发光的网格，光点沿着格线一格一格地跑
  float lake = smoothstep(uLake.z, uLake.z - 18.0, distance(p, uLake.xy)) * smoothstep(1.0, 3.5, depth);
  if (lake > 0.0) {
    vec2 gp = p / 5.0, gf = abs(fract(gp) - 0.5), fw = fwidth(gp);
    float lx = smoothstep(0.5 - 0.03 - fw.x, 0.5 - fw.x * 0.3, gf.x), ly = smoothstep(0.5 - 0.03 - fw.y, 0.5 - fw.y * 0.3, gf.y);
    float far = smoothstep(170.0, 50.0, distance(cameraPosition, vWorld));
    vec2 id = floor(gp + 0.5);
    float runX = smoothstep(0.86, 1.0, fract(gp.y * 0.11 + hash(vec2(id.x, 3.0)) - uTime * 0.16));
    float runY = smoothstep(0.86, 1.0, fract(gp.x * 0.11 + hash(vec2(7.0, id.y)) + uTime * 0.13));
    col += vec3(0.30, 0.95, 1.0) * (lx * (0.12 + 0.9 * runX) + ly * (0.12 + 0.9 * runY)) * lake * far * uGlow;
  }
  // 岸边白沫
  float foam = smoothstep(0.55, 0.0, depth + 0.18 * sin(depth * 9.0 - uTime * 2.2) + 0.25 * vn(p * 1.6 + uTime * 0.2));
  col = mix(col, vec3(1.0), foam * 0.75 * step(0.001, depth));
  float alpha = mix(0.5, 0.93, smoothstep(0.0, 3.2, depth));
  alpha = max(alpha, foam * 0.8) * smoothstep(0.0, 0.08, depth);

  gl_FragColor = vec4(col, alpha);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  #include <fog_fragment>
}`,rm=class{mesh;u;t=0;constructor(e){this.u=mo.merge([K.fog,{tColor:{value:null},uTime:{value:0},uHalf:{value:yd.half},uSunDir:{value:new z(0,1,0)},uSunColor:{value:new H},uSky:{value:new H},uHorizon:{value:new H},uShallow:{value:new H(`#5fd6d0`)},uDeep:{value:new H(`#1f6fc4`)},uLake:{value:new z(q.lake.x,q.lake.z,q.lake.r)},uGlow:{value:1}}]),this.u.tColor.value=e;let t=new _o({uniforms:this.u,vertexShader:tm,fragmentShader:nm,transparent:!0,fog:!0,depthWrite:!1});this.mesh=new W(new to(2600,2600,1,1).rotateX(-Math.PI/2),t),this.mesh.position.y=yd.sea,this.mesh.renderOrder=5}update(e,t){this.t+=e,this.u.uTime.value=this.t,this.u.uSunDir.value.copy(t.lightDir),this.u.uSunColor.value.copy(t.lightColor).multiplyScalar(1-t.night*.6),this.u.uSky.value.copy(t.top),this.u.uHorizon.value.copy(t.horizon),this.u.uGlow.value=.55+t.night*.75;let n=1-t.night*.72;this.u.uShallow.value.set(`#5fd6d0`).multiplyScalar(n),this.u.uDeep.value.set(`#1f6fc4`).multiplyScalar(n)}},im=class{mesh;u={uCenter:{value:new z},uTime:{value:0},tData:{value:null},tColor:{value:null},uTile:{value:0},uSize:{value:new R},uPush:{value:new z},uInner:{value:0}};constructor(e,t){let n=new Float32Array([-1,0,0,1,0,0,-.8,.4,0,.8,.4,0,-.5,.75,0,.5,.75,0,0,1,0]),r=new as;r.setAttribute(`position`,new nr(n,3)),r.setAttribute(`normal`,new nr(new Float32Array(21).map((e,t)=>+(t%3==1)),3)),r.setIndex([0,1,2,1,3,2,2,3,4,3,5,4,4,5,6]);let i=new Float32Array(t.count*2),a=new Float32Array(t.count*4),o=t.seed,s=()=>(o=o*16807%2147483647)/2147483647;for(let e=0;e<t.count;e++)i[e*2]=s()*t.tile,i[e*2+1]=s()*t.tile,a[e*4]=s()*6.2832,a[e*4+1]=.6+s()*.8,a[e*4+2]=s(),a[e*4+3]=s()-.5;r.setAttribute(`aOffset`,new ri(i,2)),r.setAttribute(`aRand`,new ri(a,4)),r.instanceCount=t.count,this.u.tData.value=e.dataTex,this.u.tColor.value=e.colorTex,this.u.uTile.value=t.tile,this.u.uSize.value.set(t.width,t.height),this.u.uInner.value=t.inner;let c=Vd({grad:`ground`,side:2});c.onBeforeCompile=e=>{Object.assign(e.uniforms,this.u),e.vertexShader=e.vertexShader.replace(`#include <common>`,`#include <common>
          attribute vec2 aOffset; attribute vec4 aRand;
          uniform vec3 uCenter, uPush; uniform float uTime, uTile, uInner; uniform vec2 uSize;
          uniform sampler2D tData, tColor;
          varying vec3 vGrass;
          vec4 terr(vec2 xz) {
            vec2 g = (xz + ${yd.half.toFixed(1)}) / ${yd.cell.toFixed(1)};
            ivec2 i = ivec2(floor(g)); vec2 f = fract(g);
            ivec2 mx = ivec2(${yd.n-1});
            vec4 a = texelFetch(tData, clamp(i, ivec2(0), mx), 0), b = texelFetch(tData, clamp(i + ivec2(1, 0), ivec2(0), mx), 0);
            vec4 c = texelFetch(tData, clamp(i + ivec2(0, 1), ivec2(0), mx), 0), d = texelFetch(tData, clamp(i + ivec2(1, 1), ivec2(0), mx), 0);
            return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
          }`).replace(`#include <beginnormal_vertex>`,`vec3 objectNormal = vec3(0.0, 1.0, 0.0);`).replace(`#include <begin_vertex>`,`
          vec2 rel = mod(aOffset - uCenter.xz, uTile) - uTile * 0.5;
          vec2 wxz = uCenter.xz + rel;
          float dd = length(rel) / (uTile * 0.5);
          vec4 td = terr(wxz);
          float keep = step(aRand.z, td.g * 1.15) * (1.0 - smoothstep(0.72, 0.98, dd)) * smoothstep(uInner * 0.6, uInner, dd);
          float hgt = uSize.y * aRand.y * keep;
          float wind = sin(uTime * 1.7 + wxz.x * 0.33 + wxz.y * 0.21) * 0.6 + sin(uTime * 0.6 + wxz.x * 0.05 - wxz.y * 0.07);
          float k = position.y * position.y;
          vec2 dir = vec2(cos(aRand.x), sin(aRand.x));
          vec3 transformed = vec3(wxz.x, td.r, wxz.y);
          transformed.xz += dir * position.x * uSize.x * (keep > 0.0 ? 1.0 : 0.0);
          transformed.y += position.y * hgt;
          transformed.xz += (vec2(0.8, 0.5) * wind * 0.16 + dir.yx * aRand.w * 0.3) * k * hgt;
          // 被角色踩开
          vec2 away = wxz - uPush.xz;
          float pd = length(away);
          transformed.xz += normalize(away + 0.0001) * (1.0 - smoothstep(0.2, 1.1, pd)) * 0.45 * k * step(abs(td.r - uPush.y), 1.5);
          vec2 cuv = (wxz + ${yd.half.toFixed(1)}) / ${yd.size.toFixed(1)};
          vec3 base = texture2D(tColor, cuv).rgb;
          vGrass = mix(base * 0.82, base * 1.18 + vec3(0.07, 0.09, 0.0), position.y) * (0.92 + 0.16 * aRand.z);`),e.fragmentShader=e.fragmentShader.replace(`#include <common>`,`#include <common>
varying vec3 vGrass;`).replace(`#include <color_fragment>`,`diffuseColor.rgb = vGrass;`).replace(`#include <normal_fragment_maps>`,`#include <normal_fragment_maps>
normal = normalize(vNormal);`)},this.mesh=new W(r,c),this.mesh.frustumCulled=!1,this.mesh.receiveShadow=!0}update(e,t,n){this.u.uTime.value=e,this.u.uCenter.value.copy(t),this.u.uPush.value.copy(n)}},am=class{layers;t=0;constructor(e,t,n,r){this.layers=[new im(t,{count:n,tile:46,width:.05,height:.46,seed:11,inner:0}),new im(t,{count:r,tile:140,width:.11,height:.6,seed:97,inner:.3})];for(let t of this.layers)e.add(t.mesh)}update(e,t,n){this.t+=e;for(let e of this.layers)e.update(this.t,t,n)}},om=`
attribute vec4 aColor; attribute float aSize; uniform float uScale; varying vec4 vColor;
void main() { vColor = aColor; vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / max(0.1, -mv.z); }`,sm=`
varying vec4 vColor;
void main() { float d = length(gl_PointCoord - 0.5); float a = smoothstep(0.5, 0.12, d); gl_FragColor = vec4(vColor.rgb, vColor.a * a); }`,cm=`
attribute vec4 aColor; attribute float aSize; attribute float aGlyph; uniform float uScale; varying vec4 vColor; varying vec2 vCell;
void main() { vColor = aColor; vCell = vec2(mod(aGlyph, 8.0), floor(aGlyph / 8.0)); vec4 mv = modelViewMatrix * vec4(position, 1.0); gl_Position = projectionMatrix * mv; gl_PointSize = aSize * uScale / max(0.1, -mv.z); }`,lm=`
uniform sampler2D tAtlas; varying vec4 vColor; varying vec2 vCell;
void main() { float a = texture2D(tAtlas, (vCell + gl_PointCoord) / vec2(8.0, 4.0)).a; if (a < 0.04) discard; gl_FragColor = vec4(vColor.rgb * 1.35, vColor.a * a); }`,um=`0.1.0.1.{.}.<.>./.=.;.+.#.λ.Σ.∇.θ.π.∂.%.&.@.if.fn.[].().=>.GPU.7.3.42.tk`.split(`.`);function dm(){let e=document.createElement(`canvas`);e.width=512,e.height=256;let t=e.getContext(`2d`);t.fillStyle=`#fff`,t.textAlign=`center`,t.textBaseline=`middle`,um.forEach((e,n)=>{t.font=`700 ${e.length>2?26:e.length>1?36:50}px Consolas, "Courier New", monospace`,t.fillText(e,n%8*64+32,Math.floor(n/8)*64+35)});let n=new Ei(e);return n.flipY=!1,n}var fm=class{max;points;n=0;pos;colr;size;vel;life;maxLife;s0;s1;c0;c1;grav;drag;glyph;geo=new gr;mat;constructor(e,t,n){this.max=e;let r=t=>new Float32Array(e*t);this.pos=r(3),this.colr=r(4),this.size=r(1),this.vel=r(3),this.life=r(1),this.maxLife=r(1),this.s0=r(1),this.s1=r(1),this.c0=r(4),this.c1=r(3),this.grav=r(1),this.drag=r(1),this.glyph=r(1),n&&this.geo.setAttribute(`aGlyph`,new nr(this.glyph,1).setUsage(qe)),this.geo.setAttribute(`position`,new nr(this.pos,3).setUsage(qe)),this.geo.setAttribute(`aColor`,new nr(this.colr,4).setUsage(qe)),this.geo.setAttribute(`aSize`,new nr(this.size,1).setUsage(qe)),this.mat=new _o({uniforms:{uScale:{value:600},tAtlas:{value:n??null}},vertexShader:n?cm:om,fragmentShader:n?lm:sm,transparent:!0,depthWrite:!1,blending:t?2:1}),this.points=new Ci(this.geo,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=20}a=new H;b=new H;emit(e){if(this.n>=this.max)return;let t=this.n++;this.pos[t*3]=e.pos.x,this.pos[t*3+1]=e.pos.y,this.pos[t*3+2]=e.pos.z,this.vel[t*3]=e.vel?.x??0,this.vel[t*3+1]=e.vel?.y??0,this.vel[t*3+2]=e.vel?.z??0,this.life[t]=this.maxLife[t]=e.life??.6,this.s0[t]=e.size??.2,this.s1[t]=e.size1??0,this.a.set(e.color),this.b.set(e.color1??e.color),this.c0[t*4]=this.a.r,this.c0[t*4+1]=this.a.g,this.c0[t*4+2]=this.a.b,this.c0[t*4+3]=e.alpha??1,this.c1[t*3]=this.b.r,this.c1[t*3+1]=this.b.g,this.c1[t*3+2]=this.b.b,this.grav[t]=e.gravity??0,this.drag[t]=e.drag??0,this.glyph[t]=e.glyph??Math.floor(Math.random()*32)}update(e){for(let t=0;t<this.n;t++){if(this.life[t]-=e,this.life[t]<=0){let e=--this.n;if(t!==e){for(let[n,r]of[[this.pos,3],[this.vel,3],[this.c0,4],[this.c1,3]])for(let i=0;i<r;i++)n[t*r+i]=n[e*r+i];for(let n of[this.life,this.maxLife,this.s0,this.s1,this.grav,this.drag,this.glyph])n[t]=n[e]}t--;continue}let n=1-this.life[t]/this.maxLife[t],r=Math.max(0,1-this.drag[t]*e);this.vel[t*3]*=r,this.vel[t*3+2]*=r,this.vel[t*3+1]=this.vel[t*3+1]*r-this.grav[t]*e;for(let r=0;r<3;r++)this.pos[t*3+r]+=this.vel[t*3+r]*e,this.colr[t*4+r]=this.c0[t*4+r]+(this.c1[t*3+r]-this.c0[t*4+r])*n;this.colr[t*4+3]=this.c0[t*4+3]*Math.min(1,(1-n)*3)*Math.min(1,n*12+.2),this.size[t]=this.s0[t]+(this.s1[t]-this.s0[t])*n}this.geo.setDrawRange(0,this.n);for(let e of[`position`,`aColor`,`aSize`,`aGlyph`])this.geo.attributes[e]&&(this.geo.attributes[e].needsUpdate=!0)}};function pm(e,t,n,r,i=28){let a=[],o=[],s=[];for(let c=0;c<=i;c++){let l=c/i,u=n+(r-n)*l;a.push(Math.sin(u)*e,0,Math.cos(u)*e,Math.sin(u)*t,0,Math.cos(u)*t),o.push(l,0,l,1),c<i&&s.push(c*2,c*2+1,c*2+2,c*2+1,c*2+3,c*2+2)}let c=new gr;return c.setAttribute(`position`,new U(a,3)),c.setAttribute(`uv`,new U(o,2)),c.setIndex(s),c}function mm(){let e=document.createElement(`canvas`);e.width=128,e.height=32;let t=e.getContext(`2d`),n=t.createImageData(128,32);for(let e=0;e<32;e++)for(let t=0;t<128;t++){let r=t/127,i=e/31,a=Math.sin(i*Math.PI)**.7*r**1.6*(r>.97?(1-r)/.03:1),o=i**3*r,s=(e*128+t)*4;n.data[s]=n.data[s+1]=n.data[s+2]=255*Math.min(1,a*.8+o),n.data[s+3]=255}return t.putImageData(n,0,0),new Ei(e)}var hm=new z,gm=new z,_m=class{scene;add=new fm(3500,!0);soft=new fm(900,!1);code=new fm(900,!1,dm());live=[];tex=mm();unitRing=new no(.86,1,56).rotateX(-Math.PI/2);unitDisc=new ji(1,48).rotateX(-Math.PI/2);unitTube=new Mi(1,1,1,24,1,!0).translate(0,.5,0);unitSphere=new ao(1,20,14);constructor(e){this.scene=e,e.add(this.add.points,this.soft.points,this.code.points)}setViewport(e,t){let n=e/(2*Math.tan(t*Math.PI/360));this.add.mat.uniforms.uScale.value=n,this.soft.mat.uniforms.uScale.value=n,this.code.mat.uniforms.uScale.value=n}emit(e,t=!1){(t?this.soft:this.add).emit(e)}glyph(e){this.code.emit(e)}glyphs(e,t,n=10,r=1,i=.5,a=1.6){for(let o=0;o<n;o++)gm.set(e.x+(Math.random()-.5)*r,e.y+Math.random()*r*.6,e.z+(Math.random()-.5)*r),hm.set((Math.random()-.5)*1.2,1.2+Math.random()*1.6,(Math.random()-.5)*1.2),this.code.emit({pos:gm,vel:hm,color:t,size:i*(.7+Math.random()*.6),life:a*(.7+Math.random()*.6),drag:.6})}burst(e,t,n=12,r=4,i=.25,a=.5,o={}){for(let s=0;s<n;s++)hm.set(Math.random()-.5,o.flat?0:Math.random()-.5,Math.random()-.5).normalize().multiplyScalar(r*(.4+Math.random()*.8)),hm.y+=o.up??0,this.emit({pos:e,vel:hm,life:a*(.6+Math.random()*.7),size:i*(.6+Math.random()*.8),color:t,color1:o.color1,gravity:o.gravity??0,drag:2.5},o.soft)}mat(e,t=1.6,n,r=2){let i=new Or({color:e,map:n??null,transparent:!0,blending:2,depthWrite:!1,side:r,toneMapped:!1,fog:!1});return i.color.multiplyScalar(t),i}spawn(e,t,n,r){return e.renderOrder=15,this.scene.add(e),this.live.push({obj:e,t:0,dur:t,step:n,mats:r}),e}slash(e,t,n){let r=n.r??2.4,i=this.mat(n.color,2.2,this.tex),a=new W(pm(r-(n.w??.9),r,n.a0,n.a1),i);a.position.copy(e).setY(e.y+(n.y??1)),a.rotation.set(n.pitch??0,t,n.tilt??0,`YXZ`),this.spawn(a,n.dur??.22,e=>{i.opacity=e<.25?e/.25:1-(e-.25)/.75,a.scale.setScalar(.9+e*.18)},[i]),a.geometry.userData.own=!0}ring(e,t,n,r,i,a=1.6){let o=this.mat(i,a),s=new W(this.unitRing,o);s.position.copy(e).setY(e.y+.08),this.spawn(s,r,e=>{let r=1-(1-e)**2.5;s.scale.setScalar(t+(n-t)*r),o.opacity=1-e},[o])}shock(e,t,n,r){let i=this.mat(r,.9,void 0,0),a=new W(this.unitSphere,i);a.position.copy(e),this.spawn(a,n,e=>{a.scale.setScalar(t*(.2+.8*(1-(1-e)**3))),i.opacity=.4*(1-e)},[i])}pillar(e,t,n,r,i){let a=this.mat(i,1.1,void 0,0),o=new W(this.unitTube,a),s=.6*Math.min(1,1.8/t);o.position.copy(e),this.spawn(o,r,e=>{o.scale.set(t*(1-e*.5),n*(.3+.7*Math.min(1,e*4)),t*(1-e*.5)),a.opacity=s*(1-e)},[a])}telegraph(e,t,n,r=`#ff3a2a`){let i=new mn,a=this.mat(r,1.3),o=this.mat(r,.6),s=new W(this.unitRing,a),c=new W(this.unitDisc,o);return s.scale.setScalar(t),i.add(s,c),i.position.copy(e).setY(e.y+.07),o.opacity=.35,this.spawn(i,n+.12,e=>{let r=Math.min(1,e*(n+.12)/n);c.scale.setScalar(Math.max(.01,t*r)),a.opacity=.9,o.opacity=r>=1?.6:.2},[a,o]),i}zone(e,t,n,r){let i=new mn,a=this.mat(r,1.2),o=this.mat(r,.3),s=new W(this.unitRing,a),c=new W(this.unitDisc,o),l=new W(this.unitRing,a);return s.scale.setScalar(t),c.scale.setScalar(t),l.scale.setScalar(t*.55),i.add(s,c,l),i.position.copy(e).setY(e.y+.09),this.spawn(i,n,(e,r)=>{let i=Math.min(1,e*8,(1-e)*6);a.opacity=.7*i,o.opacity=.14*i,l.rotation.y+=r*1.2,l.scale.setScalar(t*(.5+.08*Math.sin(e*n*3)))},[a,o]),i}beam(e,t,n,r,i){let a=this.mat(i,2.2),o=e.distanceTo(t),s=new W(this.unitTube,a);s.position.copy(e),s.quaternion.setFromUnitVectors(hm.set(0,1,0),gm.copy(t).sub(e).normalize()),this.spawn(s,r,e=>{let t=n*(1-e*.7);s.scale.set(t,o,t),a.opacity=1-e},[a])}clear(){for(let e of this.live)e.t=e.dur}update(e){this.add.update(e),this.soft.update(e),this.code.update(e);for(let t=this.live.length-1;t>=0;t--){let n=this.live[t];if(n.t+=e,n.step(Math.min(1,n.t/n.dur),e),n.t>=n.dur){this.scene.remove(n.obj);for(let e of n.mats)e.dispose();let e=n.obj;e.geometry?.userData.own&&e.geometry.dispose(),this.live.splice(t,1)}}}},vm={phys:{name:`무`,color:`#e8e8e8`,mark:``,markDesc:``,burst:``,burstDesc:``},blaze:{name:`화염`,color:`#ff7a2e`,mark:`화상`,markDesc:`지속적으로 화염 피해를 받습니다`,burst:`폭연`,burstDesc:`대상 위치에서 폭발해 주변 적에게 번집니다`,dot:.22},tide:{name:`물결`,color:`#3fa6ff`,mark:`젖음`,markDesc:`공격력 20% 감소`,burst:`밀물`,burstDesc:`주변 적을 밀쳐내고 현재 캐릭터의 생명력을 회복합니다`,weaken:.2},frost:{name:`서리`,color:`#a8e4ff`,mark:`둔화`,markDesc:`이동과 공격이 느려집니다`,burst:`빙결`,burstDesc:`대상을 잠시 얼려 버립니다`,slow:.4},volt:{name:`번개`,color:`#ffd23e`,mark:`감전`,markDesc:`지속적으로 약간의 번개 피해를 받습니다`,burst:`연쇄`,burstDesc:`번개가 근처 적 사이를 튑니다`,dot:.12},gale:{name:`질풍`,color:`#7df0c8`,mark:`균형 상실`,markDesc:`방어력 25% 감소`,burst:`소용돌이`,burstDesc:`주변 적을 한곳으로 끌어모읍니다`,defDown:.25},astral:{name:`별`,color:`#d59bff`,mark:`별일식`,markDesc:`받는 피해 10% 증가`,burst:`별폭발`,burstDesc:`단일 대상에 큰 피해를 주고 원소 에너지를 회복합니다`,vuln:.1},shade:{name:`그림자`,color:`#7a6cff`,mark:`악몽`,markDesc:`받는 피해 15% 증가`,burst:`꿈 침식`,burstDesc:`대상을 잠재우고 다음 공격의 피해가 두 배가 됩니다`,vuln:.15},radiance:{name:`빛`,color:`#fff3b8`,mark:`노광`,markDesc:`방어력 15% 감소`,burst:`광휘`,burstDesc:`범위 피해를 주고 파티 전체의 공격력을 높입니다`,defDown:.15}},ym=[`hips`,`spine`,`chest`,`neck`,`head`,`armL`,`foreL`,`handL`,`armR`,`foreR`,`handR`,`legL`,`shinL`,`footL`,`legR`,`shinR`,`footR`],bm=Object.fromEntries(ym.map((e,t)=>[e,t])),xm=3+ym.length*3,Sm=new Yt,Cm=new _t,wm=new V,Tm=new z,Em=new z,Dm=new z,Om=new z,km=class{p;root=new mn;j={};bones=[];chains=[];cols=[];tq=ym.map(()=>new _t);scale=1;springsReady=!1;prevRoot=new V;hasPrev=!1;constructor(e){this.p=e;let t=(e,t,n,r,i=0)=>{let a=new mn;return a.name=e,a.position.set(n,r,i),t.add(a),this.j[e]=a,a},n=t(`hips`,this.root,0,e.hipY),r=t(`chest`,t(`spine`,n,0,e.spine),0,e.chest);t(`head`,t(`neck`,r,0,e.neck),0,e.head);for(let[i,a]of[[`L`,1],[`R`,-1]]){let o=t(`arm${i}`,r,a*e.shoulderX,e.shoulderY),s=t(`fore${i}`,o,0,-e.upperArm);t(`hand${i}`,s,0,-e.foreArm);let c=t(`leg${i}`,n,a*e.hipX,-e.hipDrop),l=t(`shin${i}`,c,0,-e.thigh);t(`foot${i}`,l,0,-e.shin)}}apply(e,t,n){let r=t<=0?1:ld(n,t),i=this.j.hips;i.position.y+=(this.p.hipY+e[0]-i.position.y)*r,i.position.z+=(e[1]-i.position.z)*r;for(let t=0;t<ym.length;t++){let n=e[3+t*3],i=e[4+t*3],a=e[5+t*3],o=ym[t],s=o.endsWith(`R`)?-1:1;t<5?Sm.set(n,i,-a):o.startsWith(`arm`)?Sm.set(-n,-s*a,s*i):o.startsWith(`fore`)?Sm.set(-n,s*i,s*a):o.startsWith(`hand`)?Sm.set(n,s*i,s*a):o.startsWith(`leg`)?Sm.set(-n,s*a,s*i):o.startsWith(`shin`)?Sm.set(n,0,0):Sm.set(n,s*i,0),this.tq[t].setFromEuler(Sm),this.j[o].quaternion.slerp(this.tq[t],r)}}addChain(e,t,n={}){let r={bones:[],lens:[],axes:[],tails:[],prev:[],stiff:n.stiff??2.2,drag:n.drag??.35,grav:n.grav??.5,radius:n.radius??.02,maxAngle:n.maxAngle??1.2},i=[],a=e;for(let e=0;e<t.length-1;e++){let n=new Qr;n.position.copy(t[e]),e>0&&n.position.sub(t[e-1]),a.add(n),a=n;let o=t[e+1].clone().sub(t[e]);r.lens.push(o.length()),r.axes.push(o.normalize()),r.bones.push(n),r.tails.push(new z),r.prev.push(new z),i.push(this.bones.length),this.bones.push(n)}return this.chains.push(r),i}addCollider(e,t,n){this.cols.push({o:e,off:new z(...t),r:n,w:new z})}resetSprings(){this.root.updateMatrixWorld(!0);for(let e of this.chains)e.bones.forEach((t,n)=>{t.quaternion.identity(),t.updateMatrix(),t.matrixWorld.multiplyMatrices(t.parent.matrixWorld,t.matrix),e.tails[n].copy(e.axes[n]).multiplyScalar(e.lens[n]).applyMatrix4(t.matrixWorld),e.prev[n].copy(e.tails[n])});this.prevRoot.copy(this.root.matrixWorld),this.hasPrev=!0,this.springsReady=!0}updateSprings(e){if(!this.chains.length)return;if(!this.springsReady)return this.resetSprings();e=Math.min(e,1/30),this.root.updateMatrixWorld(!0);let t=this.root.matrixWorld;if(this.hasPrev){let e=wm.copy(this.prevRoot).invert().premultiply(t),n=Tm.setFromMatrixPosition(t).distanceTo(Em.setFromMatrixPosition(this.prevRoot)),r=Math.abs(Math.atan2(e.elements[8],e.elements[10])),i=n>1.2||r>.4?1:.3;for(let t of this.chains)for(let n=0;n<t.tails.length;n++)t.tails[n].lerp(Dm.copy(t.tails[n]).applyMatrix4(e),i),t.prev[n].lerp(Dm.copy(t.prev[n]).applyMatrix4(e),i)}this.prevRoot.copy(t),this.hasPrev=!0;for(let e of this.cols)e.w.copy(e.off).applyMatrix4(e.o.matrixWorld);for(let t of this.chains)for(let n=0;n<t.bones.length;n++){let r=t.bones[n],i=r.parent.matrixWorld,a=t.lens[n]*this.scale,o=Tm.copy(r.position).applyMatrix4(i),s=Em.copy(t.axes[n]).transformDirection(i),c=t.tails[n],l=t.prev[n],u=Dm.copy(c).sub(l).multiplyScalar(1-t.drag).add(c);u.addScaledVector(s,t.stiff*e*this.scale),u.y-=t.grav*e*this.scale,u.sub(o).normalize().multiplyScalar(a).add(o);for(let e of this.cols){let n=(e.r+t.radius)*this.scale;Om.copy(u).sub(e.w),Om.lengthSq()<n*n&&(u.copy(e.w).addScaledVector(Om.normalize(),n),u.sub(o).normalize().multiplyScalar(a).add(o))}let d=Om.copy(u).sub(o).normalize(),f=d.angleTo(s);f>t.maxAngle&&(Cm.setFromUnitVectors(s,d),d.copy(s).applyQuaternion(Cm.slerp(new _t,1-t.maxAngle/f)).normalize(),u.copy(o).addScaledVector(d,a)),l.copy(c),c.copy(u),d.transformDirection(wm.copy(i).invert()),r.quaternion.setFromUnitVectors(t.axes[n],d),r.updateMatrix(),r.matrixWorld.multiplyMatrices(i,r.matrix)}}},Am=Math.PI*2,jm=1024;function Mm(e,t,n,r,i,a,o,s,c){let l=(o.tilt??.06)+(c===`fierce`?.07:0);if(e.save(),e.translate(t,n),e.scale(a,1),e.lineCap=`round`,e.lineJoin=`round`,c===`blink`||c===`hurt`){e.strokeStyle=o.lash,e.lineWidth=i*.085,e.beginPath(),c===`hurt`?(e.moveTo(r*.46,-i*.24),e.lineTo(-r*.32,i*.06),e.lineTo(r*.46,i*.32)):(e.moveTo(-r*.5,i*.04),e.quadraticCurveTo(0,i*.36,r*.52,-i*.02-l*i),e.moveTo(r*.52,-i*.02-l*i),e.lineTo(r*.64,-i*.1-l*i)),e.stroke(),e.restore();return}let u=c===`fierce`?i*.88:i,d=-l*u,f=new Path2D;f.moveTo(-r*.5,u*.1),f.bezierCurveTo(-r*.4,-u*.46,r*.16,-u*.62,r*.5,-u*.18+d),f.bezierCurveTo(r*.48,u*.36,-r*.16,u*.54,-r*.5,u*.1),e.fillStyle=`#fffdfd`,e.fill(f),e.save(),e.clip(f);let p=e.createLinearGradient(0,-u*.62,0,u*.08);p.addColorStop(0,`rgba(120,105,155,0.62)`),p.addColorStop(1,`rgba(120,105,155,0)`),e.fillStyle=p,e.fillRect(-r,-u,r*2,u*2);let m=-r*.015,h=u*.02,g=r*.345,_=u*.5,v=e.createLinearGradient(0,h-_,0,h+_);v.addColorStop(0,s[0]),v.addColorStop(.5,s[1]),v.addColorStop(1,s[2]),e.fillStyle=v,e.beginPath(),e.ellipse(m,h,g,_,0,0,Am),e.fill(),e.save(),e.beginPath(),e.ellipse(m,h,g,_,0,0,Am),e.clip(),e.strokeStyle=`rgba(255,255,255,0.13)`,e.lineWidth=r*.012;for(let t=0;t<28;t++){let n=t/28*Am+.1;e.beginPath(),e.moveTo(m+Math.cos(n)*g*.42,h+Math.sin(n)*_*.42),e.lineTo(m+Math.cos(n)*g*.96,h+Math.sin(n)*_*.96),e.stroke()}let y=e.createRadialGradient(m,h+_*.75,0,m,h+_*.75,g*.95);y.addColorStop(0,`rgba(255,255,255,0.62)`),y.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=y,e.fillRect(-r,-u,r*2,u*2);let b=e.createLinearGradient(0,h-_,0,h+_*.1);b.addColorStop(0,`rgba(14,8,40,0.7)`),b.addColorStop(1,`rgba(14,8,40,0)`),e.fillStyle=b,e.fillRect(-r,-u,r*2,u*2),e.restore(),e.lineWidth=r*.036,e.strokeStyle=s[0],e.beginPath(),e.ellipse(m,h,g,_,0,0,Am),e.stroke();let x=e.createRadialGradient(m,h-_*.02,0,m,h-_*.02,g*.5);x.addColorStop(0,o.pupil),x.addColorStop(.72,o.pupil),x.addColorStop(1,`rgba(0,0,0,0)`),e.fillStyle=o.pupilShape===`slit`?o.pupil:x,e.beginPath(),o.pupilShape===`slit`?e.ellipse(m,h-_*.02,g*.15,_*.68,0,0,Am):e.ellipse(m,h-_*.02,g*.46,_*.52,0,0,Am),e.fill(),e.strokeStyle=`rgba(255,255,255,0.22)`,e.lineWidth=r*.014,e.beginPath(),e.ellipse(m,h,g*.68,_*.7,0,0,Am),e.stroke(),e.restore(),e.fillStyle=`#ffffff`,e.beginPath(),e.ellipse(m-g*.4,h-_*.42,g*.33,_*.25,-.45,0,Am),e.fill();let S=m+g*.44,C=h+_*.32,w=g*.34;if(e.beginPath(),o.sparkle===`star`){for(let t=0;t<8;t++){let n=t/8*Am,r=t%2?w*.28:w;e.lineTo(S+Math.sin(n)*r,C-Math.cos(n)*r)}e.closePath()}else o.sparkle===`moon`?(e.arc(S,C,w*.8,.7,.7+Math.PI*1.45),e.arc(S+w*.34,C-w*.14,w*.62,.7+Math.PI*1.36,.82,!0),e.closePath()):e.arc(S,C,g*.14,0,Am);e.fill(),e.globalAlpha=.85,e.beginPath(),e.arc(m-g*.05,h-_*.68,g*.07,0,Am),e.fill(),e.globalAlpha=1;let T=(o.lid??0)*u;T>0&&(e.save(),e.clip(f),e.fillStyle=o.skin,e.beginPath(),e.moveTo(-r,-u),e.lineTo(r,-u),e.lineTo(r,-u*.2+d+T),e.bezierCurveTo(r*.18,-u*.68+T,-r*.43,-u*.5+T,-r*.6,u*.14),e.closePath(),e.fill(),e.restore(),e.translate(0,T)),e.fillStyle=o.lash,e.beginPath(),e.moveTo(-r*.56,u*.14),e.bezierCurveTo(-r*.43,-u*.52,r*.18,-u*.7,r*.56,-u*.22+d),e.lineTo(r*.72,-u*.4+d),e.bezierCurveTo(r*.22,-u*.9,-r*.5,-u*.68,-r*.56,u*.14),e.fill();for(let[t,n,i]of[[.5,-.3,.7],[.4,-.5,.56]])e.beginPath(),e.moveTo(r*t,u*n+d),e.lineTo(r*(i+.04),u*(n-.2)+d),e.lineTo(r*(t-.1),u*(n-.08)+d),e.fill();T>0&&e.translate(0,-T),e.strokeStyle=o.lash,e.globalAlpha=.75,e.lineWidth=u*.022,e.beginPath(),e.moveTo(r*.48,u*.2),e.quadraticCurveTo(r*.36,u*.42,r*.08,u*.49),e.stroke();for(let t=0;t<(o.lowerLash??0);t++){let n=.42-t*.13;e.beginPath(),e.moveTo(r*n,u*(.31+t*.07)),e.lineTo(r*(n+.07),u*(.44+t*.07)),e.stroke()}e.globalAlpha=1,e.strokeStyle=`rgba(170,100,100,0.5)`,e.lineWidth=u*.02,e.beginPath(),e.moveTo(-r*.3,-u*.72),e.quadraticCurveTo(r*.12,-u*.96,r*.5,-u*.62+d),e.stroke(),e.restore()}function Nm(e,t){let n=document.createElement(`canvas`);n.width=n.height=jm;let r=n.getContext(`2d`),i=jm/2;r.fillStyle=e.skin,r.fillRect(0,0,jm,jm);let a=r.createLinearGradient(0,0,0,jm*.44);a.addColorStop(0,`rgba(196,118,120,0.5)`),a.addColorStop(.7,`rgba(196,118,120,0.16)`),a.addColorStop(1,`rgba(196,118,120,0)`),r.fillStyle=a,r.fillRect(0,0,jm,jm*.44);for(let e of[0,1]){let t=r.createLinearGradient(e?jm:0,0,e?jm*.8:jm*.2,0);t.addColorStop(0,`rgba(200,120,120,0.3)`),t.addColorStop(1,`rgba(200,120,120,0)`),r.fillStyle=t,r.fillRect(e?jm*.8:0,0,jm*.2,jm)}let o=jm*(e.eyeW??.232),s=jm*(e.eyeH??.232),c=jm*.598,l=jm*.226;for(let n of[-1,1]){let a=i+n*jm*.275,u=743.424,d=r.createRadialGradient(a,u,4,a,u,jm*.1);d.addColorStop(0,e.blush??`rgba(255,128,140,0.45)`),d.addColorStop(1,`rgba(255,128,140,0)`),r.fillStyle=d,r.fillRect(0,0,jm,jm),r.strokeStyle=`rgba(245,110,125,0.5)`,r.lineWidth=3.5,r.lineCap=`round`;for(let e=-1;e<=1;e++)r.beginPath(),r.moveTo(a+e*20-7,752.424),r.lineTo(a+e*20+7,734.424),r.stroke();Mm(r,i+n*l,c,o,s,n,e,n<0?e.irisR??e.iris:e.iris,t);let f=c-s*.9,p=t===`fierce`?.14:t===`hurt`?-.12:0,m=i+n*(l-o*.44),h=i+n*(l+o*.52),g=i+n*l;r.fillStyle=e.brow,r.beginPath(),r.moveTo(m,f+s*p-6),r.quadraticCurveTo(g,f-s*.15-5,h,f-s*p*.7+2),r.quadraticCurveTo(g,f-s*.15+5,m,f+s*p+6),r.fill()}let u=r.createLinearGradient(0,jm*.84,0,jm);u.addColorStop(0,`rgba(206,126,120,0)`),u.addColorStop(1,`rgba(206,126,120,0.34)`),r.fillStyle=u,r.fillRect(0,jm*.84,jm,jm*.16),r.strokeStyle=`rgba(205,120,110,0.8)`,r.lineWidth=5,r.lineCap=`round`,r.beginPath(),r.moveTo(514,jm*.722),r.quadraticCurveTo(521,jm*.735,515,jm*.745),r.stroke(),r.fillStyle=`rgba(255,255,255,0.55)`,r.beginPath(),r.arc(506,jm*.727,5,0,Am),r.fill();let d=jm*.822,f=e.mouth??`smile`;if(r.strokeStyle=`#a44c56`,r.lineWidth=6.5,r.beginPath(),t===`fierce`||t===`hurt`||f===`fang`){let e=t===`hurt`?18:t===`fierce`?30:26,n=f===`fang`&&t===`neutral`?58:34;r.fillStyle=`#8a3644`,r.moveTo(i-n,835.728),r.quadraticCurveTo(i,845.728,i+n,835.728),r.quadraticCurveTo(i,d+e*2,i-n,835.728),r.fill(),r.fillStyle=`#f08a96`,r.beginPath(),r.ellipse(i,d+e*.72,n*.5,e*.3,0,0,Am),r.fill(),f===`fang`&&(r.fillStyle=`#fff`,r.beginPath(),r.moveTo(i+n*.42,838.728),r.lineTo(i+n*.58,859.728),r.lineTo(i+n*.74,837.728),r.fill())}else f===`cat`?(r.moveTo(472,835.728),r.quadraticCurveTo(492,857.728,i,839.728),r.quadraticCurveTo(532,857.728,552,835.728),r.stroke()):f===`flat`?(r.moveTo(488,d),r.quadraticCurveTo(i,846.728,536,d),r.stroke()):(r.moveTo(480,837.728),r.quadraticCurveTo(i,857.728,544,837.728),r.stroke());return e.lip&&f!==`fang`&&(t===`neutral`||t===`blink`)&&(r.fillStyle=e.lip,r.globalAlpha=.6,r.beginPath(),r.ellipse(i,850.728,22,11,0,0,Math.PI),r.fill(),r.globalAlpha=1,r.fillStyle=`rgba(255,255,255,0.75)`,r.beginPath(),r.ellipse(518,854.728,6,2.6,0,0,Am),r.fill()),r.fillStyle=`rgba(210,125,120,0.35)`,r.beginPath(),r.ellipse(i,873.728,20,5,0,0,Am),r.fill(),n}function Pm(e){let t={},n={};for(let r of[`neutral`,`blink`,`fierce`,`hurt`]){n[r]=Nm(e,r);let i=new Ei(n[r]);i.colorSpace=Ve,i.anisotropy=8,t[r]=i}return{tex:t,portrait:n.neutral}}var Fm=z;function Im(e,t,n,r=12){return new ao(1,r,Math.max(6,Math.round(r*.7))).scale(e,t,n)}function Lm(e,t){let n=new Wi(e,!1,`catmullrom`,.5),r=t.seg??8,i=t.t??t.w*.42,a=t.taper??2.2,o=t.rootW??.6,s=t.tipW??.05,c=[],l=[],u=[],d=[],f=new H(t.c0),p=new H(t.c1??t.c0),m=new H,h=new Fm,g=new Fm,_=new Fm,v=new Fm,y=t.flat?[[-1,.12],[-.5,.2],[.5,.2],[1,.12],[.5,-.12],[-.5,-.12]]:[[-1,0],[-.72,.64],[0,1],[.72,.64],[1,0],[0,-.3]];for(let e=0;e<=r;e++){let d=e/r;n.getPoint(d,h),n.getTangent(d,g),t.center?_.copy(h).sub(t.center):_.copy(t.up??new Fm(0,0,1)),_.addScaledVector(g,-_.dot(g)),_.lengthSq()<1e-8&&_.set(0,0,1).addScaledVector(g,-g.z),_.normalize(),v.crossVectors(g,_).normalize();let b=Math.max(s,(o+(1-o)*Math.min(1,d/.2))*(1-d**+a)),x=t.w*b,S=i*b;m.copy(f).lerp(p,d**1.3);for(let[e,t]of y)c.push(h.x+v.x*e*x+_.x*t*S,h.y+v.y*e*x+_.y*t*S,h.z+v.z*e*x+_.z*t*S),l.push(m.r,m.g,m.b),u.push(d)}for(let e=0;e<r;e++)for(let t=0;t<6;t++){let n=e*6+t,r=e*6+(t+1)%6,i=n+6,a=r+6;d.push(n,r,i,r,a,i)}return Rm(c,l,u,d)}function Rm(e,t,n,r){let i=new gr;return i.setAttribute(`position`,new U(e,3)),i.setAttribute(`color`,new U(t,3)),i.setAttribute(`sParam`,new U(n,1)),i.setIndex(r),i.computeVertexNormals(),i}function zm(e,t,n,r=14,i=10,a=1){let o=new Wi(e,!1,`catmullrom`,.5),s=[],c=[],l=[],u=[],d=new Fm,f=new Fm,p=new Fm,m=new Fm,h=new H,g=new Fm(0,1,0);for(let e=0;e<=r;e++){let u=e/r,_=t(u);o.getPoint(u,d),o.getTangent(u,f),p.copy(g).addScaledVector(f,-g.dot(f)),p.lengthSq()<1e-6&&p.set(0,0,-1).addScaledVector(f,f.z),p.normalize(),g=p.clone(),m.crossVectors(f,p).normalize();for(let e=0;e<i;e++){let t=e/i*Math.PI*2,r=Math.cos(t)*_,o=Math.sin(t)*_*a;s.push(d.x+m.x*r+p.x*o,d.y+m.y*r+p.y*o,d.z+m.z*r+p.z*o),n(u,t,h),c.push(h.r,h.g,h.b),l.push(u)}}for(let e=0;e<r;e++)for(let t=0;t<i;t++){let n=e*i+t,r=e*i+(t+1)%i,a=n+i,o=r+i;u.push(n,a,r,r,a,o)}return Rm(s,c,l,u)}function Bm(e,t,n,r=t[0]){let i=e.attributes.sParam,a=i.count,o=t.length,s=new Uint16Array(a*4),c=new Float32Array(a*4);for(let e=0;e<a;e++){let a=i.getX(e);if(a<=n[0]){s[e*4]=r,c[e*4]=1;continue}let l=0;for(;l<o-1&&a>=n[l+1];)l++;let u=Math.min(1,(a-n[l])/(n[l+1]-n[l]));s[e*4]=t[l],l+1<o?(s[e*4+1]=t[l+1],c[e*4]=1-u,c[e*4+1]=u):c[e*4]=1}return e.setAttribute(`skinIndex`,new nr(s,4)),e.setAttribute(`skinWeight`,new nr(c,4)),e.deleteAttribute(`sParam`),e}function Vm(e,t){let n=e.attributes.position.count,r=new Uint16Array(n*4),i=new Float32Array(n*4);for(let e=0;e<n;e++)r[e*4]=t,i[e*4]=1;return e.setAttribute(`skinIndex`,new nr(r,4)),e.setAttribute(`skinWeight`,new nr(i,4)),e.attributes.sParam&&e.deleteAttribute(`sParam`),e}var Hm=e=>e>Math.PI?e-Math.PI*2:e;function Um(e){let t=e.rows??8,n=e.cols??48,r=e.zs??.86,i=e.pleats??0,a=e.pleatAmp??.05,o=e.flare??.8,s=[],c=[],l=[],u=[],d=[],f=new H;for(let d=0;d<=t;d++){let p=(e.v0??0)+(1-(e.v0??0))*(d/t);for(let t=0;t<=n;t++){let d=t/n*Math.PI*2,m=e.len*(e.lenFn?e.lenFn(Hm(d)):1),h=od(e.r0,e.r1,p**+o)*(1+(i?a*p*Math.cos(i*d):0));s.push(Math.sin(d)*h,e.y-m*p,Math.cos(d)*h*r),e.col(Hm(d),p,f),c.push(f.r,f.g,f.b),l.push(d),u.push(p)}}for(let r=0;r<t;r++)for(let t=0;t<n;t++){if(e.skip?.(Hm((t+.5)/n*Math.PI*2)))continue;let i=r*(n+1)+t,a=i+1,o=i+n+1,s=o+1;d.push(i,o,a,a,o,s)}let p=new gr;p.setAttribute(`position`,new U(s,3)),p.setAttribute(`color`,new U(c,3)),p.setAttribute(`aPhi`,new U(l,1)),p.setAttribute(`aV`,new U(u,1)),p.setIndex(d),p.computeVertexNormals();let m=p.attributes.normal;for(let e=0;e<=t;e++){let t=e*(n+1),r=t+n,i=m.getX(t)+m.getX(r),a=m.getY(t)+m.getY(r),o=m.getZ(t)+m.getZ(r),s=Math.hypot(i,a,o)||1;m.setXYZ(t,i/s,a/s,o/s),m.setXYZ(r,i/s,a/s,o/s)}return p}function Wm(e,t,n=0){let r=e.attributes.aPhi,i=e.attributes.aV,a=r.count,o=t.length,s=t[0].length,c=new Uint16Array(a*4),l=new Float32Array(a*4);for(let e=0;e<a;e++){let a=((r.getX(e)-n)/(Math.PI*2)%1+1)%1*o,u=Math.floor(a)%o,d=(u+1)%o,f=a-Math.floor(a),p=Math.min(i.getX(e)*s,s-1e-4),m=Math.floor(p),h=Math.min(m+1,s-1),g=h===m?0:p-m;c[e*4]=t[u][m],l[e*4]=(1-f)*(1-g),c[e*4+1]=t[u][h],l[e*4+1]=(1-f)*g,c[e*4+2]=t[d][m],l[e*4+2]=f*(1-g),c[e*4+3]=t[d][h],l[e*4+3]=f*g}return e.setAttribute(`skinIndex`,new nr(c,4)),e.setAttribute(`skinWeight`,new nr(l,4)),e.deleteAttribute(`aPhi`),e.deleteAttribute(`aV`),e}function Gm(e,t={}){let n=t.jaw??.42,r=t.cheek??.05,i=t.len??1.06,a=t.chin??0,o=1.1*e-.006,s=(t,s,c,l)=>{let u=s<0?-s:0,d=Math.min(1,Math.max(0,c/.35)),f=d*d*(3-2*d),p=Math.exp(-(((u-.42)/.26)**2)),m=Math.min(1,Math.max(0,(u-.72)/.28)),h=.97*(1-n*u**2.3)*(1+r*p)*(1-a*m*m),g=s<0?i:1,_=(c>0?.93:1.03)*(1-.26*u**1.8);l.set(t*h,s*g,c*_).multiplyScalar(e);let v=.06*Math.exp(-((t/.15)**2+((s+.2)/.11)**2)),y=r*.55*Math.exp(-(((Math.abs(t)-.5)/.24)**2+((s+.34)/.2)**2));return l.z+=e*f*(.085*u*u+v+y),l.y+=o,l},c=e=>{let t=new ao(1,32,36,e,Math.PI),n=t.attributes.position,r=t.attributes.normal,i=new Fm,a=new Fm,o=new Fm,c=new Fm,l=new Fm,u=new Fm,d=new Fm;for(let e=0;e<n.count;e++)i.fromBufferAttribute(n,e).normalize(),l.set(-i.z,0,i.x),l.lengthSq()<1e-6&&l.set(1,0,0),l.normalize(),u.crossVectors(i,l).normalize(),s(i.x,i.y,i.z,a),d.copy(i).addScaledVector(l,.03).normalize(),s(d.x,d.y,d.z,o),d.copy(i).addScaledVector(u,.03).normalize(),s(d.x,d.y,d.z,c),o.sub(a),c.sub(a),d.crossVectors(o,c).normalize(),d.dot(i)<0&&d.negate(),n.setXYZ(e,a.x,a.y,a.z),r.setXYZ(e,d.x,d.y,d.z);return t},l=c(0),u=c(Math.PI),d=l.attributes.position,f=l.attributes.uv;l.computeBoundingBox();let p=l.boundingBox;for(let e=0;e<d.count;e++)f.setXY(e,(d.getX(e)-p.min.x)/(p.max.x-p.min.x),(d.getY(e)-p.min.y)/(p.max.y-p.min.y));return{front:l,back:u,cy:o,top:o+e}}var Km=(e,t,n,r,i)=>.5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*i*i+(-e+3*t-3*n+r)*i*i*i);function qm(e,t,n){let r=0;for(;r<e.length-2&&t>e[r+1].y;)r++;let i=e[r],a=e[r+1],o=Math.min(1,Math.max(0,(t-i.y)/(a.y-i.y)));return Km(n(e[Math.max(0,r-1)]),n(i),n(a),n(e[Math.min(e.length-1,r+2)]),o)}function Jm(e,t={}){let n=t.y0??e[0].y,r=t.y1??e[e.length-1].y,i=Math.max(2,Math.ceil((r-n)/(t.step??.014))),a=t.radial??18,o=2/(t.n??2.3),s=[],c=[],l=[];for(let l=0;l<=i;l++){let u=n+(r-n)*l/i,d=Math.max(.001,qm(e,u,e=>e.w)),f=Math.max(.001,qm(e,u,e=>e.d??e.w)),p=Math.max(.001,qm(e,u,e=>e.db??e.d??e.w)),m=qm(e,u,e=>e.zc??0);for(let e=0;e<a;e++){let n=e/a*Math.PI*2,r=Math.cos(n),i=Math.sin(n),l=d*Math.sign(r)*Math.abs(r)**+o,h=Math.sign(i)*Math.abs(i)**+o,g=m+(h>0?f:p)*h;t.bump&&h>0&&(g+=t.bump(l,u)*h),s.push(l,u,g),c.push(u)}}for(let e=0;e<i;e++)for(let t=0;t<a;t++){let n=e*a+t,r=e*a+(t+1)%a,i=n+a,o=r+a;l.push(n,i,r,r,i,o)}let u=(t,n,r)=>{let i=s.length/3,o=qm(e,n,e=>e.zc??0);s.push(0,n,o),c.push(n);for(let e=0;e<a;e++){let n=t*a+e,o=t*a+(e+1)%a;r?l.push(i,n,o):l.push(i,o,n)}};t.cap0&&u(0,n,!0),t.cap1&&u(i,r,!1);let d=new gr;return d.setAttribute(`position`,new U(s,3)),d.setAttribute(`aY`,new U(c,1)),d.setIndex(l),d.computeVertexNormals(),d}function Ym(e,t){let n=e.attributes.aY,r=n.count,i=new Uint16Array(r*4),a=new Float32Array(r*4);for(let e=0;e<r;e++){let r=n.getX(e),o=0;for(;o<t.length-2&&r>t[o+1][0];)o++;let s=t[o],c=t[o+1],l=Math.min(1,Math.max(0,(r-s[0])/(c[0]-s[0])));s[1]===c[1]?(i[e*4]=s[1],a[e*4]=1):(i[e*4]=s[1],a[e*4]=1-l,i[e*4+1]=c[1],a[e*4+1]=l)}return e.setAttribute(`skinIndex`,new nr(i,4)),e.setAttribute(`skinWeight`,new nr(a,4)),e.deleteAttribute(`aY`),e}function Xm(e,t=.25,n=.25){let r=new da;for(let n=0;n<8;n++){let i=n/8*Math.PI*2,a=n%2?e*t:e;n===0?r.moveTo(Math.sin(i)*a,Math.cos(i)*a):r.lineTo(Math.sin(i)*a,Math.cos(i)*a)}let i=new Ya(r,{depth:e*n,bevelEnabled:!0,bevelSize:e*.06,bevelThickness:e*.1,bevelSegments:1});return i.translate(0,0,-e*n*.5),i}function Zm(e,t){let n=n=>{let r=new ao(1,12,8).scale(e*.26,t*.5,e*.11),i=r.attributes.position;for(let t=0;t<i.count;t++){let r=Math.min(1,Math.max(0,n*i.getX(t)/(e*.26)*.5+.5));i.setY(t,i.getY(t)*(.28+.72*r**.8)),i.setZ(t,i.getZ(t)*(.45+.55*r))}return r.computeVertexNormals(),r.translate(n*e*.25,0,0),r.rotateZ(n*.16),r},r=n=>{let r=new G(e*.15,t*.95,e*.03);return r.translate(0,-t*.5,0),r.rotateZ(n*.32),r.translate(n*e*.03,-t*.12,-e*.01),r};return[n(1),n(-1),new ao(t*.22,10,8).scale(1,1.1,.9),r(1),r(-1)]}var Qm=class{rig;root;mats=[];outline;outlineHair;faceMat=null;faceTex=null;portrait=null;parts={};expr=`neutral`;blinkT=2;constructor(e){this.rig=e,this.root=e.root}setExpr(e){e!==this.expr&&this.faceMat&&this.faceTex&&(this.expr=e,this.faceMat.map=this.faceTex[e])}updateFace(e,t){this.blinkT-=e,this.blinkT<-.12&&(this.blinkT=1.8+Math.random()*3.5),this.setExpr(t===`neutral`&&this.blinkT<0?`blink`:t)}setFlash(e){for(let t of this.mats)t.emissive.setScalar(e*.55);this.outline.uniforms.uFlash.value=e,this.outlineHair.uniforms.uFlash.value=e}},$m=class{rig;rigid=new Map;skinned={cloth:[],hair:[],skin:[]};fixed=new Map;face=null;atlas=null;cells=new Map;decalRigid=new Map;decalSkin=[];model;constructor(e){this.rig=e,this.model=new Qm(e)}J(e){return typeof e==`string`?this.rig.j[e]:e}add(e,t,n=null,r=`cloth`,i,a,o){(i||a||o)&&Y(t,i,a,o),n!=null&&J(t,n);let s=this.J(e),c=this.rigid.get(s);return c||this.rigid.set(s,c={}),(c[r]??=[]).push(t),this}mount(e,t,n=[0,0,0],r=[0,0,0]){let i=new mn;return i.position.set(...n),i.rotation.set(...r),this.J(t).add(i),this.model.parts[e]=i,i}fixedBone(e){let t=this.J(e),n=this.fixed.get(t);if(n===void 0){let e=new Qr;t.add(e),n=this.rig.bones.length,this.rig.bones.push(e),this.fixed.set(t,n)}return n}addSkinned(e,t,n=`cloth`){return this.rig.root.updateMatrixWorld(!0),t.applyMatrix4(this.J(e).matrixWorld),this.skinned[n].push(t),this}setFace(e,t){this.face={geo:e,style:t}}decal(e,t,n,r,i,a=[0,0,0],o){this.atlas||(this.atlas=document.createElement(`canvas`),this.atlas.width=this.atlas.height=1024);let s=this.cells.get(t);if(s===void 0){if(s=this.cells.size,s>=16)throw Error(`贴花图集放不下了`);this.cells.set(t,s);let e=this.atlas.getContext(`2d`);e.save(),e.beginPath(),e.rect(s%4*256,Math.floor(s/4)*256,256,256),e.clip(),e.translate((s%4+.5)*256,(Math.floor(s/4)+.5)*256),e.scale(250.88,250.88),n(e),e.restore()}let c=new to(r,r),l=c.attributes.uv,u=s%4,d=Math.floor(s/4);for(let e=0;e<l.count;e++)l.setXY(e,(u+l.getX(e))/4,1-(d+1-l.getY(e))/4);c.applyMatrix4(new V().compose(new z(...i),new _t().setFromEuler(new Yt(a[0],a[1],a[2],`YXZ`)),new z(1,1,1)));let f=this.J(e);if(o!==void 0)this.rig.root.updateMatrixWorld(!0),c.applyMatrix4(f.matrixWorld),this.decalSkin.push(Vm(c,o));else{let e=this.decalRigid.get(f);e||this.decalRigid.set(f,e=[]),e.push(c)}return this}build(){let e=this.model,t=this.rig,n={cloth:Kd(`cloth`,{side:2}),skin:Kd(`skin`),hair:Kd(`hair`,{side:2}),glow:qd(16777215,1.35,!0)};e.mats.push(n.cloth,n.skin,n.hair),e.outline=Xd(.0054,`#6a4458`),e.outlineHair=Xd(.0042,`#9a7890`);for(let[t,r]of this.rigid)for(let i of Object.keys(r)){let a=new W(bf(r[i]),n[i]);a.castShadow=i!==`glow`,t.add(a),i!==`glow`&&Zd(a,i===`hair`?e.outlineHair:e.outline)}if(this.face){let n=Pm(this.face.style);e.faceTex=n.tex,e.portrait=n.portrait,e.faceMat=Kd(`face`,{map:n.tex.neutral,vertexColors:!1}),e.mats.push(e.faceMat);let r=new W(this.face.geo,e.faceMat);t.j.head.add(r),J(this.face.geo,this.face.style.skin),Zd(r,e.outline)}t.root.updateMatrixWorld(!0);let r=t.bones.length?new ni(t.bones):null;if(this.atlas){let n=new Ei(this.atlas);n.colorSpace=Ve,n.anisotropy=8;let i=Kd(`cloth`,{map:n,vertexColors:!1,side:2});i.alphaTest=.5,i.polygonOffset=!0,i.polygonOffsetFactor=-2,i.polygonOffsetUnits=-2,e.mats.push(i);for(let[e,t]of this.decalRigid)e.add(new W(lf(t,!1),i));if(this.decalSkin.length&&r){let e=new Zr(lf(this.decalSkin,!1),i);t.root.add(e),e.bind(r),e.frustumCulled=!1}}for(let i of[`cloth`,`hair`,`skin`]){if(!this.skinned[i].length||!r)continue;let a=new Zr(bf(this.skinned[i]),n[i]);t.root.add(a),a.bind(r),a.frustumCulled=!1,a.castShadow=!0,Zd(a,i===`hair`?e.outlineHair:e.outline)}return e}},eh=z,th={hipY:.9,spine:.09,chest:.12,neck:.215,head:.055,shoulderX:.142,shoulderY:.168,upperArm:.245,foreArm:.215,hipX:.075,hipDrop:.04,thigh:.42,shin:.385},nh=.114,rh=new eh(0,.1274,-.004),ih=nh*1.075,ah=(e,t)=>new eh(Math.sin(t)*Math.sin(e),Math.cos(t),Math.sin(t)*Math.cos(e)),oh=(e,t,n=1)=>rh.clone().addScaledVector(ah(e,t),ih*n),sh=(e,t,n)=>new eh(Math.sin(e)*t,n,Math.cos(e)*t),ch=(e,t,n)=>new H(e).lerp(new H(t),n),lh=[{y:-.115,w:.03,d:.03},{y:-.09,w:.09,d:.078},{y:-.05,w:.122,d:.094},{y:0,w:.13,d:.098},{y:.05,w:.116,d:.086},{y:.105,w:.094,d:.07},{y:.16,w:.093,d:.07},{y:.21,w:.103,d:.078},{y:.27,w:.118,d:.088,db:.084},{y:.32,w:.13,d:.09,db:.084},{y:.365,w:.136,d:.078},{y:.395,w:.105,d:.062},{y:.42,w:.05,d:.045},{y:.445,w:.033,d:.034},{y:.5,w:.031,d:.032}],uh=[{y:-.462,w:.021},{y:-.445,w:.022},{y:-.38,w:.027},{y:-.29,w:.033},{y:-.245,w:.031},{y:-.2,w:.032},{y:-.12,w:.037},{y:-.04,w:.042},{y:.005,w:.043},{y:.03,w:.03},{y:.04,w:.012}],dh=[{y:-.815,w:.03},{y:-.8,w:.031},{y:-.72,w:.036},{y:-.58,w:.05},{y:-.5,w:.051},{y:-.42,w:.05},{y:-.36,w:.053},{y:-.2,w:.068},{y:-.05,w:.079},{y:.02,w:.07},{y:.05,w:.04}];function fh(e,t,n){let r=new ao(1,14,10).scale(e,t,n),i=r.attributes.position;for(let e=0;e<i.count;e++){let t=i.getZ(e)/n;t>0&&(i.setX(e,i.getX(e)*(1-.38*t*t)),i.setY(e,i.getY(e)*(1-.35*t)))}return r.computeVertexNormals(),r}function ph(e,t){let n=t.skin,r=t.bust??1,i=t=>e.fixedBone(t),a=(t,r,i,a,o,s,c={})=>{let l=J(Jm(r,{y0:i,y1:a,radial:28,step:.01,...c}),o??n);e.addSkinned(t,Ym(l,s),o==null?`skin`:`cloth`)},o=[[.05,i(`hips`)],[.13,i(`spine`)],[.17,i(`spine`)],[.25,i(`chest`)],[.432,i(`chest`)],[.462,i(`neck`)],[.47,i(`neck`)],[.5,i(`head`)]],s=(e,t)=>r*.03*Math.exp(-(((Math.abs(e)-.05)/.04)**2))*Math.exp(-(((t-.288)/.046)**2)),c=t.bare?.33:.428;a(`hips`,lh,-.115,.078,t.pelvis,o,{cap0:!0}),a(`hips`,lh,.078,.2,t.belly,o),a(`hips`,lh,.2,c,t.chest,o,{bump:s});{let t=Jm(lh,{y0:c,y1:.5,bump:s,radial:28,step:.01}),r=new H(n),i=new H(n).multiply(new H(.94,.8,.8));J(t,(e,t,n)=>n.copy(r).lerp(i,sd(.43,.468,e.y))),e.addSkinned(`hips`,Ym(t,o),`skin`)}t.neckBand&&e.add(`neck`,new Mi(.035,.039,.034,14),t.neckBand,`cloth`,[0,.016,0]);let l=Gm(nh,t.head);e.add(`head`,l.back,n,`skin`),e.setFace(l.front,t.face);for(let t of[-1,1])e.add(`head`,Im(.012,.026,.02),n,`skin`,[t*.107,l.cy-.024,-.004]);for(let[r,o]of[[`L`,1],[`R`,-1]]){let s=`arm${r}`,c=`fore${r}`,l=`leg${r}`,u=`shin${r}`,d=`foot${r}`,f=`hand${r}`,p=[[-th.upperArm-.04,i(c)],[-th.upperArm+.04,i(s)]];a(s,uh,-.462,-th.upperArm,t.foreArm,p,{cap0:!0,radial:18,n:2}),a(s,uh,-th.upperArm,.04,t.upperArm,p,{cap1:!0,radial:18,n:2});let m=[[-th.thigh-.045,i(u)],[-th.thigh+.045,i(l)]];a(l,dh,-.815,-th.thigh,t.shin,m,{cap0:!0,radial:18,n:2}),a(l,dh,-th.thigh,.05,t.thigh,m,{cap1:!0,radial:18,n:2}),e.add(f,new cf(.024,.07,.058,2,.011),n,`skin`,[0,-.04,.004]);for(let[t,r]of[[-.019,.04],[-.0065,.05],[.0065,.047],[.019,.036]])e.add(f,new Ai(.0068,r,3,6),n,`skin`,[-o*.004,-.078-r/2,t+.005],[.12,0,-o*.1]);e.add(f,new Ai(.0105,.03,3,8),n,`skin`,[-o*.004,-.05,.036],[.7,0,0]);let h=t.sole??t.shoe,g=t.heel??.02;if(e.add(d,fh(.043,.036,.108),t.shoe,`cloth`,[0,-.022,.052]),e.add(d,fh(.045,.011,.11),h,`cloth`,[0,-.047,.052]),e.add(d,new ao(.037,10,8),t.shoe,`cloth`,[0,.002,-.004]),g>.03&&e.add(d,new Mi(.022,.013,g,8),h,`cloth`,[0,-.056+g*.5,-.032]),t.boot){let n=-th.shin-.005;e.add(u,xf([[.038,n],[.045,n+t.boot*.5],[.055,n+t.boot],[.05,n+t.boot+.008]],12),t.shoe)}e.rig.addCollider(e.rig.j[l],[0,-.2,.01],.078),e.rig.addCollider(e.rig.j[u],[0,0,.01],.066),e.rig.addCollider(e.rig.j[u],[0,-.2,0],.056)}e.rig.addCollider(e.rig.j.chest,[0,.07,0],.118),e.rig.addCollider(e.rig.j.spine,[0,.04,0],.1),e.rig.addCollider(e.rig.j.hips,[0,-.02,0],.128)}function mh(e,t,n,r,i){let a=new Wi(n,!1,`catmullrom`,.5);return e.rig.addChain(e.J(t),r.map(e=>a.getPoint(e)),i)}var hh=(e,t)=>Array.from({length:t+1},(n,r)=>e+(1-e)*r/t);function gh(e,t){let n=new ao(ih,22,12,0,Math.PI*2,0,1.92);n.rotateX(-.6),n.translate(rh.x,rh.y,rh.z),e.add(`head`,n,t.c0,`hair`)}function _h(e,t,n={}){let r=n.n??7,i=n.spread??1.12,a=n.yEnd??rh.y+.016,o=n.hime?0:n.sweep??.14,s=(t,r,i,a,o,s,c)=>{let l=Math.acos(id((i-rh.y)/ih,-1,1)),u=[oh(t*.45,.3,o),oh(t*.86,.86,o+.05),oh(t+r*.5,1.22,o+.075),oh(t+r,l,o+.045)];e.add(`head`,Lm(u,{w:a,t:.013,c0:s,c1:c,center:rh,seg:9,taper:n.hime?12:2.1,tipW:n.hime?.92:.04,rootW:.7}),null,`hair`)};for(let e=0;e<r;e++){let c=e/(r-1)*2-1,l=o*(n.part&&Math.sign(c)||1);s(c*i,l,a-(n.hime?0:Math.abs(c)*.024-[0,.01,-.005][e%3]),n.w??.046,1,t.c0,ch(t.c0,t.c1,.2))}if(!n.hime)for(let e=0;e<r-1;e++){let c=(e+.5)/(r-1)*2-1;n.part&&Math.abs(c)<.2||s(c*i,o*1.3*(n.part?Math.sign(c):1),a-.01-Math.abs(c)*.03,.026,1.02,ch(t.c0,t.c1,.28),ch(t.c0,t.c1,.45))}}function vh(e,t){for(let n of[1,-1])for(let[r,i]of[[1.05,.044],[1.4,.04]]){let a=[oh(n*r*.75,.42),oh(n*r,1.05,1.07),oh(n*(r+.08),1.6,1.07),new eh(n*.112,.022,r>1.2?-.02:.03)];e.add(`head`,Lm(a,{w:i,t:.014,c0:t.c0,c1:ch(t.c0,t.c1,.25),center:rh,seg:9,taper:2.4,rootW:.7}),null,`hair`)}}function yh(e,t,n={}){let r=e.fixedBone(`head`),i=n.len??-.26,a=n.wave??0;for(let o of[1,-1]){let s=[oh(o*1.1,.72,1.02),oh(o*1.2,1.38,1.09),new eh(o*.112,.03,.04),new eh(o*(.112+a),i*.5,.066),new eh(o*(.096-a*.6),i,.08)],c=Lm(s,{w:n.w??.036,t:.014,c0:t.c0,c1:ch(t.c0,t.c1,.6),up:new eh(o*.45,0,1).normalize(),seg:14,taper:n.hime?10:1.7,tipW:n.hime?.85:.04,rootW:.8}),l=hh(.5,3),u=mh(e,`head`,s,l,{stiff:2.6,drag:.4,grav:.5,radius:.02,maxAngle:.9});e.addSkinned(`head`,Bm(c,u,l,r),`hair`)}}function bh(e,t,n){let r=n.n??14,i=n.chains??5,a=n.spread??1.85,o=n.flare??.05,s=n.wave??0,c=n.fan??.5,l=n.curl??0,u=n.freq??9,d=e.fixedBone(`head`),f=hh(3/9,4),p=(e,t,n,r,i)=>{let a=[oh(Math.PI-e*.5,.3,1.01),oh(Math.PI-e,1,1.06+i),sh(Math.PI-e*.8,.126+i,.045),sh(Math.PI-e*.5,.127+i,-.07)];for(let s=1;s<=6;s++){let d=s/6,f=n*d**.6*Math.sin(r+d*u),p=s===6?l:0;a.push(sh(Math.PI-e*od(.5,c,d)+f*2.2,.13+o*d**.9+i+f+p,od(-.07,t,d)+p*.6))}return a},m=[];for(let t=0;t<i;t++)m.push(mh(e,`head`,p(a*.85*(2*t/(i-1)-1),n.len,0,0,0),f,{stiff:1.5,drag:.32,grav:.75,radius:.03,maxAngle:1}));let h=(i-1)*6,g=[],_=[],v=[],y=[],b=[],x=new H(t.c0).multiplyScalar(.8),S=new H(t.c1).multiplyScalar(.84),C=new H;for(let e=0;e<=h;e++){let t=e/h,r=new Wi(p(a*.92*(t*2-1),n.len*.94,s*.4,e*.9,-.016),!1,`catmullrom`,.5),o=Math.min(t*(i-1),i-1-1e-4),c=Math.floor(o),l=o-c;for(let e=0;e<=20;e++){let t=.22+e/20*.78,n=r.getPoint(t);if(g.push(n.x,n.y,n.z),C.copy(x).lerp(S,((t-.22)/.78)**1.3),_.push(C.r,C.g,C.b),t<=f[0]){v.push(d,0,0,0),y.push(1,0,0,0);continue}let i=0;for(;i<3&&t>=f[i+1];)i++;let a=Math.min(1,(t-f[i])/(f[i+1]-f[i])),o=Math.min(i+1,3);v.push(m[c][i],m[c][o],m[c+1][i],m[c+1][o]),y.push((1-l)*(1-a),(1-l)*a,l*(1-a),l*a)}}for(let e=0;e<h;e++)for(let t=0;t<20;t++){let n=e*21+t,r=n+20+1;b.push(n,r,n+1,n+1,r,r+1)}let w=new gr;w.setAttribute(`position`,new U(g,3)),w.setAttribute(`color`,new U(_,3)),w.setAttribute(`skinIndex`,new rr(v,4)),w.setAttribute(`skinWeight`,new U(y,4)),w.setIndex(b),w.computeVertexNormals(),e.addSkinned(`head`,w,`hair`),[{m:r,w:1,dr:0,len:1,wv:1,mixc:0},{m:r-3,w:.7,dr:.014,len:.93,wv:1.25,mixc:.2},{m:Math.round(r*.55),w:.56,dr:.022,len:.86,wv:1.3,mixc:.35}].forEach((r,o)=>{for(let c=0;c<r.m;c++){let l=c/(r.m-1)*2-1,u=l*a*(o?.84:1),h=n.len*r.len*(1-.05*(c*7%3))*(1-.08*Math.abs(l)),g=p(u,h,s*r.wv,c*2.3+o*1.7,r.dr),_=1-.07*(c*5%3),v=Lm(g,{w:(n.w??.058)*r.w,t:.017,c0:new H(ch(t.c0,t.c1,r.mixc)).multiplyScalar(_),c1:t.c1,center:new eh(0,g[3].y,0),seg:22,taper:2.6,rootW:.75}),y=id(Math.round((u/(a*.85)+1)/2*(i-1)),0,i-1);e.addSkinned(`head`,Bm(v,m[y],f,d),`hair`)}})}function xh(e,t,n=11){for(let r=0;r<n;r++){let i=(r/(n-1)*2-1)*2.25,a=[oh(Math.PI-i*.3,.12,1.012),oh(Math.PI-i*.8,.7,1.024),oh(Math.PI-i,1.25,1.03),oh(Math.PI-i,1.72,1.024)];e.add(`head`,Lm(a,{w:.03,t:.008,c0:ch(t.c0,t.c1,r%3*.1),c1:t.c0,center:rh,seg:10,taper:3,rootW:.5,tipW:.3}),null,`hair`)}}function Sh(e,t,n=!1){let r=rh.y+ih,i=n?[oh(0,.1),new eh(.012,r+.05,.01),new eh(.05,r+.085,.015),new eh(.085,r+.06,.02),new eh(.06,r+.03,.02)]:[oh(0,.1),new eh(.01,r+.045,.012),new eh(.045,r+.07,.02),new eh(.078,r+.048,.026)];e.add(`head`,Lm(i,{w:.011,t:.006,c0:t.c0,c1:t.c0,up:new eh(0,0,1),seg:8,taper:1.6,rootW:1}),null,`hair`)}function Ch(e,t,n=.85,r=.03){for(let i of[1,-1]){let a=new eh(i*.118,.19,-.04),o=hh(.12,4),s=e=>{let t=new eh(Math.cos(e*1.26)*.02,0,Math.sin(e*1.26)*.02),o=t=>r*Math.sin(e*1.7+t*10);return[a.clone(),new eh(i*.19,.16,-.05).add(t),new eh(i*(.24+o(.3)),-n*.22,-.06+o(.3)).add(t),new eh(i*(.25+o(.55)),-n*.5,-.05).add(t),new eh(i*(.23+o(.8)),-n*.78,-.04+o(.8)).add(t),new eh(i*(.27+o(1)),-n,-.02).add(t)]},c=mh(e,`head`,s(0),o,{stiff:1.8,drag:.3,grav:.8,radius:.04,maxAngle:1.1});for(let n=0;n<5;n++){let r=Lm(s(n),{w:.042,t:.016,c0:t.c0,c1:t.c1,center:new eh(i*.1,-.3,-.05),seg:16,taper:2.6,rootW:.45});e.addSkinned(`head`,Bm(r,c,o,e.fixedBone(`head`)),`hair`)}}}function wh(e,t,n=1){let r=[new eh(n*.105,.07,-.04),new eh(n*.128,-.03,0),new eh(n*.11,-.14,.068),new eh(n*.085,-.3,.095),new eh(n*.078,-.46,.095)],i=new H(t.c0),a=new H(t.c1),o=zm(r,e=>(.024-e*.006)*(1+.3*Math.abs(Math.sin(e*Math.PI*9)))*(e>.97?.5:1),(e,t,n)=>n.copy(i).lerp(a,e*.7),40,8),s=hh(.35,3),c=mh(e,`head`,r,s,{stiff:2.4,drag:.4,grav:.6,radius:.025,maxAngle:.8});e.addSkinned(`head`,Bm(o,c,s,e.fixedBone(`head`)),`hair`)}function Th(e,t=`#ffffff`,n=`#22264a`){for(let n=-5;n<=5;n++){let r=n*.24,i=rh.clone().add(new eh(Math.sin(r)*.12655,Math.cos(r)*.12655,.03));e.add(`head`,Im(.022,.028,.012),t,`cloth`,[i.x,i.y+.012,i.z],[-.25,0,-r])}e.add(`head`,new oo(.12655,.007,5,20,2.7),n,`cloth`,[rh.x,rh.y,.026],[0,0,Math.PI/2-1.35])}function Eh(e,t,n,r){for(let i of[1,-1]){if(t===`fin`){e.add(`head`,Im(.03,.085,.045),n,`cloth`,[i*.155,.075,-.02],[.25,0,i*1.05]),e.add(`head`,Im(.012,.06,.03),r,`cloth`,[i*.15,.068,0],[.25,0,i*1.05]);continue}let a=t===`fox`,o=a?.2:.095,s=a?.075:.05,c=a?1.12:.42,l=a?[i*.085,rh.y+ih*.78,-.01]:[i*.072,rh.y+ih*.86,0],u=(e,t)=>new Ni(e,t,7).translate(0,t/2,0).scale(1,1,.5);e.add(`head`,u(s,o),n,`hair`,l,[0,0,-i*c]),e.add(`head`,u(s*.62,o*.74),r,`cloth`,[l[0],l[1],l[2]+.016],[0,0,-i*c])}}function Dh(e,t){for(let n of[1,-1])e.add(`head`,new Ni(.018,.075,6).scale(1,1,.45),t,`skin`,[n*.14,.108,-.012],[.2,0,-n*1.25])}function Oh(e,t,n){let r=new H(t),i=new H(n);for(let t of[1,-1]){let n=[new eh(t*.075,.215,-.01),new eh(t*.118,.275,-.03),new eh(t*.128,.345,-.045),new eh(t*.1,.405,-.035),new eh(t*.078,.43,-.015)];e.add(`head`,zm(n,e=>(.03-e*.026)*(1+.12*Math.sin(e*34)),(e,t,n)=>n.copy(r).lerp(i,e),22,8),null,`cloth`)}}function kh(e,t,n,r,i,a,o,s=o){let[c,l,u,d,f]=Zm(i,a);e.add(t,d,o,`cloth`,n,r).add(t,f,o,`cloth`,n,r).add(t,c,o,`cloth`,n,r).add(t,l,o,`cloth`,n,r).add(t,u,s,`cloth`,n,r)}function Ah(e,t,n,r,i,a=`#e8c56a`){e.add(t,new ao(r*.13,6,5),a,`cloth`,[n[0],n[1],n[2]]),e.add(t,new Ni(r*.16,r,6).rotateX(Math.PI),i,`cloth`,[n[0],n[1]-r*.55,n[2]])}function jh(e,t,n,r,i={}){for(let a of[`L`,`R`]){let o=`${t}${a}`,s=n[n.length-1];e.add(o,xf(n.map(([e,t])=>[e,-t]).reverse(),14).scale(1,1,i.zs??1),r),i.edge&&e.add(o,new oo(s[0],.006,5,18).rotateX(Math.PI/2).scale(1,1,i.zs??1),i.edge,`cloth`,[0,-s[1],0]),i.ruffle&&e.add(o,Um({y:-s[1]+.008,len:.04,r0:s[0]*.96,r1:s[0]*1.14,zs:i.zs??1,pleats:14,pleatAmp:.07,rows:3,cols:56,col:(e,t,n)=>n.set(i.ruffle)}))}}function Mh(e,t){let n=t.n??10,r=t.bones??3,i=t.zs??.86,a=[],o=t.wide??1,s=t.flare??.8,c=t.r1*o;for(let o=0;o<n;o++){let l=o/n*Math.PI*2,u=[];for(let e=0;e<=r;e++){let n=e/r,a=od(t.r0,c,n**+s);u.push(new eh(Math.sin(l)*a,t.y-t.len*n,Math.cos(l)*a*i))}a.push(e.rig.addChain(e.rig.j.hips,u,{stiff:3.2,drag:.42,grav:.9,radius:.035,maxAngle:.85,...t.spring}))}return{chains:a,len:t.len,y:t.y,r0:t.r0,r1:c,wide:o,flare:s,zs:i}}function Nh(e,t,n,r=.012){let i=od(e.r0,e.r1,n**+e.flare)+r;return[Math.sin(t)*i,e.y-e.len*n,Math.cos(t)*i*e.zs]}function Ph(e,t,n){let r=(e,t,r)=>{n.col(e,t,r),r.multiplyScalar(.86+.14*Math.min(1,t*1.4))},i=Um({flare:t.flare,...n,col:n.v0?n.col:r,r1:n.r1*t.wide,rows:n.v0?n.rows??4:Math.max(n.rows??0,24),cols:Math.max(n.cols??0,96)}),a=i.attributes.aV,o=n.len/t.len;for(let e=0;e<a.count;e++)a.setX(e,Math.min(1,a.getX(e)*o*(n.lenFn?1.15:1)));e.addSkinned(`hips`,Wm(i,t.chains))}function Fh(e,t){let n=hh(0,t.bones??5),r=mh(e,`hips`,t.pts,n,{stiff:2.4,drag:.3,grav:.25,radius:.04,maxAngle:.7,...t.spring});return e.addSkinned(`hips`,Bm(zm(t.pts,t.r,t.col,t.seg??22,10,t.flatten??1),r,n),t.mat??`cloth`),r}function Ih(e,t,n){let r=n.bones??3,i=n.top.length,a=[];for(let o=0;o<i;o++){let i=[];for(let e=0;e<=r;e++)i.push(n.top[o].clone().add(n.drop(o,e/r)));a.push(e.rig.addChain(e.J(t),i,{stiff:2.2,drag:.36,grav:.8,radius:.03,maxAngle:1,...n.spring}))}let o=n.rows??r*3,s=n.cols??(i-1)*4,c=[],l=[],u=[],d=[],f=[],p=new H,m=new eh,h=new eh;for(let e=0;e<=o;e++){let t=e/o;for(let e=0;e<=s;e++){let o=e/s,u=Math.min(o*(i-1),i-1-1e-4),g=Math.floor(u),_=u-g;m.copy(n.top[g]).add(n.drop(g,t)),h.copy(n.top[g+1]).add(n.drop(g+1,t)),m.lerp(h,_),c.push(m.x,m.y,m.z),n.col(o,t,p),l.push(p.r,p.g,p.b);let v=Math.min(t*r,r-1e-4),y=Math.floor(v),b=Math.min(y+1,r-1),x=b===y?0:v-y;d.push(a[g][y],a[g][b],a[g+1][y],a[g+1][b]),f.push((1-_)*(1-x),(1-_)*x,_*(1-x),_*x)}}for(let e=0;e<o;e++)for(let t=0;t<s;t++){let n=e*(s+1)+t,r=n+s+1;u.push(n,r,n+1,n+1,r,r+1)}let g=new gr;return g.setAttribute(`position`,new U(c,3)),g.setAttribute(`color`,new U(l,3)),g.setAttribute(`skinIndex`,new rr(d,4)),g.setAttribute(`skinWeight`,new U(f,4)),g.setIndex(u),g.computeVertexNormals(),e.addSkinned(t,g),a}function Lh(e,t,n,r){let i=.2-t,a=[{y:i,w:.212,d:.118,db:.11},{y:od(i,.15,.5),w:.206,d:.114,db:.106},{y:.15,w:.186,d:.102,db:.096},{y:.185,w:.145,d:.086},{y:.205,w:.085,d:.066},{y:.218,w:.046,d:.044}];e.add(`chest`,J(Jm(a,{radial:72,step:.006,n:2.2}),n)),r&&e.add(`chest`,Jm(a.map(e=>({...e,w:e.w+.002,d:(e.d??e.w)+.002,db:(e.db??e.d??e.w)+.002})),{y0:i,y1:i+.012,radial:48,n:2.2}),r)}function Rh(e,t,n){let r=new H(n.col);Ph(e,t,{pleats:44,pleatAmp:.032,rows:5,...n,cols:264,len:n.len*1.085,r1:n.r1*1.095,v0:.922,col:(e,t,n)=>n.copy(r)})}function zh(e,t,n,r=3,i=`#ffffff`){for(let a=0;a<r;a++)e.add(`chest`,Um({y:0,len:.034,r0:.012,r1:.034-a*.004,zs:.5,pleats:7,pleatAmp:.16,rows:3,cols:42,skip:e=>Math.abs(e)>1.5,col:(e,t,n)=>n.set(i)}),null,`cloth`,[0,t-a*.026,n-a*.004])}function Bh(e,t,n=3,r=.02,i=.035,a=.028){for(let o=0;o<n;o++)for(let n of[-1,1])e.add(`spine`,new ao(.008,6,5),t,`cloth`,[n*a,r+o*i,.07])}function Vh(e,t,n,r,i,a=`cloth`){i!=null&&J(r,i),e.addSkinned(t,Vm(r,n),a)}var X=z,Hh=[`claude`,`gpt`,`deepseek`,`glm`,`kimi`,`qwen`,`gemini`,`grok`],Uh=()=>new $m(new km(th)),Wh=(e,t)=>e.chains[(Math.round(t/(Math.PI*2)*e.chains.length)%e.chains.length+e.chains.length)%e.chains.length];function Gh(e,t,n,r,i=[0,0,0]){for(let[a,o]of n)Vh(e,`hips`,t,Y(a,r,i),o)}var Kh=(e,t,n)=>{let r=n=>Im(e*.26,t*.5,e*.08).translate(n*e*.27,0,0);return[[r(1),n],[r(-1),n],[new ao(t*.26,8,6),n]]};function qh(e,t,n){let r=e.mount(`glider`,`chest`,[0,.12,-.1],[.5,0,0]);for(let i of[1,-1]){let a=new da([[.02,.12],[.95,.3],[.8,-.05],[.52,-.2],[.3,-.1],[.02,-.28]].map(([e,t])=>new R(e*i,t)));e.add(r,J(new ro(a),(e,r,i)=>i.set(t).lerp(new H(n),Math.min(1,Math.abs(e.x)*1.1)))),e.add(r,new Mi(.009,.006,.95,5).rotateZ(-i*1.38).translate(i*.47,.21,.004),`#5a4a3c`)}e.add(r,new G(.05,.42,.02),`#5a4a3c`,`cloth`,[0,-.08,0]),r.visible=!1}var Jh=e=>new H(e),Yh=(e,t,n,r,i)=>{let a=(t-n)/(r-n);if(a<0||a>1)return!1;if(a<.13||a>.87)return!0;let o=(e/(Math.PI*2)*i%1+1)%1;return Math.abs(o-.5)*2+Math.abs(a-.5)*2.7<.6},Xh=(e,t)=>{let n=Math.floor(e),r=Math.floor(t),i=Math.sin(n*127.1+r*311.7)*43758.5453,a=i-Math.floor(i);return a<.17&&Math.abs(e-n-.5)+Math.abs(t-r-.5)<.16+a},Zh=(e,t,n)=>t>0&&t<1&&(t<.16||t>.84||Math.floor(e*n)%2==0==t<.5&&e*n%1>.2),Qh={rows:60,cols:220},$h=(e,t,n)=>Math.abs(Math.atan2(Math.sin(e-t),Math.cos(e-t)))<n;function eg(){let e=Uh(),t={c0:`#ee6f2a`,c1:`#f9a65c`},n=`#f7f0e3`,r=`#2a2228`,i=`#e7642a`,a=`#d9a441`,o=`#ffe8da`;ph(e,{skin:o,face:{skin:o,iris:[`#8a4810`,`#e8922e`,`#ffd9a0`],pupil:`#5a2c08`,lash:`#4a2a1c`,brow:`#c0621e`,mouth:`flat`,tilt:.03,eyeH:.228,lid:.07,lip:`#e58a86`},head:{jaw:.43,cheek:.05,len:1.07},chest:n,belly:r,pelvis:n,upperArm:n,foreArm:n,thigh:n,shin:n,shoe:`#f4ede0`,sole:`#c9a47a`,heel:.05,neckBand:n,boot:.17}),Lh(e,.17,n,a),kh(e,`chest`,[0,.192,.074],[.15,0,0],.085,.04,r),e.add(`chest`,Lm([new X(0,.186,.078),new X(0,.135,.1),new X(0,.07,.1)],{w:.032,t:.006,c0:r,flat:!0,taper:3.2,rootW:.9,tipW:.05,up:new X(0,0,1)})),e.decal(`chest`,`claudeFlower`,Hf,.08,[0,.2,.096],[-.15,0,0]),zh(e,.1,.094,3);for(let t of[-1,1])e.decal(`chest`,`claudeSpark`,e=>Uf(e),.085,[t*.158,.1,.09],[-.2,t*.54,0]);Bh(e,a,3);for(let t of[-.025,.125])e.add(`spine`,new oo(.097,.005,5,24).rotateX(Math.PI/2).scale(1,1,.76),a,`cloth`,[0,t,0]);jh(e,`fore`,[[.037,0],[.052,.09],[.084,.19]],n,{ruffle:`#ffffff`,ruffleR:.098,edge:a});for(let t of[`L`,`R`])e.add(`arm${t}`,Im(.055,.075,.055),n,`cloth`,[0,-.07,0]);let s=Mh(e,{y:.07,len:.84,r0:.105,r1:.47,wide:1.2,flare:.68});Ph(e,s,{y:.07,len:.84,r0:.104,r1:.46,pleats:18,pleatAmp:.07,...Qh,col:(e,t,o)=>o.set(t>.93?r:t>.915?a:Yh(e,t,.76,.87,30)?i:n)}),Rh(e,s,{y:.07,len:.84,r0:.104,r1:.46,col:`#fffaf2`}),Ph(e,s,{y:.074,len:.76,r0:.109,r1:.455,rows:8,skip:e=>Math.abs(e)<.4,col:(e,t,n)=>n.set(t>.95?a:e>.4&&e<1.05?i:r)}),Ph(e,s,{y:.078,len:.56,r0:.113,r1:.4,rows:8,skip:e=>Math.abs(e)<.55,lenFn:e=>1+.2*Math.abs(Math.sin(e*2.5)),col:(e,t,r)=>r.set(t>.94?a:n)});for(let t of[-2.3,-1.7,1.7,2.3])e.decal(`hips`,`claudeSpark`,e=>Uf(e),.12,Nh(s,t,.79,.035),[-.12,t,0],Wh(s,t)[2]);for(let t of[1,-1]){let n=t*1.26,i=Wh(s,n)[0],o=Nh(s,n,.24,.03);Gh(e,i,Kh(.2,.1,r),o,[0,n,0]),Gh(e,i,[[new Ni(.014,.085,6).rotateX(Math.PI).translate(0,-.075,0),a]],[o[0]*1.06,o[1],o[2]*1.06],[0,n,0]),e.decal(`hips`,`claudeFlower`,Hf,.1,[o[0]*1.12,o[1],o[2]*1.12],[-.3,n,0],i)}gh(e,t),vh(e,t),xh(e,t),_h(e,t,{n:7}),yh(e,t,{len:-.44,wave:.02}),bh(e,t,{len:-1.06,n:15,wave:.045,flare:.2,fan:.75,curl:.03,freq:10}),e.add(`head`,new Mi(.034,.034,.008,14).rotateX(Math.PI/2),i,`cloth`,[.104,.2,.05],[0,1,0]),e.decal(`head`,`claudeFlower`,Hf,.125,[.11,.2,.056],[0,1,-.25]);for(let t of[0,.02])e.add(`head`,Lm([new X(.118,.17,.03+t),new X(.132,.1,.01+t),new X(.128,.03,0+t)],{w:.016,c0:r,flat:!0,taper:8,tipW:.8,up:new X(1,0,0)}));let c=e.mount(`weapon`,`handL`,[-.02,-.06,.035],[.35,.2,0]);return e.add(c,new G(.135,.175,.034),`#6e3a22`),e.add(c,new G(.12,.162,.027),`#f1e6cc`,`cloth`,[.008,0,0]),e.add(c,new G(.06,.08,.037),a,`cloth`,[-.01,0,0],[0,0,.785]),qh(e,i,n),e.build()}function tg(){let e=Uh(),t={c0:`#f5f3fc`,c1:`#dcd6f5`},n=`#fbfaff`,r=`#cbc3ee`,i=`#b8b5cf`,a=`#fff0ea`;ph(e,{skin:a,face:{skin:a,iris:[`#6464b4`,`#a6a6f2`,`#e8e8ff`],pupil:`#3c3c80`,lash:`#5a5a7c`,brow:`#c9c9de`,mouth:`flat`,blush:`rgba(255,150,170,0.34)`,tilt:.02,lid:.1,lowerLash:2,lip:`#e79bb0`},head:{jaw:.47,cheek:.035,len:1.1},chest:n,belly:n,pelvis:n,upperArm:null,foreArm:n,thigh:null,shin:null,shoe:n,sole:i,heel:.06,neckBand:n,bare:!0});for(let[t,n]of[[.17,.088],[.125,.098],[.085,.1]])e.add(`chest`,new eo(.012).scale(.7,1.3,.5),r,`glow`,[0,t,n]);for(let t of[`L`,`R`])e.add(`arm${t}`,new oo(.041,.008,5,14).rotateX(Math.PI/2),i,`cloth`,[0,-.13,0]);jh(e,`arm`,[[.041,.13],[.044,.24]],n),jh(e,`fore`,[[.04,0],[.075,.1],[.135,.23]],n,{ruffle:r,ruffleR:.16,edge:i});let o=Mh(e,{y:.07,len:.86,r0:.102,r1:.37,wide:1.14,flare:1.05});Ph(e,o,{y:.07,len:.86,r0:.102,r1:.37,pleats:12,pleatAmp:.07,...Qh,col:(e,t,a)=>{a.set(n).lerp(Jh(r),Math.max(0,t-.55)*1.1),Yh(e,t,.8,.9,24)&&a.set(i)}}),Rh(e,o,{y:.07,len:.86,r0:.102,r1:.37,col:`#e9e4fb`});for(let t of[-2.5,-1.1,1.1,2.5])e.decal(`hips`,`gptKnot`,e=>Wf(e),.075,Nh(o,t,.7,.034),[-.12,t,0],Wh(o,t)[2]);for(let t of[1,-1]){let r=t*.75,i=Nh(o,r,.035,.02);e.decal(`hips`,`gptKnot`,e=>Wf(e),.09,i,[-.35,r,0],Wh(o,r)[0]),Gh(e,Wh(o,r)[0],[[new Ni(.012,.09,6).rotateX(Math.PI),n]],[i[0],i[1]-.085,i[2]])}Ih(e,`chest`,{top:[-.17,-.09,0,.09,.17].map(e=>new X(e,.165,-.075+Math.abs(e)*.25)),drop:(e,t)=>new X((e-2)*.07*t,-1.2*t,-.16*Math.sin(t*1.4)),bones:4,col:(e,t,i)=>i.set(n).lerp(Jh(r),t*.75+.25*Math.abs(Math.sin(e*16))*t)});for(let[t,i]of[[`L`,1],[`R`,-1]])Ih(e,`fore${t}`,{top:[0,1,2,3].map(e=>new X(i*.02,-.03-e*.055,-.035)),drop:(e,t)=>new X(i*.06*t,-(.46+e*.1)*t,-.05*t-.03*Math.sin(t*3)),bones:3,rows:26,cols:18,spring:{grav:1.1,stiff:1.6},col:(e,t,i)=>i.set(n).lerp(Jh(r),t*.45+(e>.9||e<.08||t>.94?.5:0))});gh(e,t),vh(e,t),xh(e,t),_h(e,t,{n:7,sweep:.1}),yh(e,t,{len:-.48,wave:.028}),bh(e,t,{len:-.94,n:14,wave:.045,flare:.17,fan:.72,spread:1.7,curl:.025}),Sh(e,t),Oh(e,`#eeeafc`,`#b9aee6`),Dh(e,a),e.decal(`head`,`gptKnot`,e=>Wf(e),.085,[.113,.165,.052],[0,1.1,0]),Ah(e,`head`,[.122,.112,.04],.05,`#f4f1ff`,i);for(let t of[1,-1]){let n=e.mount(t>0?`wingL`:`wingR`,`chest`,[t*.05,.135,-.085]);n.scale.x=t;let r=new X(0,0,0),i=new X(.3,.24,-.03),a=new X(.84,.17,-.06),o=new X(.72,-.2,-.05),s=new X(.44,-.36,-.03),c=new X(.06,-.26,0),l=(e,t)=>e.clone().lerp(t,.5).lerp(i,.22),u=[r,i,c,i,s,c,i,l(s,c),s,i,o,l(o,s),i,l(o,s),s,i,a,l(a,o),i,l(a,o),o],d=new gr().setFromPoints(u);d.computeVertexNormals(),e.add(n,J(d,(e,t,n)=>n.set(`#eeeafc`).lerp(Jh(`#b7abea`),Math.min(1,e.distanceTo(i)*1.5))));let f=(e,t,n)=>zm([e,e.clone().lerp(t,.5).add(new X(0,.02,0)),t],e=>n*(1-e*.7),(e,t,n)=>n.set(`#f4f1ff`),5,6);e.add(n,f(r,i,.017)).add(n,f(i,a,.011)).add(n,f(i,o,.01)).add(n,f(i,s,.009)),e.add(n,new Ni(.014,.06,6),`#f4f1ff`,`cloth`,[i.x,i.y+.03,i.z])}let s=Jh(`#bdb2ea`),c=Jh(`#f6f3ff`);return Fh(e,{pts:[new X(0,-.05,-.09),new X(0,-.3,-.33),new X(0,-.62,-.42),new X(.05,-.8,-.3),new X(.11,-.83,-.12)],r:e=>.078*(1-e)**.85+.007,bones:5,spring:{grav:.35,stiff:2.8},col:(e,t,n)=>n.copy(c).lerp(s,(Math.sin(t)>.2?.15:.5)+.35*Math.abs(Math.sin(e*46+t*3)))}),e.build()}function ng(){let e=Uh(),t={c0:`#27398f`,c1:`#62b6f0`},n=`#252b60`,r=`#ffffff`,i=`#3f66cc`,a=`#d8b56a`,o=`#ffeee6`;ph(e,{skin:o,face:{skin:o,iris:[`#1a3a9a`,`#3a7ae8`,`#a8d8ff`],pupil:`#0e2060`,lash:`#16204a`,brow:`#27398f`,mouth:`smile`,tilt:-.02,eyeH:.25,lip:`#f08e98`},head:{jaw:.37,cheek:.072,len:1.02},chest:r,belly:n,pelvis:n,upperArm:null,foreArm:n,thigh:r,shin:r,shoe:n,heel:.045,neckBand:r,bare:!0}),kh(e,`chest`,[0,.19,.076],[.15,0,0],.1,.045,`#1c2048`),e.add(`chest`,new ao(.012,8,6),`#7fd0ff`,`glow`,[0,.19,.09]);for(let t=0;t<3;t++)e.add(`chest`,new ao(.007,6,5),n,`cloth`,[0,.13-t*.035,.097]);Bh(e,a,2,.03,.045,.034);for(let t of[`L`,`R`])e.add(`arm${t}`,Im(.058,.07,.058),n,`cloth`,[0,-.12,0]),e.add(`arm${t}`,Um({y:-.045,len:.035,r0:.03,r1:.062,zs:1,pleats:8,pleatAmp:.25,rows:2,cols:32,col:(e,t,n)=>n.set(r)}));jh(e,`fore`,[[.037,0],[.04,.14],[.046,.185]],n,{ruffle:r,ruffleR:.07,edge:a});let s=Mh(e,{y:.07,len:.64,r0:.105,r1:.4,wide:1.22,flare:.66});Ph(e,s,{y:.07,len:.64,r0:.105,r1:.4,pleats:14,pleatAmp:.07,...Qh,col:(e,t,r)=>r.set(Yh(e,t,.8,.92,26)?a:Math.abs(e)<.5?i:n)}),Rh(e,s,{y:.07,len:.64,r0:.105,r1:.4,col:r}),Ph(e,s,{y:.075,len:.45,r0:.113,r1:.385,rows:8,skip:e=>Math.abs(e)>.8,lenFn:e=>1-.3*(Math.abs(e)/.8)**3,col:(e,t,n)=>n.set(t>.9||Math.abs(e)>.66?`#eef2ff`:r)}),Rh(e,s,{y:.075,len:.45,r0:.113,r1:.385,skip:e=>Math.abs(e)>.8,lenFn:e=>1-.3*(Math.abs(e)/.8)**3,col:r}),e.decal(`hips`,`whale`,e=>Gf(e),.14,Nh(s,.2,.52,.078),[-.22,.2,0],Wh(s,.2)[1]),kh(e,`spine`,[0,.03,-.095],[0,0,0],.23,.12,r);for(let t of[1,-1])e.add(`hips`,Lm([new X(0,.1,-.1),new X(t*.05,-.05,-.16),new X(t*.075,-.24,-.2)],{w:.04,c0:r,flat:!0,taper:6,tipW:.7,up:new X(0,0,-1)}));gh(e,t),vh(e,t),xh(e,t),_h(e,t,{n:7}),yh(e,t,{len:-.4,wave:.03}),bh(e,t,{len:-.82,n:15,wave:.06,flare:.26,spread:1.9,fan:.85,curl:.04,freq:11}),Sh(e,t,!0),Th(e,r,n),Eh(e,`fin`,`#232a5e`,`#f2f5ff`),kh(e,`head`,[.108,.168,.05],[0,1,.3],.06,.03,`#3d8fe0`);let c=Jh(`#232a5e`),l=Jh(`#aebfe8`),u=Fh(e,{pts:[new X(0,-.07,-.09),new X(0,-.3,-.36),new X(.04,-.42,-.62),new X(.1,-.33,-.86),new X(.14,-.14,-.97)],r:e=>.088*(1-e*.78),bones:5,flatten:.85,spring:{grav:.2,stiff:3},col:(e,t,n)=>n.copy(Math.sin(t)<-.5?l:c)});for(let t of[1,-1])Vh(e,`hips`,u[u.length-1],Y(Im(.105,.016,.05),[.14+t*.085,-.1,-1],[.9,t*.5,t*.35]),c);return qh(e,i,r),e.build()}function rg(){let e=Uh(),t={c0:`#1b1b24`,c1:`#27397e`},n=`#f6f6f9`,r=`#1b1b21`,i=`#3d6dff`,a=`#fff0ea`;ph(e,{skin:a,face:{skin:a,iris:[`#34343f`,`#77778a`,`#c9c9d9`],pupil:`#15151c`,lash:`#101018`,brow:`#1e1e28`,mouth:`smile`,tilt:0,lid:.17,lip:`#e58c96`},head:{jaw:.41,cheek:.056,len:1.05},chest:n,belly:r,pelvis:r,upperArm:n,foreArm:n,thigh:n,shin:n,shoe:n,sole:r,heel:.05,neckBand:n,boot:.15}),e.add(`chest`,Um({y:.246,len:.03,r0:.036,r1:.052,zs:1,pleats:10,pleatAmp:.2,rows:2,cols:30,col:(e,t,r)=>r.set(n)})),kh(e,`chest`,[0,.19,.076],[.15,0,0],.115,.05,r),e.decal(`chest`,`zDiamond`,e=>Kf(e,!0),.058,[0,.19,.1],[-.15,0,0]);for(let t of[.14,.105,.07])e.add(`chest`,new ao(.006,6,5),i,`glow`,[0,t,.098]);for(let t of[.03,.08])e.add(`spine`,new eo(.012),i,`glow`,[0,t,.072]);for(let t of[`L`,`R`])e.add(`arm${t}`,Im(.062,.085,.062),n,`cloth`,[0,-.08,0]),e.add(`arm${t}`,Um({y:-.17,len:.04,r0:.04,r1:.066,zs:1,pleats:9,pleatAmp:.25,rows:2,cols:32,col:(e,t,n)=>n.set(r)})),e.add(`fore${t}`,Im(.062,.105,.062),n,`cloth`,[0,-.095,0]),e.add(`fore${t}`,new Mi(.034,.034,.022,10),r,`cloth`,[0,-.185,0]);jh(e,`fore`,[[.03,.185],[.034,.2]],n,{ruffle:n,ruffleR:.062});let o=Mh(e,{y:.07,len:.82,r0:.105,r1:.45,wide:1.2,flare:.68});Ph(e,o,{y:.07,len:.82,r0:.104,r1:.44,pleats:20,pleatAmp:.07,...Qh,col:(e,t,i)=>i.set(Yh(e,t,.8,.93,22)?r:n)}),Rh(e,o,{y:.07,len:.82,r0:.104,r1:.44,col:`#8d8d9b`}),Ph(e,o,{y:.075,len:.7,r0:.11,r1:.43,rows:8,skip:e=>Math.abs(e)<.3,lenFn:e=>.86+.22*Math.abs(Math.cos(e*1.5)),col:(e,t,i)=>i.set(t>.95?`#c9c9d6`:$h(e,1.25,.28)||$h(e,-1.25,.28)?n:r)}),Gh(e,Wh(o,1.1)[0],[[new G(.075,.1,.03),r]],Nh(o,1,.2,.03),[0,1,0]),e.decal(`hips`,`z`,e=>Kf(e),.06,Nh(o,1,.2,.052),[0,1,0],Wh(o,1.1)[0]),kh(e,`spine`,[0,.03,-.092],[0,0,0],.24,.11,r),e.decal(`spine`,`zDiamond`,e=>Kf(e,!0),.06,[0,.03,-.128],[0,Math.PI,0]);for(let[t,n]of[[`L`,1],[`R`,-1]])e.decal(`arm${t}`,`zDiamond`,e=>Kf(e,!0),.06,[n*.074,-.085,.008],[0,n*1.5708,0]);gh(e,t),vh(e,t),xh(e,t),_h(e,t,{n:11,hime:!0,w:.03,spread:1}),yh(e,t,{len:-.2,hime:!0,w:.034}),bh(e,t,{len:-1.1,n:15,wave:0,flare:.08,spread:1.7,fan:.5}),Th(e,n,r),Eh(e,`fox`,`#17171d`,`#f4f4f8`),e.add(`head`,Im(.075,.03,.02),r,`cloth`,[0,rh.y+ih*.62,ih*.82],[-.75,0,0]),e.decal(`head`,`sleepEyes`,qf,.15,[0,rh.y+ih*.645,ih*.86],[-.75,0,0]),e.add(`head`,new G(.056,.056,.008),r,`cloth`,[.128,.132,.046],[0,.95,0]),e.decal(`head`,`z`,e=>Kf(e),.058,[.132,.132,.051],[0,.95,0]);for(let t of[0,.04])e.add(`head`,new ao(.014,8,6),`#c9c9d6`,`cloth`,[.128,.09-t,.03]);let s=Jh(`#17171d`),c=Jh(`#f4f4f8`);return Fh(e,{pts:[new X(0,-.03,-.09),new X(0,-.12,-.34),new X(0,-.38,-.5),new X(0,-.66,-.5),new X(0,-.9,-.4)],r:e=>.035+.115*Math.sin(Math.PI*e**.75)**.8+.004*Math.sin(e*60),bones:5,mat:`hair`,seg:30,spring:{grav:.3,stiff:2.4},col:(e,t,n)=>n.copy(e>.74?c:s)}),qh(e,r,n),e.build()}function ig(){let e=Uh(),t={c0:`#f0f1fc`,c1:`#c3d4fa`},n=`#272b68`,r=`#fbfbff`,i=`#c9cbe2`,a=`#fff1ec`;ph(e,{skin:a,face:{skin:a,iris:[`#5a6aa2`,`#9cb2e4`,`#e2edff`],pupil:`#343e70`,lash:`#4a4a6c`,brow:`#bcc0da`,mouth:`flat`,tilt:-.03,eyeH:.246,sparkle:`moon`,lowerLash:2,lip:`#ec9aa8`},head:{jaw:.39,cheek:.062,len:1.03},chest:r,belly:n,pelvis:r,upperArm:r,foreArm:r,thigh:r,shin:r,shoe:n,heel:.055,neckBand:r}),e.add(`chest`,Um({y:.246,len:.03,r0:.036,r1:.052,zs:1,pleats:10,pleatAmp:.2,rows:2,cols:30,col:(e,t,n)=>n.set(r)})),kh(e,`chest`,[0,.19,.076],[.15,0,0],.09,.042,n),e.decal(`chest`,`kRound`,e=>Jf(e,!0),.046,[0,.19,.102],[-.15,0,0]);for(let t of[.135,.1,.065])e.add(`chest`,new ao(.0065,6,5),n,`cloth`,[0,t,.099]);Bh(e,i,3,.02,.035,.03),Lh(e,.2,n,i);for(let t of[1,-1])e.decal(`chest`,`moonStars`,$f,.12,[t*.13,.07,.108],[-.12,t*.42,t*.2]);for(let t of[`L`,`R`])e.add(`fore${t}`,Im(.06,.1,.06),r,`cloth`,[0,-.095,0]),e.add(`fore${t}`,new Mi(.033,.033,.02,10),n,`cloth`,[0,-.185,0]);jh(e,`fore`,[[.03,.185],[.034,.2]],r,{ruffle:r,ruffleR:.066});let o=Mh(e,{y:.07,len:.86,r0:.105,r1:.45,wide:1.2,flare:.68});Ph(e,o,{y:.07,len:.6,r0:.104,r1:.34,pleats:22,pleatAmp:.08,lenFn:e=>.82+.3*(1-Math.cos(e))*.5,col:(e,t,n)=>n.set(r)}),Rh(e,o,{y:.07,len:.6,r0:.104,r1:.34,lenFn:e=>.82+.3*(1-Math.cos(e))*.5,col:`#e6e9ff`});let s=Jh(`#f4f4ff`),c=Jh(n);Ph(e,o,{y:.075,len:.86,r0:.11,r1:.45,skip:e=>Math.abs(e)<.48,lenFn:e=>.8+.2*(1-Math.cos(e))*.5,...Qh,col:(e,t,n)=>{n.copy(Yh(e,t,.86,.96,28)?Jh(i):c),t<.84&&Xh(e*9,t*24)&&n.copy(s)}}),Gh(e,Wh(o,.8)[0],[[new Mi(.009,.009,.4,6),i]],Nh(o,.8,.34,.03),[.1,0,.18]),Gh(e,Wh(o,.42)[0],[[new G(.075,.095,.022),n]],Nh(o,.42,.3,.03),[0,.42,0]);for(let t of[-2.2,-1.2,1.5,2.6])e.decal(`hips`,`moonStars`,$f,.16,Nh(o,t,.55,.03),[-.25,t,0],Wh(o,t)[1]);e.decal(`hips`,`k`,e=>Jf(e),.085,Nh(o,.42,.3,.046),[-.3,.42,0],Wh(o,.42)[0]),gh(e,t),vh(e,t),xh(e,t),_h(e,t,{n:7,sweep:.1}),yh(e,t,{len:-.5,wave:.035}),bh(e,t,{len:-1.1,n:15,wave:.07,flare:.3,spread:1.9,fan:.9,curl:.05,freq:12}),Th(e,r,n),e.add(`head`,new oo(.03,.007,5,14,3.6).rotateZ(1.1),i,`cloth`,[.1,.215,.05],[0,.9,0]),e.decal(`head`,`prism`,Yf,.11,[.13,.196,.044],[0,.9,0]),kh(e,`head`,[.122,.15,.02],[0,1.2,0],.07,.036,n),e.decal(`head`,`kRound`,e=>Jf(e,!0),.04,[.139,.15,.027],[0,1.2,0]);let l=e.mount(`weapon`,`handR`,[0,-.05,.02]);e.add(l,new Mi(.009,.009,.56,8).rotateX(Math.PI/2),i,`cloth`,[0,0,.12]);for(let t=0;t<6;t++)e.add(l,new ao(.008,6,5),`#eef0ff`,`cloth`,[0,.01,0+t*.055]);return e.add(l,new Mi(.012,.012,.03,8).rotateX(Math.PI/2),`#eef0ff`,`cloth`,[0,0,.39]),qh(e,n,`#c3d4fa`),e.build()}function ag(){let e=Uh(),t={c0:`#7a72e2`,c1:`#a092f4`},n=`#2f2a7a`,r=`#6358d0`,i=`#faf7ff`,a=`#d6b46c`,o=`#fff0e8`;ph(e,{skin:o,face:{skin:o,iris:[`#3a2a9a`,`#6a5ae0`,`#c4bcff`],pupil:`#22186a`,lash:`#2a2060`,brow:`#6a5ed0`,mouth:`smile`,tilt:.02,eyeH:.24,lowerLash:2,blush:`rgba(255,170,110,0.5)`,lip:`#e88c9c`},head:{jaw:.44,cheek:.048,len:1.08},chest:i,belly:r,pelvis:r,upperArm:i,foreArm:i,thigh:null,shin:null,shoe:`#4a40b0`,sole:a,heel:.06,neckBand:i}),e.add(`chest`,new oo(.035,.004,4,16).rotateX(Math.PI/2),a,`cloth`,[0,.25,0]);for(let t=0;t<3;t++)e.add(`chest`,Im(.016,.006,.006),a,`cloth`,[0,.17-t*.04,.09+(t===1?.006:0)]);e.add(`chest`,new oo(.016,.005,5,14),a,`cloth`,[0,.14,.098]),e.decal(`spine`,`qwen`,Xf,.09,[.03,.05,.09],[0,.1,0]);for(let t of[-.025,.125])e.add(`spine`,new oo(.097,.005,5,24).rotateX(Math.PI/2).scale(1,1,.76),a,`cloth`,[0,t,0]);jh(e,`fore`,[[.045,0],[.09,.1],[.145,.22]],n,{edge:a,zs:.8});for(let t of[`L`,`R`])e.add(`arm${t}`,Im(.058,.13,.058),n,`cloth`,[0,-.12,0]);let s=Mh(e,{y:.07,len:.86,r0:.105,r1:.46,wide:1.2,flare:.7}),c=Jh(r),l=Jh(`#8478ea`);Ph(e,s,{y:.07,len:.86,r0:.104,r1:.455,pleats:20,pleatAmp:.07,...Qh,col:(e,t,n)=>{Zh((e/(Math.PI*2)%1+1)%1,(t-.8)/.12,44)?n.set(a):Math.abs(e+.25)<.34?n.set(i):n.copy(c).lerp(l,t*.6)}}),Rh(e,s,{y:.07,len:.86,r0:.104,r1:.455,col:`#ece8ff`}),Ih(e,`chest`,{top:[-.19,-.1,0,.1,.19].map(e=>new X(e,.16,-.07+Math.abs(e)*.3)),drop:(e,t)=>new X((e-2)*.08*t,-(.72+.2*(1-Math.abs(e-2)/2))*t,-.14*Math.sin(t*1.5)),bones:3,rows:44,cols:72,col:(e,t,r)=>r.set(t>.975||e<.03||e>.97||Zh(e,(t-.8)/.15,26)?a:n)}),Ah(e,`spine`,[.03,0,.085],.11,`#7a6ee6`,a),gh(e,t),vh(e,t),xh(e,t),_h(e,t,{n:7,sweep:.24}),yh(e,t,{len:-.36,wave:.026}),wh(e,t,1),bh(e,t,{len:-1.02,n:15,wave:.055,flare:.24,spread:1.9,fan:.8,curl:.03});let u=[-.06,rh.y+ih*.93,.02],d=[.2,0,.42];e.add(`head`,new Mi(.058,.062,.04,16),n,`cloth`,u,d),e.add(`head`,Um({y:-.012,len:.022,r0:.062,r1:.085,zs:1,pleats:12,pleatAmp:.16,rows:2,cols:36,col:(e,t,n)=>n.set(i)}),null,`cloth`,u,d),e.decal(`head`,`qwen`,Xf,.08,[-.089,rh.y+ih*.8,.082],[0,-.5,0]),Ah(e,`head`,[-.13,.11,.03],.07,`#7a6ee6`,a);let f=e.mount(`weapon`,`handR`,[0,-.05,.02]),p=new ji(.27,14,Math.PI/2-1.15,2.3).rotateY(Math.PI/2).rotateX(Math.PI/2);e.add(f,J(p,(e,t,n)=>n.set(`#efeaff`).lerp(Jh(`#5a4fd0`),Math.min(1,Math.hypot(e.y,e.z)/.27))));for(let t=0;t<7;t++){let n=-1.15+t/6*2.3;e.add(f,new G(.004,.006,.27),a,`cloth`,[.002,Math.sin(n)*.135,Math.cos(n)*.135],[-n,0,0])}return qh(e,r,i),e.build()}function og(){let e=Uh(),t={c0:`#5b7af2`,c1:`#dc82f2`},n=`#2b2b68`,r=`#fbf9ff`,i=`#8b5ef2`,a=`#e3c16f`,o=`#ffeee4`;ph(e,{skin:o,face:{skin:o,iris:[`#a86a10`,`#f2c232`,`#fff2a8`],irisR:[`#a01848`,`#f04a7a`,`#ffb4cc`],pupil:`#40204a`,lash:`#3a2a6c`,brow:`#5b62d8`,mouth:`cat`,tilt:.12,pupilShape:`slit`,sparkle:`star`},head:{jaw:.43,cheek:.076,len:1,chin:.12},chest:n,belly:null,pelvis:n,upperArm:null,foreArm:r,thigh:null,shin:null,shoe:n,sole:i,heel:0,neckBand:n,bare:!0}),e.decal(`chest`,`geminiStar`,Zf,.08,[0,.14,.106],[-.1,0,0]);for(let t of[-1,1])e.add(`chest`,new G(.045,.1,.01),r,`cloth`,[t*.055,.06,.078],[-.1,t*.4,t*.25]);e.add(`chest`,new oo(.1,.012,5,24).rotateX(Math.PI/2).scale(1,1,.76),i,`cloth`,[0,-.02,0]);for(let t of[`L`,`R`])e.add(`arm${t}`,Um({y:-.19,len:.035,r0:.036,r1:.06,zs:1,pleats:8,pleatAmp:.25,rows:2,cols:32,col:(e,t,n)=>n.set(`#d9c6ff`)})),e.add(`shin${t}`,Um({y:-.1,len:.27,r0:.062,r1:.075,zs:1,pleats:12,pleatAmp:.06,rows:4,cols:24,flare:.4,col:(e,t,n)=>n.set(r)})),e.add(`foot${t}`,Im(.05,.02,.115),i,`cloth`,[0,-.06,.055]);jh(e,`fore`,[[.04,0],[.07,.1],[.125,.21]],r,{edge:i}),jh(e,`fore`,[[.045,.05],[.08,.12]],n),e.add(`legL`,new oo(.066,.006,5,16).rotateX(Math.PI/2),n,`cloth`,[0,-.16,0]);let s=Mh(e,{y:.06,len:.3,r0:.108,r1:.28,bones:2,n:8,wide:1.12,flare:.75});Ph(e,s,{y:.055,len:.3,r0:.107,r1:.275,pleats:16,pleatAmp:.09,rows:5,col:(e,t,n)=>n.set(r)}),Ph(e,s,{y:.06,len:.24,r0:.111,r1:.26,rows:5,lenFn:e=>.8+.3*Math.abs(Math.sin(e*1.5)),col:(e,t,r)=>r.set(t>.9?a:n)}),e.decal(`hips`,`geminiStar`,Zf,.085,[0,.07,.11],[0,0,0]),e.decal(`hips`,`geminiStar`,Zf,.11,Nh(s,-.75,.55,.045),[-.4,-.75,0],Wh(s,-.75)[1]);let c=Jh(n),l=Jh(i);for(let t of[1,-1])Vh(e,`hips`,Ih(e,`hips`,{top:[.6,1.3,2].map(e=>new X(Math.sin(e*t)*.115,.06,Math.cos(e*t)*.1)),drop:(e,n)=>new X(t*(.1+e*.03)*n,-.78*n*(1-.12*Math.abs(e-1)),(-.1-e*.05)*n),bones:3,col:(e,t,n)=>n.copy(c).lerp(l,t*.8).lerp(Jh(a),+(e<.07||e>.93||t>.96))})[1][2],Y(Xm(.045),[t*.3,-.76,-.2]),`#c8a6ff`);gh(e,t),vh(e,t),xh(e,t),_h(e,t,{n:7,sweep:.16}),yh(e,t,{len:-.4,wave:.03}),bh(e,t,{len:-1.04,n:15,wave:.065,flare:.3,spread:1.9,fan:.9,curl:.05}),Sh(e,t);for(let n of[-1,1])e.add(`head`,Im(.045,.042,.045),t.c0,`hair`,[n*.1,.215,-.045]);Eh(e,`cat`,`#5560e0`,`#ffb0c8`),e.decal(`head`,`geminiStar`,Zf,.135,[.104,.2,.066],[0,.9,.3]),e.decal(`head`,`geminiStar`,Zf,.05,[.127,.148,.054],[0,1,0]);let u=Jh(`#5b7af2`),d=Jh(`#b06af2`);return Fh(e,{pts:[new X(0,-.04,-.09),new X(0,-.2,-.3),new X(.05,-.45,-.4),new X(.12,-.6,-.3),new X(.17,-.62,-.13)],r:e=>.026+.034*Math.sin(Math.PI*e**.8)+.003*Math.sin(e*70),bones:5,mat:`hair`,seg:28,spring:{grav:.15,stiff:2.2},col:(e,t,n)=>n.copy(u).lerp(d,e)}),qh(e,i,`#aee6ff`),e.build()}function sg(){let e=Uh(),t={c0:`#f2d27c`,c1:`#f8e4a6`},n=`#1f1b20`,r=`#9c1f2c`,i=`#d4a84a`,a=`#ffffff`,o=`#ffeee4`;ph(e,{skin:o,face:{skin:o,iris:[`#1a3ac0`,`#3a8aff`,`#b4e2ff`],pupil:`#0c1e70`,lash:`#5a3c14`,brow:`#cfa23a`,mouth:`fang`,tilt:.16,pupilShape:`slit`},head:{jaw:.48,cheek:.066,len:1.04,chin:.1},chest:n,belly:n,pelvis:n,upperArm:null,foreArm:n,thigh:`#3a2c30`,shin:`#3a2c30`,shoe:n,sole:i,heel:.065,neckBand:n,bare:!0}),e.add(`chest`,new $a([new R(.05,.2),new R(.088,.27),new R(.104,.305)],16,.75,Math.PI*2-1.5),n),e.add(`chest`,new $a([new R(.047,.2),new R(.084,.27),new R(.099,.303)],16,.75,Math.PI*2-1.5),r),kh(e,`chest`,[0,.2,.07],[.15,0,0],.085,.04,n),e.decal(`chest`,`grokRing`,e=>Qf(e),.055,[0,.2,.094],[-.15,0,0]);for(let t of[-1,1])e.add(`chest`,new eo(.01).scale(.6,1.5,.4),i,`cloth`,[t*.045,.1,.1]);e.add(`chest`,Um({y:.168,len:.035,r0:.118,r1:.14,zs:.76,pleats:18,pleatAmp:.1,rows:2,cols:54,col:(e,t,n)=>n.set(a)})),e.decal(`spine`,`grokRing`,e=>Qf(e),.095,[0,.03,.09],[0,0,0]);for(let t of[`L`,`R`])e.add(`arm${t}`,Im(.056,.07,.056),n,`cloth`,[0,-.13,0]),e.add(`arm${t}`,Um({y:-.055,len:.035,r0:.03,r1:.062,zs:1,pleats:8,pleatAmp:.25,rows:2,cols:32,col:(e,t,n)=>n.set(a)}));jh(e,`fore`,[[.038,0],[.06,.1],[.105,.2]],n,{ruffle:a,ruffleR:.12,edge:i});let s=Mh(e,{y:.07,len:.9,r0:.105,r1:.47,wide:1.2,flare:.66}),c=e=>.74+.26*(1-Math.cos(e))*.5;Ph(e,s,{y:.07,len:.9,r0:.103,r1:.44,pleats:22,pleatAmp:.07,lenFn:c,col:(e,t,n)=>n.set(r)}),Rh(e,s,{y:.07,len:.9,r0:.103,r1:.44,lenFn:c,col:`#2c2830`}),Ph(e,s,{y:.075,len:.82,r0:.11,r1:.47,pleats:9,pleatAmp:.05,...Qh,lenFn:e=>c(e)*(.9+.1*Math.abs(Math.sin(e*2))),col:(e,t,r)=>r.set(t>.965||Yh(e,t,.8,.93,22)?i:n)}),e.decal(`hips`,`grokRing`,e=>Qf(e),.13,Nh(s,.9,.23,.08),[-.5,.9,0],Wh(s,.9)[0]),kh(e,`spine`,[0,.03,-.09],[0,0,0],.22,.1,n),gh(e,t),vh(e,t),xh(e,t),_h(e,t,{n:7,sweep:.12}),yh(e,t,{len:-.24,wave:.02}),Ch(e,t,.92,.06),Sh(e,t),Dh(e,o);let l=rh.y+ih*.97;e.add(`head`,new Mi(.038,.034,.03,10,1,!0),`#2a242c`,`cloth`,[0,l+.012,.03]);for(let t=0;t<5;t++){let n=t/5*Math.PI*2;e.add(`head`,new Ni(.01,.032,4),i,`cloth`,[Math.sin(n)*.036,l+.04,.03+Math.cos(n)*.036])}for(let t of[1,-1]){kh(e,`head`,[t*.125,.2,-.04],[0,t*.5,t*.5],.1,.055,n);let r=new da([[0,0],[.075,.04],[.06,.005],[.045,-.02],[.028,-.005],[.012,-.025]].map(([e,n])=>new R(e*t,n)));e.add(`head`,new ro(r),`#3a2630`,`cloth`,[t*.15,.175,-.02],[0,t*.3,0])}let u=e.mount(`weapon`,`handR`,[0,-.05,.02]);e.add(u,new Mi(.016,.016,1.75,8).rotateX(Math.PI/2),`#2a2228`,`cloth`,[0,0,.1]);for(let t of[-.74,-.2,.55])e.add(u,new Mi(.024,.024,.05,8).rotateX(Math.PI/2),i,`cloth`,[0,0,t]);e.add(u,new Ni(.03,.14,6).rotateX(-Math.PI/2),i,`cloth`,[0,0,-.84]),e.add(u,new Ni(.028,.2,6).rotateX(Math.PI/2),`#2a2228`,`cloth`,[0,0,1.08]);for(let t of[1,-1]){let n=new da;n.moveTo(.02,-.2),n.quadraticCurveTo(.36,-.36,.33,0),n.quadraticCurveTo(.36,.36,.02,.2),n.quadraticCurveTo(.2,0,.02,-.2);let r=new Ya(n,{depth:.022,bevelEnabled:!0,bevelSize:.012,bevelThickness:.01,bevelSegments:1});r.translate(0,0,-.011).rotateX(Math.PI/2).rotateZ(t>0?0:Math.PI),e.add(u,J(r,(e,t,n)=>n.set(`#2a2228`).lerp(Jh(i),+(Math.abs(e.x)>.26))),null,`cloth`,[0,0,.78]);for(let n of[1,-1])e.add(u,new G(.34,.03,.03),i,`cloth`,[0,0,.78],[0,t*n*.75,0])}return qh(e,r,n),e.build()}var cg={claude:eg,gpt:tg,deepseek:ng,glm:rg,kimi:ig,qwen:ag,gemini:og,grok:sg};function lg(e){return cg[e]()}function ug(e,t){let n=new Float32Array(xm);t&&n.set(t),e.hy!==void 0&&(n[0]=e.hy),e.hz!==void 0&&(n[1]=e.hz);for(let t of ym){let r=e[t];if(r===void 0)continue;let i=3+bm[t]*3,a=typeof r==`number`?[r,0,0]:r;n[i]=a[0],n[i+1]=a[1]??0,n[i+2]=a[2]??0}return n}var Z=(e,t,n,r=0,i=0)=>{let a=3+bm[t]*3;e[a]=n,e[a+1]=r,e[a+2]=i};function dg(e,t,n,r){for(let i=0;i<xm;i++)e[i]=t[i]+(n[i]-t[i])*r;return e}var fg=(e,...t)=>({keys:t.map(([t,n])=>[t,ug(n,e)])});function pg(e,t,n){let r=e.keys;if(t<=r[0][0])return n.set(r[0][1]),n;for(let e=0;e<r.length-1;e++)if(t<r[e+1][0])return dg(n,r[e][1],r[e+1][1],sd(r[e][0],r[e+1][0],t));return n.set(r[r.length-1][1]),n}var mg=ug({hy:-.03,legL:[.16,.1],legR:[-.2,.1],shinL:.28,shinR:.25,armL:[.2,.22],armR:[.2,.22],foreL:.55,foreR:.55,chest:.05}),hg=Math.PI*2,gg={cast1:fg(mg,[0,{armR:[.3,.3,-.5],foreR:1.6,chest:[.05,-.35]}],[.32,{armR:[.4,.3,-.6],foreR:1.7,chest:[.05,-.4]}],[.5,{armR:[1.5,.1],foreR:.12,chest:[.12,.3],hips:[.06]}],[1,{armR:[1.2,.15],foreR:.4,chest:[.08,.1]}]),cast2:fg(mg,[0,{armL:[.3,.3,-.5],foreL:1.6,chest:[.05,.35]}],[.3,{armL:[.4,.3,-.6],foreL:1.7,chest:[.05,.4]}],[.5,{armL:[1.5,.1],foreL:.12,chest:[.12,-.3],hips:[.06]}],[1,{armL:[1.2,.15],foreL:.4,chest:[.08,-.1]}]),cast3:fg(mg,[0,{armL:[1,.4],armR:[1,.4],foreL:1.2,foreR:1.2}],[.38,{armL:[2.7,.35],armR:[2.7,.35],foreL:.5,foreR:.5,hips:[-.12],hy:.02,head:[-.2]}],[.58,{armL:[1.45,.15],armR:[1.45,.15],foreL:.1,foreR:.1,hips:[.22],hy:-.06}],[1,{armL:[1.1,.2],armR:[1.1,.2],foreL:.4,foreR:.4,hips:[.1]}]),blade1:fg(mg,[0,{armR:[.2,1.2,-.5],foreR:.4,chest:[.05,-.5],hips:[0,-.15]}],[.3,{armR:[.2,1.3,-.7],foreR:.5,chest:[.05,-.6],hips:[0,-.2]}],[.52,{armR:[.3,1.3,1.9],foreR:.12,chest:[.1,.55],hips:[.05,.25]}],[1,{armR:[.3,1.2,1.6],foreR:.4,chest:[.08,.4],hips:[0,.15]}]),blade2:fg(mg,[0,{armR:[.3,1.25,1.8],foreR:.3,chest:[.08,.5],hips:[0,.2]}],[.25,{armR:[.3,1.25,2],foreR:.5,chest:[.08,.6]}],[.5,{armR:[.2,1.3,-.5],foreR:.1,chest:[.08,-.5],hips:[.04,-.25]}],[1,{armR:[.2,1.1,-.3],foreR:.4,chest:[.05,-.3]}]),blade3:fg(mg,[0,{armR:[-.4,.35],foreR:.3,chest:[.25,-.3],hy:-.08}],[.3,{armR:[-.6,.4],foreR:.4,chest:[.3,-.35],hy:-.12}],[.52,{armR:[2.5,.3],foreR:.15,chest:[-.15,.2],hips:[-.08],hy:.03}],[1,{armR:[2.2,.3],foreR:.4,chest:[-.05,.1]}]),blade4:fg(mg,[0,{armR:[.3,1.4,.4],foreR:.2,hips:[0,-.5],hy:-.06}],[.2,{armR:[.3,1.4,.2],foreR:.3,hips:[0,-.8],hy:-.08}],[.7,{armR:[.3,1.45,.7],foreR:.1,hips:[.05,hg-.2],armL:[.2,1],hy:-.05}],[1,{armR:[.3,1.3,.9],foreR:.3,hips:[0,hg],armL:[.2,.6]}]),claw1:fg(mg,[0,{armR:[2.2,.6],foreR:1,chest:[0,-.4]}],[.28,{armR:[2.4,.7],foreR:1.1,chest:[-.05,-.5],hy:0}],[.5,{armR:[.6,-.25,.3],foreR:.3,chest:[.2,.45],hips:[.1,.15],hy:-.07}],[1,{armR:[.5,0],foreR:.5,chest:[.12,.3]}]),claw2:fg(mg,[0,{armL:[2.2,.6],foreL:1,chest:[0,.4]}],[.28,{armL:[2.4,.7],foreL:1.1,chest:[-.05,.5]}],[.5,{armL:[.6,-.25,.3],foreL:.3,chest:[.2,-.45],hips:[.1,-.15],hy:-.07}],[1,{armL:[.5,0],foreL:.5,chest:[.12,-.3]}]),claw3:fg(mg,[0,{hips:[0,-.4],hy:-.08,armL:[.2,.8],armR:[.2,.8]}],[.18,{hips:[.05,-.7],hy:-.1,armL:[.2,.9],armR:[.2,.9]}],[.68,{hips:[.1,hg-.3],hy:-.06,legR:[.5,.9],shinR:.2,armL:[.2,1.1],armR:[.2,1.1]}],[1,{hips:[0,hg],armL:[.2,.5],armR:[.2,.5]}]),claw4:fg(mg,[0,{armL:[2.3,.5],armR:[2.3,.5],foreL:.9,foreR:.9,hips:[-.15],hy:.02}],[.34,{armL:[2.6,.55],armR:[2.6,.55],foreL:1,foreR:1,hips:[-.2],hy:.05}],[.55,{armL:[.7,.05],armR:[.7,.05],foreL:.35,foreR:.35,hips:[.4],hy:-.12,shinL:.6,shinR:.5}],[1,{armL:[.6,.2],armR:[.6,.2],foreL:.5,foreR:.5,hips:[.2],hy:-.06}]),heavy1:fg(mg,[0,{armR:[.3,1.1,-.6],foreR:.6,armL:[1,-.2],foreL:1.2,chest:[.05,-.6],hips:[0,-.3],hy:-.06}],[.4,{armR:[.3,1.2,-1],foreR:.7,armL:[1.1,-.3],foreL:1.3,chest:[.05,-.8],hips:[0,-.4],hy:-.08}],[.6,{armR:[.35,1.25,1.7],foreR:.2,armL:[1,.5],foreL:.6,chest:[.12,.7],hips:[.06,.35],hy:-.1}],[1,{armR:[.3,1.2,1.5],foreR:.4,armL:[.8,.4],foreL:.7,chest:[.1,.5],hips:[0,.25]}]),heavy2:fg(mg,[0,{armR:[.35,1.25,1.7],foreR:.3,armL:[1,.5],foreL:.7,chest:[.1,.7],hips:[0,.35],hy:-.08}],[.35,{armR:[.4,1.25,2],foreR:.5,armL:[1,.6],foreL:.8,chest:[.1,.85],hips:[0,.4],hy:-.1}],[.58,{armR:[.3,1.25,-.7],foreR:.15,armL:[1,-.2],foreL:1,chest:[.12,-.7],hips:[.06,-.35],hy:-.1}],[1,{armR:[.3,1.1,-.5],foreR:.4,armL:[.9,-.1],foreL:1,chest:[.08,-.4]}]),heavy3:fg(mg,[0,{armR:[1.6,.3],armL:[1.6,.3],foreR:1,foreL:1,hips:[-.1]}],[.45,{armR:[2.95,.25],armL:[2.9,.3],foreR:.7,foreL:.8,hips:[-.28],chest:[-.1],hy:.05,head:[-.2]}],[.62,{armR:[.85,.1],armL:[.9,0],foreR:.12,foreL:.3,handR:[1],hips:[.5],chest:[.15],hy:-.2,legL:[.5,.15],shinL:.8,shinR:.6}],[1,{armR:[.8,.15],armL:[.8,.1],foreR:.3,foreL:.4,handR:[.7],hips:[.35],hy:-.14,shinL:.6,shinR:.5}]),thrust:fg(mg,[0,{armR:[.2,.3,-.7],foreR:1.5,chest:[.15,-.4],hy:-.08}],[.25,{armR:[.2,.3,-.8],foreR:1.6,chest:[.2,-.5],hy:-.12}],[.45,{armR:[1.5,.05],foreR:.05,chest:[.3,.35],hips:[.25],hy:-.1,legL:[.7,.1],shinL:.7,legR:[-.6,.1]}],[1,{armR:[1.3,.1],foreR:.3,chest:[.2,.2],hips:[.15]}]),raise:fg(mg,[0,{armL:[.8,.5],armR:[.8,.5],foreL:1,foreR:1}],[.35,{armL:[2.75,.5],armR:[2.75,.5],foreL:.3,foreR:.3,hips:[-.15],chest:[-.1],head:[-.35],hy:.04}],[.7,{armL:[2.8,.6],armR:[2.8,.6],foreL:.2,foreR:.2,hips:[-.15],chest:[-.1],head:[-.3],hy:.06}],[1,{armL:[1.2,.7],armR:[1.2,.7],foreL:.4,foreR:.4}]),spin:fg(mg,[0,{hips:[0,-.5],armL:[.2,1.2],armR:[.2,1.2],hy:-.08}],[.15,{hips:[.05,-.8],armL:[.2,1.3],armR:[.2,1.3],hy:-.1}],[.8,{hips:[.08,hg*2-.3],armL:[.2,1.4],armR:[.2,1.4],foreL:.1,foreR:.1,hy:-.06}],[1,{hips:[0,hg*2],armL:[.2,.7],armR:[.2,.7]}]),slam:fg(mg,[0,{hy:-.15,shinL:.9,shinR:.9,legL:[.5,.1],legR:[.4,.1],armL:[.5,.3],armR:[.5,.3]}],[.4,{hy:.05,armL:[2.9,.3],armR:[2.9,.3],foreL:.7,foreR:.7,hips:[-.25],legL:[.7,.1],shinL:1.3,legR:[.2,.1],shinR:1}],[.62,{hy:-.22,armL:[.8,.1],armR:[.8,.1],foreL:.15,foreR:.15,handR:[1],hips:[.55],shinL:.9,shinR:.8,legL:[.6,.15]}],[1,{hy:-.16,armL:[.8,.15],armR:[.8,.15],foreL:.3,foreR:.3,handR:[.7],hips:[.4],shinL:.7,shinR:.6}]),channel:fg(mg,[0,{armL:[1.1,.3],armR:[1.1,.3],foreL:1.3,foreR:1.3,head:[.15]}],[.3,{armL:[1.2,.1,.3],armR:[1.2,.1,.3],foreL:1.5,foreR:1.5,head:[.2],hy:-.02}],[.75,{armL:[1.3,.15,.2],armR:[1.3,.15,.2],foreL:1.4,foreR:1.4,head:[-.1],hy:.03}],[1,{armL:[1.5,.9],armR:[1.5,.9],foreL:.2,foreR:.2,head:[-.2],hips:[-.1]}]),hit:fg(mg,[0,{hips:[-.3],chest:[-.25],head:[-.3],armL:[.2,.6],armR:[.2,.6],hy:-.05}],[1,{hips:[-.1],chest:[-.05]}]),down:fg(mg,[0,{hy:-.1}],[1,{hy:-.56,hips:[.35],chest:[.6],head:[.5],legL:[1.5,.15],legR:[1.4,.15],shinL:2.3,shinR:2.2,armL:[.4,.2],armR:[.4,.2],foreL:.3,foreR:.3}]),dodge:fg(mg,[0,{hips:[.55],hy:-.14,legL:[.9,.05],shinL:.9,legR:[-.7,.05],shinR:.3,armL:[-.8,.3],armR:[-.8,.3],foreL:.2,foreR:.2,head:[-.35]}],[1,{hips:[.4],hy:-.1,legL:[-.6,.05],shinL:.4,legR:[.8,.05],shinR:.9,armL:[-.7,.3],armR:[-.7,.3],head:[-.3]}])},_g=class{rig;phase=0;t=Math.random()*10;pose=new Float32Array(xm);tmp=new Float32Array(xm);constructor(e){this.rig=e}update(e,t){this.t+=e;let n=this.pose,r=this.t;n.fill(0);let i=13;if(t.action)pg(t.action.clip,t.action.u,n),i=26;else if(t.mode===`dead`)pg(gg.down,1,n),i=5;else if(t.mode===`ground`){let a=ad(t.speed/5.2),o=t.sprint;this.phase+=t.speed*e*od(2.3,1.75,a);let s=this.phase,c=Math.sin(s),l=Math.sin(r*1.8),u=od(.4,.95,a)*(t.moving?1:a),d=od(.6,1.5,a);n[0]=t.moving?-.02-.02*a+.03*a*Math.cos(s*2):-.004+.004*l;let f=t.moving?.05+.13*a+.14*o:.015*l;Z(n,`hips`,f,.1*a*c,.03*c*a),Z(n,`spine`,.02,-.08*a*c),Z(n,`chest`,.03+.012*l,-.06*a*c),Z(n,`head`,-f*.6,t.moving?0:.06*Math.sin(r*.45)),Z(n,`legL`,u*c,.04),Z(n,`legR`,-u*c,.04),Z(n,`shinL`,.12+d*Math.max(0,Math.cos(s))*+!!t.moving),Z(n,`shinR`,.12+d*Math.max(0,-Math.cos(s))*+!!t.moving),Z(n,`footL`,.35*a*Math.max(0,-c)),Z(n,`footR`,.35*a*Math.max(0,c));let p=.8*a*(1-o*.8),m=od(.3,1.25,a)*(1-o*.7);if(Z(n,`armL`,-p*c-.9*o,.12+.2*o),Z(n,`armR`,p*c-.9*o,.12+.2*o),Z(n,`foreL`,m+.03*l),Z(n,`foreR`,m+.03*l),t.landT>0){let e=t.landT/.22;n[0]-=.14*e,n[3+bm.shinL*3]+=.7*e,n[3+bm.shinR*3]+=.7*e,n[3+bm.legL*3]+=.4*e,n[3+bm.legR*3]+=.4*e,n[3]+=.2*e}i=t.moving?16:10}else if(t.mode===`air`){let e=ad(.5-t.vy/14);Z(n,`hips`,od(.05,.12,e)),Z(n,`legL`,od(.6,.25,e),.06),Z(n,`shinL`,od(1,.5,e)),Z(n,`legR`,od(-.25,-.1,e),.06),Z(n,`shinR`,od(.5,.3,e)),Z(n,`armL`,od(.4,.2,e),od(.5,1.15,e)),Z(n,`armR`,od(.4,.2,e),od(.5,1.15,e)),Z(n,`foreL`,.4),Z(n,`foreR`,.4),Z(n,`footL`,.4),Z(n,`footR`,.4)}else if(t.mode===`glide`){let e=Math.sin(r*2.2)*.04;n[0]=-.08,Z(n,`hips`,.95+e),Z(n,`chest`,.12),Z(n,`head`,-.85),Z(n,`armL`,-.15,1.45+e,-.2),Z(n,`armR`,-.15,1.45+e,-.2),Z(n,`foreL`,.15),Z(n,`foreR`,.15),Z(n,`legL`,-.2+e,.08),Z(n,`legR`,-.35-e,.08),Z(n,`shinL`,.25),Z(n,`shinR`,.45),Z(n,`footL`,.6),Z(n,`footR`,.6),i=8}else if(t.mode===`climb`){this.phase+=(t.moving?7.5:0)*e;let r=Math.sin(this.phase),i=Math.cos(this.phase);Z(n,`hips`,-.05),Z(n,`head`,-.35),Z(n,`armL`,2.3+.45*r,.35),Z(n,`armR`,2.3-.45*r,.35),Z(n,`foreL`,.9-.5*r),Z(n,`foreR`,.9+.5*r),Z(n,`legL`,.85-.45*r,.4),Z(n,`legR`,.85+.45*r,.4),Z(n,`shinL`,1.3-.5*r+.1*i),Z(n,`shinR`,1.3+.5*r),n[1]=-.08}else if(t.mode===`swim`){this.phase+=(t.moving?5.5:2.2)*e;let r=.5+.5*Math.sin(this.phase),a=t.moving?1:.35;Z(n,`hips`,t.moving?1:.3),Z(n,`head`,t.moving?-.85:-.2),Z(n,`armL`,od(1.3,2.6-1*r,a),.3+.9*r*a+(1-a)*.5),Z(n,`armR`,od(1.3,2.6-1*r,a),.3+.9*r*a+(1-a)*.5),Z(n,`foreL`,.3+.6*r),Z(n,`foreR`,.3+.6*r);let o=Math.sin(this.phase*2)*.3*a;Z(n,`legL`,o,.08),Z(n,`legR`,-o,.08),Z(n,`shinL`,.35+o),Z(n,`shinR`,.35-o),Z(n,`footL`,.7),Z(n,`footR`,.7),i=8}else Z(n,`hips`,-.3),Z(n,`head`,.2),Z(n,`legL`,.7,.1),Z(n,`legR`,.5,.1),Z(n,`shinL`,.5),Z(n,`shinR`,.3),Z(n,`armL`,.2,.9),Z(n,`armR`,.2,.9),Z(n,`foreL`,.4),Z(n,`foreR`,.4);if(t.hold&&t.holdMask&&!t.action&&(t.mode===`ground`||t.mode===`air`)){let e=t.mode===`air`?.5:1-.55*ad(t.speed/5.2)-.3*t.sprint;for(let r of t.holdMask){let i=3+bm[r]*3;for(let r=0;r<3;r++)n[i+r]=od(n[i+r],t.hold[i+r],Math.max(.15,e))}}return this.rig.apply(n,e,i),this.rig.updateSprings(e),this.tmp}},vg=Math.PI/2,yg=e=>(Math.random()*2-1)*e,bg=(e,t,n)=>{let r=new z(t.x+yg(n),0,t.z+yg(n));return r.y=e.g.terrain.heightAt(r.x,r.z),r},xg=e=>e.g.player.pos.clone(),Sg=(e,t,n)=>e.g.player.pos.distanceTo(t)<n,Cg=(e,t,n)=>[{clip:`cast1`,dur:.5,cancel:.62,ev:[[.46,n=>n.shot(e,t)]]},{clip:`cast2`,dur:.5,cancel:.62,ev:[[.46,n=>n.shot(e*1.05,t)]]},{clip:`cast3`,dur:.74,cancel:.72,ev:[[.56,t=>t.shot(e,n)]]}],wg=(e,t,n)=>[{clip:`claw1`,dur:.4*t,cancel:.62,lunge:1.2,ev:[[.48,t=>t.arc(2.6,110,e,{a0:1,a1:-1,tilt:.55,y:1.1})]]},{clip:`claw2`,dur:.4*t,cancel:.62,lunge:1,ev:[[.48,t=>t.arc(2.6,110,e*1.05,{a0:-1,a1:1,tilt:-.55,y:1.1})]]},{clip:`claw3`,dur:.6*t,cancel:.72,lunge:.8,ev:[[.42,t=>t.arc(3.4,360,e*1.5,{a0:Math.PI,a1:-Math.PI,y:.7,poise:16})]]},{clip:`claw4`,dur:.62*t,cancel:.72,lunge:1.6,ev:[[.52,n]]}],Tg={claude:{weapon:`cast`,normalName:`햇살 장`,normals:Cg(.55,{speed:22},{n:3,spread:.26,speed:22}),charged:{clip:`cast3`,dur:.86,ev:[[.56,e=>e.shot(1.6,{size:.42,pierce:!0,speed:26,poise:18,homing:!1})]]},skill:{name:`여명의 주석`,desc:`대상의 발밑에 원을 표시한 뒤 햇살 기둥을 떨어뜨려 범위 화염 피해를 주고, 지속적으로 타오르는 지역을 남깁니다.`,cd:7,clip:`raise`,dur:.85,ev:[[.18,e=>{e.spot.copy(e.aim(9)),e.g.fx.ring(e.spot,4,.6,.4,e.col())}],[.52,e=>{let t=e.spot.clone();e.g.fx.pillar(t,1.8,10,.6,e.col()),e.g.sfx.boom(),e.g.shake(.25),e.aoe(t,4,2.3,{poise:25}),e.field(t,4,4,.8,t=>e.aoe(t.pos,4,.3,{noFx:!0,quiet:!0}))}]]},burst:{name:`끝없는 여명`,desc:`자신을 중심으로 아침 해를 떠올려 넓은 범위의 적에게 막대한 화염 피해를 주고, 파티 전체의 생명력을 회복합니다.`,cost:60,clip:`raise`,dur:1.3,iframe:1.3,ev:[[.3,e=>e.g.fx.ring(xg(e),9,.8,.4,e.col())],[.6,e=>{let t=xg(e);e.g.fx.pillar(t,3,14,.9,e.col()),e.g.fx.shock(t.clone().setY(t.y+1),9,.5,e.col()),e.g.sfx.boom(),e.g.shake(.5),e.aoe(t,9,4.4,{poise:45,knock:4}),e.heal(.15,!0),e.field(t,7,6,1,t=>e.aoe(t.pos,7,.3,{noFx:!0,quiet:!0}))}]]}},gpt:{weapon:`claw`,normalName:`용의 발톱`,normals:wg(.6,1.05,e=>e.arc(3,120,1.2,{tilt:vg,a0:2.2,a1:-.3,poise:20})),charged:{clip:`slam`,dur:.9,heavy:!0,ev:[[.6,e=>{e.aoe(e.front(1.8),3.4,1.9,{poise:32,knock:3}),e.g.shake(.3),e.g.sfx.boom()}]]},skill:{name:`용꼬리 회전`,desc:`몸을 회전하며 용의 꼬리로 두 바퀴 휩쓸어 주변의 모든 적을 밀쳐냅니다.`,cd:6,clip:`spin`,dur:.85,iframe:.3,ev:[[.3,e=>e.arc(4.6,360,1.3,{a0:Math.PI,a1:-Math.PI,y:.6,poise:15})],[.62,e=>{e.arc(4.6,360,1.6,{a0:-Math.PI,a1:Math.PI,y:.8,poise:30,knock:6}),e.g.shake(.2)}]]},burst:{name:`광룡의 숨결`,desc:`전방에 빛의 숨결을 내뿜어 직선상의 적에게 연속으로 빛 피해를 줍니다.`,cost:60,clip:`channel`,dur:1.6,iframe:1.6,ev:[[.22,e=>{for(let t=0;t<7;t++)e.after(t*.14,()=>{let n=e.front(.6,1.35),r=e.front(14,.8);e.g.fx.beam(n,r,.55,.2,e.col()),e.g.fx.burst(r,e.col(),6,5,.4,.4),e.line(14,3.4,.9,{poise:10,quiet:t%2==1}),e.g.shake(.1)});e.g.sfx.boom()}]]}},deepseek:{weapon:`cast`,normalName:`물방울`,normals:Cg(.5,{speed:15,size:.3},{speed:14,size:.42,aoe:2.4}),charged:{clip:`cast3`,dur:.86,ev:[[.56,e=>e.shot(1.4,{size:.52,aoe:3.2,speed:13,poise:18})]]},skill:{name:`고래 도약`,desc:`영혼 고래를 불러 땅에서 뛰어오르게 해 범위 내 적에게 물결 피해를 주고, 현재 캐릭터의 생명력을 회복합니다.`,cd:9,clip:`raise`,dur:.9,ev:[[.15,e=>{e.spot.copy(e.aim(10)),e.g.fx.ring(e.spot,5,.6,.45,e.col())}],[.52,e=>{let t=e.spot.clone();e.g.fx.pillar(t,2.4,7,.7,e.col()),e.g.fx.burst(t.clone().setY(t.y+1),`#e8f6ff`,30,7,.4,.8,{up:6,gravity:14}),e.g.sfx.splash(),e.g.shake(.25),e.aoe(t,5,2.1,{poise:25,knock:2.5}),e.heal(.12)}]]},burst:{name:`심해의 요람`,desc:`바다를 펼칩니다: 안에 있는 캐릭터의 생명력을 지속적으로 회복하고, 적에게 물결 피해를 줍니다.`,cost:60,clip:`channel`,dur:1.2,iframe:1.2,ev:[[.6,e=>{let t=xg(e);e.g.fx.ring(t,.8,8,.6,e.col()),e.g.sfx.splash(),e.aoe(t,8,1.6,{poise:20}),e.field(t,8,9,1,t=>{e.aoe(t.pos,8,.55,{noFx:!0,quiet:!0}),Sg(e,t.pos,8)&&e.heal(.045)})}]]}},glm:{weapon:`claw`,normalName:`그림자 발톱`,normals:wg(.5,.86,e=>e.arc(2.9,130,1,{a0:1.1,a1:-1.1,poise:16})),charged:{clip:`thrust`,dur:.5,lunge:5,iframe:.3,ev:[[.42,e=>e.arc(3.2,170,1.5,{poise:20})]]},skill:{name:`섬영`,desc:`대상의 옆으로 순식간에 이동해 한 번 벱니다. 남은 잔상은 잠시 후 폭발합니다. 이동 중에는 피해를 받지 않습니다.`,cd:6,clip:`thrust`,dur:.52,iframe:.5,ev:[[.12,e=>{e.spot.copy(xg(e)),e.blink(8)}],[.46,e=>{e.arc(3.2,220,2.2,{poise:22});let t=e.spot.clone();e.g.fx.zone(t,3.5,1.2,e.col()),e.after(1.2,()=>{e.g.fx.shock(t.clone().setY(t.y+1),3.5,.35,e.col()),e.aoe(t,3.5,1.5,{poise:15})})}]]},burst:{name:`천 개의 꿈`,desc:`여러 갈래의 검은 그림자가 되어 적들 사이를 여덟 번 연속으로 베고, 마지막에 범위 내 일반 적을 잠재웁니다.`,cost:60,clip:`spin`,dur:1.4,iframe:1.5,ev:[[.12,e=>{for(let t=0;t<8;t++)e.after(t*.12,()=>{let n=xg(e);e.g.fx.slash(n,Math.random()*6.28,{r:5+Math.random()*2,w:1.6,a0:1.5,a1:-1.5,tilt:yg(1),y:.6+Math.random(),color:e.col(),dur:.2}),e.aoe(n,7,.7,{noFx:!0,quiet:t%2==1,poise:6}),e.g.sfx.swing()})}],[.9,e=>e.each(xg(e),7,e=>{e.def.kind===`elite`?e.vulnT=6:e.sleep(2.6)})]]}},kimi:{weapon:`cast`,normalName:`음표`,normals:Cg(.5,{speed:28,size:.17},{n:2,spread:.1,speed:28,size:.17}),charged:{clip:`cast3`,dur:.86,ev:[[.56,e=>{e.g.fx.beam(e.front(.6,1.2),e.front(16,1),.3,.3,e.col()),e.line(16,1.8,1.5,{poise:18}),e.g.sfx.cast()}]]},skill:{name:`달의 위상`,desc:`대상 위치에 서리 고리를 피워 서리 피해를 주고, 몇 초 동안 그 안의 적을 느리게 합니다.`,cd:8,clip:`raise`,dur:.82,ev:[[.16,e=>{e.spot.copy(e.aim(10)),e.g.fx.ring(e.spot,4.5,.6,.4,e.col())}],[.5,e=>{let t=e.spot.clone();e.g.fx.pillar(t,1.4,8,.6,e.col()),e.g.fx.burst(t.clone().setY(t.y+.6),`#ffffff`,22,6,.3,.7,{flat:!0}),e.aoe(t,4.5,2,{poise:22}),e.field(t,4.5,5,.5,t=>e.each(t.pos,4.5,e=>e.slowT=.8))}]]},burst:{name:`월광 소나타`,desc:`피리를 불어 달빛을 펼칩니다: 적에게 지속적으로 서리 피해를 주고, 안에 있는 캐릭터의 공격력이 올라갑니다.`,cost:60,clip:`channel`,dur:1.3,iframe:1.3,ev:[[.6,e=>{let t=xg(e);e.g.fx.pillar(t,2.5,12,.8,e.col()),e.g.fx.ring(t,.8,9,.6,e.col()),e.g.sfx.waypoint(),e.aoe(t,9,1.8,{poise:20}),e.field(t,9,10,.5,t=>{e.aoe(t.pos,9,.42,{noFx:!0,quiet:!0}),Sg(e,t.pos,9)&&e.g.party.buffAtk(.2,1)})}]]}},qwen:{weapon:`fan`,normalName:`부채춤`,normals:[{clip:`blade1`,dur:.44,cancel:.62,lunge:1,ev:[[.48,e=>e.arc(3,140,.55,{a0:-1.2,a1:1.2})]]},{clip:`blade2`,dur:.44,cancel:.62,lunge:.8,ev:[[.46,e=>{e.arc(3,140,.55,{a0:1.2,a1:-1.2}),e.shot(.35,{speed:18,life:.5,size:.34,pierce:!0,homing:!1})}]]},{clip:`blade3`,dur:.5,cancel:.66,lunge:.8,ev:[[.48,e=>e.arc(3,100,.72,{tilt:vg,a0:-.4,a1:2.3,poise:14})]]},{clip:`blade4`,dur:.72,cancel:.78,ev:[[.45,e=>{e.arc(3.5,360,1,{a0:Math.PI,a1:-Math.PI,poise:18}),e.shot(.4,{n:3,spread:.4,speed:18,life:.5,size:.34,pierce:!0,homing:!1})}]]}],charged:{clip:`blade4`,dur:.82,ev:[[.45,e=>{e.shot(1.3,{size:.6,pierce:!0,speed:12,life:1.1,homing:!1,poise:16}),e.pull(e.front(4),6,.8)}]]},skill:{name:`바람 모으기`,desc:`대상 위치에 회오리를 일으켜 주변 적을 한곳으로 빨아들인 뒤 터뜨려 질풍 피해를 줍니다.`,cd:9,clip:`raise`,dur:.82,ev:[[.45,e=>{let t=e.aim(9);e.field(t,6.5,2.4,.15,t=>{e.pull(t.pos,6.5,.5),e.g.fx.burst(t.pos.clone().setY(t.pos.y+1),e.col(),3,4,.3,.5,{up:3})}),e.after(2.4,()=>{e.g.fx.pillar(t,2,8,.5,e.col()),e.aoe(t,5,2,{poise:22,knock:3}),e.g.sfx.boom()})}]]},burst:{name:`천리의 바람`,desc:`몇 초 동안 지속되는 거대한 회오리를 날려 적을 계속 휘말리게 하며 질풍 피해를 줍니다.`,cost:60,clip:`spin`,dur:1.2,iframe:1.2,ev:[[.4,e=>{let t=e.front(4.5);t.y=e.g.terrain.heightAt(t.x,t.z),e.g.sfx.glide(),e.field(t,6,6.5,.35,t=>{e.pull(t.pos,7.5,.6),e.aoe(t.pos,6,.72,{noFx:!0,quiet:!0});for(let n=0;n<4;n++){let n=Math.random()*6.28,r=Math.random()*3;e.g.fx.emit({pos:new z(t.pos.x+Math.sin(n)*r,t.pos.y+Math.random()*4,t.pos.z+Math.cos(n)*r),vel:new z(Math.cos(n)*6,3,-Math.sin(n)*6),color:e.col(),size:.5,life:.6})}})}]]}},gemini:{weapon:`claw`,normalName:`별 발톱`,normals:wg(.5,.86,e=>e.shot(.42,{n:3,spread:.3,speed:24,size:.2})),charged:{clip:`cast3`,dur:.8,ev:[[.56,e=>e.shot(.85,{n:2,spread:.45,pierce:!0,speed:17,life:.9,size:.34})]]},skill:{name:`별 도약`,desc:`유성이 되어 대상 곁으로 이동해 벱니다. 쿨다운이 매우 짧고, 이동 중에는 피해를 받지 않습니다.`,cd:5,clip:`thrust`,dur:.46,iframe:.45,ev:[[.1,e=>e.blink(9)],[.45,e=>{e.arc(3,220,2,{poise:20}),e.g.fx.pillar(xg(e),.8,6,.4,e.col())}]]},burst:{name:`유성우`,desc:`열 개의 유성을 불러 대상 지역에 연달아 떨어뜨리고, 각각 범위 별 피해를 줍니다.`,cost:60,clip:`raise`,dur:1.3,iframe:1.3,ev:[[.4,e=>{let t=e.aim(10);e.g.fx.ring(t,6,.8,.5,e.col());for(let n=0;n<10;n++)e.after(.2+n*.15,()=>{let r=bg(e,t,4.5);e.g.fx.beam(r.clone().add(new z(3,14,2)),r,.25,.25,e.col()),e.g.fx.pillar(r,.9,5,.4,e.col()),e.aoe(r,2.8,.78,{poise:10,quiet:n%2==1}),e.g.shake(.12),n%3==0&&e.g.sfx.boom()})}]]}},grok:{weapon:`heavy`,normalName:`균열 베기`,normals:[{clip:`heavy1`,dur:.82,cancel:.72,lunge:1.2,heavy:!0,ev:[[.56,e=>e.arc(4,180,1.1,{a0:-1.5,a1:1.5,poise:24,knock:3,w:1.6})]]},{clip:`heavy2`,dur:.78,cancel:.72,lunge:1,heavy:!0,ev:[[.54,e=>e.arc(4,180,1.15,{a0:1.5,a1:-1.5,poise:24,knock:3,w:1.6})]]},{clip:`heavy3`,dur:.98,cancel:.78,lunge:1.2,heavy:!0,ev:[[.6,e=>{e.arc(3.8,70,.9,{tilt:vg,a0:2.3,a1:-.2,poise:20,w:1.6}),e.aoe(e.front(2.3),3.2,1,{poise:36,knock:2}),e.g.shake(.3),e.g.sfx.boom()}]]}],charged:{clip:`spin`,dur:1.1,heavy:!0,ev:[[.3,e=>e.arc(4.3,360,1,{a0:Math.PI,a1:-Math.PI,poise:20,w:1.7})],[.6,e=>e.arc(4.3,360,1.3,{a0:-Math.PI,a1:Math.PI,poise:32,knock:5,w:1.7})]]},skill:{name:`번개 낙하`,desc:`높이 뛰어올라 도끼를 전방에 내리꽂아 착지와 함께 번개 폭발을 일으킵니다. 느리지만 피해와 방어 붕괴 능력이 매우 높습니다.`,cd:8,clip:`slam`,dur:1,lunge:5,iframe:.55,heavy:!0,ev:[[.6,e=>{let t=e.front(1.6);e.g.fx.pillar(t,1.8,12,.5,e.col()),e.g.fx.shock(t.clone().setY(t.y+.6),5,.4,e.col()),e.g.sfx.boom(),e.g.shake(.5),e.aoe(t,5,3,{poise:48,knock:4})}]]},burst:{name:`X·심판`,desc:`도끼를 두 번 휘둘러 X자로 교차하는 두 갈래 번개 빛을 내어, 전방 넓은 범위의 적에게 두 차례 막대한 번개 피해를 줍니다.`,cost:60,clip:`heavy3`,dur:1.45,iframe:1.45,heavy:!0,ev:[[.42,e=>{e.arc(6.5,190,2.6,{tilt:.8,a0:-1.6,a1:1.6,w:2.4,y:1.3,poise:40}),e.g.shake(.35),e.g.sfx.boom()}],[.62,e=>{e.arc(6.5,190,2.6,{tilt:-.8,a0:1.6,a1:-1.6,w:2.4,y:1.3,poise:40,knock:5});let t=e.front(3.5);for(let n=0;n<5;n++){let n=bg(e,t,4);e.g.fx.beam(n.clone().setY(n.y+14),n,.2,.3,e.col())}e.aoe(t,6,1.2,{poise:20}),e.g.shake(.5),e.g.sfx.boom()}]]}}},Eg={claude:{id:`claude`,hair:`#ee6f2a`,name:`클로드걸`,title:`새벽의 서기`,elem:`blaze`,hp:1e3,atk:104,defn:52,kit:Tg.claude,hold:{armL:[.5,.12],foreL:1.75},holdMask:[`armL`,`foreL`],blurb:`원거리 · 책에서 햇살을 쏟아내고, 넓은 범위 폭격과 파티 회복에 강합니다.`},gpt:{id:`gpt`,hair:`#f1eefb`,name:`GPT걸`,title:`하얀 빛의 용족`,elem:`radiance`,hp:1250,atk:96,defn:70,kit:Tg.gpt,wings:!0,blurb:`근접 · 용의 발톱과 꼬리로 사방을 휩씁니다. 용 날개가 있어 활강 시 스태미나가 덜 듭니다.`},deepseek:{id:`deepseek`,hair:`#27398f`,name:`딥시크걸`,title:`심해의 메이드`,elem:`tide`,hp:1150,atk:88,defn:60,kit:Tg.deepseek,blurb:`원거리 · 파티의 힐러. 물방울이 적중하면 좁은 범위로 터집니다.`},glm:{id:`glm`,hair:`#1b1b24`,name:`GLM걸`,title:`잠자는 여우`,elem:`shade`,hp:950,atk:108,defn:48,kit:Tg.glm,blurb:`근접 · 공격 속도가 가장 빠르고, 순식간에 뒤를 잡아 적을 잠재웁니다.`},kimi:{id:`kimi`,hair:`#e9ebfa`,name:`키미걸`,title:`달빛의 피리 연주자`,elem:`frost`,hp:980,atk:100,defn:50,kit:Tg.kimi,hold:{armR:[.35,.15],foreR:1.25},holdMask:[`armR`,`foreR`],blurb:`원거리 · 음표의 탄속이 가장 빠릅니다. 달빛 영역은 적을 느리게 하고 아군을 강화합니다.`},qwen:{id:`qwen`,hair:`#7a72e2`,name:`Qwen걸`,title:`천리의 부채`,elem:`gale`,hp:1050,atk:98,defn:56,kit:Tg.qwen,hold:{armR:[.6,.1],foreR:1.6},holdMask:[`armR`,`foreR`],blurb:`중거리 · 부채로 바람 칼날을 날리고, 흩어진 적을 한곳에 모으는 데 강합니다.`},gemini:{id:`gemini`,hair:`#5b7af2`,name:`제미나이걸`,title:`쌍둥이별 고양이`,elem:`astral`,hp:920,atk:106,defn:46,kit:Tg.gemini,blurb:`근접 · 민첩한 돌격형. 별 도약의 쿨다운이 매우 짧고 유성우가 넓은 지역을 덮습니다.`},grok:{id:`grok`,hair:`#f2d27c`,name:`그록걸`,title:`천둥의 심판`,elem:`volt`,hp:1300,atk:112,defn:66,kit:Tg.grok,hold:{armR:[.3,.3],foreR:1.5,armL:[.1,.2],foreL:.4},holdMask:[`armR`,`foreR`],blurb:`근접 · 거대 도끼는 느리지만 범위가 넓고 피해가 크며, 적의 동작을 끊는 데 가장 강합니다.`}},Dg=class{def;hp=1;maxHp=1;atk=1;defn=1;energy=0;skillCd=0;alive=!0;model;anim;hold;constructor(e){this.def=e,this.model=lg(e.id),this.anim=new _g(this.model.rig),this.hold=e.hold?ug(e.hold):null}get color(){return vm[this.def.elem].color}},Og=class{g;members;active=0;level=1;exp=0;swapCd=0;atkBuff=0;atkBuffT=0;items={berry:2,dust:0};constructor(e){this.g=e,this.members=Hh.map(e=>new Dg(Eg[e])),this.recalc(!0)}get cur(){return this.members[this.active]}expNeed(){return Math.round(90*this.level**1.45)}recalc(e=!1){let t=this.level-1;for(let n of this.members){let r=n.maxHp>1?n.hp/n.maxHp:1;n.maxHp=Math.round(n.def.hp*(1+.1*t)),n.atk=Math.round(n.def.atk*(1+.085*t)),n.defn=Math.round(n.def.defn*(1+.05*t)),n.hp=e?n.maxHp:Math.round(n.maxHp*r)}}gainExp(e){if(this.level>=20)return;this.exp+=e;let t=!1;for(;this.exp>=this.expNeed()&&this.level<20;)this.exp-=this.expNeed(),this.level++,t=!0;if(t){this.recalc();for(let e of this.members)e.alive&&(e.hp=Math.min(e.maxHp,e.hp+e.maxHp*.3));this.g.hud.banner(`파티 레벨 업  Lv.${this.level}`,`#ffe08a`),this.g.sfx.levelUp(),this.g.fx.pillar(this.g.player.pos,1.2,8,.9,`#ffe08a`)}}buffAtk(e,t){this.atkBuff=Math.max(this.atkBuff,e),this.atkBuffT=Math.max(this.atkBuffT,t)}nextAlive(){for(let e=1;e<=this.members.length;e++){let t=(this.active+e)%this.members.length;if(this.members[t].alive)return t}return-1}reviveAll(e){for(let t of this.members)t.alive=!0,t.hp=Math.max(t.hp,Math.round(t.maxHp*e))}healAll(){for(let e of this.members)e.alive=!0,e.hp=e.maxHp}update(e){this.swapCd=Math.max(0,this.swapCd-e);for(let t of this.members)t.skillCd=Math.max(0,t.skillCd-e);this.atkBuffT>0&&(this.atkBuffT-=e)<=0&&(this.atkBuff=0)}},kg=5.4,Ag=8.4,jg=24,Mg=8.4,Ng=.34,Pg=1.6,Fg=.68,Ig=new z,Lg=new z,Rg={x:0,z:0},zg=class{g;group=new mn;pos=new z;vel=new z;yaw=0;state=`air`;stamina=100;staminaMax=100;regenDelay=0;dodgeT=0;dodgeAge=9;dodgeDir=new z(0,0,1);perfectUsed=!1;iframe=0;sprinting=!1;dead=!1;deadT=0;hitT=0;landT=0;airT=0;slideT=0;wantsMove=!1;moveYaw=0;move=new z;pushV=new z;pushT=0;plunging=!1;wall=null;wallAxis=0;wallSign=1;wallN=new z;leap=0;pressT=0;climbMoving=!1;safe=new z;safeT=0;pitch=0;stepAcc=0;flashT=0;wingFold=1;updraft=!1;constructor(e){this.g=e,this.group.rotation.order=`YXZ`,e.scene.add(this.group);for(let t of e.party.members)t.model.root.visible=!1,this.group.add(t.model.root);this.showActive()}showActive(){this.g.party.members.forEach((e,t)=>e.model.root.visible=t===this.g.party.active),this.g.party.cur.model.rig.springsReady=!1}heightAbove(){return this.pos.y-this.g.col.groundAt(this.pos.x,this.pos.z,this.pos.y,.3)}faceTo(e,t=!1){this.yaw=t?e:dd(this.yaw,e,14,.016)}push(e,t){this.pushT=t,this.pushV.set(Math.sin(this.yaw),0,Math.cos(this.yaw)).multiplyScalar(e/Math.max(.05,t))}useStamina(e){this.stamina=Math.max(0,this.stamina-e),this.regenDelay=1.1}teleport(e,t){this.pos.set(e,this.g.col.groundAt(e,t,1e4,1e5)+.05,t),this.vel.set(0,0,0),this.state=`air`,this.plunging=!1,this.safe.copy(this.pos),this.g.party.cur.model.rig.springsReady=!1,this.g.cam.snap()}teleportNear(e,t){let n=this.g.col.groundAt(e,t,this.pos.y+2,3);n<-.4||this.g.col.blocked(e,t,Ng,n)||(this.pos.set(e,n,t),this.state=`ground`)}startPlunge(){this.plunging=!0,this.state=`air`,this.vel.set(0,-30,0)}swapTo(e,t=!1){let n=this.g,r=n.party;return e===r.active||!r.members[e]?.alive?!1:!t&&(r.swapCd>0||this.dead)?(n.sfx.deny(),!1):(r.active=e,r.swapCd=1,n.combat.cancelAct(),this.showActive(),n.fx.burst(Lg.copy(this.pos).setY(this.pos.y+1),r.cur.color,18,3.5,.3,.5,{up:1}),n.fx.ring(this.pos,.3,1.8,.35,r.cur.color),n.sfx.swap(),!0)}hurt(e,t,n){let r=this.g;if(this.dead||!r.playing)return`dodged`;if(this.iframe>0)return this.dodgeAge<.36&&!this.perfectUsed&&(this.perfectUsed=!0,r.perfectDodge()),`dodged`;let i=r.party.cur,a=Math.max(1,Math.round(e*100/(100+i.defn)));i.hp-=a,r.hud.dmg(Lg.copy(this.pos).setY(this.pos.y+1.7),a,`#ff6464`,!1,!0),this.flashT=.15,this.hitT=.3,this.iframe=.25,r.sfx.hurt(),r.shake(.25),r.combat.cancelAct();let o=this.pos.x-n.x,s=this.pos.z-n.z,c=Math.hypot(o,s)||1;return this.pushV.set(o/c*4,0,s/c*4),this.pushT=.14,(this.state===`climb`||this.state===`glide`)&&(this.state=`air`,this.airT=0),i.hp<=0&&(i.hp=0,i.alive=!1,this.dead=!0,this.deadT=0),`hit`}hurtRaw(e){let t=this.g.party.cur,n=Math.round(t.maxHp*e);t.hp=Math.max(1,t.hp-n),this.g.hud.dmg(Lg.copy(this.pos).setY(this.pos.y+1.7),n,`#ff6464`,!1,!0),this.flashT=.15,this.g.sfx.hurt()}startWallClimb(e){let t=e.c,n=e.nx*t.cos-e.nz*t.sin,r=e.nx*t.sin+e.nz*t.cos;this.wall=t,this.wallAxis=Math.abs(n)>Math.abs(r)?0:1,this.wallSign=Math.sign(this.wallAxis===0?n:r)||1,this.wallAxis===0?this.wallN.set(this.wallSign*t.cos,0,-this.wallSign*t.sin):this.wallN.set(this.wallSign*t.sin,0,this.wallSign*t.cos),this.enterClimb()}enterClimb(){this.state=`climb`,this.vel.set(0,0,0),this.pressT=0,this.leap=0,this.plunging=!1,this.g.combat.cancelAct()}land(e){let t=this.g,n=t.terrain;this.pos.y=e,this.plunging?(this.plunging=!1,t.combat.aoe(this.pos.clone(),3.6,1.7,{poise:30,knock:3}),t.fx.shock(Lg.copy(this.pos).setY(e+.4),3.6,.35,t.party.cur.color),t.shake(.4),t.sfx.boom()):this.vel.y<-27&&this.hurtRaw(Math.min(.6,(-this.vel.y-27)*.035)),this.vel.y=0,this.landT=.22,t.sfx.land(),t.fx.burst(Lg.copy(this.pos).setY(e+.1),`#d8d0b8`,6,2,.5,.5,{soft:!0,flat:!0});let r=e<=n.heightAt(this.pos.x,this.pos.z)+.02;this.state=r&&n.normalAt(this.pos.x,this.pos.z,Ig).y<.62?`slide`:`ground`,this.slideT=0}enterSwim(){this.state!==`swim`&&(this.state=`swim`,this.plunging=!1,this.g.sfx.splash(),this.g.fx.burst(Lg.copy(this.pos).setY(.1),`#e8f6ff`,16,4,.3,.6,{up:4,gravity:12}),this.g.combat.cancelAct())}update(e){let t=this.g,n=t.input,r=t.terrain,i=t.col,a=t.party.cur,o=this.pos,s=this.vel;this.iframe-=e,this.dodgeAge+=e,this.hitT-=e,this.landT-=e,this.flashT-=e;let c=t.playing&&!this.dead,l=c?n.moveX:0,u=c?n.moveY:0,d=t.cam.yaw;this.move.set(-Math.sin(d)*u+Math.cos(d)*l,0,-Math.cos(d)*u-Math.sin(d)*l),this.wantsMove=this.move.lengthSq()>.01,this.wantsMove&&(this.move.normalize(),this.moveYaw=Math.atan2(this.move.x,this.move.z));let f=this.move,p=t.combat.busy;if(this.dead){if(this.deadT+=e,this.deadT>1.3){let e=t.party.nextAlive();e>=0?(this.dead=!1,this.swapTo(e,!0),this.iframe=1,t.hud.toast(`${a.def.name}이(가) 쓰러져 ${t.party.cur.def.name}(으)로 교체합니다`)):this.deadT>2.2&&t.wipe()}}else if(c){for(let e=0;e<8;e++)n.hit(`Digit`+(e+1))&&this.swapTo(e);n.hit(`ShiftLeft`)&&this.state===`ground`&&this.dodgeT<=0&&(this.stamina>=15?(this.useStamina(15),this.dodgeT=.32,this.dodgeAge=0,this.perfectUsed=!1,this.iframe=Math.max(this.iframe,.4),this.wantsMove?this.dodgeDir.copy(f):this.dodgeDir.set(Math.sin(this.yaw),0,Math.cos(this.yaw)),this.yaw=Math.atan2(this.dodgeDir.x,this.dodgeDir.z),t.combat.cancelAct(),t.sfx.dodge(),t.fx.burst(Lg.copy(o).setY(o.y+.2),`#e8e2d0`,8,2.5,.5,.45,{soft:!0,flat:!0})):t.sfx.deny())}this.sprinting=c&&n.down(`ShiftLeft`)&&this.wantsMove&&this.state===`ground`&&this.stamina>0&&this.dodgeT<=0&&!p;let m=(e,t)=>this.wantsMove?-(f.x*e+f.z*t)/(Math.hypot(e,t)||1):0,h=e=>!e||e.c.kind!==`box`||!e.c.climb||m(e.nx,e.nz)<.5||e.c.y1<o.y+1.3||this.stamina<6||p||this.dodgeT>0?!1:(this.startWallClimb(e),!0);switch(this.state){case`ground`:{if(this.dodgeT>0){this.dodgeT-=e;let t=15*(.45+.55*Math.max(0,this.dodgeT/.32));s.x=this.dodgeDir.x*t,s.z=this.dodgeDir.z*t}else if(this.pushT>0)this.pushT-=e,s.x=this.pushV.x,s.z=this.pushV.z;else if(p||this.hitT>.12||this.dead)s.x=cd(s.x,0,16,e),s.z=cd(s.z,0,16,e);else{let t=this.wantsMove?this.sprinting?Ag:kg:0;s.x=cd(s.x,f.x*t,13,e),s.z=cd(s.z,f.z*t,13,e),this.wantsMove&&(this.yaw=dd(this.yaw,this.moveYaw,13,e)),this.sprinting&&this.useStamina(9*e)}if(c&&n.hit(`Space`)&&this.dodgeT<=0&&this.hitT<=0){t.combat.cancelAct(),s.y=Mg,this.state=`air`,this.airT=0,t.sfx.jump();break}let a=o.x,l=o.z,u=o.y;o.x+=s.x*e,o.z+=s.z*e;let d=i.resolve(o,Ng,Pg);if(d&&d.c.kind===`box`&&d.c.climb&&m(d.nx,d.nz)>.5&&(this.pressT+=e,this.pressT>.16&&h(d)))break;let g=i.groundAt(o.x,o.z,o.y),_=r.heightAt(o.x,o.z),v=g<=_+.02;if(r.normalAt(o.x,o.z,Ig),v&&Ig.y<Fg&&g>u+.002){let t=m(Ig.x,Ig.z);if(o.x=a,o.z=l,g=i.groundAt(a,l,u),s.x*=.5,s.z*=.5,t>.35&&this.stamina>6&&!p&&this.dodgeT<=0&&(this.pressT+=e,this.pressT>.12)){o.x+=f.x*.25,o.z+=f.z*.25,o.y=r.heightAt(o.x,o.z),this.wall=null,this.enterClimb();break}}else d||(this.pressT=Math.max(0,this.pressT-e*2));let y=Math.hypot(s.x,s.z),b=v&&r.normalAt(o.x,o.z,Ig).y<.6;if(g<o.y-.6||b&&g<u-.04&&y>2){this.state=`air`,this.airT=0,s.y=0,o.y=u;break}if(o.y=g>o.y?cd(o.y,g,30,e):g,g<-1.2){this.enterSwim();break}if(b){this.state=`slide`,this.slideT=0;break}this.stepAcc+=y*e,this.stepAcc>2.3&&this.dodgeT<=0&&(this.stepAcc=0,t.sfx.step(),this.sprinting&&t.fx.burst(Lg.copy(o).setY(o.y+.1),`#d8d0b8`,2,1,.4,.4,{soft:!0,flat:!0})),(this.safeT-=e)<0&&g>.4&&Ig.y>.82&&(this.safeT=.5,this.safe.copy(o)),!this.sprinting&&this.dodgeT<=0&&(this.regenDelay-=e)<=0&&(this.stamina=Math.min(this.staminaMax,this.stamina+32*e));break}case`air`:case`glide`:{this.airT+=e;let l=this.state===`glide`;if(this.plunging)s.x=s.z=0,s.y=-34;else if(l){this.updraft?this.regenDelay=1:this.useStamina((a.def.wings?1.6:3.2)*e),s.y=cd(s.y,this.updraft?9:-1.7,this.updraft?3:5,e);let t=this.wantsMove?8.2:4,r=this.wantsMove?f.x:Math.sin(this.yaw),i=this.wantsMove?f.z:Math.cos(this.yaw);s.x=cd(s.x,r*t,2.4,e),s.z=cd(s.z,i*t,2.4,e),Math.hypot(s.x,s.z)>.6&&(this.yaw=dd(this.yaw,Math.atan2(s.x,s.z),6,e)),(this.stamina<=0||c&&n.hit(`Space`))&&(this.state=`air`)}else s.y=Math.max(-44,s.y-jg*e),this.pushT>0?(this.pushT-=e,s.x=this.pushV.x,s.z=this.pushV.z):(s.x=cd(s.x,f.x*(this.wantsMove?kg:0),2.6,e),s.z=cd(s.z,f.z*(this.wantsMove?kg:0),2.6,e)),this.wantsMove&&(this.yaw=dd(this.yaw,this.moveYaw,8,e));o.addScaledVector(s,e);let u=i.resolve(o,Ng,Pg,.2);if(!this.plunging&&this.airT>.15&&h(u))break;let d=i.groundAt(o.x,o.z,o.y,.3);!l&&!this.plunging&&c&&n.hit(`Space`)&&this.airT>.2&&o.y-d>1.3&&this.stamina>1&&(this.state=`glide`,s.y=Math.max(s.y,-4),t.sfx.glide()),o.y<=d?d<-1.2?(o.y=Math.max(o.y,-1.3),this.enterSwim()):this.land(d):o.y<-1.1&&r.heightAt(o.x,o.z)<-1.25&&this.enterSwim();break}case`climb`:{this.regenDelay=1,this.leap>0&&(this.leap-=e);let a=this.leap>0?1:u,d=this.leap>0?0:l,f=this.leap>0?6.5:2.3;this.climbMoving=a!==0||d!==0,this.climbMoving&&this.leap<=0&&this.useStamina(6.5*e);let p=this.wallN;if(this.wall){let t=this.wall;o.y+=a*f*e,o.x+=p.z*d*f*e,o.z+=-p.x*d*f*e;let n=af.local(t,o.x,o.z,Rg);this.wallAxis===0?(n.x=this.wallSign*(t.hx+Ng+.03),n.z=id(n.z,-t.hz+.15,t.hz-.15)):(n.z=this.wallSign*(t.hz+Ng+.03),n.x=id(n.x,-t.hx+.15,t.hx-.15)),o.x=t.x+n.x*t.cos+n.z*t.sin,o.z=t.z-n.x*t.sin+n.z*t.cos;let r=i.groundAt(o.x,o.z,o.y,.1);if(o.y+1.25>=t.y1){o.y=t.y1,o.x-=p.x*.8,o.z-=p.z*.8,this.state=`ground`,this.landT=.18;break}if(o.y<=r+.02&&(o.y=r,a<0)){this.state=`ground`;break}this.pitch=cd(this.pitch,0,10,e)}else{if(p=r.normalAt(o.x,o.z,this.wallN),p.y>.76){this.state=`ground`;break}let t=Math.hypot(p.x,p.z)||1,n=-p.x/t,s=-p.z/t;if(Lg.set(-p.x*p.y,1-p.y*p.y,-p.z*p.y).normalize(),o.x+=(Lg.x*a+-s*d)*f*e,o.z+=(Lg.z*a+n*d)*f*e,i.resolve(o,Ng,Pg),o.y=r.heightAt(o.x,o.z),o.y<-1.2){this.enterSwim();break}this.yaw=dd(this.yaw,Math.atan2(n,s),12,e),this.pitch=cd(this.pitch,(Math.PI/2-Math.acos(id(p.y,0,1)))*.85,10,e)}this.wall&&(this.yaw=dd(this.yaw,Math.atan2(-p.x,-p.z),14,e)),c&&n.hit(`Space`)&&(u<0?(this.state=`air`,this.airT=0,s.set(p.x*3.5,3,p.z*3.5)):this.stamina>=18&&(this.useStamina(18),this.leap=.28,t.sfx.jump())),(c&&n.hit(`KeyX`)||this.stamina<=0)&&(this.state=`air`,this.airT=0,s.set(p.x*2.5,0,p.z*2.5));break}case`slide`:{this.slideT+=e;let a=r.normalAt(o.x,o.z,Ig);if(a.y>.72){this.state=`ground`;break}let l=Math.hypot(a.x,a.z)||1;if(s.x=cd(s.x,a.x/l*9,4,e),s.z=cd(s.z,a.z/l*9,4,e),o.x+=s.x*e,o.z+=s.z*e,i.resolve(o,Ng,Pg),o.y=r.heightAt(o.x,o.z),this.yaw=dd(this.yaw,Math.atan2(s.x,s.z),8,e),o.y<-1.2){this.enterSwim();break}if(c&&n.hit(`Space`)){s.x+=a.x/l*5,s.z+=a.z/l*5,s.y=Mg*.8,this.state=`air`,this.airT=0,t.sfx.jump();break}this.slideT>.25&&m(a.x,a.z)>.35&&this.stamina>10&&(this.wall=null,this.enterClimb());break}case`swim`:{this.regenDelay=1;let a=c&&n.down(`ShiftLeft`)&&this.wantsMove,l=this.wantsMove?a?4.6:3:0;s.x=cd(s.x,f.x*l,4,e),s.z=cd(s.z,f.z*l,4,e),this.wantsMove&&(this.yaw=dd(this.yaw,this.moveYaw,6,e),this.useStamina((a?9:3.5)*e)),o.x+=s.x*e,o.z+=s.z*e,i.resolve(o,Ng,Pg);let u=r.heightAt(o.x,o.z);if(u>-.95){this.state=`ground`,o.y=Math.max(o.y,u);break}o.y=cd(o.y,-1.12,8,e),this.wantsMove&&Math.random()<e*6&&t.fx.burst(Lg.set(o.x,.05,o.z),`#ffffff`,2,1.2,.25,.5,{flat:!0}),this.stamina<=0&&(this.hurtRaw(.15),t.hud.toast(`스태미나가 떨어져 물가로 밀려났습니다`),t.hud.fade(.5),this.teleport(this.safe.x,this.safe.z),this.stamina=this.staminaMax*.5);break}}this.state!==`climb`&&(this.pitch=cd(this.pitch,0,10,e)),(o.y<-30||Math.abs(o.x)>330||Math.abs(o.z)>330)&&this.teleport(this.safe.x,this.safe.z);let g=this.state,_=this.dead?`dead`:g,v=this.dead?null:this.dodgeT>0?{clip:gg.dodge,u:1-this.dodgeT/.32}:this.plunging?{clip:gg.slam,u:.42}:this.hitT>0?{clip:gg.hit,u:1-this.hitT/.3}:t.combat.animAction();a.anim.update(e,{mode:_,speed:Math.hypot(s.x,s.z),sprint:+!!this.sprinting,vy:s.y,moving:g===`climb`?this.climbMoving:this.wantsMove||Math.hypot(s.x,s.z)>.8,action:v,hold:a.hold,holdMask:a.def.holdMask,landT:Math.max(0,this.landT)}),this.group.position.copy(o),g===`climb`&&!this.wall&&this.group.position.addScaledVector(this.wallN,.2),this.group.rotation.set(this.pitch,this.yaw,0);let y=a.model.parts;if(y.weapon&&(y.weapon.visible=g===`ground`||g===`air`||g===`slide`),y.glider&&(y.glider.visible=g===`glide`),y.wingL){this.wingFold=cd(this.wingFold,g===`glide`?.05:1,8,e);let n=this.wingFold*1.05+(g===`glide`?Math.sin(t.time*5)*.06:Math.sin(t.time*1.4)*.04);y.wingL.rotation.set(0,n,this.wingFold*.25),y.wingR.rotation.set(0,-n,-this.wingFold*.25)}a.model.updateFace(e,this.hitT>0||this.dead?`hurt`:t.combat.sinceAttack<1.2?`fierce`:`neutral`),a.model.setFlash(Math.max(0,this.flashT/.15))}},Bg=new z,Vg=new z,Hg=new Qa(1,1),Ug=new Map,Wg=e=>{let t=Ug.get(e);return t||Ug.set(e,t=qd(e,2)),t},Gg=class{g;act=null;actT=0;evI=0;combo=0;comboIdle=9;buf=null;bufT=0;holdT=0;charged=!1;target=null;locked=!1;projs=[];fields=[];timers=[];sinceAttack=99;counterT=0;spot=new z;constructor(e){this.g=e}get kit(){return this.g.party.cur.def.kit}get elem(){return this.g.party.cur.def.elem}col(e=this.elem){return vm[e].color}get busy(){return this.act!==null}animAction(){return this.act?{clip:gg[this.act.clip],u:Math.min(1,this.actT/this.act.dur)}:null}cancelAct(){this.act=null}after(e,t){this.timers.push({t:e,fn:t})}update(e){let t=this.g,n=t.input,r=t.player,i=t.party.cur;if(this.sinceAttack+=e,this.comboIdle+=e,this.counterT=Math.max(0,this.counterT-e),this.bufT-=e,this.bufT<=0&&(this.buf=null),this.target&&(this.target.dead||this.target.pos.distanceTo(r.pos)>32)&&(this.target=null,this.locked=!1),t.playing&&!r.dead){(n.hit(`Tab`)||n.hit(`Mouse1`))&&this.toggleLock(),n.hit(`Mouse0`)&&(this.buf=`atk`,this.bufT=.35,this.holdT=0,this.charged=!1),n.down(`Mouse0`)?this.holdT+=e:this.holdT=0,n.hit(`KeyE`)&&(this.buf=`skill`,this.bufT=.35),n.hit(`KeyQ`)&&(this.buf=`burst`,this.bufT=.35);let a=!this.act||this.actT>=(this.act.cancel??.6)*this.act.dur;r.state===`ground`&&r.dodgeT<=0&&a?this.buf===`burst`?(i.energy>=(this.kit.burst.cost??60)?(i.energy=0,this.start(this.kit.burst),t.hud.banner(this.kit.burst.name,this.col())):t.sfx.deny(),this.buf=null):this.buf===`skill`?(i.skillCd<=0?(i.skillCd=this.kit.skill.cd??8,this.start(this.kit.skill)):t.sfx.deny(),this.buf=null):this.holdT>.4&&!this.charged&&r.stamina>=20?(this.charged=!0,r.useStamina(20),this.combo=0,this.start(this.kit.charged),this.buf=null):this.buf===`atk`&&(this.comboIdle>1&&(this.combo=0),this.start(this.kit.normals[this.combo]),this.combo=(this.combo+1)%this.kit.normals.length,this.buf=null):(r.state===`air`||r.state===`glide`)&&this.buf===`atk`&&r.heightAbove()>2&&(r.startPlunge(),this.buf=null)}if(this.act){let t=this.act;for(this.actT+=e,this.comboIdle=0;this.evI<t.ev.length&&this.actT>=t.ev[this.evI][0]*t.dur;)t.ev[this.evI++][1](this);(this.actT>=t.dur||this.actT>=(t.cancel??.6)*t.dur&&r.wantsMove&&!this.buf)&&(this.act=null)}for(let t=this.timers.length-1;t>=0;t--)(this.timers[t].t-=e)<=0&&this.timers.splice(t,1)[0].fn();this.updateProjs(e);for(let t=this.fields.length-1;t>=0;t--){let n=this.fields[t];for(n.t+=e,n.acc+=e;n.acc>=n.tick;)n.acc-=n.tick,n.fn(n);n.t>=n.dur&&this.fields.splice(t,1)}}start(e){let t=this.g.player;this.act=e,this.actT=0,this.evI=0,this.sinceAttack=0;let n=this.pickTarget(this.kit.weapon===`cast`?26:11);if(n?t.faceTo(Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z),!0):t.wantsMove&&t.faceTo(t.moveYaw,!0),e.lunge){let r=n?Math.max(0,Math.hypot(n.pos.x-t.pos.x,n.pos.z-t.pos.z)-n.def.radius-1.2):e.lunge;t.push(Math.min(e.lunge,r),e.dur*.35)}e.iframe&&(t.iframe=Math.max(t.iframe,e.iframe))}toggleLock(){if(this.locked){this.locked=!1,this.target=null;return}let e=this.g.enemies.nearest(this.g.player.pos,26);e&&(this.target=e,this.locked=!0)}pickTarget(e){let t=this.g.player;if(this.locked&&this.target&&!this.target.dead)return this.target;let n=t.wantsMove?t.moveYaw:t.yaw,r=null,i=1e9;for(let a of this.g.enemies.list){if(a.dead)continue;let o=a.pos.x-t.pos.x,s=a.pos.z-t.pos.z,c=Math.hypot(o,s);if(c>e||Math.abs(a.pos.y-t.pos.y)>6)continue;let l=c+Math.abs(ud(n,Math.atan2(o,s)))*4;l<i&&(i=l,r=a)}return this.target=r??this.target,r}front(e,t=0){let n=this.g.player;return new z(n.pos.x+Math.sin(n.yaw)*e,n.pos.y+t,n.pos.z+Math.cos(n.yaw)*e)}aim(e){let t=this.pickTarget(e*1.4);if(t)return t.pos.clone();let n=this.front(e);return n.y=this.g.terrain.heightAt(n.x,n.z),n}arc(e,t,n,r={}){let i=this.g,a=i.player,o=t*Math.PI/360;r.noFx||i.fx.slash(a.pos,a.yaw,{r:e+.2,w:r.w??Math.min(1.3,e*.45),a0:r.a0??o,a1:r.a1??-o,tilt:r.tilt,pitch:r.pitch,y:r.y,color:this.col(r.elem)}),i.sfx.swing(e>3.2);let s=0;for(let t of i.enemies.list){if(t.dead)continue;let i=t.pos.x-a.pos.x,c=t.pos.z-a.pos.z,l=Math.hypot(i,c);l>e+t.def.radius||Math.abs(t.pos.y-a.pos.y)>3||l>.8&&Math.abs(ud(a.yaw,Math.atan2(i,c)))>o+.2||(this.hit(t,n,r),s++)}return s}aoe(e,t,n,r={}){let i=this.g,a=this.col(r.elem);r.noFx||(i.fx.ring(e,t*.3,t,.4,a),i.fx.burst(Bg.copy(e).setY(e.y+.5),a,14,t*2.2,.35,.5,{up:2}));let o=0;for(let a of i.enemies.list)a.dead||Math.hypot(a.pos.x-e.x,a.pos.z-e.z)>t+a.def.radius||Math.abs(a.pos.y-e.y)>5||(this.hit(a,n,{...r,knock:r.knock}),o++);return o}line(e,t,n,r={}){let i=this.g.player,a=Math.sin(i.yaw),o=Math.cos(i.yaw);for(let s of this.g.enemies.list){if(s.dead)continue;let c=s.pos.x-i.pos.x,l=s.pos.z-i.pos.z,u=c*a+l*o,d=Math.abs(c*o-l*a);u>-.5&&u<e+s.def.radius&&d<t/2+s.def.radius&&Math.abs(s.pos.y-i.pos.y)<4&&this.hit(s,n,r)}}each(e,t,n){for(let r of this.g.enemies.list)!r.dead&&Math.hypot(r.pos.x-e.x,r.pos.z-e.z)<t+r.def.radius&&n(r)}shot(e,t={}){let n=this.g,r=n.player,i=t.n??1,a=t.elem??this.elem,o=this.pickTarget(26);n.sfx.cast();for(let n=0;n<i;n++){let s=i===1?0:(n/(i-1)*2-1)*(t.spread??.3),c=this.front(.7,1.15),l=r.yaw+s,u=new z(Math.sin(l),0,Math.cos(l));o&&(u.y=(o.center.y-c.y)/Math.max(2,Math.hypot(o.pos.x-c.x,o.pos.z-c.z)),u.normalize()),u.y+=t.up??0,u.multiplyScalar(t.speed??22),this.spawnProj({owner:0,pos:c,vel:u,life:t.life??1.6,r:t.size??.22,mult:e,elem:a,homing:t.homing===!1?null:o,pierce:!!t.pierce,aoe:t.aoe??0,dmg:0,poise:t.poise??6})}}spawnProj(e){let t=new W(Hg,Wg(vm[e.elem].color));t.scale.setScalar(e.r),t.position.copy(e.pos),this.g.scene.add(t),this.projs.push({...e,mesh:t,hit:new Set})}field(e,t,n,r,i,a=this.elem){this.g.fx.zone(e,t,n,this.col(a)),this.fields.push({pos:e.clone(),r:t,t:0,dur:n,tick:r,acc:0,fn:i})}heal(e,t=!1){let n=this.g;for(let r of t?n.party.members:[n.party.cur]){if(!r.alive)continue;let t=Math.round(r.maxHp*e);r.hp=Math.min(r.maxHp,r.hp+t),r===n.party.cur&&n.hud.float(Bg.copy(n.player.pos).setY(n.player.pos.y+1.7),`+`+t,`#7dff9a`)}n.fx.burst(Bg.copy(n.player.pos).setY(n.player.pos.y+1),`#7dff9a`,10,1.5,.22,.8,{up:2})}pull(e,t,n=1){for(let r of this.g.enemies.list){if(r.dead||r.def.kind===`elite`)continue;let i=Math.hypot(r.pos.x-e.x,r.pos.z-e.z);i<t&&i>.6&&r.shove((e.x-r.pos.x)/i*7*n,(e.z-r.pos.z)/i*7*n)}}blink(e){let t=this.g,n=t.player,r=this.pickTarget(e*1.6);if(t.fx.burst(Bg.copy(n.pos).setY(n.pos.y+1),this.col(),14,3,.3,.4),r){let e=Math.atan2(n.pos.x-r.pos.x,n.pos.z-r.pos.z),t=r.def.radius+1.3;n.teleportNear(r.pos.x+Math.sin(e)*t,r.pos.z+Math.cos(e)*t),n.faceTo(Math.atan2(r.pos.x-n.pos.x,r.pos.z-n.pos.z),!0)}else n.teleportNear(n.pos.x+Math.sin(n.yaw)*e,n.pos.z+Math.cos(n.yaw)*e);t.fx.burst(Bg.copy(n.pos).setY(n.pos.y+1),this.col(),14,3,.3,.4),t.sfx.dodge()}hit(e,t,n={}){let r=this.g,i=r.party.cur,a=n.elem??this.elem,o=i.atk*(1+r.party.atkBuff),s=o*t*(this.counterT>0?1.5:1),c=Math.random()<.15+(e.mark?.elem===`astral`?.15:0);c&&(s*=1.6),s=this.mitigate(e,s,a);let l=r.player,u=e.pos.x-l.pos.x,d=e.pos.z-l.pos.z,f=Math.hypot(u,d)||1;e.damage(s,n.poise??10,u/f*(n.knock??1.5),d/f*(n.knock??1.5)),r.hud.dmg(e.center,Math.round(s),vm[a].color,c),r.fx.burst(e.center,vm[a].color,c?12:7,5,.26,.3),n.quiet||(c?r.sfx.crit():r.sfx.hit(t>1.4),r.hitStop=Math.max(r.hitStop,c||t>1.4?.07:.035),r.shake(t>1.4?.18:.07));for(let e of r.party.members)e.energy=Math.min(100,e.energy+(e===i?2.2:.9)*Math.min(2,.5+t));a!==`phys`&&!n.noReact&&!e.dead&&(e.mark&&e.mark.elem!==a&&e.reactCd<=0?this.react(e,a,o*Math.max(.6,t)):e.setMark(a))}mitigate(e,t,n){let r=e.mark?vm[e.mark.elem]:null;return t*=100/(100+e.def.defn*(1-(r?.defDown??0))),t*=1+(r?.vuln??0)+e.vulnT*.25,e.asleep&&(t*=2,e.wake()),e.elem===n&&(t*=.4),t*(.95+Math.random()*.1)}raw(e,t,n){if(e.dead)return;let r=this.mitigate(e,t,n);e.damage(r,6,0,0),this.g.hud.dmg(e.center,Math.round(r),vm[n].color,!1)}react(e,t,n){let r=this.g,i=vm[t].color,a=()=>r.enemies.list.filter(t=>!t.dead&&t!==e);switch(e.mark=null,e.reactCd=.7,r.hud.float(e.center.clone().setY(e.center.y+.6),vm[t].burst,i,!0),r.sfx.react(),r.fx.shock(e.center,1.6,.3,i),t){case`blaze`:r.fx.ring(e.pos,.6,3.8,.45,i),r.fx.burst(e.center,i,26,8,.45,.6,{color1:`#ff2a00`}),r.sfx.boom(),this.raw(e,n*1.2,t);for(let r of a())r.pos.distanceTo(e.pos)<3.8&&this.raw(r,n*1.2,t);break;case`tide`:this.raw(e,n*.8,t),this.heal(.05),r.fx.ring(e.pos,.5,4.2,.5,i);for(let t of a()){let n=t.pos.distanceTo(e.pos);n<4.2&&t.shove((t.pos.x-e.pos.x)/n*8,(t.pos.z-e.pos.z)/n*8)}break;case`frost`:this.raw(e,n*.6,t),e.freeze(e.def.kind===`elite`?1:2.4),r.fx.burst(e.center,`#e8faff`,18,3,.3,.7);break;case`volt`:{this.raw(e,n*.7,t);let o=e;for(let s of a().filter(t=>t.pos.distanceTo(e.pos)<9).slice(0,3))r.fx.beam(o.center,s.center,.07,.22,i),this.raw(s,n*.7,t),o=s;break}case`gale`:this.raw(e,n*.6,t),this.pull(e.pos,6.5,1.2),r.fx.ring(e.pos,6,.6,.45,i);break;case`astral`:this.raw(e,n*1.8,t),r.fx.pillar(e.pos,.9,7,.5,i);for(let e of r.party.members)e.energy=Math.min(100,e.energy+8);break;case`shade`:this.raw(e,n*.5,t),e.def.kind===`elite`?e.vulnT=6:e.sleep(2.6);break;case`radiance`:r.fx.ring(e.pos,.6,4.2,.5,i),r.fx.pillar(e.pos,1.2,6,.5,i),this.raw(e,n*.9,t);for(let r of a())r.pos.distanceTo(e.pos)<4.2&&this.raw(r,n*.9,t);r.party.buffAtk(.15,8)}}updateProjs(e){let t=this.g,n=t.player;for(let r=this.projs.length-1;r>=0;r--){let i=this.projs[r],a=(i.life-=e)<=0;if(i.homing&&!i.homing.dead){let t=i.vel.length();Vg.copy(i.homing.center).sub(i.pos).normalize(),i.vel.normalize(),i.vel.dot(Vg)<-.9&&i.vel.set(i.vel.x-i.vel.z*.5,i.vel.y,i.vel.z+i.vel.x*.5).normalize(),i.vel.lerp(Vg,Math.min(1,e*7)).normalize().multiplyScalar(t)}if(i.pos.addScaledVector(i.vel,e),i.mesh.position.copy(i.pos),i.mesh.rotation.y+=e*9,Math.random()<e*40&&t.fx.emit({pos:i.pos,color:vm[i.elem].color,size:i.r*2.2,size1:0,life:.25}),(i.pos.y<t.terrain.heightAt(i.pos.x,i.pos.z)+.05||t.col.blocked(i.pos.x,i.pos.z,i.r*.5,i.pos.y-1))&&(a=!0),i.owner===0){for(let e of t.enemies.list)if(!(e.dead||i.hit.has(e)||e.center.distanceTo(i.pos)>i.r+e.def.radius+.25)&&(i.hit.add(e),i.aoe>0?this.aoe(i.pos.clone().setY(e.pos.y),i.aoe,i.mult,{elem:i.elem,poise:i.poise}):this.hit(e,i.mult,{elem:i.elem,poise:i.poise,knock:.6}),!i.pierce)){a=!0;break}}else!n.dead&&Bg.copy(n.pos).setY(n.pos.y+1).distanceTo(i.pos)<i.r+.45&&n.hurt(i.dmg,i.elem,i.pos)!==`dodged`&&(a=!0);a&&(i.aoe>0&&i.owner===0&&i.hit.size===0&&this.aoe(i.pos.clone(),i.aoe,i.mult,{elem:i.elem}),t.fx.burst(i.pos,vm[i.elem].color,6,3,.22,.3),t.scene.remove(i.mesh),this.projs.splice(r,1))}}clear(){for(let e of this.projs)this.g.scene.remove(e.mesh);this.projs.length=0,this.fields.length=0,this.timers.length=0,this.act=null,this.target=null,this.locked=!1}},Kg=new z,qg=new z,Jg=class{g;yaw=Math.PI;pitch=.28;dist=5.6;sens=.0026;minDist=2.6;lookY=1.45;cur=new z;camDist=5.6;shakeAmt=0;fov=55;constructor(e){this.g=e}shake(e){this.shakeAmt=Math.min(.8,Math.max(this.shakeAmt,e))}snap(){let e=this.g.player.pos;this.cur.set(e.x,e.y+1.45,e.z)}update(e){let t=this.g,n=t.input,r=t.player,i=t.camera;t.playing&&(this.yaw-=n.dx*this.sens,this.pitch=id(this.pitch+n.dy*this.sens,-.95,1.35),this.dist=id(this.dist+n.wheel*.7,this.minDist,11));let a=t.combat.locked?t.combat.target:null;a&&!a.dead&&(this.yaw=dd(this.yaw,Math.atan2(r.pos.x-a.pos.x,r.pos.z-a.pos.z),3.2,e),this.pitch=cd(this.pitch,id(.3+(r.pos.y-a.pos.y)*.05,.12,.6),1.5,e)),qg.set(r.pos.x,r.pos.y+(r.state===`swim`?this.lookY-.2:this.lookY),r.pos.z),this.cur.distanceTo(qg)>12&&this.cur.copy(qg);let o=ld(14,e);this.cur.x+=(qg.x-this.cur.x)*o,this.cur.z+=(qg.z-this.cur.z)*o,this.cur.y+=(qg.y-this.cur.y)*ld(9,e),Kg.set(Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),Math.cos(this.yaw)*Math.cos(this.pitch));let s=Math.max(.6,t.col.raycast(this.cur,Kg,this.dist)-.3);this.camDist=s<this.camDist?s:cd(this.camDist,s,5,e),i.position.copy(this.cur).addScaledVector(Kg,this.camDist),i.position.y<.35&&(i.position.y=.35),this.shakeAmt>.002&&(i.position.x+=(Math.random()-.5)*this.shakeAmt,i.position.y+=(Math.random()-.5)*this.shakeAmt,i.position.z+=(Math.random()-.5)*this.shakeAmt,this.shakeAmt=cd(this.shakeAmt,0,9,e)),i.lookAt(this.cur);let c=55+(r.sprinting?7:0)+(r.state===`glide`?5:0)+(r.dodgeT>0?5:0);this.fov=cd(this.fov,c,6,e),Math.abs(i.fov-this.fov)>.05&&(i.fov=this.fov,i.updateProjectionMatrix())}},Yg=z,Xg={hipY:.9,spine:.1,chest:.13,neck:.25,head:.05,shoulderX:.21,shoulderY:.18,upperArm:.27,foreArm:.25,hipX:.1,hipDrop:.05,thigh:.42,shin:.38},Q=(e,t,n)=>new G(e,t,n),Zg=`"Microsoft YaHei", "PingFang SC", sans-serif`;function Qg(e,t,n,r,i=0,a=0,o=Zg){e.save(),e.scale(1/200,1/200),e.fillStyle=r,e.textAlign=`center`,e.textBaseline=`middle`,e.font=`700 ${n}px ${o}`,e.fillText(t,a,i),e.restore()}var $g=(e,t,n=null)=>r=>{n&&(r.fillStyle=n,r.fillRect(-.5,-.5,1,1)),Qg(r,e,150,t,8)};function e_(e){e.fillStyle=`#12151f`,e.beginPath(),e.moveTo(0,-.46),e.lineTo(.4,0),e.lineTo(0,.46),e.lineTo(-.4,0),e.closePath(),e.fill(),Qg(e,`?`,120,`#ffffff`,6,0,`Consolas, monospace`)}function t_(){let e=new $m(new km(Xg)),t=`#1d2333`,n=`#e9edf6`,r=`#35e8ff`,i=`#ff3bd0`,a=`#63ffa1`;e.add(`hips`,Q(.3,.2,.2),t),e.add(`hips`,Q(.3,.016,.205),r,`glow`,[.03,-.05,0]);for(let r=0;r<4;r++)e.add(`hips`,Q(.1,.13,.02),r%2?n:t,`cloth`,[-.165+r*.11,-.16,.1],[.12,0,0]);e.add(`spine`,Q(.24,.16,.17),n,`cloth`,[.03,.06,0]),e.add(`chest`,Q(.4,.26,.22),t,`cloth`,[-.015,.12,0]),e.add(`chest`,Q(.31,.15,.02),`#0b101c`,`cloth`,[-.015,.13,.112]),[`锟`,`斤`,`拷`].forEach((t,n)=>e.decal(`chest`,`c`+n,$g(t,a),.1,[-.115+n*.1,.13,.126])),e.add(`chest`,Q(.4,.022,.225),r,`glow`,[.035,.215,0]),e.add(`chest`,Q(.4,.022,.225),i,`glow`,[-.06,.03,0]),[`烫`,`屯`].forEach((t,n)=>e.decal(`chest`,`b`+n,$g(t,a),.12,[-.08+n*.13,.13,-.113],[0,Math.PI,0])),e.add(`head`,Q(.22,.22,.22),n,`cloth`,[0,.1,0]),e.decal(`head`,`face`,e_,.2,[0,.1,.112]),e.add(`head`,Q(.225,.04,.225),t,`cloth`,[.04,.175,0]),e.add(`head`,Q(.22,.014,.224),r,`glow`,[-.035,.04,0]),e.add(`head`,Q(.22,.014,.224),i,`glow`,[.035,.022,0]);for(let[t,n,a]of[[.1,.27,.05],[-.07,.29,.035],[.02,.33,.028]])e.add(`head`,Q(a,a,a),n>.28?r:i,`glow`,[t,n,.02],[.3,.5,0]);for(let a of[1,-1]){let o=a>0?`L`:`R`;e.add(`arm${o}`,Q(.16,.12,.16),n,`cloth`,[a*.01,.01,0]),e.decal(`arm${o}`,`sh`,$g(`□`,t),.11,[a*.092,.01,0],[0,a*Math.PI/2,0]),e.add(`arm${o}`,Q(.1,Xg.upperArm*.8,.1),t,`cloth`,[0,-Xg.upperArm*.52,0]),e.add(`fore${o}`,Q(.105,Xg.foreArm*.5,.105),n,`cloth`,[0,-Xg.foreArm*.28,0]),e.add(`fore${o}`,Q(.09,Xg.foreArm*.28,.09),t,`cloth`,[a*.025,-Xg.foreArm*.8,0]),e.add(`fore${o}`,Q(.108,.012,.108),a>0?r:i,`glow`,[a*.02,-Xg.foreArm*.58,0]),e.add(`hand${o}`,Q(.095,.095,.095),t,`cloth`,[0,-.04,0]),e.add(`leg${o}`,Q(.135,Xg.thigh*.86,.135),t,`cloth`,[0,-Xg.thigh*.46,0]),e.add(`shin${o}`,Q(.15,.09,.15),n,`cloth`,[0,0,.01]),e.add(`shin${o}`,Q(.115,Xg.shin*.5,.115),t,`cloth`,[a*.02,-Xg.shin*.36,0]),e.add(`shin${o}`,Q(.12,Xg.shin*.26,.12),n,`cloth`,[-a*.015,-Xg.shin*.8,0]),e.add(`shin${o}`,Q(.125,.012,.125),a>0?i:r,`glow`,[0,-Xg.shin*.64,0]),e.add(`foot${o}`,Q(.13,.075,.25),t,`cloth`,[0,-.015,.05])}let o=e.mount(`weapon`,`handR`,[0,-.04,.02]),s=.9;e.add(o,Q(.07,.022,s),n,`cloth`,[0,0,.53]),e.add(o,Q(.022,.026,s*.9),i,`glow`,[.034,0,.51]),e.add(o,Q(.022,.026,s*.9),r,`glow`,[-.034,0,.55]);for(let[t,i]of[[1.07,.055],[1.17,.04],[1.25,.026]])e.add(o,Q(i,i*.5,i),t>1.1?r:n,t>1.1?`glow`:`cloth`,[t*7%.05-.025,0,t]);return e.add(o,Q(.2,.04,.045),t,`cloth`,[0,0,.07]),e.add(o,new Mi(.02,.02,.26,6).rotateX(Math.PI/2),t,`cloth`,[0,0,-.06]),e.build()}function n_(e){e.fillStyle=`#fbfaf5`,e.fillRect(-.5,-.5,1,1);for(let t=0;t<7;t++)e.fillStyle=t===2||t===5?`#e0483c`:`#9a9aa6`,e.fillRect(-.4,-.4+t*.12,t%3==2?.5:.8,.05)}function r_(e){e.fillStyle=`#fbfaf5`,e.fillRect(-.5,-.3,1,.6),e.strokeStyle=`#8a6a20`,e.lineWidth=.03,e.strokeRect(-.47,-.27,.94,.54),Qg(e,`최종본_v37`,30,`#3a3020`,-14),Qg(e,`9999 페이지`,34,`#c8323c`,26)}function i_(e){e.fillStyle=`#e0352b`,e.beginPath(),e.arc(0,0,.48,0,7),e.fill(),Qg(e,`99+`,74,`#ffffff`,4,0,`Consolas, monospace`)}function a_(){let e=new $m(new km(Xg)),t=`#f4f1e8`,n=`#b9b4a6`,r=`#e2b24f`,i=`#9a7424`,a=`#3f66cc`,o=`#e0352b`,s=`#1c1c22`,c=`#b8bcc8`,l=(r,i,a,o,s,c=5)=>{e.add(r,Q(i,a,o),t,`cloth`,s);for(let t=1;t<c;t++)e.add(r,Q(i+.008,.005,o+.008),n,`cloth`,[s[0],s[1]-a/2+a*t/c,s[2]])};l(`hips`,.34,.2,.26,[0,0,0],6),e.add(`hips`,Q(.36,.05,.28),s,`cloth`,[0,.08,0]),l(`spine`,.28,.16,.22,[0,.06,0],5),e.add(`chest`,Q(.47,.3,.3),r,`cloth`,[0,.12,0]),e.add(`chest`,Q(.035,.31,.31),i,`cloth`,[-.24,.12,0]),e.add(`chest`,Q(.41,.05,.26),t,`cloth`,[.01,.285,0]),e.add(`chest`,Q(.3,.008,.22),t,`cloth`,[.05,.318,.01],[0,.28,.05]),e.add(`chest`,Q(.26,.008,.2),`#fff7c2`,`cloth`,[-.06,.33,-.01],[.04,-.35,0]),e.decal(`chest`,`label`,r_,.3,[.02,.1,.153]),e.add(`chest`,new ao(.052,12,8),o,`glow`,[.2,.25,.14]),e.decal(`chest`,`badge`,i_,.085,[.2,.25,.194]),e.decal(`chest`,`page`,n_,.26,[0,.12,-.153],[0,Math.PI,0]),e.add(`head`,Q(.25,.31,.07),t,`cloth`,[0,.13,0]),e.add(`head`,Q(.085,.085,.074),n,`cloth`,[.125,.285,0],[0,0,Math.PI/4]),e.decal(`head`,`page`,n_,.2,[-.015,.075,.037]);for(let t of[1,-1])e.add(`head`,Q(.075,.02,.014),`#ff5c3c`,`glow`,[t*.055-.01,.2,.036],[0,0,-t*.22]);e.add(`head`,Q(.04,.2,.012),o,`cloth`,[-.08,.2,-.04]);for(let u of[1,-1]){let d=u>0?`L`:`R`;e.add(`arm${d}`,Q(.22,.13,.22),a,`cloth`,[u*.02,.03,0]),e.add(`arm${d}`,Q(.2,.09,.225),t,`cloth`,[u*.035,.03,0]),e.add(`arm${d}`,Q(.12,.08,.16),s,`cloth`,[u*.03,.13,0],[0,0,-u*.25]),e.add(`arm${d}`,new oo(.05,.008,5,12),c,`cloth`,[u*.05,.2,0],[0,Math.PI/2,0]),e.add(`arm${d}`,new Mi(.066,.06,Xg.upperArm,12).translate(0,-Xg.upperArm/2,0),t),e.add(`arm${d}`,new oo(.066,.012,5,14).rotateX(Math.PI/2),o,`cloth`,[0,-Xg.upperArm*.55,0]),e.add(`fore${d}`,new Mi(.082,.07,Xg.foreArm,12).translate(0,-Xg.foreArm/2,0),t),e.add(`fore${d}`,new Mi(.05,.05,.02,12).translate(0,-Xg.foreArm,0),n),e.add(`fore${d}`,new oo(.08,.012,5,14).rotateX(Math.PI/2),a,`cloth`,[0,-Xg.foreArm*.4,0]),e.add(`hand${d}`,Q(.12,.1,.11),s,`cloth`,[0,-.045,0]),l(`leg${d}`,.17,Xg.thigh*.9,.17,[0,-Xg.thigh*.47,0],8),e.add(`shin${d}`,Q(.19,.1,.19),a,`cloth`,[0,0,.01]),e.add(`shin${d}`,Q(.16,Xg.shin*.84,.16),r,`cloth`,[0,-Xg.shin*.5,0]),e.add(`shin${d}`,Q(.02,Xg.shin*.84,.165),i,`cloth`,[u*.08,-Xg.shin*.5,0]),e.add(`foot${d}`,Q(.17,.09,.3),a,`cloth`,[0,-.015,.05]),e.add(`foot${d}`,Q(.15,.055,.305),t,`cloth`,[0,-.015,.053])}let u=e.mount(`weapon`,`handR`,[0,-.04,.02]),d=1.35;e.add(u,new Mi(.045,.045,d,10).rotateX(Math.PI/2),o,`cloth`,[0,0,.6950000000000001]),e.add(u,new Mi(.05,.05,.3,10).rotateX(Math.PI/2),s,`cloth`,[0,0,.05]),e.add(u,new Ni(.045,.2,10).rotateX(Math.PI/2),c,`cloth`,[0,0,1.4700000000000002]),e.add(u,new ao(.022,8,6),`#ff5c3c`,`glow`,[0,0,1.58]),e.add(u,Q(.016,.1,d*.5),`#ff5c3c`,`glow`,[0,0,d*.62]),e.add(u,Q(.014,.03,.34),c,`cloth`,[0,.05,.16]);let f=new H(t),p=new H(`#8f8f9c`),m=new H(`#d8d4c6`);Ih(e,`chest`,{top:[-.17,-.06,.06,.17].map(e=>new Yg(e,.24,-.16)),drop:(e,t)=>new Yg((e-1.5)*.02*t,-(1-e%2*.04)*t,-.24*Math.sin(t*1.4)),bones:3,rows:40,cols:14,col:(e,t,n)=>{let r=e<.08||e>.92,i=t*20%1;r?n.copy(i<.5?m:f):n.copy(i<.3&&e>.16&&e<(Math.floor(t*20)%3==2?.6:.86)?p:f)}});let h=e.build();return h.root.scale.setScalar(1.85),h.rig.scale=1.85,h}function o_(e){let t=new mn,n=new mn,r=qd(e,1.6),i=qd(e,.82),a=Vd({color:`#4d3163`,grad:`soft`,side:2});t.add(new W(new Qa(.19,2),r));let o=new Qa(.3,0),s=o.attributes.position,c=new Yg,l=new Yg;for(let e=0;e<s.count;e+=3){c.set(0,0,0);for(let t=0;t<3;t++)c.add(l.fromBufferAttribute(s,e+t));c.multiplyScalar(1/3);for(let t=0;t<3;t++)l.fromBufferAttribute(s,e+t).sub(c).multiplyScalar(.87).add(c),s.setXYZ(e+t,l.x,l.y,l.z)}o.computeVertexNormals();let u=(1+Math.sqrt(5))/2,d=[],f=new Yg(0,1,0),p=new _t;for(let e of[-1,1])for(let t of[-u,u])d.push(new Yg(0,e,t).normalize(),new Yg(e,t,0).normalize(),new Yg(t,0,e).normalize());let m=[o],h=[];for(let e of d)p.setFromUnitVectors(f,e),m.push(new Mi(.02,.04,.2,6).translate(0,.36,0).applyQuaternion(p)),m.push(new ao(.058,8,6).translate(0,.48,0).applyQuaternion(p)),h.push(new ao(.03,8,6).translate(0,.53,0).applyQuaternion(p));let g=new W(bf(m),a);g.castShadow=!0,n.add(g,new W(bf(h),i));let _=[new oo(.62,.008,4,40)];for(let e=0;e<8;e++){let t=e/8*Math.PI*2,n=e%2?.05:.075;_.push(Q(n,n,n).rotateZ(t).translate(Math.cos(t)*.62,Math.sin(t)*.62,0))}let v=new W(bf(_),i);v.rotation.x=1.2;let y=[[0,-.56,.09],[.05,-.7,.06],[-.03,-.81,.038]].map(([e,t,n])=>Q(n,n,n).rotateY(t*9).translate(e,t,0));return t.add(n,v,new W(bf(y),i)),{root:t,shell:n,ring:v,mats:[a],core:r}}var s_={grunt:{kind:`grunt`,name:`글리치 병사`,hp:520,atk:64,defn:40,speed:3.7,radius:.5,height:1.85,exp:45,poise:42,aggro:15},wisp:{kind:`wisp`,name:`전자 바이러스`,hp:300,atk:56,defn:20,speed:2.7,radius:.5,height:1.2,exp:35,poise:20,aggro:20},elite:{kind:`elite`,name:`거대 문서 골렘 · 망각의 문의 수호자`,hp:4200,atk:118,defn:70,speed:3.2,radius:1.15,height:3.4,exp:450,poise:170,aggro:27}},c_={slash:{clip:gg.blade1,wind:.55,hold:.22,rec:.7,uWind:.3,uHit:.55},thrust:{clip:gg.thrust,wind:.7,hold:.3,rec:.8,uWind:.25,uHit:.5},sweep:{clip:gg.heavy1,wind:.95,hold:.3,rec:1,uWind:.4,uHit:.62},slam:{clip:gg.heavy3,wind:1.25,hold:.3,rec:1.1,uWind:.45,uHit:.64},charge:{clip:gg.thrust,wind:.9,hold:.85,rec:1,uWind:.25,uHit:.5}},l_=new z,u_=class{g;def;level;camp;elem;pos=new z;center=new z;home=new z;root;yaw=Math.random()*6.28;hp;maxHp;atk;dead=!1;removed=!1;deadT=0;state=`idle`;t=0;aggro=!1;mark=null;reactCd=0;vulnT=0;slowT=0;frozenT=0;asleep=!1;sleepT=0;dotAcc=0;poise;staggerT=0;vx=0;vz=0;cd=1+Math.random()*1.5;cur=c_.slash;curName=`slash`;hitDone=!1;flashT=0;wander=new z;wanderT=0;strafe=Math.random()<.5?1:-1;spot=new z;bob=Math.random()*6;speedNow=0;model=null;anim=null;wisp=null;seen=!1;constructor(e,t,n,r,i,a,o=null){this.g=e,this.def=t,this.level=i,this.camp=a,this.elem=o;let s=i-1;this.maxHp=this.hp=Math.round(t.hp*(1+.17*s)),this.atk=Math.round(t.atk*(1+.11*s)),this.poise=t.poise,t.kind===`wisp`?(this.wisp=o_(vm[o??`blaze`].color),this.root=this.wisp.root):(this.model=t.kind===`elite`?a_():t_(),this.anim=new _g(this.model.rig),this.root=this.model.root),this.pos.set(n,e.terrain.heightAt(n,r),r),this.home.copy(this.pos),this.wander.copy(this.pos),e.scene.add(this.root),this.sync(0)}damage(e,t,n,r){if(this.dead)return;this.hp-=e,this.flashT=.12,this.aggro=!0,this.seen=!0,(this.state===`idle`||this.state===`return`)&&(this.state=`chase`);let i=this.def.kind===`elite`;if(this.vx+=n*(i?.15:1),this.vz+=r*(i?.15:1),this.hp<=0)return this.die();this.poise-=t*(this.state===`stagger`?0:1),this.poise<=0&&this.frozenT<=0&&(this.poise=this.def.poise,this.state=`stagger`,this.staggerT=i?2.6:.75,i&&(this.vulnT=2.6,this.g.hud.float(this.center,`방어 붕괴`,`#ffd24a`,!0),this.g.sfx.boom()))}setMark(e){this.reactCd<=0&&(this.mark={elem:e,t:8})}freeze(e){this.frozenT=e,this.state=`chase`}sleep(e){this.asleep=!0,this.sleepT=e,this.state=`chase`,this.g.hud.float(this.center,`Zzz`,vm.shade.color)}wake(){this.asleep=!1}shove(e,t){this.def.kind!==`elite`&&(this.vx+=e,this.vz+=t)}die(){let e=this.g;this.dead=!0,this.hp=0,this.mark=null,e.party.gainExp(this.def.exp+this.level*6);let t=this.def.kind===`elite`?300:12+Math.floor(Math.random()*12);e.party.items.dust+=t,e.hud.float(this.center,`+${t} Token`,`#ffe08a`),e.fx.burst(this.center,this.wisp?vm[this.elem??`blaze`].color:`#b9a8ff`,26,6,.4,.8,{up:2}),e.sfx.boom(),e.combat.target===this&&(e.combat.target=null,e.combat.locked=!1),e.world.onEnemyDead(this)}update(e){let t=this.g,n=t.player,r=this.def;if(this.dead){this.deadT+=e;let n=Math.max(0,1-this.deadT/.7);this.root.scale.setScalar((r.kind===`elite`?1.85:1)*n),this.root.position.y=this.pos.y+(this.wisp?1.5:0)-(1-n)*.4,this.deadT>.7&&(t.scene.remove(this.root),this.removed=!0);return}this.mark&&(this.mark.t-=e)<=0&&(this.mark=null),this.reactCd-=e,this.vulnT=Math.max(0,this.vulnT-e),this.slowT-=e,this.flashT-=e;let i=this.mark?vm[this.mark.elem]:null;if(i?.dot&&(this.dotAcc+=e)>=1){this.dotAcc=0;let e=Math.round(t.party.cur.atk*i.dot);if(this.hp-=e,t.hud.dmg(this.center,e,i.color,!1),this.hp<=0)return this.die()}this.pos.x+=this.vx*e,this.pos.z+=this.vz*e,this.vx=cd(this.vx,0,6,e),this.vz=cd(this.vz,0,6,e);let a=e*(this.slowT>0||i?.slow?1-(i?.slow??.4):1);this.frozenT>0?(this.frozenT-=e,a=0):this.asleep&&((this.sleepT-=e)<=0&&this.wake(),a=0),this.speedNow=0,a>0&&(r.kind===`wisp`?this.aiWisp:r.kind===`elite`?this.aiElite:this.aiGrunt).call(this,a),t.col.resolve(this.pos,r.radius,1.5);let o=this.pos.x-n.pos.x,s=this.pos.z-n.pos.z,c=Math.hypot(o,s),l=r.radius+.38;c<l&&c>.01&&Math.abs(n.pos.y-this.pos.y)<2&&(this.pos.x+=o/c*(l-c),this.pos.z+=s/c*(l-c)),this.pos.y=Math.max(t.terrain.heightAt(this.pos.x,this.pos.z),this.wisp?.3:-.4),this.sync(a)}sync(e){this.g;let t=this.def.height;this.center.set(this.pos.x,this.pos.y+(this.wisp?1.5:t*.55),this.pos.z),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;let n=this.frozenT>0,r=Math.max(0,this.flashT/.12);if(this.wisp){this.bob+=e*2,this.root.position.y=this.pos.y+1.5+Math.sin(this.bob)*.18;let t=this.state===`windup`?this.t/this.cur.wind:0;this.wisp.shell.rotation.y+=e*(1.5+t*10),this.wisp.ring.rotation.z+=e*.8,this.wisp.ring.scale.setScalar(1+t*.5);for(let e of this.wisp.mats)e.emissive.setScalar(r*.6).add(n?d_.set(`#3a6a9a`):d_.set(0));return}let i=this.anim,a=this.model,o=null;if(this.state===`windup`?o={clip:this.cur.clip,u:this.t/this.cur.wind*this.cur.uWind}:this.state===`strike`?o={clip:this.cur.clip,u:this.cur.uWind+Math.min(1,this.t/.12)*(this.cur.uHit-this.cur.uWind)}:this.state===`recover`?o={clip:this.cur.clip,u:this.cur.uHit+this.t/this.cur.rec*(1-this.cur.uHit)}:this.state===`stagger`?o=this.def.kind===`elite`?{clip:gg.down,u:Math.min(1,(2.6-this.staggerT)*3)}:{clip:gg.hit,u:1-this.staggerT/.75}:this.asleep&&(o={clip:gg.down,u:.6}),i.update(n?0:Math.max(e,1e-4),{mode:`ground`,speed:this.speedNow,sprint:0,vy:0,moving:this.speedNow>.2,action:o,landT:0}),a.setFlash(r),n)for(let e of a.mats)e.emissive.set(`#3a6a9a`)}face(e,t,n){this.yaw=dd(this.yaw,e,t,n)}walk(e,t,n){let r=this.g,i=this.pos.x+Math.sin(e)*t*n,a=this.pos.z+Math.cos(e)*t*n,o=r.terrain.heightAt(i,a);return!this.wisp&&(o<-.3||r.terrain.normalAt(i,a,l_).y<.7)?!1:(this.pos.x=i,this.pos.z=a,this.speedNow=t,!0)}common(e,t,n){let r=this.g,i=r.player,a=Math.hypot(this.pos.x-this.home.x,this.pos.z-this.home.z);if(this.state===`idle`){if((this.wanderT-=e)<0&&(this.wanderT=2.5+Math.random()*4,this.wander.set(this.home.x+vd(-6,6),0,this.home.z+vd(-6,6))),Math.hypot(this.wander.x-this.pos.x,this.wander.z-this.pos.z)>.6&&this.def.kind!==`elite`){let t=Math.atan2(this.wander.x-this.pos.x,this.wander.z-this.pos.z);this.face(t,4,e),this.walk(t,this.def.speed*.35,e)}if(!i.dead&&(this.aggro||t<this.def.aggro&&Math.abs(i.pos.y-this.pos.y)<7)){this.aggro=!0,this.seen=!0,this.state=`chase`,r.hud.float(this.center.clone().setY(this.center.y+.9),`!`,`#ff5a4a`,!0);for(let e of r.enemies.list)e.camp===this.camp&&!e.dead&&e.pos.distanceTo(this.pos)<16&&(e.aggro=!0)}return!0}if(this.state===`return`){let t=Math.atan2(this.home.x-this.pos.x,this.home.z-this.pos.z);return this.face(t,6,e),this.hp=Math.min(this.maxHp,this.hp+this.maxHp*.25*e),(a<1.5||!this.walk(t,this.def.speed*1.4,e))&&(this.state=`idle`,this.aggro=!1,this.hp=this.maxHp),!0}return this.state===`stagger`?((this.staggerT-=e)<=0&&(this.state=`chase`,this.cd=.6),!0):this.state===`chase`&&(i.dead||a>52||t>44)?(this.state=`return`,this.mark=null,!0):!1}begin(e){this.cur=c_[e],this.curName=e,this.state=`windup`,this.t=0,this.hitDone=!1}strikeHit(e,t,n){let r=this.g.player,i=r.pos.x-this.pos.x,a=r.pos.z-this.pos.z;Math.hypot(i,a)<e+.3&&Math.abs(r.pos.y-this.pos.y)<2.5&&Math.abs(ud(this.yaw,Math.atan2(i,a)))<t*Math.PI/360&&r.hurt(this.atkNow()*n,`phys`,this.pos)}atkNow(){return this.atk*(this.mark?.elem===`tide`?.8:1)}aiGrunt(e){let t=this.g,n=t.player,r=n.pos.x-this.pos.x,i=n.pos.z-this.pos.z,a=Math.hypot(r,i),o=Math.atan2(r,i);if(!this.common(e,a,o))switch(this.t+=e,this.state){case`chase`:this.face(o,7,e),this.cd-=e,a>2.3?this.walk(o,this.def.speed,e):this.cd>0&&this.walk(o+this.strafe*1.5,this.def.speed*.3,e),this.cd<=0&&a<6&&a>3.2&&Math.random()<.5?this.begin(`thrust`):this.cd<=0&&a<2.6&&this.begin(`slash`);break;case`windup`:this.face(o,3,e),this.t>=this.cur.wind&&(this.state=`strike`,this.t=0,t.sfx.swing(),this.curName===`thrust`&&(this.vx=Math.sin(this.yaw)*15,this.vz=Math.cos(this.yaw)*15));break;case`strike`:!this.hitDone&&this.t>(this.curName===`thrust`?.14:.06)&&(this.hitDone=!0,t.fx.slash(this.pos,this.yaw,{r:2.8,a0:-1.1,a1:1.1,color:`#ff5a4a`,y:1.1}),this.strikeHit(2.8,130,this.curName===`thrust`?1.2:1)),this.t>=this.cur.hold&&(this.state=`recover`,this.t=0);break;case`recover`:this.t>=this.cur.rec&&(this.state=`chase`,this.cd=1.2+Math.random()*1.4,this.strafe*=-1)}}aiElite(e){let t=this.g,n=t.player,r=n.pos.x-this.pos.x,i=n.pos.z-this.pos.z,a=Math.hypot(r,i),o=Math.atan2(r,i);if(this.common(e,a,o))return;let s=this.hp<this.maxHp*.5;switch(this.t+=e,this.state){case`chase`:this.face(o,5,e),this.cd-=e,a>4&&this.walk(o,this.def.speed*(s?1.25:1),e),this.cd<=0&&(a>9?this.begin(`charge`):a<7.5&&(this.begin(Math.random()<.5?`sweep`:`slam`),this.curName===`slam`?(this.spot.copy(n.pos),t.fx.telegraph(this.spot,4.2,this.cur.wind)):t.fx.telegraph(this.pos,5.6,this.cur.wind)));break;case`windup`:this.face(this.curName===`slam`?Math.atan2(this.spot.x-this.pos.x,this.spot.z-this.pos.z):o,this.curName===`charge`?6:2.5,e),this.t>=this.cur.wind&&(this.state=`strike`,this.t=0,t.sfx.swing(!0));break;case`strike`:this.curName===`charge`?(this.walk(this.yaw,15,e),!this.hitDone&&a<2.6&&(this.hitDone=!0,n.hurt(this.atkNow()*1.2,`phys`,this.pos),t.shake(.3)),Math.random()<e*30&&t.fx.burst(this.pos,`#d8d0b8`,2,2,.6,.5,{soft:!0,flat:!0})):!this.hitDone&&this.t>.1&&(this.hitDone=!0,t.shake(.45),t.sfx.boom(),this.curName===`slam`?(t.fx.ring(this.spot,.8,4.4,.45,`#ff5a3a`),t.fx.burst(this.spot,`#ffb070`,24,7,.5,.7,{up:3}),Math.hypot(n.pos.x-this.spot.x,n.pos.z-this.spot.z)<4.2&&n.heightAbove()<1.6&&n.hurt(this.atkNow()*1.4,`phys`,this.spot)):(t.fx.slash(this.pos,this.yaw,{r:5.6,w:2,a0:-1.9,a1:1.9,color:`#ff5a3a`,y:1.6,dur:.3}),this.strikeHit(5.6,220,1))),this.t>=this.cur.hold&&(this.state=`recover`,this.t=0);break;case`recover`:this.t>=this.cur.rec*(s?.6:1)&&(this.state=`chase`,this.cd=s?.7:1.6)}}aiWisp(e){let t=this.g,n=t.player,r=n.pos.x-this.pos.x,i=n.pos.z-this.pos.z,a=Math.hypot(r,i),o=Math.atan2(r,i);if(!this.common(e,a,o))switch(this.t+=e,this.face(o,6,e),this.state){case`chase`:this.cd-=e,a<7?this.walk(o+Math.PI,this.def.speed,e):a>12?this.walk(o,this.def.speed,e):this.walk(o+this.strafe*1.57,this.def.speed*.6,e),this.cd<=0&&a<18&&(this.begin(`slash`),this.cur={...c_.slash,wind:.75,hold:.1,rec:.5});break;case`windup`:if(this.t>=this.cur.wind){this.state=`strike`,this.t=0;let e=this.center.clone(),r=this.elem??`blaze`,i=l_.set(n.pos.x,n.pos.y+1,n.pos.z).sub(e).normalize().multiplyScalar(13).clone();t.combat.spawnProj({owner:1,pos:e,vel:i,life:2.2,r:.26,mult:0,elem:r,homing:null,pierce:!1,aoe:0,dmg:this.atkNow(),poise:0}),t.sfx.cast()}break;case`strike`:this.t>=this.cur.hold&&(this.state=`recover`,this.t=0);break;case`recover`:this.t>=this.cur.rec&&(this.state=`chase`,this.cd=2.2+Math.random()*1.2,this.strafe*=-1)}}},d_=new H,f_=class{g;list=[];camps=[];constructor(e){this.g=e}addCamp(e,t=!0){let n={...e,respawnT:0};return this.camps.push(n),t&&this.spawn(n),n}spawn(e){let t=(t,n,r)=>{let i=t/Math.max(1,n)*6.283+e.id;return[e.x+Math.sin(i)*r,e.z+Math.cos(i)*r]};e.elite&&this.list.push(new u_(this.g,s_.elite,e.x,e.z,e.level,e.id));for(let n=0;n<e.grunts;n++)this.list.push(new u_(this.g,s_.grunt,...t(n,e.grunts,3.5+n%2*1.5),e.level,e.id));for(let n=0;n<e.wisps;n++)this.list.push(new u_(this.g,s_.wisp,...t(n+.5,e.wisps,6),e.level,e.id,(e.id+n)%2?`frost`:`blaze`))}alive(e){return this.list.filter(t=>t.camp===e&&!t.dead).length}nearest(e,t){let n=null,r=t;for(let t of this.list){if(t.dead)continue;let i=t.pos.distanceTo(e);i<r&&(r=i,n=t)}return n}update(e){for(let t of this.list)t.update(e);this.list.some(e=>e.removed)&&(this.list=this.list.filter(e=>!e.removed));let t=this.g.player.pos;for(let n of this.camps)n.elite||this.alive(n.id)>0?n.respawnT=0:(n.respawnT+=e,n.respawnT>150&&Math.hypot(t.x-n.x,t.z-n.z)>60&&(n.respawnT=0,this.spawn(n)))}calm(){for(let e of this.list)!e.dead&&e.state!==`idle`&&(e.state=`return`,e.aggro=!1)}},p_={claude:{bg:`#fff3e2`,k:.84,draw:e=>Uf(e)},gpt:{bg:`#2f2c44`,k:.8,draw:e=>Wf(e,`#ffffff`,`#2f2c44`)},deepseek:{bg:`#ffffff`,k:.82,draw:e=>Gf(e,`#3f66cc`,`#dfe8ff`)},glm:{bg:`#15151b`,k:.92,draw:e=>Kf(e)},kimi:{bg:`#12142a`,k:1.12,draw:e=>Jf(e,!0)},qwen:{bg:`#5a5ae8`,k:1.1,draw:Xf},gemini:{bg:`#ffffff`,k:.86,draw:Zf},grok:{bg:`#141016`,k:.86,draw:e=>Qf(e)}},m_=new Map;function h_(e){let t=m_.get(e);if(!t){let n=p_[e];t=document.createElement(`canvas`),t.width=t.height=64;let r=t.getContext(`2d`);r.beginPath(),r.arc(32,32,31,0,7),r.clip(),r.fillStyle=n.bg,r.fillRect(0,0,64,64),r.translate(32,32),r.scale(64*n.k,64*n.k),n.draw(r),m_.set(e,t)}return t}var $=(e,t=document)=>t.querySelector(e),g_=new z,__=`
<div class="tl"><canvas id="mini" width="176" height="176"></canvas><div class="clock"><b id="clock"></b><span id="region"></span></div></div>
<div class="quest"><div id="quest-text"></div><div id="quest-dist"></div><div id="quest-side"></div></div>
<div class="party" id="party"></div>
<div class="bottom">
  <div class="who"><b id="who"></b><span id="who-el"></span><span class="lv">Lv.<b id="lv"></b></span><div class="exp"><i id="exp"></i></div></div>
  <div class="hpbar"><i id="hp"></i><span id="hp-text"></span></div>
  <div class="stbar"><i id="st"></i></div>
</div>
<div class="skills">
  <div class="sk" id="sk-e"><kbd>E</kbd><span class="nm"></span><i class="cd"></i><em></em></div>
  <div class="sk" id="sk-q"><kbd>Q</kbd><span class="nm"></span><i class="fill"></i></div>
  <div class="bag"><span>달콤 열매 <b id="berry"></b> <kbd>Z</kbd></span><span>토큰 <b id="dust"></b></span><span>연산 칩 <b id="crys"></b></span></div>
</div>
<div id="prompt"><kbd>F</kbd><span></span></div>
<div id="banner"></div><div id="regionb"></div><div id="toasts"></div>
<div id="boss"><div class="bn"></div><div class="bb"><i></i></div></div>
<div id="lock"></div><div id="floats"></div><div id="ebars"></div><div id="vignette"></div><div id="fade"></div>
<div id="keys">WASD 이동 · 스페이스 점프/활강 · Shift 회피/돌진 · 좌클릭 공격(길게 누르면 강공격) · E 스킬 · Q 필살기 · 1-8 캐릭터 교체 · Tab 조준 고정 · M 지도 · C 캐릭터 · Esc 메뉴</div>`,v_=class{g;root=$(`#ui`);hud=document.createElement(`div`);menuEl=document.createElement(`div`);floats=[];ebars=[];rows=[];mini;bannerT=0;regionT=0;fadeT=0;fadeDur=1;frame=0;menu=`start`;mapCv=null;constructor(e){this.g=e,this.hud.id=`hud`,this.hud.innerHTML=__,this.menuEl.id=`menu`,this.root.append(this.hud,this.menuEl),this.mini=$(`#mini`).getContext(`2d`);let t=$(`#floats`),n=$(`#ebars`);for(let e=0;e<56;e++){let e=document.createElement(`div`);e.className=`fl`,t.appendChild(e),this.floats.push({el:e,pos:new z,t:0,dur:1,vx:0,rise:60,live:!1})}for(let e=0;e<12;e++){let e=document.createElement(`div`);e.className=`eb`,e.innerHTML=`<b></b><i></i>`,n.appendChild(e),this.ebars.push({el:e,fill:$(`i`,e),mark:$(`b`,e)})}let r=$(`#party`);e.party.members.forEach((e,t)=>{let n=document.createElement(`div`);n.className=`pm`,n.innerHTML=`<kbd>${t+1}</kbd><div class="av"></div><div class="pi"><span>${e.def.name}</span><div class="ph"><i></i></div><div class="pe"><i></i></div></div>`,n.style.setProperty(`--c`,e.color),$(`.av`,n).appendChild(this.avatar(e,44)),r.appendChild(n),this.rows.push({el:n,hp:$(`.ph i`,n),en:$(`.pe i`,n),m:e})}),this.menuEl.addEventListener(`click`,e=>this.onMenuClick(e)),this.menuEl.addEventListener(`input`,e=>this.onMenuInput(e)),this.show(`start`)}avatar(e,t){let n=document.createElement(`img`);return n.src=`avatars/${e.def.id}.png`,n.alt=e.def.name,n.width=n.height=t,n.draggable=!1,n}spawn(e,t,n,r,i,a){let o=this.floats.find(e=>!e.live)??this.floats[0];o.live=!0,o.t=0,o.dur=i,o.rise=a,o.vx=(Math.random()-.5)*50,o.pos.copy(e),o.el.textContent=t,o.el.className=`fl `+r,o.el.style.color=n,o.el.style.display=`block`}dmg(e,t,n,r,i=!1){this.spawn(e,(i?`-`:``)+t+(r?`!`:``),n,r?`crit`:i?`hurt`:``,.8,70)}float(e,t,n,r=!1){this.spawn(e,t,n,r?`tag big`:`tag`,1.1,46)}banner(e,t=`#ffffff`){let n=$(`#banner`);n.textContent=e,n.style.color=t,n.classList.remove(`on`),n.offsetWidth,n.classList.add(`on`),this.bannerT=2.2}region(e){let t=$(`#regionb`);t.textContent=e,t.classList.remove(`on`),t.offsetWidth,t.classList.add(`on`),this.regionT=3}toast(e){let t=document.createElement(`div`);t.className=`toast`,t.textContent=e;let n=$(`#toasts`);for(n.appendChild(t);n.children.length>4;)n.firstChild.remove();setTimeout(()=>t.remove(),4200)}fade(e){this.fadeT=this.fadeDur=e}project(e,t){return g_.copy(e).project(this.g.camera),t.x=(g_.x*.5+.5)*innerWidth,t.y=(-g_.y*.5+.5)*innerHeight,g_.z<1&&g_.z>-1}sp={x:0,y:0};update(e){let t=this.g,n=t.party,r=n.cur,i=t.player,a=this.sp;this.frame++;for(let t of this.floats){if(!t.live)continue;t.t+=e;let n=t.t/t.dur;if(n>=1||!this.project(t.pos,a)){t.live=!1,t.el.style.display=`none`;continue}let r=1-(1-n)**3;t.el.style.transform=`translate(${a.x+t.vx*r}px, ${a.y-t.rise*r}px) translate(-50%,-50%) scale(${n<.12?.6+n*5:1.2-.2*Math.min(1,(n-.12)*4)})`,t.el.style.opacity=String(n>.7?(1-n)/.3:1)}let o=0,s=null;for(let e of t.enemies.list){if(e.dead||!e.seen)continue;if(e.def.kind===`elite`){e.aggro&&(s=e);continue}if(o>=this.ebars.length||e.pos.distanceTo(i.pos)>32||(g_.copy(e.center).setY(e.center.y+(e.def.kind===`wisp`?.8:1)),!this.project(g_,a)))continue;let n=this.ebars[o++];n.el.style.display=`block`,n.el.style.transform=`translate(${a.x}px, ${a.y}px) translate(-50%,-50%)`,n.fill.style.width=e.hp/e.maxHp*100+`%`,n.mark.textContent=e.mark?vm[e.mark.elem].name:e.asleep?`z`:``,n.mark.style.background=e.mark?vm[e.mark.elem].color:e.asleep?vm.shade.color:`transparent`,n.el.classList.toggle(`tg`,t.combat.target===e)}for(;o<this.ebars.length;o++)this.ebars[o].el.style.display=`none`;let c=$(`#boss`);c.style.display=s?`block`:`none`,s&&($(`.bn`,c).textContent=`${s.def.name}  Lv.${s.level}`+(s.mark?`  〔${vm[s.mark.elem].mark}〕`:``)+(s.vulnT>0?`  〔방어 붕괴〕`:``),$(`.bb i`,c).style.width=s.hp/s.maxHp*100+`%`);let l=$(`#lock`),u=t.combat.locked?t.combat.target:null;if(u&&!u.dead&&this.project(u.center,a)?(l.style.display=`block`,l.style.transform=`translate(${a.x}px, ${a.y}px) translate(-50%,-50%) rotate(45deg)`):l.style.display=`none`,this.frame%2==0){$(`#hp`).style.width=r.hp/r.maxHp*100+`%`,$(`#hp-text`).textContent=`${Math.ceil(r.hp)} / ${r.maxHp}`;let e=$(`#st`);e.style.width=i.stamina/i.staminaMax*100+`%`,e.parentElement.style.width=220*(i.staminaMax/100)+`px`,e.parentElement.style.opacity=i.stamina<i.staminaMax-.5?`1`:`0.35`,e.classList.toggle(`low`,i.stamina<25),$(`#who`).textContent=r.def.name;let a=$(`#who-el`);a.textContent=vm[r.def.elem].name,a.style.background=r.color,$(`#lv`).textContent=String(n.level),$(`#exp`).style.width=(n.level>=20?100:n.exp/n.expNeed()*100)+`%`;let o=r.def.kit,s=$(`#sk-e`),c=$(`#sk-q`);$(`.nm`,s).textContent=o.skill.name,$(`.nm`,c).textContent=o.burst.name;let l=r.skillCd/(o.skill.cd??8);$(`.cd`,s).style.height=l*100+`%`,$(`em`,s).textContent=r.skillCd>0?r.skillCd.toFixed(1):``;let u=r.energy/(o.burst.cost??60);$(`.fill`,c).style.height=Math.min(1,u)*100+`%`,c.classList.toggle(`ready`,u>=1),c.style.setProperty(`--c`,r.color),s.style.setProperty(`--c`,r.color),$(`#berry`).textContent=String(n.items.berry),$(`#dust`).textContent=String(n.items.dust),$(`#crys`).textContent=`${t.world.crystalCount}/${t.world.crystals.length}`,this.rows.forEach((e,t)=>{e.el.classList.toggle(`on`,t===n.active),e.el.classList.toggle(`dead`,!e.m.alive),e.hp.style.width=e.m.hp/e.m.maxHp*100+`%`,e.en.style.width=Math.min(100,e.m.energy/(e.m.def.kit.burst.cost??60)*100)+`%`}),$(`#clock`).textContent=t.sky.clock(),$(`#region`).textContent=t.world.region;let d=t.world.stage,f=d.target();$(`#quest-text`).textContent=d.text,$(`#quest-dist`).textContent=f?`거리 ${Math.round(Math.hypot(f.x-i.pos.x,f.z-i.pos.z))}m · 미니맵의 금색 표시`:``,$(`#quest-side`).textContent=`AI 오두막 방문 ${t.world.houseCount}/8 · 길 위의 토큰 ${t.world.tokenCount}/${t.world.tokens.length}`;let p=$(`#prompt`),m=t.world.near;p.style.display=m?`flex`:`none`,m&&($(`span`,p).textContent=m.prompt()??``),$(`#vignette`).style.opacity=String(r.hp/r.maxHp<.3?.75:0),this.drawMini()}this.bannerT>0&&(this.bannerT-=e)<=0&&$(`#banner`).classList.remove(`on`),this.regionT>0&&(this.regionT-=e)<=0&&$(`#regionb`).classList.remove(`on`),this.fadeT>0&&(this.fadeT-=e,$(`#fade`).style.opacity=String(Math.max(0,this.fadeT/this.fadeDur)))}icons(e,t,n){let r=this.g;for(let i of r.world.items){if(i.kind===`gather`||i.kind===`chest`&&(i.done||!i.obj.visible))continue;let[r,a]=t(i.pos.x,i.pos.z);if(i.kind===`house`){let t=10.5*n;e.imageSmoothingQuality=`high`,e.drawImage(h_(i.id.slice(2)),r-t,a-t,t*2,t*2),e.strokeStyle=i.done?`#ffd24a`:`#1a2a4a`,e.lineWidth=(i.done?2.4:1.4)*n,e.beginPath(),e.arc(r,a,t,0,6.3),e.stroke()}else i.kind===`way`?(e.fillStyle=i.done?`#6fd0ff`:`#8a93a6`,e.strokeStyle=`#10203a`,e.lineWidth=2,e.beginPath(),e.moveTo(r,a-8*n),e.lineTo(r+6*n,a),e.lineTo(r,a+8*n),e.lineTo(r-6*n,a),e.closePath(),e.fill(),e.stroke()):(e.fillStyle=i.data.ornate?`#d8a6ff`:`#ffd24a`,e.strokeStyle=`#3a2a10`,e.lineWidth=1.5,e.fillRect(r-4*n,a-3*n,8*n,6*n),e.strokeRect(r-4*n,a-3*n,8*n,6*n))}for(let i of r.enemies.list){if(i.dead)continue;let[r,a]=t(i.pos.x,i.pos.z);e.fillStyle=i.def.kind===`elite`?`#ff3a2a`:`#ff7a6a`,e.beginPath(),e.arc(r,a,(i.def.kind===`elite`?5:2.6)*n,0,6.3),e.fill()}let i=r.world.stage.target();if(i){let[r,a]=t(i.x,i.z);e.fillStyle=`#ffd24a`,e.strokeStyle=`#5a3a00`,e.lineWidth=2,e.beginPath();for(let t=0;t<10;t++){let i=t/10*6.283-1.571,o=(t%2?4:9)*n;e.lineTo(r+Math.cos(i)*o,a+Math.sin(i)*o)}e.closePath(),e.fill(),e.stroke()}let[a,o]=t(r.player.pos.x,r.player.pos.z);e.save(),e.translate(a,o),e.rotate(Math.PI-r.player.yaw),e.fillStyle=`#ffffff`,e.strokeStyle=`#1a2a4a`,e.lineWidth=2,e.beginPath(),e.moveTo(0,-9*n),e.lineTo(6*n,7*n),e.lineTo(0,3*n),e.lineTo(-6*n,7*n),e.closePath(),e.fill(),e.stroke(),e.restore()}drawMini(){let e=this.g,t=this.mini,n=512/yd.size,r=e.player.pos;t.save(),t.clearRect(0,0,176,176),t.beginPath(),t.arc(88,88,86,0,6.3),t.clip(),t.fillStyle=`#2c6fb0`,t.fillRect(0,0,176,176),t.drawImage(e.terrain.mapCanvas,(r.x+yd.half-62)*n,(r.z+yd.half-62)*n,124*n,124*n,0,0,176,176);let i=176/124;this.icons(t,(e,t)=>{let n=(e-r.x)*i,a=(t-r.z)*i,o=Math.hypot(n,a);return o>78&&(n*=78/o,a*=78/o),[88+n,88+a]},.8),t.restore(),t.strokeStyle=`rgba(255,255,255,0.85)`,t.lineWidth=2.5,t.beginPath(),t.arc(88,88,86,0,6.3),t.stroke()}drawMap(){let e=this.mapCv;if(!e)return;let t=e.getContext(`2d`),n=e.width;t.drawImage(this.g.terrain.mapCanvas,0,0,n,n),this.icons(t,(e,t)=>[(e+yd.half)/yd.size*n,(t+yd.half)/yd.size*n],1.25),t.textAlign=`center`,t.textBaseline=`middle`,t.lineWidth=4,t.strokeStyle=`rgba(10,20,40,0.85)`,t.fillStyle=`#fff`;let r=this.g.world.items.filter(e=>e.kind===`way`||e.kind===`house`).map(e=>({it:e,x:(e.pos.x+yd.half)/yd.size*n,y:(e.pos.z+yd.half)/yd.size*n,r:e.kind===`house`?13:10})),i=r.map(e=>[e.x-e.r,e.y-e.r,e.x+e.r,e.y+e.r]);for(let e of r){let n=e.it.kind===`house`,r=n?13:15;t.font=`600 ${r}px "Malgun Gothic", "Noto Sans KR", sans-serif`;let a=t.measureText(e.it.label).width+4,o=r+2,s=e.r+a/2+3,c=e.r+o/2+2,l=n?[[s,0],[0,c],[0,-c],[-s,0]]:[[0,-c],[0,c],[-s,0],[s,0]],u=([t,n])=>[e.x+t-a/2,e.y+n-o/2,e.x+t+a/2,e.y+n+o/2],d=l.find(e=>{let t=u(e);return!i.some(e=>t[0]<e[2]&&t[2]>e[0]&&t[1]<e[3]&&t[3]>e[1])})??l[0];i.push(u(d)),t.strokeText(e.it.label,e.x+d[0],e.y+d[1]),t.fillText(e.it.label,e.x+d[0],e.y+d[1])}t.textBaseline=`alphabetic`}show(e){let t=this.g,n=this.menuEl;if(this.menu=e,n.className=e?`on `+e:``,this.hud.style.visibility=e===`start`?`hidden`:`visible`,!e)n.innerHTML=``,this.mapCv=null;else if(e===`start`)n.innerHTML=`<div class="start"><h1>별잿빛 들판</h1><p class="sub">애니메이션풍 오픈 월드 Demo · 여덟 명의 AI 소녀</p><button data-act="begin" class="big">시작하기</button>
        <p class="tip">시작하면 마우스가 시점 회전용으로 잠깁니다. Esc로 메뉴를 열 수 있습니다</p></div>`;else if(e===`pause`){let e=t.quality;n.innerHTML=`<div class="panel"><h2>일시정지</h2>
        <button data-act="resume" class="big">계속하기</button>
        <div class="row"><label>화질</label><div class="seg">${Object.keys($u).map(t=>`<button data-q="${t}" class="${t===e?`sel`:``}">${$u[t].label}</button>`).join(``)}</div></div>
        <div class="row"><label>마우스 감도</label><input type="range" id="sens" min="0.8" max="6" step="0.1" value="${(t.cam.sens*1e3).toFixed(1)}"></div>
        <div class="row"><label>음량</label><input type="range" id="vol" min="0" max="1" step="0.05" value="${t.sfx.volume}"></div>
        <h3>조작법</h3>
        <div class="keys">${[[`W A S D`,`이동`],[`마우스`,`시점 회전 · 휠로 거리 조절`],[`스페이스`,`점프 · 공중에서 한 번 더 누르면 활강 · 등반 중 위로 도약`],[`Shift`,`짧게 누르면 회피(타이밍을 맞추면 완벽 회피) · 길게 누르면 돌진`],[`마우스 좌클릭`,`일반 공격 · 길게 누르면 강공격 · 공중 낙하 공격`],[`E / Q`,`원소 스킬 / 원소 폭발`],[`1 – 8`,`캐릭터 교체`],[`Tab / 휠 버튼`,`대상 고정`],[`F`,`상호작용(거점, 보물상자, 채집, 오두막)`],[`Z`,`달콤 열매를 먹어 생명력 회복`],[`X`,`등반 중 손 떼기`],[`M / C`,`지도 / 캐릭터 패널`]].map(([e,t])=>`<div><kbd>${e}</kbd><span>${t}</span></div>`).join(``)}</div>
        <button data-act="reset" class="warn">저장 데이터를 지우고 처음부터</button></div>`}else e===`map`?(n.innerHTML=`<div class="panel map"><h2>지도 <small>활성화된 거점(파란 마름모)을 클릭하면 순간이동 · 원형 배지는 여덟 AI 회사, 금색 테두리는 방문한 곳 · M으로 닫기</small></h2><canvas id="bigmap" width="640" height="640"></canvas></div>`,this.mapCv=$(`#bigmap`),this.drawMap()):(n.innerHTML=`<div class="panel chars"><h2>파티 <small>카드를 클릭하면 교체 · C로 닫기</small></h2><div class="grid">${t.party.members.map((e,n)=>{let r=vm[e.def.elem],i=e.def.kit;return`<div class="card ${n===t.party.active?`sel`:``} ${e.alive?``:`dead`}" data-char="${n}" style="--c:${e.color}">
          <div class="ch"><div class="av" data-av="${n}"></div><div><b>${e.def.name}</b><span>${e.def.title}</span></div><i>${r.name}</i></div>
          <p class="st">생명력 ${e.maxHp} · 공격력 ${e.atk} · 방어력 ${e.defn}</p><p>${e.def.blurb}</p>
          <p><u>${r.mark}</u> 인장: ${r.markDesc}.<u>${r.burst}</u>：${r.burstDesc}。</p>
          <p><kbd>E</kbd> <b>${i.skill.name}</b>(쿨다운 ${i.skill.cd}초)${i.skill.desc}</p><p><kbd>Q</kbd> <b>${i.burst.name}</b> ${i.burst.desc}</p></div>`}).join(``)}</div>
      <p class="note">속성 반응: 적에게 한 속성의 인장이 남아 있을 때 <b>다른</b> 속성으로 공격하면, 나중에 적용한 속성으로 폭발이 한 번 발동하고 인장은 소모됩니다.</p></div>`,n.querySelectorAll(`[data-av]`).forEach(e=>e.appendChild(this.avatar(t.party.members[+e.dataset.av],52))))}onMenuClick(e){let t=this.g,n=e.target,r=n.closest(`[data-act],[data-q],[data-char]`);if(this.menu===`map`&&n.id===`bigmap`){let r=n.getBoundingClientRect(),i=e,a=(i.clientX-r.left)/r.width*yd.size-yd.half,o=(i.clientY-r.top)/r.height*yd.size-yd.half,s=t.world.items.filter(e=>e.kind===`way`&&e.done).sort((e,t)=>Math.hypot(e.pos.x-a,e.pos.z-o)-Math.hypot(t.pos.x-a,t.pos.z-o))[0];s&&Math.hypot(s.pos.x-a,s.pos.z-o)<26?(t.sfx.waypoint(),t.warp(s.pos.x+1.8,s.pos.z+1.8),t.setMenu(null),this.toast(`${s.label}(으)로 순간이동했습니다`)):t.sfx.deny()}else r&&(t.sfx.ui(),r.dataset.act===`begin`||r.dataset.act===`resume`?t.setMenu(null):r.dataset.act===`reset`?confirm(`저장 데이터를 지우고 처음부터 시작할까요?`)&&(localStorage.removeItem(`xingjin.save`),location.reload()):r.dataset.q?(nd(r.dataset.q),t.save(),location.reload()):r.dataset.char&&t.player.swapTo(+r.dataset.char,!0)&&t.setMenu(null))}onMenuInput(e){let t=e.target;t.id===`sens`&&(this.g.cam.sens=t.value/1e3),t.id===`vol`&&this.g.sfx.setVolume(+t.value),this.g.save()}},y_=`xingjin.save`,b_=class{renderer;scene=new Cn;camera=new ts(55,1,.12,1600);input;sfx=new Qu;quality;q;terrain;col;props;houses;ai;sky;water;grass;fx;party;player;combat;cam;enemies;world;hud;time=0;hitStop=0;slowT=0;playing=!1;fps=60;composer=null;last=performance.now();saveT=0;sizeKey=``;constructor(e){this.renderer=new Iu({antialias:!0,powerPreference:`high-performance`}),this.quality=td(this.renderer.getContext()),this.q=$u[this.quality],this.renderer.shadowMap.enabled=this.q.shadow>0,this.renderer.shadowMap.type=1,this.renderer.toneMapping=7,e.appendChild(this.renderer.domElement),this.input=new Zu(this.renderer.domElement),this.input.allowLock=!location.search.includes(`nolock`),this.terrain=new tf,this.scene.add(this.terrain.mesh),this.col=new af(this.terrain),this.props=new Lf(this.scene,this.terrain,this.col);let t=zf(this.props,this.terrain),n=(e,t,n)=>this.props.reserve(e,t,n);if(this.houses=new pp(this.scene,this.col,n),this.ai=new Np(this.scene,this.terrain,this.col,n),this.sky=new em(this.scene,this.q.shadow),this.water=new rm(this.terrain.colorTex),this.scene.add(this.water.mesh),this.grass=new am(this.scene,this.terrain,this.q.grassNear,this.q.grassFar),this.fx=new _m(this.scene),this.party=new Og(this),this.enemies=new f_(this),this.player=new zg(this),this.combat=new Gg(this),this.cam=new Jg(this),this.world=new qp(this,t),this.props.scatter(),this.hud=new v_(this),this.q.bloom){let e=new Lt(4,4,{type:_,samples:this.q.msaa});this.composer=new Gu(this.renderer,e),this.composer.addPass(new Ku(this.scene,this.camera)),this.composer.addPass(new Ju(new R(4,4),.36,.6,1)),this.composer.addPass(new Xu)}this.load();for(let e=0;e<20;e++)this.player.update(1/60);this.cam.snap(),this.input.onLockChange=e=>{!e&&this.playing&&this.input.allowLock&&this.setMenu(`pause`)},this.renderer.domElement.addEventListener(`mousedown`,()=>{this.playing&&this.input.lock()}),window.addEventListener(`beforeunload`,()=>this.save())}start(){this.last=performance.now(),requestAnimationFrame(this.tick)}setMenu(e){this.hud.show(e),this.playing=e===null,this.input.clearAll(),this.playing?(this.sfx.unlock(),this.input.lock(),this.last=performance.now()):this.input.unlock()}shake(e){this.cam.shake(e)}perfectDodge(){this.slowT=1.3,this.combat.counterT=4,this.party.cur.energy=Math.min(100,this.party.cur.energy+10),this.hud.banner(`완벽 회피 · 반격 피해 증가`,`#bfe9ff`),this.sfx.perfect(),this.fx.ring(this.player.pos,.3,3.2,.45,`#ffffff`)}warp(e,t){this.player.teleport(e,t),this.combat.clear(),this.fx.clear(),this.enemies.calm(),this.hud.fade(.7)}wipe(){let e=this.world.items.filter(e=>e.kind===`way`&&e.done).sort((e,t)=>e.pos.distanceTo(this.player.pos)-t.pos.distanceTo(this.player.pos))[0];this.party.reviveAll(.6),this.player.dead=!1,this.player.stamina=this.player.staminaMax,this.warp(e?e.pos.x+1.8:q.start.x,e?e.pos.z+1.8:q.start.z),this.hud.fade(1.4),this.hud.toast(`파티가 전멸해 가장 가까운 거점에서 재정비했습니다`)}eat(){let e=this.party.cur;this.party.items.berry<=0||e.hp>=e.maxHp||this.player.dead?this.sfx.deny():(this.party.items.berry--,this.combat.heal(.3),this.sfx.pick())}save(){if(this.hud.menu===`start`)return;let e=this.player,t=this.party,n=e.state===`ground`?e.pos:e.safe,r={v:1,pos:[n.x,n.z],yaw:e.yaw,hour:this.sky.hour,level:t.level,exp:t.exp,active:t.active,hp:t.members.map(e=>e.hp),energy:t.members.map(e=>e.energy),items:t.items,stamina:e.staminaMax,world:this.world.serialize(),sens:this.cam.sens,vol:this.sfx.volume};try{localStorage.setItem(y_,JSON.stringify(r))}catch{}}load(){let e=null;try{e=JSON.parse(localStorage.getItem(y_)??`null`)}catch{e=null}let t=this.player,n=this.party;!e||e.v!==1?(t.teleport(q.start.x,q.start.z),t.yaw=Math.PI,this.cam.yaw=0):(n.level=e.level,n.exp=e.exp,n.recalc(!0),n.members.forEach((t,n)=>{t.hp=Math.min(t.maxHp,e.hp?.[n]??t.maxHp),t.alive=t.hp>0,t.energy=e.energy?.[n]??0}),n.members.every(e=>!e.alive)&&n.reviveAll(.6),n.active=n.members[e.active]?.alive?e.active:Math.max(0,n.nextAlive()),n.items={berry:e.items?.berry??2,dust:e.items?.dust??0},t.staminaMax=e.stamina??100,t.stamina=t.staminaMax,this.sky.hour=e.hour??9,this.cam.sens=e.sens??this.cam.sens,this.sfx.volume=e.vol??.5,this.world.restore(e.world),t.teleport(e.pos[0],e.pos[1]),t.yaw=e.yaw??Math.PI,this.cam.yaw=t.yaw+Math.PI,t.swapTo(n.active,!0),t.showActive?.())}resize(){let e=innerWidth,t=innerHeight,n=Math.min(devicePixelRatio||1,this.q.pixelRatio),r=`${e}x${t}x${n}`;r!==this.sizeKey&&e!==0&&t!==0&&(this.sizeKey=r,this.renderer.setPixelRatio(n),this.renderer.setSize(e,t),this.composer?.setPixelRatio(n),this.composer?.setSize(e,t),this.camera.aspect=e/t,this.camera.updateProjectionMatrix())}tick=()=>{requestAnimationFrame(this.tick);let e=performance.now(),t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.fps+=(1/Math.max(t,.001)-this.fps)*.05,this.frame(t,!0)};step(e=1,t=1/60){for(let n=0;n<e;n++)this.frame(t,n===e-1)}frame(e,t){let n=this.input,r=this.hud.menu;if(this.resize(),r===null?n.hit(`KeyM`)?this.setMenu(`map`):n.hit(`KeyC`)?this.setMenu(`chars`):n.hit(`Escape`)&&this.setMenu(`pause`):r!==`start`&&(n.hit(`Escape`)||r===`map`&&n.hit(`KeyM`)||r===`chars`&&n.hit(`KeyC`))&&this.setMenu(null),this.playing){this.time+=e;let t=e;this.hitStop>0&&(this.hitStop-=e,t=e*.06),this.slowT>0&&(this.slowT-=e),this.party.update(t),this.player.update(t),this.combat.update(t),this.enemies.update(t*(this.slowT>0?.22:1)),this.world.update(t),n.hit(`KeyZ`)&&this.eat(),this.fx.update(t),(this.saveT+=e)>15&&(this.saveT=0,this.save())}this.cam.update(e),this.sky.update(this.playing?e:0,this.camera.position,this.player.pos),this.water.update(e,this.sky),this.grass.update(e,this.player.pos,this.player.pos),this.props.update(e),this.houses.update(this.sky.night),this.ai.update(e,this.sky.night,this.player.pos,this.fx),this.fx.setViewport(this.renderer.domElement.height,this.camera.fov),this.hud.update(e),t&&(this.composer?this.composer.render():this.renderer.render(this.scene,this.camera)),n.endFrame()}};setTimeout(()=>{try{let e=new b_(document.getElementById(`app`));window.game=e,location.search.includes(`manual`)||e.start(),document.getElementById(`boot`)?.remove()}catch(e){console.error(e);let t=document.getElementById(`boot-text`);t&&(t.textContent=`시작 실패: `+e.message)}},50);