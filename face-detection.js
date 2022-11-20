const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
const tracker = new tracking.ObjectTracker('face');

tracker.setInitialScale(4);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);
tracking.track('#video', tracker, { camera: true });
tracker.on('track', (event) => {
    debuggerPanel("face-detection");
    if (event.data.length > 0) people = true;
    else people = false;
});