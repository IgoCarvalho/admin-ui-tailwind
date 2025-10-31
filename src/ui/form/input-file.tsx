"use client";

import { formatBytes } from "@/utils/format-bytes";
import { Trash2Icon, UploadCloudIcon, UserIcon } from "lucide-react";
import {
  ChangeEvent,
  ComponentProps,
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
} from "react";
import { Button } from "../button";

interface InputFileContextType {
  id: string;
  files: File[];
  onFilesSelect: (files: File[]) => void;
}

const InputFileContext = createContext({} as InputFileContextType);

const useFileInput = () => {
  const context = useContext(InputFileContext);
  if (!context) {
    throw new Error("useFileInput must be used within a InputFileContext");
  }
  return context;
};

export function Root(props: ComponentProps<"div">) {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  return (
    <InputFileContext.Provider value={{ id, files, onFilesSelect: setFiles }}>
      <div {...props} />
    </InputFileContext.Provider>
  );
}

export function Trigger(props: ComponentProps<"label">) {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className="group grow cursor-pointer flex flex-col items-center gap-3 rounded-lg border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500"
    >
      <div className="rounded-full border-6 border-zinc-50 bg-zinc-100 p-2 group-hover:border-violet-50 group-hover:bg-violet-100">
        <UploadCloudIcon className="size-5 text-zinc-600 group-hover:text-violet-600" />
      </div>

      <div className="flex flex-col items-center gap-1">
        <span className="text-sm">
          <span className="font-semibold  text-violet-700">
            Click to upload{" "}
          </span>
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
}

export function ImagePreview(props: ComponentProps<"div">) {
  const { files } = useFileInput();

  const previewUrl = useMemo(() => {
    if (files.length === 0) return null;

    return URL.createObjectURL(files[0]);
  }, [files]);

  if (!previewUrl) {
    return (
      <div className="bg-violet-50 flex items-center justify-center size-16 rounded-full">
        <UserIcon className="size-8 text-violet-500" />
      </div>
    );
  }

  return (
    <img
      src={previewUrl}
      alt=""
      className="size-16 rounded-full object-cover"
    />
  );
}

export function Control(props: ComponentProps<"input">) {
  const { id, files, onFilesSelect } = useFileInput();

  function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return;

    const selectedFiles = Array.from(event.target.files);

    if (props.multiple) {
      onFilesSelect([...files, ...selectedFiles]);
      return;
    }

    onFilesSelect(selectedFiles);
  }
  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFileSelect}
      {...props}
    />
  );
}

export function FileList() {
  const { files } = useFileInput();

  return (
    <div className="mt-4 space-y-3">
      {files.map((file) => (
        <div
          key={file.name}
          className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
        >
          <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloudIcon className="size-4" />
          </div>
          <div className="grow min-w-0 flex flex-col items-start gap-1 ">
            <div className="w-full flex flex-col ">
              <span
                className="truncate  text-sm font-medium text-zinc-700"
                title={file.name}
              >
                {file.name}
              </span>
              <span className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div className="h-2 rounded-full w-4/5 bg-violet-600" />
              </div>
              <span className="text-sm font-medium text-zinc-700">80%</span>
            </div>
          </div>

          <Button variant="icon">
            <Trash2Icon className="size-5 text-zinc-500" />
          </Button>
        </div>
      ))}
    </div>
  );
}
