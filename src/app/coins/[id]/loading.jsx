import BackButton from "@/components/back-button";

export default function loading() {
  return (
    <main className="min-h-screen w-full flex items-center py-20 justify-center">
      <div className="flex flex-col p-8 bg-white/5 rounded-xl animate-pulse">
        <BackButton />
        <div className="h-10 w-40 bg-white/20 rounded " />
        <div className="h-6 w-24 bg-white/15 rounded mt-3" />

        <div className="grid gap-5 grid-cols-2 max-w-80 mt-10">
          <div className="bg-green-600/20 rounded-xl h-20 p-3" />
          <div className="bg-red-700/20 rounded-xl h-20 p-3" />
        </div>

        <div className="bg-white/10 mt-10 p-4 rounded-xl max-w-2xl space-y-2">
          <div className="h-4 w-24 bg-white/20 rounded" />
          <div className="h-4 w-full bg-white/10 rounded" />
          <div className="h-4 w-full bg-white/10 rounded" />
          <div className="h-4 w-5/6 bg-white/10 rounded" />
        </div>

        <div className="h-4 w-40 mt-10 bg-white/15 rounded" />

        <div className="flex flex-wrap gap-4 mt-4">
          {Array.from({ length: 7 }).map((_, i) => (
            <div key={i} className="w-28 h-16 rounded-xl bg-white/10" />
          ))}
        </div>
      </div>
    </main>
  );
}
