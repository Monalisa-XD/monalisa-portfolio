import {
  FaAndroid,
  FaUniversity,
  FaCalendarAlt,
  FaCheckCircle,
  FaCode,
} from "react-icons/fa";

const SummerTraining = () => {
  const training = {
    title: "Android App Development Using Java",
    institute: "NIST University",
    duration: "July 2025",
    points: [
      "Developed multiple Android applications using Java.",
      "Built projects including Calculator Application, Calendar Application, and Firebase Authentication Login System.",
      "Implemented Voice Recording and Video Recording functionalities using Android Media Recorder APIs.",
      "Worked with Android Studio, Activities, Layouts, Intents, and Firebase Authentication.",
      "Strengthened mobile application development and problem-solving skills through hands-on project implementation.",
    ],
  };

  return (
    <section
      id="training"
      className="relative overflow-hidden bg-[#050816] py-24 sm:py-32"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[160px] rounded-full" />

      <div className="absolute top-[20%] right-0 w-[450px] h-[450px] bg-violet-500/20 blur-[160px] rounded-full" />

      <div className="absolute bottom-0 left-[35%] w-[450px] h-[450px] bg-fuchsia-500/20 blur-[160px] rounded-full" />

      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-green-400/10 blur-[140px] rounded-full" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-500 bg-clip-text text-transparent">
            Summer Training
          </h2>

          <p className="mt-5 text-gray-500 text-lg">
            Hands-on Learning & Practical Development
          </p>

          <div className="w-40 h-[5px] mx-auto mt-8 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 shadow-[0_0_35px_rgba(139,92,246,0.5)]" />
        </div>

        {/* Main Card */}
        <div className="max-w-5xl mx-auto">
          <div className="group relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-3xl p-6 sm:p-10 hover:border-cyan-400/30 hover:-translate-y-2 hover:shadow-[0_25px_90px_rgba(139,92,246,0.25)] transition-all duration-700">

            {/* Glow Layer */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 transition-all duration-700" />

            {/* Shine Effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-all duration-[1800ms] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="relative z-10">
              {/* Title */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 mb-10">

                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-green-400 via-cyan-400 to-violet-500 flex items-center justify-center text-white text-3xl shadow-[0_0_35px_rgba(61,220,132,0.4)]">
                  <FaAndroid />
                </div>

                <div>
                  <h3 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-green-400 via-cyan-400 to-violet-500 bg-clip-text text-transparent">
                    {training.title}
                  </h3>
                </div>

              </div>

              {/* Info Badges */}
              <div className="flex flex-wrap gap-4 mb-10">

                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <FaUniversity className="text-cyan-400" />
                  <span className="text-white font-medium">
                    {training.institute}
                  </span>
                </div>

                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                  <FaCalendarAlt className="text-fuchsia-400" />
                  <span className="text-white font-medium">
                    {training.duration}
                  </span>
                </div>

              </div>

              {/* Highlights */}
              <div className="space-y-5">

                {training.points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 rounded-2xl bg-[#0B1224]/50 border border-white/5 p-4 hover:border-cyan-400/20 transition-all duration-300"
                  >
                    <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />

                    <p className="text-gray-300 leading-7">
                      {point}
                    </p>
                  </div>
                ))}

              </div>

              {/* Completion Badge */}
              <div className="mt-10 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/10 via-violet-500/10 to-fuchsia-500/10 border border-cyan-400/20">

                <FaCode className="text-green-400" />

                <span className="text-cyan-300 font-medium">
                  Successfully Completed Summer Training
                </span>

              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummerTraining;