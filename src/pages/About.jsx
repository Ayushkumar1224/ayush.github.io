import { PROFILE_IMAGE } from "../data/personal";

export default function About() {
  return (
    <div className="flex flex-col items-center md:flex-row gap-10">
      <img
        src={PROFILE_IMAGE}
        className="w-52 h-52 rounded-2xl object-cover shadow-lg"
        alt="Ayush Patel"
      />

      <div>
        <h2 className="text-3xl font-bold text-white">About Me</h2>
        <p className="mt-3 text-blue-200 leading-relaxed">
          I'm Ayush Patel, an IT specialist with hands-on experience in
          networking, system administration, cloud fundamentals, security, and
          automation...
        </p>
      </div>
    </div>
  );
}
