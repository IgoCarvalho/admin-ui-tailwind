"use client";

import { formatBytes } from "@/utils/format-bytes";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import {
  CheckCircle2Icon,
  Trash2Icon,
  UploadCloudIcon,
  UserIcon,
} from "lucide-react";
import {
  ChangeEvent,
  ComponentProps,
  createContext,
  useContext,
  useId,
  useMemo,
  useState,
} from "react";
import { tv, VariantProps } from "tailwind-variants";
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
  const [parent] = useAutoAnimate();

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileItem key={file.name} name={file.name} size={file.size} />
      ))}
    </div>
  );
}

const fileItem = tv({
  slots: {
    container:
      "group flex items-start gap-4 rounded-lg border border-zinc-200 p-4",
    cloudIcon:
      "rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600",
    deleteIcon: "text-zinc-500",
  },
  variants: {
    state: {
      error: {
        container: "bg-error-25 border-error-300 text-error-100",
        cloudIcon: "border-error-50 bg-error-100 text-error-600",
        deleteIcon: "text-error-700",
      },
      complete: {
        container: "border-violet-500",
      },
      progress: "",
    },
  },
  defaultVariants: {
    state: "progress",
  },
});

interface FileItemProps extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

export function FileItem({ name, size, state }: FileItemProps) {
  const { container, cloudIcon, deleteIcon } = fileItem({ state });

  return (
    <div className={container()}>
      <div className={cloudIcon()}>
        <UploadCloudIcon className="size-4" />
      </div>

      {state === "error" ? (
        <div className="grow min-w-0 flex flex-col items-start gap-1 ">
          <div className="w-full flex flex-col ">
            <span className="truncate  text-sm font-medium text-error-700">
              Upload failed, please try again.
            </span>
            <span className="text-sm text-error-600">{name}</span>
          </div>

          <button
            type="button"
            className="text-sm font-semibold text-error-700 hover:text-error-900"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="grow min-w-0 flex flex-col items-start gap-1 ">
          <div className="w-full flex flex-col ">
            <span
              className="truncate  text-sm font-medium text-zinc-700"
              title={name}
            >
              {name}
            </span>
            <span className="text-sm text-zinc-500">{formatBytes(size)}</span>
          </div>

          <div className="flex w-full items-center gap-3">
            <div className="h-2 flex-1 rounded-full bg-zinc-100">
              <div
                className="h-2 rounded-full bg-violet-600"
                style={{ width: state === "complete" ? "100%" : "80%" }}
              />
            </div>
            <span className="text-sm font-medium text-zinc-700">
              {state === "complete" ? "100%" : "80%"}
            </span>
          </div>
        </div>
      )}

      {state === "complete" ? (
        <CheckCircle2Icon className="size-5 fill-violet-600 text-white" />
      ) : (
        <Button type="button" variant="icon" className={deleteIcon()}>
          <Trash2Icon className="size-5" />
        </Button>
      )}
    </div>
  );
}
