/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.96.6
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

define(["exports","./Matrix2-4706dd70","./defaultValue-028a8a27","./RuntimeError-a977b8e0","./Transforms-66eda18c","./ComponentDatatype-438cad2a"],function(re,r,q,m,G,O){"use strict";const z={};z.computeDiscriminant=function(e,n,s){if(typeof e!="number")throw new m.DeveloperError("a is a required number.");if(typeof n!="number")throw new m.DeveloperError("b is a required number.");if(typeof s!="number")throw new m.DeveloperError("c is a required number.");return n*n-4*e*s};function te(e,n,s){const t=e+n;return O.CesiumMath.sign(e)!==O.CesiumMath.sign(n)&&Math.abs(t/Math.max(Math.abs(e),Math.abs(n)))<s?0:t}z.computeRealRoots=function(e,n,s){if(typeof e!="number")throw new m.DeveloperError("a is a required number.");if(typeof n!="number")throw new m.DeveloperError("b is a required number.");if(typeof s!="number")throw new m.DeveloperError("c is a required number.");let t;if(e===0)return n===0?[]:[-s/n];if(n===0){if(s===0)return[0,0];const f=Math.abs(s),d=Math.abs(e);if(f<d&&f/d<O.CesiumMath.EPSILON14)return[0,0];if(f>d&&d/f<O.CesiumMath.EPSILON14)return[];if(t=-s/e,t<0)return[];const l=Math.sqrt(t);return[-l,l]}else if(s===0)return t=-n/e,t<0?[t,0]:[0,t];const i=n*n,c=4*e*s,o=te(i,-c,O.CesiumMath.EPSILON14);if(o<0)return[];const a=-.5*te(n,O.CesiumMath.sign(n)*Math.sqrt(o),O.CesiumMath.EPSILON14);return n>0?[a/e,s/a]:[s/a,a/e]};const j={};j.computeDiscriminant=function(e,n,s,t){if(typeof e!="number")throw new m.DeveloperError("a is a required number.");if(typeof n!="number")throw new m.DeveloperError("b is a required number.");if(typeof s!="number")throw new m.DeveloperError("c is a required number.");if(typeof t!="number")throw new m.DeveloperError("d is a required number.");const i=e*e,c=n*n,o=s*s,a=t*t;return 18*e*n*s*t+c*o-27*i*a-4*(e*o*s+c*n*t)};function X(e,n,s,t){const i=e,c=n/3,o=s/3,a=t,f=i*o,d=c*a,l=c*c,h=o*o,g=i*o-l,w=i*a-c*o,u=c*a-h,C=4*g*u-w*w;let D,I;if(C<0){let x,$,F;l*d>=f*h?(x=i,$=g,F=-2*c*g+i*w):(x=a,$=u,F=-a*w+2*o*u);const Ce=-(F<0?-1:1)*Math.abs(x)*Math.sqrt(-C);I=-F+Ce;const ee=I/2,J=ee<0?-Math.pow(-ee,1/3):Math.pow(ee,1/3),ne=I===Ce?-J:-$/J;return D=$<=0?J+ne:-F/(J*J+ne*ne+$),l*d>=f*h?[(D-c)/i]:[-a/(D+o)]}const W=g,U=-2*c*g+i*w,L=u,B=-a*w+2*o*u,E=Math.sqrt(C),y=Math.sqrt(3)/2;let P=Math.abs(Math.atan2(i*E,-U)/3);D=2*Math.sqrt(-W);let v=Math.cos(P);I=D*v;let S=D*(-v/2-y*Math.sin(P));const b=I+S>2*c?I-c:S-c,N=i,R=b/N;P=Math.abs(Math.atan2(a*E,-B)/3),D=2*Math.sqrt(-L),v=Math.cos(P),I=D*v,S=D*(-v/2-y*Math.sin(P));const Y=-a,_=I+S<2*o?I+o:S+o,A=Y/_,ze=N*_,le=-b*_-N*Y,Te=b*Y,Q=(o*le-c*Te)/(-c*le+o*ze);return R<=Q?R<=A?Q<=A?[R,Q,A]:[R,A,Q]:[A,R,Q]:R<=A?[Q,R,A]:Q<=A?[Q,A,R]:[A,Q,R]}j.computeRealRoots=function(e,n,s,t){if(typeof e!="number")throw new m.DeveloperError("a is a required number.");if(typeof n!="number")throw new m.DeveloperError("b is a required number.");if(typeof s!="number")throw new m.DeveloperError("c is a required number.");if(typeof t!="number")throw new m.DeveloperError("d is a required number.");let i,c;if(e===0)return z.computeRealRoots(n,s,t);if(n===0){if(s===0){if(t===0)return[0,0,0];c=-t/e;const o=c<0?-Math.pow(-c,1/3):Math.pow(c,1/3);return[o,o,o]}else if(t===0)return i=z.computeRealRoots(e,0,s),i.Length===0?[0]:[i[0],0,i[1]];return X(e,0,s,t)}else{if(s===0)return t===0?(c=-n/e,c<0?[c,0,0]:[0,0,c]):X(e,n,0,t);if(t===0)return i=z.computeRealRoots(e,n,s),i.length===0?[0]:i[1]<=0?[i[0],i[1],0]:i[0]>=0?[0,i[0],i[1]]:[i[0],0,i[1]]}return X(e,n,s,t)};const M={};M.computeDiscriminant=function(e,n,s,t,i){if(typeof e!="number")throw new m.DeveloperError("a is a required number.");if(typeof n!="number")throw new m.DeveloperError("b is a required number.");if(typeof s!="number")throw new m.DeveloperError("c is a required number.");if(typeof t!="number")throw new m.DeveloperError("d is a required number.");if(typeof i!="number")throw new m.DeveloperError("e is a required number.");const c=e*e,o=c*e,a=n*n,f=a*n,d=s*s,l=d*s,h=t*t,g=h*t,w=i*i,u=w*i;return a*d*h-4*f*g-4*e*l*h+18*e*n*s*g-27*c*h*h+256*o*u+i*(18*f*s*t-4*a*l+16*e*d*d-80*e*n*d*t-6*e*a*h+144*c*s*h)+w*(144*e*a*s-27*a*a-128*c*d-192*c*n*t)};function T(e,n,s,t){const i=e*e,c=n-3*i/8,o=s-n*e/2+i*e/8,a=t-s*e/4+n*i/16-3*i*i/256,f=j.computeRealRoots(1,2*c,c*c-4*a,-o*o);if(f.length>0){const d=-e/4,l=f[f.length-1];if(Math.abs(l)<O.CesiumMath.EPSILON14){const h=z.computeRealRoots(1,c,a);if(h.length===2){const g=h[0],w=h[1];let u;if(g>=0&&w>=0){const C=Math.sqrt(g),D=Math.sqrt(w);return[d-D,d-C,d+C,d+D]}else{if(g>=0&&w<0)return u=Math.sqrt(g),[d-u,d+u];if(g<0&&w>=0)return u=Math.sqrt(w),[d-u,d+u]}}return[]}else if(l>0){const h=Math.sqrt(l),g=(c+l-o/h)/2,w=(c+l+o/h)/2,u=z.computeRealRoots(1,h,g),C=z.computeRealRoots(1,-h,w);return u.length!==0?(u[0]+=d,u[1]+=d,C.length!==0?(C[0]+=d,C[1]+=d,u[1]<=C[0]?[u[0],u[1],C[0],C[1]]:C[1]<=u[0]?[C[0],C[1],u[0],u[1]]:u[0]>=C[0]&&u[1]<=C[1]?[C[0],u[0],u[1],C[1]]:C[0]>=u[0]&&C[1]<=u[1]?[u[0],C[0],C[1],u[1]]:u[0]>C[0]&&u[0]<C[1]?[C[0],u[0],C[1],u[1]]:[u[0],C[0],u[1],C[1]]):u):C.length!==0?(C[0]+=d,C[1]+=d,C):[]}}return[]}function H(e,n,s,t){const i=s*s,c=n*n,o=e*e,a=-2*n,f=s*e+c-4*t,d=o*t-s*n*e+i,l=j.computeRealRoots(1,a,f,d);if(l.length>0){const h=l[0],g=n-h,w=g*g,u=e/2,C=g/2,D=w-4*t,I=w+4*Math.abs(t),W=o-4*h,U=o+4*Math.abs(h);let L,B;if(h<0||D*U<W*I){const N=Math.sqrt(W);L=N/2,B=N===0?0:(e*C-s)/N}else{const N=Math.sqrt(D);L=N===0?0:(e*C-s)/N,B=N/2}let E,y;u===0&&L===0?(E=0,y=0):O.CesiumMath.sign(u)===O.CesiumMath.sign(L)?(E=u+L,y=h/E):(y=u-L,E=h/y);let P,v;C===0&&B===0?(P=0,v=0):O.CesiumMath.sign(C)===O.CesiumMath.sign(B)?(P=C+B,v=t/P):(v=C-B,P=t/v);const S=z.computeRealRoots(1,E,P),b=z.computeRealRoots(1,y,v);if(S.length!==0)return b.length!==0?S[1]<=b[0]?[S[0],S[1],b[0],b[1]]:b[1]<=S[0]?[b[0],b[1],S[0],S[1]]:S[0]>=b[0]&&S[1]<=b[1]?[b[0],S[0],S[1],b[1]]:b[0]>=S[0]&&b[1]<=S[1]?[S[0],b[0],b[1],S[1]]:S[0]>b[0]&&S[0]<b[1]?[b[0],S[0],b[1],S[1]]:[S[0],b[0],S[1],b[1]]:S;if(b.length!==0)return b}return[]}M.computeRealRoots=function(e,n,s,t,i){if(typeof e!="number")throw new m.DeveloperError("a is a required number.");if(typeof n!="number")throw new m.DeveloperError("b is a required number.");if(typeof s!="number")throw new m.DeveloperError("c is a required number.");if(typeof t!="number")throw new m.DeveloperError("d is a required number.");if(typeof i!="number")throw new m.DeveloperError("e is a required number.");if(Math.abs(e)<O.CesiumMath.EPSILON15)return j.computeRealRoots(n,s,t,i);const c=n/e,o=s/e,a=t/e,f=i/e;let d=c<0?1:0;switch(d+=o<0?d+1:d,d+=a<0?d+1:d,d+=f<0?d+1:d,d){case 0:return T(c,o,a,f);case 1:return H(c,o,a,f);case 2:return H(c,o,a,f);case 3:return T(c,o,a,f);case 4:return T(c,o,a,f);case 5:return H(c,o,a,f);case 6:return T(c,o,a,f);case 7:return T(c,o,a,f);case 8:return H(c,o,a,f);case 9:return T(c,o,a,f);case 10:return T(c,o,a,f);case 11:return H(c,o,a,f);case 12:return T(c,o,a,f);case 13:return T(c,o,a,f);case 14:return T(c,o,a,f);case 15:return T(c,o,a,f);default:return}};function k(e,n){n=r.Cartesian3.clone(q.defaultValue(n,r.Cartesian3.ZERO)),r.Cartesian3.equals(n,r.Cartesian3.ZERO)||r.Cartesian3.normalize(n,n),this.origin=r.Cartesian3.clone(q.defaultValue(e,r.Cartesian3.ZERO)),this.direction=n}k.clone=function(e,n){if(!!q.defined(e))return q.defined(n)?(n.origin=r.Cartesian3.clone(e.origin),n.direction=r.Cartesian3.clone(e.direction),n):new k(e.origin,e.direction)},k.getPoint=function(e,n,s){return m.Check.typeOf.object("ray",e),m.Check.typeOf.number("t",n),q.defined(s)||(s=new r.Cartesian3),s=r.Cartesian3.multiplyByScalar(e.direction,n,s),r.Cartesian3.add(e.origin,s,s)};const p={};p.rayPlane=function(e,n,s){if(!q.defined(e))throw new m.DeveloperError("ray is required.");if(!q.defined(n))throw new m.DeveloperError("plane is required.");q.defined(s)||(s=new r.Cartesian3);const t=e.origin,i=e.direction,c=n.normal,o=r.Cartesian3.dot(c,i);if(Math.abs(o)<O.CesiumMath.EPSILON15)return;const a=(-n.distance-r.Cartesian3.dot(c,t))/o;if(!(a<0))return s=r.Cartesian3.multiplyByScalar(i,a,s),r.Cartesian3.add(t,s,s)};const me=new r.Cartesian3,we=new r.Cartesian3,se=new r.Cartesian3,ie=new r.Cartesian3,oe=new r.Cartesian3;p.rayTriangleParametric=function(e,n,s,t,i){if(!q.defined(e))throw new m.DeveloperError("ray is required.");if(!q.defined(n))throw new m.DeveloperError("p0 is required.");if(!q.defined(s))throw new m.DeveloperError("p1 is required.");if(!q.defined(t))throw new m.DeveloperError("p2 is required.");i=q.defaultValue(i,!1);const c=e.origin,o=e.direction,a=r.Cartesian3.subtract(s,n,me),f=r.Cartesian3.subtract(t,n,we),d=r.Cartesian3.cross(o,f,se),l=r.Cartesian3.dot(a,d);let h,g,w,u,C;if(i){if(l<O.CesiumMath.EPSILON6||(h=r.Cartesian3.subtract(c,n,ie),w=r.Cartesian3.dot(h,d),w<0||w>l)||(g=r.Cartesian3.cross(h,a,oe),u=r.Cartesian3.dot(o,g),u<0||w+u>l))return;C=r.Cartesian3.dot(f,g)/l}else{if(Math.abs(l)<O.CesiumMath.EPSILON6)return;const D=1/l;if(h=r.Cartesian3.subtract(c,n,ie),w=r.Cartesian3.dot(h,d)*D,w<0||w>1||(g=r.Cartesian3.cross(h,a,oe),u=r.Cartesian3.dot(o,g)*D,u<0||w+u>1))return;C=r.Cartesian3.dot(f,g)*D}return C},p.rayTriangle=function(e,n,s,t,i,c){const o=p.rayTriangleParametric(e,n,s,t,i);if(!(!q.defined(o)||o<0))return q.defined(c)||(c=new r.Cartesian3),r.Cartesian3.multiplyByScalar(e.direction,o,c),r.Cartesian3.add(e.origin,c,c)};const qe=new k;p.lineSegmentTriangle=function(e,n,s,t,i,c,o){if(!q.defined(e))throw new m.DeveloperError("v0 is required.");if(!q.defined(n))throw new m.DeveloperError("v1 is required.");if(!q.defined(s))throw new m.DeveloperError("p0 is required.");if(!q.defined(t))throw new m.DeveloperError("p1 is required.");if(!q.defined(i))throw new m.DeveloperError("p2 is required.");const a=qe;r.Cartesian3.clone(e,a.origin),r.Cartesian3.subtract(n,e,a.direction),r.Cartesian3.normalize(a.direction,a.direction);const f=p.rayTriangleParametric(a,s,t,i,c);if(!(!q.defined(f)||f<0||f>r.Cartesian3.distance(e,n)))return q.defined(o)||(o=new r.Cartesian3),r.Cartesian3.multiplyByScalar(a.direction,f,o),r.Cartesian3.add(a.origin,o,o)};function ge(e,n,s,t){const i=n*n-4*e*s;if(i<0)return;if(i>0){const o=1/(2*e),a=Math.sqrt(i),f=(-n+a)*o,d=(-n-a)*o;return f<d?(t.root0=f,t.root1=d):(t.root0=d,t.root1=f),t}const c=-n/(2*e);if(c!==0)return t.root0=t.root1=c,t}const Se={root0:0,root1:0};function ce(e,n,s){q.defined(s)||(s=new G.Interval);const t=e.origin,i=e.direction,c=n.center,o=n.radius*n.radius,a=r.Cartesian3.subtract(t,c,se),f=r.Cartesian3.dot(i,i),d=2*r.Cartesian3.dot(i,a),l=r.Cartesian3.magnitudeSquared(a)-o,h=ge(f,d,l,Se);if(!!q.defined(h))return s.start=h.root0,s.stop=h.root1,s}p.raySphere=function(e,n,s){if(!q.defined(e))throw new m.DeveloperError("ray is required.");if(!q.defined(n))throw new m.DeveloperError("sphere is required.");if(s=ce(e,n,s),!(!q.defined(s)||s.stop<0))return s.start=Math.max(s.start,0),s};const be=new k;p.lineSegmentSphere=function(e,n,s,t){if(!q.defined(e))throw new m.DeveloperError("p0 is required.");if(!q.defined(n))throw new m.DeveloperError("p1 is required.");if(!q.defined(s))throw new m.DeveloperError("sphere is required.");const i=be;r.Cartesian3.clone(e,i.origin);const c=r.Cartesian3.subtract(n,e,i.direction),o=r.Cartesian3.magnitude(c);if(r.Cartesian3.normalize(c,c),t=ce(i,s,t),!(!q.defined(t)||t.stop<0||t.start>o))return t.start=Math.max(t.start,0),t.stop=Math.min(t.stop,o),t};const ve=new r.Cartesian3,Oe=new r.Cartesian3;p.rayEllipsoid=function(e,n){if(!q.defined(e))throw new m.DeveloperError("ray is required.");if(!q.defined(n))throw new m.DeveloperError("ellipsoid is required.");const s=n.oneOverRadii,t=r.Cartesian3.multiplyComponents(s,e.origin,ve),i=r.Cartesian3.multiplyComponents(s,e.direction,Oe),c=r.Cartesian3.magnitudeSquared(t),o=r.Cartesian3.dot(t,i);let a,f,d,l,h;if(c>1){if(o>=0)return;const g=o*o;if(a=c-1,f=r.Cartesian3.magnitudeSquared(i),d=f*a,g<d)return;if(g>d){l=o*o-d,h=-o+Math.sqrt(l);const u=h/f,C=a/h;return u<C?new G.Interval(u,C):{start:C,stop:u}}const w=Math.sqrt(a/f);return new G.Interval(w,w)}else if(c<1)return a=c-1,f=r.Cartesian3.magnitudeSquared(i),d=f*a,l=o*o-d,h=-o+Math.sqrt(l),new G.Interval(0,h/f);if(o<0)return f=r.Cartesian3.magnitudeSquared(i),new G.Interval(0,-o/f)};function Z(e,n,s){const t=e+n;return O.CesiumMath.sign(e)!==O.CesiumMath.sign(n)&&Math.abs(t/Math.max(Math.abs(e),Math.abs(n)))<s?0:t}function pe(e,n,s,t,i){const c=t*t,o=i*i,a=(e[r.Matrix3.COLUMN1ROW1]-e[r.Matrix3.COLUMN2ROW2])*o,f=i*(t*Z(e[r.Matrix3.COLUMN1ROW0],e[r.Matrix3.COLUMN0ROW1],O.CesiumMath.EPSILON15)+n.y),d=e[r.Matrix3.COLUMN0ROW0]*c+e[r.Matrix3.COLUMN2ROW2]*o+t*n.x+s,l=o*Z(e[r.Matrix3.COLUMN2ROW1],e[r.Matrix3.COLUMN1ROW2],O.CesiumMath.EPSILON15),h=i*(t*Z(e[r.Matrix3.COLUMN2ROW0],e[r.Matrix3.COLUMN0ROW2])+n.z);let g;const w=[];if(h===0&&l===0){if(g=z.computeRealRoots(a,f,d),g.length===0)return w;const P=g[0],v=Math.sqrt(Math.max(1-P*P,0));if(w.push(new r.Cartesian3(t,i*P,i*-v)),w.push(new r.Cartesian3(t,i*P,i*v)),g.length===2){const S=g[1],b=Math.sqrt(Math.max(1-S*S,0));w.push(new r.Cartesian3(t,i*S,i*-b)),w.push(new r.Cartesian3(t,i*S,i*b))}return w}const u=h*h,C=l*l,D=a*a,I=h*l,W=D+C,U=2*(f*a+I),L=2*d*a+f*f-C+u,B=2*(d*f-I),E=d*d-u;if(W===0&&U===0&&L===0&&B===0)return w;g=M.computeRealRoots(W,U,L,B,E);const y=g.length;if(y===0)return w;for(let P=0;P<y;++P){const v=g[P],S=v*v,b=Math.max(1-S,0),N=Math.sqrt(b);let R;O.CesiumMath.sign(a)===O.CesiumMath.sign(d)?R=Z(a*S+d,f*v,O.CesiumMath.EPSILON12):O.CesiumMath.sign(d)===O.CesiumMath.sign(f*v)?R=Z(a*S,f*v+d,O.CesiumMath.EPSILON12):R=Z(a*S+f*v,d,O.CesiumMath.EPSILON12);const Y=Z(l*v,h,O.CesiumMath.EPSILON15),_=R*Y;_<0?w.push(new r.Cartesian3(t,i*v,i*N)):_>0?w.push(new r.Cartesian3(t,i*v,i*-N)):N!==0?(w.push(new r.Cartesian3(t,i*v,i*-N)),w.push(new r.Cartesian3(t,i*v,i*N)),++P):w.push(new r.Cartesian3(t,i*v,i*N))}return w}const V=new r.Cartesian3,ae=new r.Cartesian3,fe=new r.Cartesian3,K=new r.Cartesian3,Pe=new r.Cartesian3,De=new r.Matrix3,ye=new r.Matrix3,Ne=new r.Matrix3,Le=new r.Matrix3,Ee=new r.Matrix3,de=new r.Matrix3,ue=new r.Matrix3,he=new r.Cartesian3,Ie=new r.Cartesian3,Be=new r.Cartographic;p.grazingAltitudeLocation=function(e,n){if(!q.defined(e))throw new m.DeveloperError("ray is required.");if(!q.defined(n))throw new m.DeveloperError("ellipsoid is required.");const s=e.origin,t=e.direction;if(!r.Cartesian3.equals(s,r.Cartesian3.ZERO)){const E=n.geodeticSurfaceNormal(s,V);if(r.Cartesian3.dot(t,E)>=0)return s}const i=q.defined(this.rayEllipsoid(e,n)),c=n.transformPositionToScaledSpace(t,V),o=r.Cartesian3.normalize(c,c),a=r.Cartesian3.mostOrthogonalAxis(c,K),f=r.Cartesian3.normalize(r.Cartesian3.cross(a,o,ae),ae),d=r.Cartesian3.normalize(r.Cartesian3.cross(o,f,fe),fe),l=De;l[0]=o.x,l[1]=o.y,l[2]=o.z,l[3]=f.x,l[4]=f.y,l[5]=f.z,l[6]=d.x,l[7]=d.y,l[8]=d.z;const h=r.Matrix3.transpose(l,ye),g=r.Matrix3.fromScale(n.radii,Ne),w=r.Matrix3.fromScale(n.oneOverRadii,Le),u=Ee;u[0]=0,u[1]=-t.z,u[2]=t.y,u[3]=t.z,u[4]=0,u[5]=-t.x,u[6]=-t.y,u[7]=t.x,u[8]=0;const C=r.Matrix3.multiply(r.Matrix3.multiply(h,w,de),u,de),D=r.Matrix3.multiply(r.Matrix3.multiply(C,g,ue),l,ue),I=r.Matrix3.multiplyByVector(C,s,Pe),W=pe(D,r.Cartesian3.negate(I,V),0,0,1);let U,L;const B=W.length;if(B>0){let E=r.Cartesian3.clone(r.Cartesian3.ZERO,Ie),y=Number.NEGATIVE_INFINITY;for(let v=0;v<B;++v){U=r.Matrix3.multiplyByVector(g,r.Matrix3.multiplyByVector(l,W[v],he),he);const S=r.Cartesian3.normalize(r.Cartesian3.subtract(U,s,K),K),b=r.Cartesian3.dot(S,t);b>y&&(y=b,E=r.Cartesian3.clone(U,E))}const P=n.cartesianToCartographic(E,Be);return y=O.CesiumMath.clamp(y,0,1),L=r.Cartesian3.magnitude(r.Cartesian3.subtract(E,s,K))*Math.sqrt(1-y*y),L=i?-L:L,P.height=L,n.cartographicToCartesian(P,new r.Cartesian3)}};const Re=new r.Cartesian3;p.lineSegmentPlane=function(e,n,s,t){if(!q.defined(e))throw new m.DeveloperError("endPoint0 is required.");if(!q.defined(n))throw new m.DeveloperError("endPoint1 is required.");if(!q.defined(s))throw new m.DeveloperError("plane is required.");q.defined(t)||(t=new r.Cartesian3);const i=r.Cartesian3.subtract(n,e,Re),c=s.normal,o=r.Cartesian3.dot(c,i);if(Math.abs(o)<O.CesiumMath.EPSILON6)return;const a=r.Cartesian3.dot(c,e),f=-(s.distance+a)/o;if(!(f<0||f>1))return r.Cartesian3.multiplyByScalar(i,f,t),r.Cartesian3.add(e,t,t),t},p.trianglePlaneIntersection=function(e,n,s,t){if(!q.defined(e)||!q.defined(n)||!q.defined(s)||!q.defined(t))throw new m.DeveloperError("p0, p1, p2, and plane are required.");const i=t.normal,c=t.distance,o=r.Cartesian3.dot(i,e)+c<0,a=r.Cartesian3.dot(i,n)+c<0,f=r.Cartesian3.dot(i,s)+c<0;let d=0;d+=o?1:0,d+=a?1:0,d+=f?1:0;let l,h;if((d===1||d===2)&&(l=new r.Cartesian3,h=new r.Cartesian3),d===1){if(o)return p.lineSegmentPlane(e,n,t,l),p.lineSegmentPlane(e,s,t,h),{positions:[e,n,s,l,h],indices:[0,3,4,1,2,4,1,4,3]};if(a)return p.lineSegmentPlane(n,s,t,l),p.lineSegmentPlane(n,e,t,h),{positions:[e,n,s,l,h],indices:[1,3,4,2,0,4,2,4,3]};if(f)return p.lineSegmentPlane(s,e,t,l),p.lineSegmentPlane(s,n,t,h),{positions:[e,n,s,l,h],indices:[2,3,4,0,1,4,0,4,3]}}else if(d===2)if(o)if(a){if(!f)return p.lineSegmentPlane(e,s,t,l),p.lineSegmentPlane(n,s,t,h),{positions:[e,n,s,l,h],indices:[0,1,4,0,4,3,2,3,4]}}else return p.lineSegmentPlane(s,n,t,l),p.lineSegmentPlane(e,n,t,h),{positions:[e,n,s,l,h],indices:[2,0,4,2,4,3,1,3,4]};else return p.lineSegmentPlane(n,e,t,l),p.lineSegmentPlane(s,e,t,h),{positions:[e,n,s,l,h],indices:[1,2,4,1,4,3,0,3,4]}},re.IntersectionTests=p,re.Ray=k});
