'use client'
import { useState, useEffect, useRef } from 'react';

export default function TryItNow() {
  const [recording, setRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  const handleStartRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then(stream => {
        const recorder = new MediaRecorder(stream);
        const audioContext = new AudioContext();
        const source = audioContext.createMediaStreamSource(stream);
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        source.connect(analyser);
        analyserRef.current = analyser;
        audioContextRef.current = audioContext;

        setMediaRecorder(recorder);
        recorder.start();
        setRecording(true);
        recorder.ondataavailable = event => {
          setAudioChunks(prev => [...prev, event.data]);
        };
      })
      .catch(error => console.error('Error accessing microphone:', error));
  };

  const handleStopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop();
      setRecording(false);

      mediaRecorder.onstop = () => {
        const blob = new Blob(audioChunks, { type: 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setAudioChunks([]); // Clear chunks after creating the URL
        if (audioContextRef.current) {
          audioContextRef.current.close();
        }
      };
    }
  };

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setAudioUrl(url);
    }
  };

  const drawVisualization = () => {
    if (!analyserRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const canvasCtx = canvas.getContext('2d');
    const analyser = analyserRef.current;
    const bufferLength = analyser.fftSize;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      if (!canvasCtx) return;
      analyser.getByteTimeDomainData(dataArray);
      canvasCtx.fillStyle = 'rgb(200, 200, 200)';
      canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

      canvasCtx.lineWidth = 2;
      canvasCtx.strokeStyle = 'rgb(0, 0, 0)';

      canvasCtx.beginPath();
      const sliceWidth = (canvas.width * 1.0) / bufferLength;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const v = dataArray[i] / 128.0;
        const y = (v * canvas.height) / 2;

        if (i === 0) {
          canvasCtx.moveTo(x, y);
        } else {
          canvasCtx.lineTo(x, y);
        }

        x += sliceWidth;
      }

      canvasCtx.lineTo(canvas.width, canvas.height / 2);
      canvasCtx.stroke();

      requestAnimationFrame(draw);
    };

    draw();
  };

  useEffect(() => {
    if (recording) {
      drawVisualization();
    }
  }, [recording]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Try It Now</h1>
      <canvas ref={canvasRef} width={600} height={200} className="border border-gray-500 mb-4"></canvas>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <button
            onMouseDown={handleStartRecording}
            onMouseUp={handleStopRecording}
            className="bg-primary text-foreground px-4 py-2 rounded"
          >
            {recording ? 'Recording...' : 'Record Now'}
          </button>
          {audioUrl && <audio src={audioUrl} controls className="mt-4" />}
        </div>
        <div className="flex flex-col items-center">
          <input
            type="file"
            accept="audio/*"
            onChange={handleUpload}
            className="hidden"
            id="upload"
          />
          <label
            htmlFor="upload"
            className="bg-secondary text-foreground px-4 py-2 rounded cursor-pointer"
          >
            Upload Audio
          </label>
          {audioUrl && <audio src={audioUrl} controls className="mt-4" />}
        </div>
      </div>
    </div>
  );
}
