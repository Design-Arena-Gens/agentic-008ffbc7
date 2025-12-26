'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  Video,
  Image as ImageIcon,
  Mic,
  Settings,
  Play,
  Download,
  Share2,
  Loader2,
  Film,
  Wand2
} from 'lucide-react';

export default function Home() {
  const [prompt, setPrompt] = useState('');
  const [selectedModel, setSelectedModel] = useState('veo-3.1');
  const [videoMode, setVideoMode] = useState<'text-to-video' | 'image-to-video'>('text-to-video');
  const [voiceType, setVoiceType] = useState('auto');
  const [videoLength, setVideoLength] = useState(3);
  const [style, setStyle] = useState('cinematic');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);

  const models = [
    { id: 'veo-3.1', name: 'Veo 3.1', description: 'Latest Google AI model' },
    { id: 'kling-2.5-turbo', name: 'Kling 2.5 Turbo', description: 'Fast generation' },
    { id: 'kling-2.6-pro', name: 'Kling 2.6 Pro', description: 'Highest quality' },
  ];

  const voiceOptions = [
    { id: 'auto', name: 'Auto (Mood Based)', icon: Wand2 },
    { id: 'male', name: 'Male Voice', icon: Mic },
    { id: 'female', name: 'Female Voice', icon: Mic },
    { id: 'deep', name: 'Deep Voice', icon: Mic },
    { id: 'horror', name: 'Horror Voice', icon: Mic },
  ];

  const styles = [
    'Cinematic',
    'Horror',
    'Emotional',
    'Trailer',
    'Documentary',
    'Reel',
    'Epic',
    'Anime',
    'Realistic',
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setIsGenerating(true);
    setProgress(0);

    // Simulate video generation process
    const stages = [
      { progress: 15, message: 'Analyzing prompt...' },
      { progress: 30, message: 'Generating images...' },
      { progress: 50, message: 'Creating video frames...' },
      { progress: 70, message: 'Adding voice & music...' },
      { progress: 85, message: 'Applying transitions...' },
      { progress: 100, message: 'Finalizing video...' },
    ];

    for (const stage of stages) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setProgress(stage.progress);
    }

    // Simulate generated video
    setGeneratedVideo('/api/placeholder-video');
    setIsGenerating(false);
    setShowPreview(true);
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Header */}
        <motion.header
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          className="p-6 glass border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center">
                <Film className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold gradient-text">AI Video Generator</h1>
            </div>
            <button className="glass px-6 py-2 rounded-full hover:glass-strong transition-all">
              <Settings className="w-5 h-5 inline mr-2" />
              Settings
            </button>
          </div>
        </motion.header>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-7xl mx-auto px-6 py-12"
        >
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Create <span className="gradient-text">Cinematic</span>
              <br />Videos with AI
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-400 max-w-2xl mx-auto"
            >
              Transform your ideas into stunning 4K videos with AI-powered generation,
              automatic editing, and professional voice synthesis
            </motion.p>
          </div>

          {/* Main Generator Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="glass-strong rounded-3xl p-8 mb-8 neon-glow"
          >
            {/* Mode Selection */}
            <div className="flex gap-4 mb-6">
              <button
                onClick={() => setVideoMode('text-to-video')}
                className={`flex-1 py-4 rounded-xl transition-all ${
                  videoMode === 'text-to-video'
                    ? 'gradient-bg text-white'
                    : 'glass hover:glass-strong'
                }`}
              >
                <Video className="w-6 h-6 inline mr-2" />
                Text to Video
              </button>
              <button
                onClick={() => setVideoMode('image-to-video')}
                className={`flex-1 py-4 rounded-xl transition-all ${
                  videoMode === 'image-to-video'
                    ? 'gradient-bg text-white'
                    : 'glass hover:glass-strong'
                }`}
              >
                <ImageIcon className="w-6 h-6 inline mr-2" />
                Image to Video
              </button>
            </div>

            {/* Prompt Input */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3 text-gray-300">
                <Sparkles className="w-4 h-4 inline mr-2" />
                Your Story / Idea
              </label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe your video... e.g., 'A cinematic horror story about a haunted mansion on a stormy night, with eerie music and dramatic lighting'"
                className="w-full h-32 bg-black/40 border border-white/20 rounded-xl p-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none"
              />
            </div>

            {/* AI Model Selection */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3 text-gray-300">
                AI Model
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {models.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model.id)}
                    className={`p-4 rounded-xl text-left transition-all ${
                      selectedModel === model.id
                        ? 'gradient-bg text-white'
                        : 'glass hover:glass-strong'
                    }`}
                  >
                    <div className="font-semibold mb-1">{model.name}</div>
                    <div className={`text-sm ${
                      selectedModel === model.id ? 'text-white/80' : 'text-gray-400'
                    }`}>
                      {model.description}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Voice & Style Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Voice Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  <Mic className="w-4 h-4 inline mr-2" />
                  Voice Type
                </label>
                <select
                  value={voiceType}
                  onChange={(e) => setVoiceType(e.target.value)}
                  className="w-full bg-black/40 border border-white/20 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all"
                >
                  {voiceOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Style Selection */}
              <div>
                <label className="block text-sm font-medium mb-3 text-gray-300">
                  Video Style
                </label>
                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full bg-black/40 border border-white/20 rounded-xl p-4 text-white focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition-all"
                >
                  {styles.map((s) => (
                    <option key={s} value={s.toLowerCase()}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Video Length Slider */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-3 text-gray-300">
                Video Length: {videoLength} minute{videoLength > 1 ? 's' : ''}
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={videoLength}
                  onChange={(e) => setVideoLength(parseInt(e.target.value))}
                  className="flex-1 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex gap-2">
                  {[1, 3, 5, 10].map((len) => (
                    <button
                      key={len}
                      onClick={() => setVideoLength(len)}
                      className={`px-3 py-1 rounded-lg text-sm transition-all ${
                        videoLength === len
                          ? 'bg-cyan-500 text-white'
                          : 'glass hover:glass-strong'
                      }`}
                    >
                      {len}m
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quality Info */}
            <div className="glass rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold">Premium Quality Output</div>
                    <div className="text-sm text-gray-400">4K Ultra HD • High Bitrate • Cinematic Motion</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-5 rounded-xl font-semibold text-lg gradient-bg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="w-6 h-6 animate-spin" />
                  Generating... {progress}%
                </>
              ) : (
                <>
                  <Play className="w-6 h-6" />
                  Generate Video
                </>
              )}
            </button>
          </motion.div>

          {/* Progress Bar */}
          <AnimatePresence>
            {isGenerating && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="glass-strong rounded-2xl p-6 mb-8"
              >
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-300">Processing your video...</span>
                    <span className="text-cyan-400 font-semibold">{progress}%</span>
                  </div>
                  <div className="h-3 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      className="h-full gradient-bg"
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-400">
                  <Loader2 className="w-4 h-4 animate-spin text-cyan-400" />
                  <span>
                    {progress < 20 && 'Analyzing your prompt and generating storyboard...'}
                    {progress >= 20 && progress < 40 && 'Creating high-quality images with consistent characters...'}
                    {progress >= 40 && progress < 60 && 'Converting images to smooth video frames...'}
                    {progress >= 60 && progress < 80 && 'Adding AI-generated voice and background music...'}
                    {progress >= 80 && progress < 95 && 'Applying professional transitions and effects...'}
                    {progress >= 95 && 'Finalizing your 4K masterpiece...'}
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12"
          >
            {[
              {
                icon: Sparkles,
                title: 'Auto Image Generation',
                description: 'Nano Banana Pro style consistent character generation',
                color: 'from-cyan-500 to-blue-500'
              },
              {
                icon: Mic,
                title: 'Smart Voice Synthesis',
                description: '11 Labs inspired auto mood-based voice generation',
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: Film,
                title: 'Auto Editing',
                description: 'CapCut Pro logic with beat sync and transitions',
                color: 'from-pink-500 to-rose-500'
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                className="glass rounded-2xl p-6 hover:glass-strong transition-all"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Preview Modal */}
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowPreview(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong rounded-3xl p-8 max-w-4xl w-full neon-glow-purple"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold gradient-text">Your Video is Ready! 🎬</h3>
                <button
                  onClick={() => setShowPreview(false)}
                  className="w-10 h-10 rounded-full glass hover:glass-strong transition-all flex items-center justify-center"
                >
                  ✕
                </button>
              </div>

              {/* Video Preview Placeholder */}
              <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl mb-6 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 animated-gradient opacity-30"></div>
                <div className="relative z-10 text-center">
                  <Play className="w-20 h-20 mx-auto mb-4 text-white/80" />
                  <p className="text-xl text-white/80">Video Preview</p>
                  <p className="text-sm text-white/60 mt-2">4K • {videoLength} min • {style}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button className="flex-1 py-4 rounded-xl gradient-bg hover:opacity-90 transition-all font-semibold flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" />
                  Download Video
                </button>
                <button className="flex-1 py-4 rounded-xl glass hover:glass-strong transition-all font-semibold flex items-center justify-center gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </button>
              </div>

              {/* Video Info */}
              <div className="mt-6 glass rounded-xl p-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold gradient-text">{videoLength}m</div>
                    <div className="text-sm text-gray-400">Duration</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">4K</div>
                    <div className="text-sm text-gray-400">Quality</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">{selectedModel.toUpperCase()}</div>
                    <div className="text-sm text-gray-400">Model</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">{style}</div>
                    <div className="text-sm text-gray-400">Style</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
