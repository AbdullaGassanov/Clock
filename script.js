const clock = function () {
	const now = new Date();
	const canvas = document.querySelector("#canvas");
	const ctx = canvas.getContext("2d");

	// Setup
	ctx.save(); // save default state
	ctx.clearRect(0, 0, 500, 500);
	ctx.translate(250, 250); // Put 0,0 in the middle
	ctx.rotate(-Math.PI / 2); // Rotate clock -90deg

	// Set default styles
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#f4f4f4";
	ctx.lineWidth = 5;
	ctx.lineCap = "round";

	// Draw clock face/border
	ctx.save();
	ctx.beginPath();
	ctx.lineWidth = 14;
	ctx.strokeStyke = "#800000";
	ctx.arc(0, 0, 142, 0, Math.PI * 2, true);
	ctx.stroke();
	ctx.fill();
	ctx.restore();

	// Draw hour lines
	ctx.save();

	for (let i = 0; i < 12; i++) {
		ctx.beginPath();
		ctx.rotate(Math.PI / 6);
		ctx.moveTo(100, 0);
		ctx.lineTo(120, 0);
		ctx.stroke();
	}

	ctx.restore();

	// Draw minutes lines
	ctx.save();

	ctx.lineWidth = 4;

	for (let i = 0; i < 60; i++) {
		if (i % 5 !== 0) {
			ctx.beginPath();
			ctx.moveTo(117, 0);
			ctx.lineTo(120, 0);
			ctx.stroke();
		}

		ctx.rotate(Math.PI / 30);
	}

	ctx.restore();

	// get current time
	const hr = now.getHours() % 12;
	const min = now.getMinutes();
	const sec = now.getSeconds();

	// Draw hour hand
	ctx.save();
	ctx.rotate(
		(Math.PI / 6) * hr + (Math.PI / 360) * min + (Math.PI / 21600) * sec
	);
	ctx.strokeStyle = "#800000";
	ctx.lineWidth = 14;
	ctx.beginPath();
	ctx.moveTo(-20, 0);
	ctx.lineTo(80, 0);
	ctx.stroke();
	ctx.restore();

	// Draw min hand
	ctx.save();
	ctx.rotate((Math.PI / 30) * min + (Math.PI / 1800) * sec);
	ctx.strokeStyle = "#800000";
	ctx.lineWidth = 10;
	ctx.beginPath();
	ctx.moveTo(-28, 0);
	ctx.lineTo(112, 0);
	ctx.stroke();
	ctx.restore();

	// Draw sec hand
	ctx.save();
	ctx.rotate((sec * Math.PI) / 30);
	ctx.strokeStyle = "#FF7F50";
	ctx.fillStyle = "#FF7F50";
	ctx.lineWidth = 6;
	ctx.beginPath();
	ctx.moveTo(-30, 0);
	ctx.lineTo(100, 0);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(0, 0, 10, 0, Math.PI * 2, true);
	ctx.fill();
	ctx.restore();

	ctx.restore(); // restire default state
	requestAnimationFrame(clock);
};

requestAnimationFrame(clock);
