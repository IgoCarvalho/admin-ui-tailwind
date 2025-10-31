import * as InputFile from "@/ui/form/input-file";
import * as Select from "@/ui/form/select";
import { TextArea } from "@/ui/form/text-area";
import * as Input from "@/ui/input";
import { SettingsTabs } from "@/ui/settings-tabs";
import {
  BoldIcon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
  ListOrderedIcon,
  MailIcon,
} from "lucide-react";

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

            <InputFile.Root className="flex items-start gap-5">
              <InputFile.ImagePreview />
              <InputFile.Trigger />
              <InputFile.Control />
            </InputFile.Root>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label htmlFor="role" className="text-sm font-medium text-zinc-700">
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="Frontend Developer" />
            </Input.Root>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700"
            >
              Country
            </label>

            <Select.Root placeholder="Select a country...">
              <Select.Item value="br">Brazil</Select.Item>
              <Select.Item value="us">United States</Select.Item>
            </Select.Root>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700"
            >
              Timezone
            </label>
            <Select.Root placeholder="Select a timezone...">
              <Select.Item value="pst">
                Pacific Standard Time (UTC-08:00)
              </Select.Item>
              <Select.Item value="sp">
                America São Paulo (UTC-03:00)
              </Select.Item>
            </Select.Root>
          </div>

          <div className="grid grid-cols-(--grid-form) gap-3 pb-5">
            <label htmlFor="bio" className="text-sm font-medium text-zinc-700">
              Bio
              <span className="block mt-0.5 text-sm font-normal text-zinc-500">
                Write a short introduction.
              </span>
            </label>

            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <Select.Root defaultValue="normal">
                  <Select.Item value="normal">Normal Text</Select.Item>
                  <Select.Item value="md">Markdown</Select.Item>
                </Select.Root>

                <div className="flex items-center gap-1">
                  <button className=" p-2 rounded-md hover:bg-zinc-50">
                    <BoldIcon className="size-4 text-zinc-500" />
                  </button>

                  <button className=" p-2 rounded-md hover:bg-zinc-50">
                    <ItalicIcon className="size-4 text-zinc-500" />
                  </button>

                  <button className=" p-2 rounded-md hover:bg-zinc-50">
                    <LinkIcon className="size-4 text-zinc-500" />
                  </button>

                  <button className=" p-2 rounded-md hover:bg-zinc-50">
                    <ListIcon className="size-4 text-zinc-500" />
                  </button>

                  <button className=" p-2 rounded-md hover:bg-zinc-50">
                    <ListOrderedIcon className="size-4 text-zinc-500" />
                  </button>
                </div>
              </div>

              <TextArea id="bio" defaultValue="I'm a Frontend Developer" />
            </div>
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

            <InputFile.Root>
              <InputFile.Trigger />
              <InputFile.FileList />
              <InputFile.Control multiple />
            </InputFile.Root>
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
