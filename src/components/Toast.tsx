import {
  HiCheckCircle,
  HiExclamation,
  HiInformationCircle,
  HiX,
} from "react-icons/hi";
import { useToastStore } from "../store/toastStore";

const Toast = () => {
  const toasts = useToastStore((state) => state.toasts);
  const removeToast = useToastStore((state) => state.removeToast);

  const getIcon = (type: string) => {
    switch (type) {
      case "success":
        return <HiCheckCircle className="w-5 h-5" />;
      case "error":
        return <HiExclamation className="w-5 h-5" />;
      case "warning":
        return <HiExclamation className="w-5 h-5" />;
      case "info":
        return <HiInformationCircle className="w-5 h-5" />;
      default:
        return null;
    }
  };

  const getStyles = (type: string) => {
    switch (type) {
      case "success":
        return "bg-green-50 border-l-4 border-green-500 text-green-800";
      case "error":
        return "bg-red-50 border-l-4 border-red-500 text-red-800";
      case "warning":
        return "bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800";
      case "info":
        return "bg-blue-50 border-l-4 border-blue-500 text-blue-800";
      default:
        return "bg-gray-50 border-l-4 border-gray-500 text-gray-800";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "success":
        return "text-green-500";
      case "error":
        return "text-red-500";
      case "warning":
        return "text-yellow-500";
      case "info":
        return "text-blue-500";
      default:
        return "text-gray-500";
    }
  };

  return (
    <div className="fixed top-5 right-5 z-50 flex flex-col gap-3 max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`${getStyles(toast.type)} p-4 rounded-lg shadow-lg flex items-start gap-3 animate-in slide-in-from-right-5 fade-in duration-300`}
        >
          <div className={`flex-shrink-0 pt-0.5 ${getIconColor(toast.type)}`}>
            {getIcon(toast.type)}
          </div>
          <p className="flex-1 text-sm font-medium">{toast.message}</p>
          <button
            onClick={() => removeToast(toast.id)}
            className="flex-shrink-0 ml-2 text-current hover:opacity-70 transition-opacity"
          >
            <HiX className="w-5 h-5" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Toast;
