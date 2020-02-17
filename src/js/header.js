import Particles from 'particlesjs'

export default function initHeader() {
  console.log('Particles: ', Particles);

  Particles.init({
    selector: '.particles-background',
    color: ['3c4245', '5f6769', '719192', 'dfcdc3'],
    connectParticles: true
  });
}
