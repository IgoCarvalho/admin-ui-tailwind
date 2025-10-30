import { Input } from "@/ui/input";
import { SettingsTabs } from "@/ui/settings-tabs";
import { MailIcon } from "lucide-react";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col ">
        <div className="flex justify-between items-center pb-5 border-b border-zinc-200">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
            <span className="text-sm text-zinc-500">
              Update your photo and personal details here.
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border bg-violet-600 text-white hover:bg-violet-700"
            >
              save
            </button>
          </div>
        </div>

        <form
          id="settings"
          action=""
          className="mt-6 flex flex-col gap-5 w-full divide-y divide-zinc-300"
        >
          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label
              htmlFor="first-name"
              className="text-sm font-medium text-zinc-700"
            >
              Name
            </label>
            <div className="grid grid-cols-2 gap-6 ">
              <Input.Root>
                <Input.Control
                  id="first-name"
                  name="first-name"
                  defaultValue="Igo"
                />
              </Input.Root>
              <Input.Root>
                <Input.Control defaultValue="Carvalho" />
              </Input.Root>
            </div>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <MailIcon className="size-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="igocarvalho@me.com"
              />
            </Input.Root>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700"
            >
              Your photo
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                This will be displayed on your profile.
              </span>
            </label>

            <div></div>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <div></div>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div></div>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label
              htmlFor="projects"
              className="text-sm font-medium text-zinc-700"
            >
              Portfolio projects
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Share a few snippets of your work.
              </span>
            </label>

            <div></div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <button
              type="button"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border border-zinc-300 text-zinc-700 hover:bg-zinc-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-lg px-4 py-2 text-sm font-semibold shadow-sm border bg-violet-600 text-white hover:bg-violet-700"
            >
              save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
