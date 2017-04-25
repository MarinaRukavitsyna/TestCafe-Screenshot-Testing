import Rembrandt from 'rembrandt'
import Colors from 'colors'


export default function (screenshotPath, modelPath) {
	const rembrandt = new Rembrandt({
	  imageA: screenshotPath,
	  imageB: modelPath,
	 
	  thresholdType: Rembrandt.THRESHOLD_PERCENT,
	  maxThreshold: 0.01,
	  maxDelta: 20,
	  maxOffset: 0,	 
	  renderComposition: true, // Should Rembrandt render a composition image? 
	  compositionMaskColor: Rembrandt.Color.RED // Color of unmatched pixels 
	})
	 
	// Run the comparison 
    return rembrandt.compare()
	  .then(function (result) {
	  	var difference = 'Difference: ' + (result.threshold * 100).toFixed(2) + '%';

	    if (result.passed) {
	    	console.log(" Images are equal".gray);	    	
	    } else {
	    	console.log("Passed: false".bold.green);
	    	console.log(difference.bold.green);
	    	throw new Error("Images are different".bold.red);
	    }
	  })
}