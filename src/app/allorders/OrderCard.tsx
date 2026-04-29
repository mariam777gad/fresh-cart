"use client";
import { useState } from "react";
import {
  Package,
  MapPin,
  Calendar,
  ChevronDown,
  ChevronUp,
  CreditCard,
  Banknote,
  ShoppingCart,
  Phone,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AllOrders } from "./allorders.interface";

export default function OrderCard({ order }: { order: AllOrders }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card className="overflow-hidden border-none shadow-sm mb-4">
      <CardContent className="p-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="relative">
            <img
              src={order.cartItems[0]?.product.imageCover}
              alt="product"
              className="w-24 h-24 rounded-lg object-cover bg-gray-100 border"
            />
            {order.cartItems.length > 1 && (
              <span className="absolute -top-2 -right-2 bg-slate-900 text-white text-xs px-2 py-1 rounded-full font-bold">
                +{order.cartItems.length - 1}
              </span>
            )}
          </div>

          <div className="flex-1 space-y-3">
            <Badge
              className={
                order.isDelivered
                  ? "bg-blue-100 text-blue-600"
                  : "bg-amber-100 text-amber-600"
              }
            >
              ● {order.isDelivered ? "Delivered" : "Processing"}
            </Badge>
            <h3 className="font-bold text-lg text-slate-700"># {order.id}</h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />{" "}
                {new Date(order.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center gap-1">
                <Package className="w-4 h-4" /> {order.cartItems.length} items
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" /> {order.user.phone}
              </div>
            </div>
            <div className="text-xl font-bold text-slate-900">
              {order.totalOrderPrice}{" "}
              <span className="text-sm font-normal">EGP</span>
            </div>
          </div>

          <div className="flex flex-col justify-between items-end self-stretch">
            <div className="p-2 bg-slate-100 rounded-lg">
              {order.paymentMethodType === "cash" ? (
                <Banknote className="w-5 h-5 text-slate-500" />
              ) : (
                <CreditCard className="w-5 h-5 text-purple-500" />
              )}
            </div>
            <Button
              variant={showDetails ? "default" : "outline"}
              className={
                showDetails
                  ? "bg-green-600 hover:bg-green-700 rounded-xl"
                  : "rounded-xl"
              }
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide" : "Details"}{" "}
              {showDetails ? (
                <ChevronUp className="ml-2 w-4 h-4" />
              ) : (
                <ChevronDown className="ml-2 w-4 h-4" />
              )}
            </Button>
          </div>
        </div>

        {showDetails && (
          <div className="mt-8 pt-8 border-t border-dashed space-y-6 animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex items-center gap-2 text-green-700 font-semibold mb-4">
              <ShoppingCart className="w-5 h-5" /> Order Items
            </div>

            <div className="space-y-4">
              {order.cartItems.map((item) => (
                <div
                  key={item._id}
                  className="flex justify-between items-center bg-gray-50/50 p-4 rounded-xl border border-gray-100"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.product.imageCover}
                      className="w-12 h-12 rounded-md object-cover"
                      alt=""
                    />
                    <div>
                      <p className="font-medium text-slate-800 text-sm">
                        {item.product.title.split(" ").slice(0, 5).join(" ")}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {item.count} × {item.price} EGP
                      </p>
                    </div>
                  </div>
                  <p className="font-bold text-slate-700">
                    {item.count * item.price}{" "}
                    <span className="text-[10px]">EGP</span>
                  </p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white p-4 rounded-xl border border-gray-100 space-y-3">
                <div className="flex items-center gap-2 text-blue-600 font-medium text-sm">
                  <MapPin className="w-4 h-4" /> Delivery Address
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  {order.user.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  Address Details from API...
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Phone className="w-3 h-3" /> {order.user.phone}
                </div>
              </div>

              <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 space-y-2">
                <div className="flex items-center gap-2 text-blue-700 font-medium text-sm mb-2">
                  <Package className="w-4 h-4" /> Order Summary
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Subtotal</span>
                  <span>{order.totalOrderPrice - order.shippingPrice} EGP</span>
                </div>
                <div className="flex justify-between text-sm text-slate-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">
                    {order.shippingPrice === 0
                      ? "Free"
                      : `${order.shippingPrice} EGP`}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-slate-900 border-t pt-2 mt-2">
                  <span>Total</span>
                  <span>{order.totalOrderPrice} EGP</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
