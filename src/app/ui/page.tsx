import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="p-5">
      <div>
        <div className="text-xl font-semibold">Buttons</div>

        <div className="space-y-2">
          <div className="text-lg font-medium">Primary</div>

          <div className="space-x-5 items-start flex">
            <Button variant="primary" size="sm">
              Sample sm
            </Button>
            <Button variant="primary" size="md">
              Sample md
            </Button>
            <Button variant="primary" size="lg">
              Sample lg
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-lg font-medium">Secondary</div>

          <div className="space-x-5 items-start flex">
            <Button variant="secondary" size="sm">
              Sample sm
            </Button>
            <Button variant="secondary" size="md">
              Sample md
            </Button>
            <Button variant="secondary" size="lg">
              Sample lg
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <div className="text-lg font-medium">Tertiary</div>

          <div className="space-x-5 items-start flex">
            <Button variant="tertiary" size="sm">
              Sample sm
            </Button>
            <Button variant="tertiary" size="md">
              Sample md
            </Button>
            <Button variant="tertiary" size="lg">
              Sample lg
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
